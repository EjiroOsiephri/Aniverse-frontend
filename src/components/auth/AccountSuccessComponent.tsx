"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AnimeSuccessPage = () => {
  const handleMeetCompanion = () => {
    console.log("Navigating to companion...");
    // Navigate to companion page
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/anime-characters-bg.png)" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Top Left Logo - Desktop */}
      <div className="absolute top-6 left-6 z-10 hidden xl:block">
        <Link href="/">
          <img
            src="/ani-logo.svg"
            alt="AniVerse Logo"
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Bottom Left Copyright */}
      <div className="absolute bottom-6 left-6 z-10 text-white text-sm">
        <span>© AniVerse 2077</span>
      </div>

      {/* Bottom Right Contact */}
      <div className="absolute bottom-6 right-6 z-10">
        <button className="text-white text-sm hover:text-gray-300 transition-colors duration-200">
          help@aniverse.com
        </button>
      </div>

      {/* Success Modal Container */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          {/* Success Modal */}
          <div className="bg-white relative z-50 rounded-2xl shadow-2xl p-8 text-center">
            {/* Logo - Mobile */}
            <div className="xl:hidden mb-6">
              <Link href="/">
                <img
                  src="/ani-logo.svg"
                  alt="AniVerse Logo"
                  className="h-8 w-auto mx-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Success Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Account Created Successfully!
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Welcome to AniVerse. Your journey begins now. ✨
              </p>
            </div>

            {/* Character Image */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative mx-auto w-48 h-32 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src="/success-avatar.png"
                  alt="Your AI Companion"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay for better visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </motion.div>
            </div>

            {/* Call to Action Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleMeetCompanion}
              className="w-full py-3 px-6 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #8E2DE2 0%, #FF6EC4 100%)",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Meet My Companion
            </motion.button>

            {/* Celebration Effects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Floating particles/sparkles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${15 + (i % 2) * 20}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimeSuccessPage;
