"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Heart, User } from "lucide-react";

interface HeroBanner {
  id: string;
  image: string;
  title: string;
}

const RotatingHeroBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const banners: HeroBanner[] = [
    {
      id: "1",
      image: "/hero-banner-1.png",
      title: "Your Anime Universe, Reimagined.",
    },
    {
      id: "2",
      image: "/hero-banner-2.png",
      title: "Your Anime Universe, Reimagined.",
    },
    {
      id: "3",
      image: "/hero-banner-3.png",
      title: "Your Anime Universe, Reimagined.",
    },
    {
      id: "4",
      image: "/hero-banner-4.jpg",
      title: "Your Anime Universe, Reimagined.",
    },
  ];

  // Auto-rotate banners
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  };

  if (!isLoaded) {
    return (
      <div className="h-64 md:h-80 lg:h-96 bg-gray-800/30 animate-pulse rounded-2xl" />
    );
  }

  return (
    <section className="bg-gray-800/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1340px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 lg:h-96">
          {/* Background Images with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0"
            >
              <img
                src={banners[currentIndex].image}
                alt={banners[currentIndex].title}
                className="w-full h-full object-cover"
              />
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          </AnimatePresence>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 px-4"
            >
              {/* Title */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
              >
                {banners[currentIndex].title}
              </motion.h1>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#8E2DE2] to-[#FF6EC4] text-white rounded-full font-semibold text-sm sm:text-base flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[200px] justify-center"
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  Meet Your AI Companion
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/80 text-white rounded-full font-semibold text-sm sm:text-base flex items-center gap-2 hover:border-white transition-colors duration-300 min-w-[160px] justify-center backdrop-blur-sm"
                >
                  <User className="w-4 h-4 sm:w-5 sm:h-5" />
                  Create Avatar
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Animated Border */}
          <div className="absolute inset-0 border-2 border-transparent rounded-2xl">
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                background: [
                  "linear-gradient(0deg, transparent, transparent)",
                  "linear-gradient(90deg, rgba(142, 45, 226, 0.3), transparent)",
                  "linear-gradient(180deg, transparent, rgba(255, 110, 196, 0.3))",
                  "linear-gradient(270deg, transparent, transparent)",
                  "linear-gradient(360deg, transparent, transparent)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotatingHeroBanner;
