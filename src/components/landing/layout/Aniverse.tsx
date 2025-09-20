// app/AniVerse.tsx (or wherever your main page is)
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Background from "./Background";
import Hero from "./Hero";
import { WindowDimensions, Particle } from "../utils/types";
import { videos } from "../utils/constant";

const AniVerse: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 1920,
    height: 1080,
  });
  const [showParticles, setShowParticles] = useState<boolean>(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Set window dimensions on client side
    if (typeof window !== "undefined") {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = (): void => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    // Generate particles only on client
    if (typeof window !== "undefined") {
      const width: number = window.innerWidth;
      const height: number = window.innerHeight;
      const newParticles: Particle[] = [...Array(15)].map(() => ({
        initialX: Math.random() * width,
        initialY: Math.random() * height,
        driftX: Math.random() * width,
        delay: Math.random() * 3,
        duration: 4 + Math.random() * 3,
      }));
      setParticles(newParticles);
      setShowParticles(true);
    }
  }, [windowDimensions.width, windowDimensions.height]);

  useEffect(() => {
    // Auto change videos every 8 seconds
    const videoTimer: NodeJS.Timeout = setInterval(() => {
      setCurrentVideoIndex((prevIndex: number) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(videoTimer);
  }, [videos.length]);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        windowDimensions={windowDimensions}
      />

      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <div className="relative z-[10] min-h-screen flex items-center pt-32 sm:pt-40">
        {/* Background Videos */}
        <Background
          currentVideoIndex={currentVideoIndex}
          particles={particles}
          showParticles={showParticles}
          windowDimensions={windowDimensions}
        />

        {/* Content */}
        <Hero />
      </div>
    </div>
  );
};

export default AniVerse;
