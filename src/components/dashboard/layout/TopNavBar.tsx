// components/dashboard/TopNavbar.tsx
"use client";
import React from "react";
import { Search, Bell } from "lucide-react";

const TopNavbar: React.FC = () => {
  return (
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
            <img src="/ani-logo.svg" alt="AniVerse" className="h-6 w-auto" />
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
  );
};

export default TopNavbar;
