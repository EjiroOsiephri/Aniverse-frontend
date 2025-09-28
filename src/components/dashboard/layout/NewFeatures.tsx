// components/dashboard/NewFeatures.tsx
"use client";
import React from "react";
import { Feature } from "../types/feature";
import { newFeatures } from "../utils/dashboard";

interface NewFeaturesProps {}

const NewFeatures: React.FC<NewFeaturesProps> = () => {
  return (
    <div className="bg-[rgba(139,92,246,0.08)] p-6 rounded-2xl">
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
  );
};

export default NewFeatures;
