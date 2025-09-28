// components/dashboard/Carousel.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Plus, Info } from "lucide-react";
import { animeSlides } from "../utils/dashboard";

interface CarouselProps {
  currentSlide: number;
  setCurrentSlide: (slide: number | ((prev: number) => number)) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  currentSlide,
  setCurrentSlide,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % animeSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [setCurrentSlide]);

  return (
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
              setCurrentSlide((prev) => (prev + 1) % animeSlides.length)
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
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
