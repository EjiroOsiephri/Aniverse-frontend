// components/Background.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { videos } from "../utils/constant";
import { Particle, WindowDimensions } from "../utils/types";

interface BackgroundProps {
  currentVideoIndex: number;
  particles: Particle[];
  showParticles: boolean;
  windowDimensions: WindowDimensions;
}

const Background: React.FC<BackgroundProps> = ({
  currentVideoIndex,
  particles,
  showParticles,
  windowDimensions,
}) => {
  return (
    <div className="absolute inset-0 z-0">
      {videos.map((video, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentVideoIndex === index ? 1 : 0,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        </motion.div>
      ))}

      {/* Floating particles */}
      {showParticles &&
        particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
            initial={{
              x: particle.initialX,
              y: particle.initialY,
              opacity: 0,
            }}
            animate={{
              x: [null, particle.driftX, null],
              y: [null, -200, null],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Enhanced Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-gray-900/90 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/60 z-10"></div>
    </div>
  );
};

export default Background;
