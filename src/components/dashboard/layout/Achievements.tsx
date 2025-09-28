// components/dashboard/Achievements.tsx
"use client";
import React from "react";
import { Trophy } from "lucide-react";
import { Achievement } from "../types/achievement";
import { achievements } from "../utils/dashboard";

interface AchievementsProps {}

const Achievements: React.FC<AchievementsProps> = () => {
  return (
    <div className="bg-[rgba(139,92,246,0.08)] rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <h4 className="text-white font-semibold text-lg">Achievements</h4>
        </div>
        <button className="text-[#8B5CF6] text-sm font-medium">View all</button>
      </div>

      <p className="text-gray-400 text-sm mb-6">74/85 Achievements unlocked</p>

      <div className="space-y-4 flex-1">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="flex items-center gap-3">
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
              <p className="text-gray-400 text-sm">{achievement.subtitle}</p>
              <p className="text-green-400 text-sm">Progress: 100%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
