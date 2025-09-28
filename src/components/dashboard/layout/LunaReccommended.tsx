// components/dashboard/LunaRecommended.tsx
"use client";
import React from "react";
import { Star } from "lucide-react";
import { AnimeCard } from "../types/anime";
import { lunaRecommended } from "../utils/dashboard";

interface LunaRecommendedProps {}

const LunaRecommended: React.FC<LunaRecommendedProps> = () => {
  return (
    <div className="xl:col-span-12">
      <div className="flex items-center gap-2 mb-6">
        <Star className="w-6 h-6 text-yellow-400" />
        <h3 className="text-white font-semibold text-xl">LUNA Recommended</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {lunaRecommended.map((anime) => (
          <div key={anime.id} className="relative group cursor-pointer">
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
                <span className="text-gray-300">{anime.episodes} Episodes</span>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-yellow-400">{anime.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LunaRecommended;
