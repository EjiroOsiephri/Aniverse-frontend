"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Star, Play } from "lucide-react";

interface AnimeCard {
  id: string;
  title: string;
  episodes: number;
  rating: number;
  image: string;
  genre?: string;
}

const PopularSeriesSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("All");

  const popularAnimes: AnimeCard[] = [
    {
      id: "one-piece",
      title: "One Piece",
      episodes: 58,
      rating: 4.9,
      image: "/one-piece.jpg",
      genre: "Adventure",
    },
    {
      id: "demon-slayer",
      title: "Demon Slayer",
      episodes: 44,
      rating: 4.8,
      image: "/demon-slayer.jpg",
      genre: "Action",
    },
    {
      id: "hunter-x-hunter",
      title: "Hunter x Hunter",
      episodes: 79,
      rating: 4.8,
      image: "/hunter.jpg",
      genre: "Adventure",
    },
    {
      id: "naruto",
      title: "Naruto",
      episodes: 58,
      rating: 4.8,
      image: "/naruto.jpg",
      genre: "Action",
    },
    {
      id: "attack-on-titan",
      title: "Attack on Titan",
      episodes: 75,
      rating: 4.9,
      image: "/hunter.jpg",
      genre: "Action",
    },
    {
      id: "my-hero-academia",
      title: "My Hero Academia",
      episodes: 138,
      rating: 4.7,
      image: "/demon-slayer.jpg",
      genre: "Superhero",
    },
    {
      id: "jujutsu-kaisen",
      title: "Jujutsu Kaisen",
      episodes: 24,
      rating: 4.9,
      image: "/demon-slayer.jpg",
      genre: "Action",
    },
    {
      id: "spirited-away",
      title: "Spirited Away",
      episodes: 1,
      rating: 4.9,
      image: "/demon-slayer.jpg",
      genre: "Adventure",
    },
    {
      id: "death-note",
      title: "Death Note",
      episodes: 37,
      rating: 4.8,
      image: "/naruto.jpg",
      genre: "Thriller",
    },
    {
      id: "fullmetal-alchemist",
      title: "Fullmetal Alchemist",
      episodes: 64,
      rating: 4.9,
      image: "/naruto.jpg",
      genre: "Adventure",
    },
    {
      id: "mob-psycho",
      title: "Mob Psycho 100",
      episodes: 37,
      rating: 4.8,
      image: "/naruto.jpg",
      genre: "Supernatural",
    },
    {
      id: "one-punch-man",
      title: "One Punch Man",
      episodes: 24,
      rating: 4.7,
      image: "/naruto.jpg",
      genre: "Superhero",
    },
    {
      id: "tokyo-ghoul",
      title: "Tokyo Ghoul",
      episodes: 48,
      rating: 4.6,
      image: "/naruto.jpg",
      genre: "Thriller",
    },
    {
      id: "bleach",
      title: "Bleach",
      episodes: 366,
      rating: 4.7,
      image: "/naruto.jpg",
      genre: "Action",
    },
    {
      id: "cowboy-bebop",
      title: "Cowboy Bebop",
      episodes: 26,
      rating: 4.8,
      image: "/naruto.jpg",
      genre: "Adventure",
    },
    {
      id: "code-geass",
      title: "Code Geass",
      episodes: 50,
      rating: 4.9,
      image: "/naruto.jpg",
      genre: "Thriller",
    },
  ];

  const genres = [
    "All",
    "Action",
    "Adventure",
    "Superhero",
    "Thriller",
    "Supernatural",
  ];

  const filteredAnimes =
    selectedGenre === "All"
      ? popularAnimes
      : popularAnimes.filter((anime) => anime.genre === selectedGenre);

  const displayedAnimes = showMore
    ? filteredAnimes
    : filteredAnimes.slice(0, 4);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants: Variants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 lg:py-20 bg-[#1a1b23] text-white">
      <div className=" relative z-20 max-w-[1352px] mx-auto px-3 lg:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Popular Series
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Browse the most watched animes across all genres.
          </p>

          {/* Genre Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {genres.map((genre) => (
              <motion.button
                key={genre}
                onClick={() => {
                  setSelectedGenre(genre);
                  setShowMore(false); // Reset show more when genre changes
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedGenre === genre
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                {genre}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Anime Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {displayedAnimes.map((anime, index) => (
            <motion.div
              key={anime.id}
              variants={cardVariants}
              whileHover="hover"
              className="relative group cursor-pointer"
            >
              <motion.div
                variants={hoverVariants}
                className="relative bg-gray-800 rounded-2xl overflow-hidden"
              >
                {/* Anime Poster */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={anime.image}
                    alt={anime.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </motion.div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">
                      {anime.rating}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
                    {anime.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {anime.episodes} Episodes
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        {filteredAnimes.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowMore(!showMore)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 rounded-full text-white font-semibold text-lg overflow-hidden group"
              style={{
                background: "linear-gradient(270deg, #8E2DE2 0%, #FF6EC4 100%)",
              }}
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Button Text */}
              <span className="relative z-10">
                {showMore ? "Show Less" : "View More"}
              </span>

              {/* Button Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/50 to-pink-600/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PopularSeriesSection;
