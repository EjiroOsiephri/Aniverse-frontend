"use client";

import React, { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Upload, Sparkles, Lightbulb, Plus } from "lucide-react";

interface AnimeStyle {
  id: string;
  name: string;
  description: string;
  image: string;
  isPremium: boolean;
  bgColor: string;
}

const AvatarCreationPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("create");
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const animeStyles: AnimeStyle[] = [
    {
      id: "shonen",
      name: "Shōnen",
      description: "Action-packed anime style",
      image: "/style-shonen.png",
      isPremium: false,
      bgColor: "from-orange-500 to-yellow-500",
    },
    {
      id: "chibi",
      name: "Chibi",
      description: "Cute and small character style",
      image: "/style-chibi.png",
      isPremium: false,
      bgColor: "from-pink-500 to-red-500",
    },
    {
      id: "shojo",
      name: "Shōjo",
      description: "Romantic and delicate style",
      image: "/style-shojo.png",
      isPremium: false,
      bgColor: "from-pink-400 to-purple-400",
    },
    {
      id: "seinen",
      name: "Seinen",
      description: "Sparkly transformation anime",
      image: "/style-seinen.png",
      isPremium: true,
      bgColor: "from-purple-400 to-blue-400",
    },
    {
      id: "mecha",
      name: "Mecha",
      description: "Action-packed anime style",
      image: "/style-mecha.png",
      isPremium: true,
      bgColor: "from-red-500 to-orange-500",
    },
    {
      id: "cyberpunk",
      name: "Cyberpunk",
      description: "Futuristic tech aesthetic",
      image: "/style-cyberpunk.png",
      isPremium: true,
      bgColor: "from-blue-600 to-purple-600",
    },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-7xl mx-auto p-3 sm:p-6 lg:py-5 lg:pl-1 lg:pr-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">
            Create AI Avatar
          </h1>
          <p className="text-gray-400 text-sm sm:text-lg">
            Create your Anime Avatar that matches your style now! 🔥
          </p>
        </motion.div>

        {/* Luna Help Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-[#1a1b2e] to-[#1f1d2e] rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-purple-500/20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <img
                src="/luna.png"
                alt="LUNA"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-purple-500"
              />
              <div className="flex-1">
                <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
                  LUNA is here to help!
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  "I can't wait to see your anime transformation! Need style
                  suggestions? Just ask! ✨"
                </p>
              </div>
            </div>
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#8E2DE2] to-[#FF6EC4] text-white rounded-full font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 whitespace-nowrap flex items-center gap-2 w-full sm:w-auto justify-center">
              <Plus className="w-4 h-4" />
              Ask LUNA
            </button>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8 border-b border-gray-800 overflow-x-auto no-scrollbar">
          {["Create Avatar", "My Avatar Gallery", "Community Gallery"].map(
            (tab, index) => {
              const isActive =
                selectedTab ===
                (index === 0
                  ? "create"
                  : index === 1
                  ? "my-gallery"
                  : "community");

              return (
                <button
                  key={tab}
                  onClick={() =>
                    setSelectedTab(
                      index === 0
                        ? "create"
                        : index === 1
                        ? "my-gallery"
                        : "community"
                    )
                  }
                  className={`px-3 sm:px-6 py-2 sm:py-3 font-medium text-sm sm:text-base whitespace-nowrap transition-colors duration-200 relative ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {tab}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8E2DE2] to-[#FF6EC4]"
                    />
                  )}
                </button>
              );
            }
          )}
        </div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Step 1: Upload Photo */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white font-bold text-sm sm:text-base">
                1
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-white">
                Upload Photo
              </h2>
            </div>

            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-700 rounded-2xl p-6 sm:p-12 lg:p-16 hover:border-purple-500/50 transition-colors duration-300 cursor-pointer bg-[#1a1b2e]/50"
            >
              {uploadedImage ? (
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="max-h-48 sm:max-h-64 rounded-xl object-contain"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setUploadedImage(null);
                    }}
                    className="text-purple-400 hover:text-purple-300 text-sm"
                  >
                    Remove image
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-800 rounded-full flex items-center justify-center">
                    <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-2 text-sm sm:text-base">
                      Choose a file or drag & drop it here
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      JPEG, PNG, GIF, and MP4 formats, up to 50MB
                    </p>
                  </div>
                  <button className="px-4 py-2 sm:px-6 sm:py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 text-sm sm:text-base">
                    Browse File
                  </button>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>

            {/* Tips */}
            <div className="mt-4 flex items-start gap-3 bg-[#1a1b2e]/50 rounded-xl p-3 sm:p-4">
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium text-xs sm:text-sm mb-1">
                  LUNA's tips ✨
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Perfect lighting! You're going to look amazing in anime style!
                  For best results, use a clear, well-lit photo facing the
                  camera.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 2: Choose Style */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white font-bold text-sm sm:text-base">
                2
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-white">
                Choose Your Anime Style
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {animeStyles.map((style) => (
                <motion.div
                  key={style.id}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`relative cursor-pointer rounded-2xl overflow-hidden group ${
                    selectedStyle === style.id ? "ring-2 ring-purple-500" : ""
                  }`}
                >
                  <div className="aspect-[3/4] relative">
                    <img
                      src={style.image}
                      alt={style.name}
                      className="w-full h-full object-cover"
                    />
                    {style.isPremium && (
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 sm:px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-[10px] sm:text-xs font-bold rounded-full">
                        Premium
                      </div>
                    )}
                    {!style.isPremium && (
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 sm:px-3 py-1 bg-gray-900/80 text-white text-[10px] sm:text-xs font-medium rounded-full backdrop-blur-sm">
                        Free
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {selectedStyle === style.id && (
                      <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-white font-bold text-sm sm:text-lg mb-0.5 sm:mb-1">
                      {style.name}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {style.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Luna's Recommendation */}
            <div className="mt-4 sm:mt-6 flex items-start gap-3 bg-[#1a1b2e]/50 rounded-xl p-3 sm:p-4 border border-purple-500/20">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium text-xs sm:text-sm mb-1">
                  LUNA's Recommendation ✨
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Based on your anime preferences, I suggest trying the Shōnen
                  style - it matches your love for action series perfectly!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 3: Customize */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white font-bold text-sm sm:text-base">
                3
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-white">
                Customize Your Avatar
              </h2>
            </div>

            <div className="bg-[#1a1b2e]/50 rounded-2xl p-3 sm:p-6">
              <label className="block text-gray-400 text-xs sm:text-sm mb-2">
                Add a prompt... (optional)
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., 'Make me look like a confident shounen protagonist with spiky hair and determined eyes'"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors duration-200 min-h-[80px] sm:min-h-[100px] resize-none text-sm sm:text-base"
              />
              <p className="text-gray-500 text-xs mt-2">
                Describe specific details you want in your avatar
              </p>
            </div>
          </motion.div>

          {/* Generate Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center sm:justify-end pt-4"
          >
            <button
              disabled={!uploadedImage || !selectedStyle}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#8E2DE2] to-[#FF6EC4] text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Sparkles className="w-5 h-5" />
              Generate Avatar
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AvatarCreationPage;
