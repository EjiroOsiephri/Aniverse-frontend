"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  hasAudio?: boolean;
}

const FeaturesSection: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const features: FeatureCard[] = [
    {
      id: "ai-companions",
      title: "AI Companions",
      description:
        "Chat with smart companions inspired by your favorite characters and never watch alone again.",
      image: "/robot.png",
      video: "/robot.mp4",
      hasAudio: true,
    },
    {
      id: "ai-avatars",
      title: "AI Avatars",
      description:
        "Create your own anime-inspired avatar and bring your personality to life.",
      image: "/ai.png",
      video: "/ai.mp4",
      hasAudio: true,
    },
    {
      id: "watch-orders",
      title: "Watch Orders",
      description:
        "No more confusion follow the perfect watch order for any series, movies, or OVAs.",
      image: "/order.png",
      // No video - images only as specified
    },
    {
      id: "seasonal-tracker",
      title: "Seasonal Tracker",
      description:
        "Stay on top of new anime every season and never miss a fresh release.",
      image: "/tracker.png",
      video: "/tracker.mp4",
      hasAudio: true,
    },
    {
      id: "center-video",
      title: "Immersive Experience",
      description: "Dive into anime worlds with stunning visuals.",
      image: "/solo.png",
      video: "/solo.mp4",
      hasAudio: true,
    },
    {
      id: "manga-explorer",
      title: "Manga Explorer",
      description:
        "Coming soon: explore manga alongside your favorite anime worlds.",
      image: "/manga.jpg",
      video: "/manga.mp4",
      hasAudio: true,
    },
  ];

  const handleMouseEnter = (cardId: string) => {
    if (isDesktop) {
      setHoveredCard(cardId);
      const video = videoRefs.current[cardId];
      const feature = features.find((f) => f.id === cardId);
      if (video && feature?.video) {
        video.currentTime = 0;
        video.play().catch(console.error);
      }
    }
  };

  const handleMouseLeave = (cardId: string) => {
    if (isDesktop) {
      setHoveredCard(null);
      const video = videoRefs.current[cardId];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  const isCenterCard = (id: string) => id === "center-video";

  return (
    <section className="py-16 lg:py-20 px-3 bg-[#1a1b23] text-white">
      <div className="max-w-[1352px] mx-auto relative z-20 ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Features</h2>
          <p className="text-lg text-gray-400">
            Discover powerful features that bring anime closer to you.
          </p>
        </motion.div>

        {/* Features Grid - Exact 3x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative bg-gray-800 rounded-2xl overflow-hidden cursor-pointer h-80 md:h-96 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(feature.id)}
              onMouseLeave={() => handleMouseLeave(feature.id)}
            >
              {/* Card Image/Video Container */}
              <div
                className={`relative w-full flex-1 ${
                  isCenterCard(feature.id) ? "h-full" : "h-48 md:h-52"
                }`}
              >
                {/* Static Image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    isDesktop && hoveredCard === feature.id && feature.video
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                />

                {/* Video (Desktop only, except watch-orders) */}
                {isDesktop && feature.video && (
                  <video
                    ref={(el) => {
                      videoRefs.current[feature.id] = el;
                    }}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                      hoveredCard === feature.id ? "opacity-100" : "opacity-0"
                    }`}
                    muted={!feature.hasAudio}
                    loop
                    playsInline
                  >
                    <source src={feature.video} type="video/mp4" />
                  </video>
                )}
              </div>

              {/* Card Content - Only for non-center cards */}
              {!isCenterCard(feature.id) && (
                <div className="p-6 flex-1 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </div>
              )}

              {/* Hover Effect Overlay */}
              {isDesktop && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredCard === feature.id ? 1 : 0,
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
