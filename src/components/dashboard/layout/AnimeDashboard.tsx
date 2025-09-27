"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  User,
  List,
  TrendingUp,
  Heart,
  CheckCircle,
  Trophy,
  Bookmark,
  Search,
  Bell,
  ChevronLeft,
  ChevronRight,
  Play,
  Plus,
  MessageCircle,
  Maximize2,
  Minimize2,
  Send,
  Info,
  Flame,
  Star,
  Menu,
  X,
} from "lucide-react";

interface AnimeSlide {
  id: string;
  title: string;
  season: string;
  episodes: number;
  image: string;
  description: string;
}

interface AnimeCard {
  id: string;
  title: string;
  episodes: number;
  rating: number;
  image: string;
}

const AnimeDashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const animeSlides: AnimeSlide[] = [
    {
      id: "1",
      title: "One Piece",
      season: "Season 4",
      episodes: 38,
      image: "/one-piece.png",
      description:
        "Join Luffy and his crew on their epic adventure to find the One Piece treasure!",
    },
    {
      id: "2",
      title: "Naruto",
      season: "Final Season",
      episodes: 24,
      image: "/naruto.jpg",
      description:
        "The final battle for humanity's survival reaches its climax!",
    },
    {
      id: "3",
      title: "Demon Slayer",
      season: "Season 3",
      episodes: 12,
      image: "/demon-slayer.jpg",
      description:
        "Tanjiro continues his quest to turn his sister back to human!",
    },
    {
      id: "4",
      title: "Solo Leveling",
      season: "Season 3",
      episodes: 12,
      image: "/solo-leveling.jpg",
      description:
        "Sung Jin-Woo rises from the weakest hunter to the strongest through a mysterious leveling system!",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "avatar",
      text: "Chibi style Avatar Created",
      subtext: "Create an avatar using this image",
      time: "2mins ago",
      icon: User,
    },
    {
      id: 2,
      type: "mission",
      text: "Completed Daily Mission",
      subtext: "Create an avatar using this image",
      time: "2mins ago",
      icon: CheckCircle,
    },
    {
      id: 3,
      type: "watchlist",
      text: "Added an Anime to Watchlist",
      subtext: "Create an avatar using this image",
      time: "2mins ago",
      icon: Plus,
    },
    {
      id: 4,
      type: "avatar",
      text: "Chibi style Avatar Created",
      subtext: "Create an avatar using this image",
      time: "2mins ago",
      icon: User,
    },
    {
      id: 5,
      type: "avatar",
      text: "Chibi style Avatar Created",
      subtext: "Create an avatar using this image",
      time: "2mins ago",
      icon: User,
    },
    {
      id: 6,
      type: "avatar",
      text: "Chibi style Avatar Created",
      subtext: "Create an avatar using this image",
      time: "2mins ago",
      icon: User,
    },
  ];

  const dailyMissions = [
    {
      id: 1,
      text: "Chat with your AI Companion",
      subtext: "Have a conversation with LUNA",
      completed: true,
      xp: 20,
    },
    {
      id: 2,
      text: "Add to Watchlist",
      subtext: "Add a new anime to your watchlist",
      completed: false,
      xp: 20,
    },
    {
      id: 3,
      text: "Invite 1 friend to AniVerse",
      subtext: "Invite a friend to AniVerse",
      completed: false,
      xp: 20,
    },
  ];

  const journeyStats = [
    { label: "Total Messages", value: "699", icon: MessageCircle },
    { label: "Total Avatar Created", value: "699", icon: User },
    { label: "Anime Watch Time", value: "99hrs", icon: Play },
  ];

  const newFeatures = [
    {
      title: "Voice Chat",
      description:
        "Now your companion won't just text, voice messages now available for free.",
      status: "Get Notified",
      icon: "🎤",
    },
    {
      title: "Community Hub",
      description: "Connect with fellow anime fans, share avatars and unleash.",
      status: "Get Notified",
      icon: "🌟",
    },
    {
      title: "Manga Reader",
      description:
        "Dive into licensed manga and read your favorites with AI companion.",
      status: "Get Notified",
      icon: "📚",
    },
  ];

  const trendingAnime: AnimeCard[] = [
    {
      id: "1",
      title: "Hunter x Hunter",
      episodes: 79,
      rating: 4.5,
      image: "/hxh.jpg",
    },
    {
      id: "2",
      title: "Hunter x Hunter",
      episodes: 79,
      rating: 4.5,
      image: "/hxh.jpg",
    },
    {
      id: "3",
      title: "Hunter x Hunter",
      episodes: 79,
      rating: 4.5,
      image: "/hxh.jpg",
    },
  ];

  const lunaRecommended: AnimeCard[] = [
    {
      id: "1",
      title: "Hunter x Hunter",
      episodes: 79,
      rating: 4.5,
      image: "/hxh.jpg",
    },
    {
      id: "2",
      title: "Hunter x Hunter",
      episodes: 79,
      rating: 4.5,
      image: "/hxh.jpg",
    },
    {
      id: "3",
      title: "Hunter x Hunter",
      episodes: 79,
      rating: 4.5,
      image: "/hxh.jpg",
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Binge Watcher",
      subtitle: "Have a conversation with LUNA",
      status: "Rare",
      color: "bg-purple-600",
    },
    {
      id: 2,
      title: "Progress with LUNA",
      subtitle: "Have a conversation with LUNA",
      status: "",
      color: "bg-blue-600",
    },
    {
      id: 3,
      title: "Binge Watcher",
      subtitle: "Have a conversation with LUNA",
      status: "Epic",
      color: "bg-purple-600",
    },
    {
      id: 4,
      title: "Have a conversation with LUNA",
      subtitle: "Have a conversation with LUNA",
      status: "Epic",
      color: "bg-emerald-600",
    },
    {
      id: 5,
      title: "LUNA's Best Friend",
      subtitle: "Have a conversation with LUNA",
      status: "Legendary",
      color: "bg-orange-500",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % animeSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sidebarItems = [
    { name: "Home", icon: Home, active: true },
    { name: "My Companion", icon: Users },
    { name: "Avatars", icon: User },
    { name: "Watch List", icon: List },
    { name: "Seasonal Tracker", icon: TrendingUp },
    { name: "Watch Later", icon: Heart },
    { name: "Watch Order", icon: List },
    { name: "Completed", icon: CheckCircle },
    { name: "Achievements", icon: Trophy },
    { name: "Manga (coming soon)", icon: Bookmark, disabled: true },
  ];

  const handleChatSubmit = () => {
    if (chatMessage.trim()) {
      console.log("Sending message:", chatMessage);
      setChatMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-[#111827] rounded-lg flex items-center justify-center"
      >
        <Menu className="w-5 h-5 text-white" />
      </button>

      <div className="flex h-screen">
        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                className="lg:hidden fixed left-0 top-0 h-full w-full z-50"
              >
                <div className="w-full h-full bg-[#111827] border-r border-gray-800 flex flex-col">
                  <div className="flex justify-end p-4">
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="px-6 pb-6 border-b border-gray-800">
                    <img
                      src="/ani-logo.svg"
                      alt="AniVerse"
                      className="h-8 w-auto"
                    />
                  </div>
                  <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {sidebarItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.name}
                          onClick={() => {
                            if (!item.disabled) {
                              setActiveNavItem(item.name);
                              setIsMobileMenuOpen(false);
                            }
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                            activeNavItem === item.name
                              ? "bg-[#8B5CF6] text-white"
                              : item.disabled
                              ? "text-gray-600 cursor-not-allowed"
                              : "text-gray-300 hover:bg-[#8B5CF6]/10 hover:text-white"
                          }`}
                        >
                          <Icon className="w-5 h-5 flex-shrink-0" />
                          <span className="font-medium">{item.name}</span>
                        </button>
                      );
                    })}
                  </nav>
                  <div className="p-4 border-t border-gray-800">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 text-center relative overflow-hidden">
                      <img
                        src="/Badge.svg"
                        alt="7 Day Streak"
                        className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
                      />
                      <h4 className="text-white font-semibold mb-1">
                        7-Day Streak
                      </h4>
                      <p className="text-orange-100 text-xs">
                        A whole week strong! Keep it unstoppable!
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Desktop Sidebar */}
        <div className="hidden lg:flex w-80 bg-[#111827] border-r border-gray-800 flex-col">
          <div className="p-6 border-b border-gray-800 flex-shrink-0">
            <img src="/ani-logo.svg" alt="AniVerse" className="h-8 w-auto" />
          </div>

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => !item.disabled && setActiveNavItem(item.name)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                    activeNavItem === item.name
                      ? "bg-[#8B5CF6] text-white"
                      : item.disabled
                      ? "text-gray-600 cursor-not-allowed"
                      : "text-gray-300 hover:bg-[#8B5CF6]/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-800 flex-shrink-0">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 text-center relative overflow-hidden">
              <img
                src="/Badge.svg"
                alt="7 Day Streak"
                className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
              />
              <h4 className="text-white font-semibold mb-1">7-Day Streak</h4>
              <p className="text-orange-100 text-xs">
                A whole week strong! Keep it unstoppable!
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navbar */}
          <header className="bg-[#111827] border-b border-gray-800 px-4 lg:px-6 py-4 flex-shrink-0">
            <div className="max-w-7xl mx-auto w-full flex items-center">
              {/* Left Nav */}
              <nav className="hidden min-[1440px]:flex items-center gap-8 flex-shrink-0">
                <button className="text-white hover:text-[#8B5CF6] transition-colors font-medium">
                  Generate Avatar
                </button>
                <button className="text-white hover:text-[#8B5CF6] transition-colors font-medium">
                  Watch Order
                </button>
                <button className="text-white hover:text-[#8B5CF6] transition-colors font-medium">
                  Manga
                </button>
                <button className="text-gray-400 hover:text-white transition-colors font-medium">
                  Community (coming soon)
                </button>
              </nav>

              {/* Middle - Logo or Search */}
              <div className="flex-1 ml-12 lg:ml-0 flex items-center justify-center">
                {/* Logo for <375px */}
                <div className="max-[374px]:block hidden mx-auto">
                  <img
                    src="/ani-logo.svg"
                    alt="AniVerse"
                    className="h-6 w-auto"
                  />
                </div>

                {/* Search for >=375px */}
                <div className="min-[375px]:block hidden w-full relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search Anime..."
                    className="bg-gray-800 border border-gray-700 rounded-full pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#8B5CF6] w-full"
                  />
                </div>
              </div>

              {/* Right Icons */}
              <div className="flex items-center gap-4 flex-shrink-0">
                <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                  <Bell className="w-5 h-5" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8B5CF6] to-pink-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">J</span>
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 overflow-auto">
            <div className="p-4 lg:p-6 max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 auto-rows-auto">
                {/* Row 1: Carousel + Chat */}
                <div className="xl:col-span-8">
                  {/* Main Carousel */}
                  <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <img
                          src={animeSlides[currentSlide].image}
                          alt={animeSlides[currentSlide].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                          <h2 className="text-white text-2xl lg:text-4xl font-bold mb-2">
                            {animeSlides[currentSlide].title}
                          </h2>
                          <p className="text-gray-300 mb-4 text-lg">
                            {animeSlides[currentSlide].season} •{" "}
                            {animeSlides[currentSlide].episodes} Episodes
                          </p>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <button className="bg-gradient-to-r from-[#8B5CF6] to-pink-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all text-base">
                              <Play className="w-4 h-4" />
                              Watch Now
                            </button>
                            <button className="border border-gray-400 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-all text-base">
                              <Plus className="w-4 h-4" />
                              Watchlist
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={() =>
                            setCurrentSlide((prev) =>
                              prev === 0 ? animeSlides.length - 1 : prev - 1
                            )
                          }
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() =>
                            setCurrentSlide(
                              (prev) => (prev + 1) % animeSlides.length
                            )
                          }
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        <button className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                          <Info className="w-4 h-4" />
                        </button>
                      </motion.div>
                    </AnimatePresence>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {animeSlides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentSlide
                              ? "bg-white w-8"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-4 xl:col-start-9">
                  {/* AI Chat Component */}
                  <div
                    className={`bg-[rgba(139,92,246,0.08)] rounded-2xl p-6 transition-all duration-300 flex flex-col ${
                      isChatExpanded ? "h-[600px]" : "h-72 lg:h-96"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5CF6] to-pink-500 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            L
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-lg">
                            LUNA
                          </h4>
                          <p className="text-gray-400 text-sm">
                            The Slice-of-Life
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsChatExpanded(!isChatExpanded)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {isChatExpanded ? (
                          <Minimize2 className="w-5 h-5" />
                        ) : (
                          <Maximize2 className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    <div className="mb-6 flex-1">
                      <p className="text-gray-300 text-base">Hi, James!</p>
                      <p className="text-gray-300 text-base">
                        How Can I help you Today?
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        placeholder="What's..."
                        className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#8B5CF6] text-base"
                        onKeyPress={(e) =>
                          e.key === "Enter" && handleChatSubmit()
                        }
                      />
                      <button
                        onClick={handleChatSubmit}
                        className="w-10 h-10 bg-gradient-to-r from-[#8B5CF6] to-pink-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all"
                      >
                        <Send className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Row 2: Recent Activity + Daily Mission */}
                <div className="xl:col-span-8 xl:row-start-2">
                  {/* Recent Activity */}
                  <div className="bg-[rgba(139,92,246,0.08)] rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <h3 className="text-white font-semibold text-xl">
                        Recent Activity
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => {
                        const Icon = activity.icon;
                        return (
                          <div
                            key={activity.id}
                            className="flex items-center gap-3"
                          >
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-gray-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-gray-300 font-medium text-base">
                                {activity.text}
                              </p>
                              <p className="text-gray-500 text-sm">
                                {activity.subtext}
                              </p>
                            </div>
                            <span className="text-gray-500 text-sm flex-shrink-0">
                              {activity.time}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="xl:col-span-4 xl:col-start-9 xl:row-start-2">
                  {/* Daily Mission */}
                  <div className="bg-[rgba(139,92,246,0.08)] rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Flame className="w-5 h-5 text-orange-500" />
                        <h4 className="text-white font-semibold text-lg">
                          Daily Mission
                        </h4>
                      </div>
                      <span className="text-orange-500 text-sm font-semibold">
                        7 day streak
                      </span>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-400 text-sm mb-2">
                        1/3 missions completed
                      </p>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full"
                          style={{ width: "33%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {dailyMissions.map((mission) => (
                        <div
                          key={mission.id}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-1 flex-shrink-0 ${
                              mission.completed
                                ? "bg-green-500 border-green-500"
                                : "border-gray-600"
                            }`}
                          >
                            {mission.completed && (
                              <CheckCircle className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-base font-medium ${
                                mission.completed
                                  ? "text-green-400 line-through"
                                  : "text-gray-300"
                              }`}
                            >
                              {mission.text}
                            </p>
                            <p
                              className={`text-sm ${
                                mission.completed
                                  ? "text-green-400"
                                  : "text-gray-500"
                              }`}
                            >
                              {mission.subtext}
                            </p>
                            <p
                              className={`text-sm ${
                                mission.completed
                                  ? "text-green-400"
                                  : "text-gray-500"
                              }`}
                            >
                              {mission.completed
                                ? "✓ Completed"
                                : "○ Not Completed yet"}{" "}
                              • +{mission.xp}xp
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="w-full mt-6 bg-gray-800 text-gray-400 py-3 rounded-xl text-base font-medium hover:bg-gray-700 transition-colors">
                      + Add to Watchlist
                    </button>
                  </div>
                </div>

                {/* Row 3: Your Anime Journey */}
                <div className="bg-[rgba(139,92,246,0.08)] rounded-2xl p-6 xl:col-span-8 xl:row-start-3">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <h3 className="text-white font-semibold text-xl">
                      Your Anime Journey
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {journeyStats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={index}
                          className="bg-[var(--white-8,rgba(255,255,255,0.08))] rounded-2xl p-8 text-center"
                        >
                          <Icon className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                          <h4 className="text-[#8B5CF6] text-3xl font-bold mb-2">
                            {stat.value}
                          </h4>
                          <p className="text-gray-400 text-base">
                            {stat.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Achievements spans row 3 and 4 */}
                <div className="xl:col-span-4 xl:col-start-9 xl:row-start-3 xl:row-span-2">
                  {/* Achievements */}
                  <div className="bg-[rgba(139,92,246,0.08)]  rounded-2xl p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        <h4 className="text-white font-semibold text-lg">
                          Achievements
                        </h4>
                      </div>
                      <button className="text-[#8B5CF6] text-sm font-medium">
                        View all
                      </button>
                    </div>

                    <p className="text-gray-400 text-sm mb-6">
                      74/85 Achievements unlocked
                    </p>

                    <div className="space-y-4 flex-1">
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${achievement.color}`}
                          >
                            <Trophy className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-white text-base font-medium">
                                {achievement.title}
                              </p>
                              {achievement.status && (
                                <span
                                  className={`px-2 py-1 rounded text-sm font-bold ${
                                    achievement.status === "Legendary"
                                      ? "bg-orange-500/20 text-orange-400"
                                      : achievement.status === "Epic"
                                      ? "bg-purple-500/20 text-purple-400"
                                      : achievement.status === "Rare"
                                      ? "bg-indigo-500/20 text-indigo-400"
                                      : ""
                                  }`}
                                >
                                  {achievement.status}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-400 text-sm">
                              {achievement.subtitle}
                            </p>
                            <p className="text-green-400 text-sm">
                              Progress: 100%
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Row 4: New Features */}
                <div className="bg-[rgba(139,92,246,0.08)] p-6 rounded-2xl xl:col-span-8 xl:col-start-1 xl:row-start-4">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <h3 className="text-white font-semibold text-xl">
                      New Features coming to AniVerse soon.
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {newFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-[var(--white-8,rgba(255,255,255,0.08))] rounded-2xl p-8"
                      >
                        <div className="text-3xl mb-4">{feature.icon}</div>
                        <h4 className="text-white font-semibold mb-3 text-lg">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-base mb-6 leading-relaxed">
                          {feature.description}
                        </p>
                        <button className="text-[#8B5CF6] text-base font-medium hover:text-[#8B5CF6]/80 transition-colors">
                          {feature.status}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 5: Trending Now - Full Width */}
                <div className="xl:col-span-12 xl:row-start-5">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Flame className="w-6 h-6 text-orange-500" />
                      <h3 className="text-white font-semibold text-xl">
                        Trending Now
                      </h3>
                    </div>
                    <button className="text-[#8B5CF6] text-base font-medium hover:text-[#8B5CF6]/80">
                      View All
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {trendingAnime.map((anime) => (
                      <div
                        key={anime.id}
                        className="relative group cursor-pointer"
                      >
                        <div className="relative rounded-xl overflow-hidden aspect-[16/9]">
                          <img
                            src={anime.image}
                            alt={anime.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
                          <h4 className="text-white font-semibold mb-2 text-base">
                            {anime.title}
                          </h4>
                          <div className="flex items-center justify-between text-base">
                            <span className="text-gray-300">
                              {anime.episodes} Episodes
                            </span>
                            <div className="flex items-center gap-1">
                              <Star className="w-5 h-5 text-yellow-400 fill-current" />
                              <span className="text-yellow-400">
                                {anime.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 6: LUNA Recommended - Full Width */}
                <div className="xl:col-span-12 xl:row-start-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-white font-semibold text-xl">
                      LUNA Recommended
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {lunaRecommended.map((anime) => (
                      <div
                        key={anime.id}
                        className="relative group cursor-pointer"
                      >
                        <div className="relative rounded-xl overflow-hidden aspect-[16/9]">
                          <img
                            src={anime.image}
                            alt={anime.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
                          <h4 className="text-white font-semibold mb-2 text-base">
                            {anime.title}
                          </h4>
                          <div className="flex items-center justify-between text-base">
                            <span className="text-gray-300">
                              {anime.episodes} Episodes
                            </span>
                            <div className="flex items-center gap-1">
                              <Star className="w-5 h-5 text-yellow-400 fill-current" />
                              <span className="text-yellow-400">
                                {anime.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AnimeDashboard;
