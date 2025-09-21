// components/Background.tsx
"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { videos, images } from "../utils/constant";
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
  const isMobile = windowDimensions.width < 768;
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(
    new Set()
  );

  // Preload images on mobile to prevent flickering
  useEffect(() => {
    if (isMobile && images.length > 0) {
      const preloadImage = (src: string) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      };

      // Preload current and next image
      const currentImage = images[currentVideoIndex];
      const nextIndex = (currentVideoIndex + 1) % images.length;
      const nextImage = images[nextIndex];

      Promise.all([preloadImage(currentImage), preloadImage(nextImage)])
        .then(() => {
          setPreloadedImages(
            (prev) => new Set([...prev, currentImage, nextImage])
          );
        })
        .catch(console.error);
    }
  }, [currentVideoIndex, isMobile]);

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-0 w-full h-full overflow-hidden">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={currentVideoIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                opacity: { duration: 1.2, ease: "easeOut" },
                scale: { duration: 1.5, ease: "easeOut" },
              },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeIn" },
            }}
          >
            <img
              src={images[currentVideoIndex]}
              alt="Anime background"
              className="w-full h-full object-cover object-center"
              style={{
                width: "100vw",
                height: "100vh",
                minWidth: "100%",
                minHeight: "100%",
                maxWidth: "none",
                maxHeight: "none",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              loading="eager"
              decoding="async"
              onLoad={(e) => {
                // Ensure image is properly sized after load
                const img = e.target as HTMLImageElement;
                img.style.width = "100vw";
                img.style.height = "100vh";
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Mobile optimized particles - fewer for performance */}
        {showParticles &&
          particles.slice(0, 8).map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-purple-400/40 rounded-full"
              style={{
                left: particle.initialX,
                top: particle.initialY,
              }}
              animate={{
                x: [0, particle.driftX - particle.initialX, 0],
                y: [0, -150, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear",
              }}
            />
          ))}

        {/* Mobile optimized overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(17, 24, 39, 0.85) 0%, rgba(17, 24, 39, 0.4) 50%, rgba(17, 24, 39, 0.85) 100%)",
            width: "100vw",
            height: "100vh",
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(17, 24, 39, 0.1) 50%, rgba(17, 24, 39, 0.5) 100%)",
            width: "100vw",
            height: "100vh",
          }}
        />
      </div>
    );
  }

  // Desktop: Enhanced for better performance
  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="sync" initial={false}>
        {videos.map(
          (video, index) =>
            currentVideoIndex === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    minWidth: "100%",
                    minHeight: "100%",
                  }}
                >
                  <source src={video} type="video/mp4" />
                </video>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Desktop particles */}
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
              ease: "linear",
            }}
          />
        ))}

      {/* Desktop overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-gray-900/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/60 z-10" />
    </div>
  );
};

export default Background;
