"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  Variants,
  Transition,
} from "framer-motion";

interface Companion {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  icon: string;
}

const companions: Companion[] = [
  {
    id: "akira",
    name: "Akira",
    title: "The Shōnen Expert",
    description:
      "Hey! I'm Akira your energetic shonen buddy! I live for epic battles, sky-scraping transformations and epic plot twists. If you're into action-packed adventures and power-ups that break the limits, I'm your guy! Let's chase greatness together!",
    image: "/akira.png",
    video: "/akira.mp4",
    icon: "🔥",
  },
  {
    id: "luna",
    name: "Luna",
    title: "The Slice-of-Life",
    description:
      "Hi, I'm Luna — your calm and thoughtful companion. I love heartwarming stories, quiet moments, and anime that makes you feel every emotion. If you enjoy cozy slice-of-life series or tear-jerking romances, I'm here for you.",
    image: "/luna.png",
    video: "/luna.mp4",
    icon: "🌙",
  },
  {
    id: "kai",
    name: "Kai",
    title: "The Seinen Connoisseur",
    description:
      "Name's Kai. I'm into complex stories, darker themes, and anime that challenges your psychological limits. Dark worlds, gritty action, and love-os characters are your thing and well I will get along just fine. I'll keep it real, no sugarcoating.",
    image: "/kai.png",
    video: "/kai.mp4",
    icon: "❄️",
  },
];

const AICompanionSelector: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Preload videos on desktop
  useEffect(() => {
    if (isDesktop) {
      companions.forEach((companion) => {
        if (companion.video) {
          const video = document.createElement("video");
          video.preload = "metadata";
          video.src = companion.video;
          video.onloadeddata = () => {
            setLoadedVideos((prev) => new Set([...prev, companion.id]));
          };
        }
      });
    }
  }, [isDesktop]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const handleCardHover = (companionId: string, isHovering: boolean) => {
    if (!isDesktop) return;
    setHoveredCard(isHovering ? companionId : null);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative z-20 py-16 px-4 sm:px-6 lg:px-1"
      style={{ backgroundColor: "#111827" }}
    >
      <div className="max-w-[1352px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Companion
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your AI companion
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {companions.map((companion, index) => (
            <CompanionCard
              key={companion.id}
              companion={companion}
              index={index}
              isDesktop={isDesktop}
              isHovered={hoveredCard === companion.id}
              onHover={(isHovering) =>
                handleCardHover(companion.id, isHovering)
              }
              variants={cardVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface CompanionCardProps {
  companion: Companion;
  index: number;
  isDesktop: boolean;
  isHovered: boolean;
  onHover: (isHovering: boolean) => void;
  variants: any;
}

const CompanionCard: React.FC<CompanionCardProps> = ({
  companion,
  index,
  isDesktop,
  isHovered,
  onHover,
  variants,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (isDesktop && videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => setVideoError(true));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered, isDesktop]);

  return (
    <motion.div
      variants={variants}
      initial="rest"
      whileHover="hover"
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
      className="relative z-20 group cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 backdrop-blur-sm h-full flex flex-col">
        {/* Media Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Image */}
          <img
            src={companion.image}
            alt={companion.name}
            className={`absolute inset-0 w-full h-full object-cover ${
              isDesktop && isHovered && !videoError ? "hidden" : "block"
            }`}
          />

          {/* Video */}
          {isDesktop && companion.video && (
            <video
              ref={videoRef}
              src={companion.video}
              className={`absolute inset-0 w-full h-full object-cover ${
                isHovered && !videoError ? "block" : "hidden"
              }`}
              loop
              playsInline
              preload="metadata"
              onError={() => setVideoError(true)}
            />
          )}

          {/* Character Icon */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl border border-white/20">
            {companion.icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">
              {companion.icon} {companion.name} - {companion.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {companion.description}
            </p>
          </div>

          {/* CTA Button */}
          <button
            className="w-full py-3 px-6 rounded-xl font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #8E2DE2 0%, #FF6EC4 100%)",
            }}
          >
            Try chatting with {companion.name}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AICompanionSelector;
