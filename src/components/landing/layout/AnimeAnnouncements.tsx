"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  TrendingUp,
  Zap,
  Bell,
} from "lucide-react";

interface AnimeAnnouncement {
  id: string;
  title: string;
  category: "new-release" | "breaking" | "trending" | "update" | "announcement";
  date: string;
  season?: string;
  episodes?: number;
  description: string;
  image: string;
  badge: string;
  badgeColor: string;
  genre: string;
}

const AnimeAnnouncementsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const announcements: AnimeAnnouncement[] = [
    {
      id: "1",
      title: "One Piece",
      category: "new-release",
      date: "September 23, 2025",
      season: "Season 5",
      episodes: 8,
      description:
        "Embark on an epic high-seas adventure with Monkey D. Luffy and his crew as they search for the legendary treasure, the One Piece. Packed with action, humor, and heart, this long-running classic is one of the greatest journeys in anime history.",
      image: "/one-piece-announcement.jpg",
      badge: "NEW",
      badgeColor: "bg-green-500",
      genre: "Action",
    },
    {
      id: "2",
      title: "Demon Slayer: Infinity Castle",
      category: "breaking",
      date: "October 15, 2025",
      description:
        "BREAKING: Studio Ufotable announces the highly anticipated Infinity Castle arc adaptation! Tanjiro and the Hashira face their ultimate challenge in what promises to be the most visually stunning arc yet.",
      image: "/solo-leveling.jpg",
      badge: "BREAKING",
      badgeColor: "bg-red-500",
      genre: "Action",
    },
    {
      id: "3",
      title: "Hunter x Hunter: Chimera Ant Redux",
      category: "trending",
      date: "November 1, 2025",
      description:
        "The internet is buzzing! Madhouse Studios surprises fans with a complete remaster of the legendary Chimera Ant arc with enhanced animation and never-before-seen scenes.",
      image: "/hunter-x-hunter-trending.jpg",
      badge: "TRENDING",
      badgeColor: "bg-orange-500",
      genre: "Adventure",
    },
    {
      id: "4",
      title: "Jujutsu Kaisen: Culling Game",
      category: "update",
      date: "December 8, 2025",
      description:
        "Latest Update: The Culling Game arc gets an official release date! MAPPA studio confirms 24 episodes of non-stop cursed energy battles that will change everything.",
      image: "/jujutsu-kaisen-update.jpg",
      badge: "UPDATE",
      badgeColor: "bg-blue-500",
      genre: "Supernatural",
    },
    {
      id: "5",
      title: "Naruto: Next Generation Chronicles",
      category: "announcement",
      date: "January 12, 2026",
      description:
        "Major Announcement: A brand new Naruto series focusing on the next generation of ninjas! Studio Pierrot returns with an original storyline that will reshape the ninja world.",
      image: "/naruto-next-gen.jpg",
      badge: "ANNOUNCEMENT",
      badgeColor: "bg-purple-500",
      genre: "Action",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, announcements.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? announcements.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % announcements.length;
    goToSlide(newIndex);
  };

  const getBadgeIcon = (category: string) => {
    switch (category) {
      case "breaking":
        return <Zap className="w-3 h-3" />;
      case "trending":
        return <TrendingUp className="w-3 h-3" />;
      case "announcement":
        return <Bell className="w-3 h-3" />;
      default:
        return <Calendar className="w-3 h-3" />;
    }
  };

  const currentSlide = announcements[currentIndex];

  return (
    <section className="py-16 lg:py-20 bg-[#1a1b23] text-white">
      <div className="max-w-[1415px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">Anime Central</h2>
          <p className="text-gray-400 text-lg">
            Fresh episodes, breaking news, and trending anime updates
          </p>
        </motion.div>

        {/* Main Carousel Container */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center min-h-[400px]">
            {/* Left Content */}
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Badge */}
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white ${currentSlide.badgeColor}`}
                >
                  {getBadgeIcon(currentSlide.category)}
                  {currentSlide.badge}
                </motion.div>
                <span className="text-gray-400 text-sm">
                  {currentSlide.date}
                </span>
              </div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl lg:text-4xl font-bold text-white"
              >
                {currentSlide.title}
              </motion.h3>

              {/* Meta Info */}
              {(currentSlide.season || currentSlide.episodes) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <span className="text-purple-400 font-medium">
                    {currentSlide.genre}
                  </span>
                  {currentSlide.season && <span>• {currentSlide.season}</span>}
                  {currentSlide.episodes && (
                    <span>• {currentSlide.episodes} Episodes</span>
                  )}
                </motion.div>
              )}

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-300 leading-relaxed text-lg"
              >
                {currentSlide.description}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
              >
                <button
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(270deg, #8E2DE2 0%, #FF6EC4 100%)",
                  }}
                >
                  Watch Now
                </button>
                <button className="px-8 py-3 border border-gray-600 text-white rounded-full font-semibold hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300">
                  Set Reminder
                </button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              key={`image-${currentSlide.id}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Mobile Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white ${currentSlide.badgeColor}`}
                    >
                      {getBadgeIcon(currentSlide.category)}
                      {currentSlide.badge}
                    </div>
                  </div>
                </div>

                {/* Mobile Content */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white">
                      {currentSlide.title}
                    </h3>
                    <span className="text-gray-400 text-sm">
                      {currentSlide.date}
                    </span>
                  </div>

                  {(currentSlide.season || currentSlide.episodes) && (
                    <div className="flex items-center gap-4 text-gray-300 text-sm">
                      <span className="text-purple-400 font-medium">
                        {currentSlide.genre}
                      </span>
                      {currentSlide.season && (
                        <span>• {currentSlide.season}</span>
                      )}
                      {currentSlide.episodes && (
                        <span>• {currentSlide.episodes} Episodes</span>
                      )}
                    </div>
                  )}

                  <p className="text-gray-300 leading-relaxed">
                    {currentSlide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      className="px-6 py-3 text-white rounded-full font-semibold transition-all duration-300 flex-1"
                      style={{
                        background:
                          "linear-gradient(270deg, #8E2DE2 0%, #FF6EC4 100%)",
                      }}
                    >
                      Watch Now
                    </button>
                    <button className="px-6 py-3 border border-gray-600 text-white rounded-full font-semibold hover:border-purple-400 transition-all duration-300 flex-1">
                      Set Reminder
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {announcements.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-purple-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`text-xs px-3 py-1 rounded-full transition-colors duration-200 ${
              isAutoPlaying
                ? "text-purple-400 bg-purple-400/10"
                : "text-gray-500 hover:text-gray-400"
            }`}
          >
            {isAutoPlaying ? "Auto-playing" : "Paused"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnimeAnnouncementsCarousel;
