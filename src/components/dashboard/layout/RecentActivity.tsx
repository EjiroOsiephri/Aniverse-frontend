// components/dashboard/RecentActivity.tsx
"use client";
import React from "react";
import { Activity } from "../types/activity";
import { recentActivities } from "../utils/dashboard";

interface RecentActivityProps {}

const RecentActivity: React.FC<RecentActivityProps> = () => {
  return (
    <div className="bg-[rgba(139,92,246,0.08)] rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <h3 className="text-white font-semibold text-xl">Recent Activity</h3>
      </div>
      <div className="space-y-4">
        {recentActivities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-300 font-medium text-base">
                  {activity.text}
                </p>
                <p className="text-gray-500 text-sm">{activity.subtext}</p>
              </div>
              <span className="text-gray-500 text-sm flex-shrink-0">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
