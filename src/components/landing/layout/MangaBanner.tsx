"use client";

import React from "react";
import { motion } from "framer-motion";

const MangaBanner: React.FC = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[#111827]">
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(270deg, #8E2DE2 0%, #FF6EC4 100%)",
          }}
        >
          {/* Content Container */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-6 sm:p-8 lg:p-12 min-h-[200px] lg:min-h-[240px]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 text-center lg:text-left mb-6 lg:mb-0 lg:pr-8"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                READ YOUR FAVORITE MANGA HERE
              </h2>

              {/* Features List */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-6 text-white/90">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm sm:text-base font-medium"
                >
                  Highest Quality
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm sm:text-base font-medium"
                >
                  No signups
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm sm:text-base font-medium"
                >
                  No Ads
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="px-8 py-3 sm:px-10 sm:py-4 bg-[#111827] text-white rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800 transition-colors duration-300 shadow-lg"
              >
                Read Now
              </motion.button>
            </motion.div>

            {/* Right Side - Anime Characters */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-shrink-0 w-full lg:w-auto max-w-md lg:max-w-lg"
            >
              <div className="relative">
                {/* Character Group Image */}
                <img
                  src="/manga-characters.png"
                  alt="Anime Characters"
                  className="w-full h-auto max-h-48 sm:max-h-56 lg:max-h-64 object-contain"
                />

                {/* Floating Animation for Characters */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                />
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 blur-lg"></div>

          {/* Background Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 right-8 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div
              className="absolute top-12 right-20 w-1 h-1 bg-white/60 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-8 left-12 w-2 h-2 bg-white/40 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-16 left-32 w-1 h-1 bg-white/60 rounded-full animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MangaBanner;
