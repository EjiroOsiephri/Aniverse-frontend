// components/dashboard/JourneyStats.tsx
"use client";
import React from "react";
import { Stat } from "../types/stat";
import { journeyStats } from "../utils/dashboard";

interface JourneyStatsProps {}

const JourneyStats: React.FC<JourneyStatsProps> = () => {
  return (
    <div className="bg-[rgba(139,92,246,0.08)] rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <h3 className="text-white font-semibold text-xl">Your Anime Journey</h3>
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
              <p className="text-gray-400 text-base">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneyStats;
