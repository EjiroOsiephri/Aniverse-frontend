// components/Hero.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Users, Film, Bot, User } from "lucide-react";
import Image from "next/image";
import { containerVariants } from "../utils/variant";

const Hero: React.FC = () => {
  return (
    <div className="relative z-20 px-4 sm:px-6 xl:px-20 w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.div className="mb-6">
            <div className="flex items-center mt-4 space-x-2 mb-6">
              <Image
                src={"/Group.png"}
                alt="AniVerse"
                width={16}
                height={16}
                className="h-4 w-auto mb-1"
              />
              <span className="text-gray-300 text-sm uppercase tracking-wider">
                Aniverse
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Your{" "}
              <span className="bg-gradient-to-r from-[#8E2DE2] to-[#FF6EC4] bg-clip-text text-transparent">
                Anime Universe
              </span>
              <br />
              Reimagined.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Stream the anime you love while stepping into the world yourself.
              Create your own custom avatar, explore endless stories, and
              connect with fellow fans all in one platform built for true anime
              lovers.
            </p>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 110, 196, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-[#FF6EC4] text-white rounded-full font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Bot size={20} />
              <span>Meet Your AI Companion</span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(139, 92, 246, 0.1)",
                borderColor: "#8B5CF6",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 border border-gray-600 text-white rounded-full font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <User size={20} />
              <span>Create Avatar</span>
            </motion.button>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-gray-300">4.9/5 Ratings</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">10m+ Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <Film className="w-5 h-5 text-pink-400" />
              <span className="text-gray-300">30k+ Episodes</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side for larger screens */}
        <div className="hidden xl:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Character interaction elements can go here */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
