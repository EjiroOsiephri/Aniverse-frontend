import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Plus,
  X,
  Star,
  Clock,
  Tv,
  TrendingUp,
  Search,
  ChevronDown,
} from "lucide-react";

interface WatchListAnime {
  id: string;
  title: string;
  image: string;
  season: string;
  totalEpisodes: number;
  watchedEpisodes: number;
  rating: number;
  status: "watching" | "completed" | "plan-to-watch";
}

interface AnimeSearchResult {
  id: string;
  title: string;
  image: string;
  totalEpisodes: number;
}

const WatchListPage: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("plan-to-watch");
  const [episodesWatched, setEpisodesWatched] = useState("0");
  const [rating, setRating] = useState("");
  const [searchResults, setSearchResults] = useState<AnimeSearchResult[]>([]);
  const [selectedAnime, setSelectedAnime] = useState<AnimeSearchResult | null>(
    null
  );

  // Mock anime data
  const [watchList, setWatchList] = useState<WatchListAnime[]>([
    {
      id: "1",
      title: "Hunter x Hunter",
      image: "/hxh.jpg",
      season: "Season 1",
      totalEpisodes: 79,
      watchedEpisodes: 14,
      rating: 4.5,
      status: "watching",
    },
    {
      id: "2",
      title: "Naruto",
      image: "/naruto.jpg",
      season: "Season 1",
      totalEpisodes: 40,
      watchedEpisodes: 40,
      rating: 4.5,
      status: "completed",
    },
    {
      id: "3",
      title: "One Piece",
      image: "/one-piece.jpg",
      season: "Season 1",
      totalEpisodes: 62,
      watchedEpisodes: 14,
      rating: 4.5,
      status: "plan-to-watch",
    },
  ]);

  // Mock search results
  const mockSearchResults: AnimeSearchResult[] = [
    {
      id: "4",
      title: "Demon Slayer",
      image: "/demon-slayer.jpg",
      totalEpisodes: 26,
    },
    {
      id: "5",
      title: "Jujutsu Kaisen",
      image: "/jujutsu-kaisen.jpg",
      totalEpisodes: 24,
    },
    {
      id: "6",
      title: "My Hero Academia",
      image: "/my-hero-academia.jpg",
      totalEpisodes: 25,
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      setSearchResults(
        mockSearchResults.filter((anime) =>
          anime.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setSearchResults([]);
    }
  };

  const handleAddAnime = () => {
    if (!selectedAnime) return;

    const newAnime: WatchListAnime = {
      id: selectedAnime.id,
      title: selectedAnime.title,
      image: selectedAnime.image,
      season: "Season 1",
      totalEpisodes: selectedAnime.totalEpisodes,
      watchedEpisodes: parseInt(episodesWatched) || 0,
      rating: parseFloat(rating) || 0,
      status: selectedStatus as any,
    };

    setWatchList([...watchList, newAnime]);
    setShowAddModal(false);
    resetForm();
  };

  const resetForm = () => {
    setSearchQuery("");
    setSelectedAnime(null);
    setSearchResults([]);
    setSelectedStatus("plan-to-watch");
    setEpisodesWatched("0");
    setRating("");
  };

  const stats = {
    currentlyWatching: watchList.filter((a) => a.status === "watching").length,
    planToWatch: watchList.filter((a) => a.status === "plan-to-watch").length,
    averageRating:
      watchList.length > 0
        ? (
            watchList.reduce((sum, a) => sum + a.rating, 0) / watchList.length
          ).toFixed(1)
        : "0.0",
    totalWatchTime: "99hrs",
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "watching":
        return "bg-blue-500";
      case "completed":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "watching":
        return "Watching Now";
      case "completed":
        return "Completed";
      default:
        return "Plan to Watch";
    }
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-7xl mx-auto p-3 sm:p-6 lg:py-5 lg:pl-1 lg:pr-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2">
              My Watch List
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Keep track of what you're watching, what you've finished, and
              what's next in your anime journey.
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#8E2DE2] to-[#FF6EC4] text-white rounded-full font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Plus className="w-4 h-4" />
            Add Anime
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {[
            {
              icon: Tv,
              label: "Currently Watching",
              value: stats.currentlyWatching,
              color: "text-blue-400",
            },
            {
              icon: Clock,
              label: "Plan to Watch",
              value: stats.planToWatch,
              color: "text-purple-400",
            },
            {
              icon: Star,
              label: "Average Rating",
              value: stats.averageRating,
              color: "text-yellow-400",
            },
            {
              icon: TrendingUp,
              label: "Total Watch Time",
              value: stats.totalWatchTime,
              color: "text-green-400",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1b2e] rounded-xl p-4 sm:p-6 border border-gray-800"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                <div className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Anime List */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
            <Tv className="w-5 h-5" />
            Your Anime Overview
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {watchList.map((anime, index) => (
              <motion.div
                key={anime.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#1a1b2e] rounded-2xl overflow-hidden border border-gray-800 group"
              >
                <div className="relative aspect-[16/9]">
                  <img
                    src={anime.image}
                    alt={anime.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 ${getStatusBadgeColor(
                      anime.status
                    )} text-white text-xs font-bold rounded-full`}
                  >
                    {getStatusText(anime.status)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-4">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                    {anime.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3">
                    {anime.season} • {anime.totalEpisodes} Episodes
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium text-sm">
                        {anime.rating}
                      </span>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>
                        {anime.watchedEpisodes}/{anime.totalEpisodes}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#8E2DE2] to-[#FF6EC4] h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${
                            (anime.watchedEpisodes / anime.totalEpisodes) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>

                  <button className="w-full py-2 sm:py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full font-medium text-sm transition-colors duration-200">
                    {anime.status === "completed"
                      ? "Watch Again"
                      : anime.status === "watching"
                      ? "Continue Watching"
                      : "Start Watching"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Anime Modal */}
      <AnimatePresence>
        {showAddModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setShowAddModal(false)}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="bg-[#1a1b2e] rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-purple-500/20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-[#1a1b2e] border-b border-gray-800 p-4 sm:p-6 flex items-center justify-between z-10">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Add Anime to Watchlist
                  </h2>
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-4 sm:p-6 space-y-6">
                  {/* Search Anime */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Search Anime
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Type anime title..."
                        className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border-2 border-purple-500/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    {/* Search Results */}
                    {searchResults.length > 0 && (
                      <div className="mt-3 space-y-2 max-h-48 overflow-y-auto">
                        {searchResults.map((result) => (
                          <button
                            key={result.id}
                            onClick={() => {
                              setSelectedAnime(result);
                              setSearchQuery(result.title);
                              setSearchResults([]);
                            }}
                            className="w-full flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors text-left"
                          >
                            <img
                              src={result.image}
                              alt={result.title}
                              className="w-12 h-16 rounded object-cover"
                            />
                            <div>
                              <p className="text-white font-medium">
                                {result.title}
                              </p>
                              <p className="text-gray-400 text-sm">
                                {result.totalEpisodes} Episodes
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Status Dropdown */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Status
                    </label>
                    <div className="relative">
                      <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="plan-to-watch">Plan to Watch</option>
                        <option value="watching">Currently Watching</option>
                        <option value="completed">Completed</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Episodes Watched */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Episodes Watched
                    </label>
                    <input
                      type="number"
                      value={episodesWatched}
                      onChange={(e) => setEpisodesWatched(e.target.value)}
                      min="0"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Your Rating (Optional)
                    </label>
                    <div className="relative">
                      <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="">Rate 1-10</option>
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="sticky bottom-0 bg-[#1a1b2e] border-t border-gray-800 p-4 sm:p-6 flex gap-3">
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddAnime}
                    disabled={!selectedAnime}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-[#8E2DE2] to-[#FF6EC4] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add to List
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WatchListPage;
