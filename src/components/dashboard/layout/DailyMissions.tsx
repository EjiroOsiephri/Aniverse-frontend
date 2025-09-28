// components/dashboard/DailyMissions.tsx
"use client";
import React from "react";
import { CheckCircle, Flame } from "lucide-react";
import { Mission } from "../types/mission";
import { dailyMissions } from "../utils/dashboard";

interface DailyMissionsProps {}

const DailyMissions: React.FC<DailyMissionsProps> = () => {
  return (
    <div className="bg-[rgba(139,92,246,0.08)] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-500" />
          <h4 className="text-white font-semibold text-lg">Daily Mission</h4>
        </div>
        <span className="text-orange-500 text-sm font-semibold">
          7 day streak
        </span>
      </div>

      <div className="mb-6">
        <p className="text-gray-400 text-sm mb-2">1/3 missions completed</p>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div
            className="bg-orange-500 h-2 rounded-full"
            style={{ width: "33%" }}
          ></div>
        </div>
      </div>

      <div className="space-y-4">
        {dailyMissions.map((mission) => (
          <div key={mission.id} className="flex items-start gap-3">
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
                  mission.completed ? "text-green-400" : "text-gray-500"
                }`}
              >
                {mission.subtext}
              </p>
              <p
                className={`text-sm ${
                  mission.completed ? "text-green-400" : "text-gray-500"
                }`}
              >
                {mission.completed ? "✓ Completed" : "○ Not Completed yet"} • +
                {mission.xp}xp
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-gray-800 text-gray-400 py-3 rounded-xl text-base font-medium hover:bg-gray-700 transition-colors">
        + Add to Watchlist
      </button>
    </div>
  );
};

export default DailyMissions;
