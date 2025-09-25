"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  Variants,
  Transition,
  TargetAndTransition,
} from "framer-motion";
import { Users, Eye, Image, TrendingUp } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  avatar: string;
  color: string;
}

interface Stat {
  id: string;
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const FanTestimonialsSection: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState({
    avatars: 0,
    views: 0,
    users: 0,
  });

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Godwin Michael",
      role: "Jujutsu Kaisen fan",
      message:
        "My AI companion remembers what I watch, feels like a real anime buddy 😊.",
      avatar: "/jjk-1.jpg",
      color: "#7951F9",
    },
    {
      id: "2",
      name: "Mike Jayson",
      role: "Naruto Anime fan",
      message:
        "Sharing my avatars got me new friends already, and we geek out over the same shows 😍",
      avatar: "/naruto-1.jpg",
      color: "#42D599",
    },
    {
      id: "3",
      name: "James Brian",
      role: "One Piece fan",
      message:
        "I love how Luna checks in on me every day, it's like having a gentle anime bestie 💖",
      avatar: "/jjk-2.jpg",
      color: "#F4B400",
    },
  ];

  const stats: Stat[] = [
    {
      id: "1",
      value: "60K+",
      label: "Avatar Created",
      icon: <Image className="w-6 h-6" />,
      color: "#42D599",
    },
    {
      id: "2",
      value: "100M",
      label: "views",
      icon: <Eye className="w-6 h-6" />,
      color: "#42D599",
    },
    {
      id: "3",
      value: "700k",
      label: "Users",
      icon: <Users className="w-6 h-6" />,
      color: "#42D599",
    },
  ];

  // Counter Animation
  useEffect(() => {
    const animateCount = (
      target: number,
      setter: (value: number) => void,
      duration: number = 2000
    ) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCount(60, (value) =>
        setAnimatedValues((prev) => ({ ...prev, avatars: value }))
      );
      animateCount(100, (value) =>
        setAnimatedValues((prev) => ({ ...prev, views: value }))
      );
      animateCount(700, (value) =>
        setAnimatedValues((prev) => ({ ...prev, users: value }))
      );
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut", // valid easing
      } as Transition,
    },
  };

  // Floating animation
  const floatingAnimation: TargetAndTransition = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    } as Transition,
  };

  return (
    <section
      id="community"
      className="py-16 lg:py-24 bg-[#1a1b23] text-white relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            See what our fans are saying
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Testimonials */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                animate={floatingAnimation}
                className="relative"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                  style={{
                    borderTopColor: testimonial.color,
                    borderTopWidth: "3px",
                  }}
                >
                  {/* Indicator */}
                  <div
                    className="absolute top-0 left-6 w-12 h-1 rounded-full -translate-y-1/2"
                    style={{ backgroundColor: testimonial.color }}
                  />

                  {/* User Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2"
                        style={{ borderColor: testimonial.color }}
                      />
                      <div
                        className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-800"
                        style={{ backgroundColor: testimonial.color }}
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {testimonial.message}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - CTA + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left space-y-20"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative"
              >
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Join 10,000+ anime fans and their AI companions
                </h3>
                <div className="absolute -top-4 -right-4 text-green-400">
                  <TrendingUp className="w-8 h-8" />
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-4 lg:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-4 py-8 lg:p-6 text-center border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <div style={{ color: stat.color }}>{stat.icon}</div>
                  </div>

                  <div
                    className="text-2xl lg:text-3xl font-bold mb-1"
                    style={{ color: stat.color }}
                  >
                    {index === 0 && `${animatedValues.avatars}K+`}
                    {index === 1 && `${animatedValues.views}M`}
                    {index === 2 && `${animatedValues.users}k`}
                  </div>

                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="pt-4"
            >
              <button
                className="px-8 py-4 bg-gradient-to-r text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
                style={{
                  background:
                    "linear-gradient(270deg, #42D599 0%, #2DD589 100%)",
                }}
              >
                Join Our Community
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FanTestimonialsSection;
