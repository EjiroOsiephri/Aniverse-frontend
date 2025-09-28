// components/dashboard/AnimeDashboard.tsx
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

import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavBar";
import Carousel from "./Carousel";
import AIChat from "./AIChat";
import RecentActivity from "./RecentActivity";
import DailyMissions from "./DailyMissions";
import JourneyStats from "./JourneyStats";
import Achievements from "./Achievements";
import NewFeatures from "./NewFeatures";
import TrendingAnime from "./TrendingAnime";
import LunaRecommended from "./LunaReccommended";

const AnimeDashboard: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleChatSubmit = () => {
    if (chatMessage.trim()) {
      console.log("Sending message:", chatMessage);
      setChatMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex h-screen">
        <Sidebar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <TopNavbar />

          {/* Dashboard Content */}
          <main className="flex-1 overflow-auto">
            <div className="p-4 lg:p-6 max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 auto-rows-auto">
                {/* Row 1: Carousel + Chat */}
                <div className="xl:col-span-8">
                  <Carousel
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                  />
                </div>
                <div className="xl:col-span-4 xl:col-start-9">
                  <AIChat
                    isChatExpanded={isChatExpanded}
                    setIsChatExpanded={setIsChatExpanded}
                    chatMessage={chatMessage}
                    setChatMessage={setChatMessage}
                    handleChatSubmit={handleChatSubmit}
                  />
                </div>

                {/* Row 2: Recent Activity + Daily Mission */}
                <div className="xl:col-span-8 xl:row-start-2">
                  <RecentActivity />
                </div>

                <div className="xl:col-span-4 xl:col-start-9 xl:row-start-2">
                  <DailyMissions />
                </div>

                {/* Row 3: Your Anime Journey */}
                <div className="bg-[rgba(139,92,246,0.08)] rounded-2xl p-6 xl:col-span-8 xl:row-start-3">
                  <JourneyStats />
                </div>

                {/* Achievements spans row 3 and 4 */}
                <div className="xl:col-span-4 xl:col-start-9 xl:row-start-3 xl:row-span-2">
                  <Achievements />
                </div>

                {/* Row 4: New Features */}
                <div className="xl:col-span-8 xl:col-start-1 xl:row-start-4">
                  <NewFeatures />
                </div>

                {/* Row 5: Trending Now - Full Width */}
                <div className="xl:col-span-12 xl:row-start-5">
                  <TrendingAnime />
                </div>

                {/* Row 6: LUNA Recommended - Full Width */}
                <div className="xl:col-span-12 xl:row-start-6">
                  <LunaRecommended />
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
