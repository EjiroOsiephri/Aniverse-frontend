"use client";
import React, { useState, useRef, ChangeEvent, DragEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Download, Share2, Camera, X } from "lucide-react";

interface StyleOption {
  name: string;
  value: string;
}

const AIAvatarGenerator: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string>("Chibi");
  const [prompt, setPrompt] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const styles: StyleOption[] = [
    { name: "Chibi", value: "chibi" },
    { name: "Shonen", value: "shonen" },
    { name: "Shojo", value: "shojo" },
    { name: "Seinen", value: "seinen" },
    { name: "Mecha", value: "mecha" },
    { name: "Cyberpunk", value: "cyberpunk" },
  ];

  const handleFileSelect = (file: File): void => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          setUploadedImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleBrowseClick = (): void => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const generateAvatar = async (): Promise<void> => {
    if (!uploadedImage) return;

    setIsGenerating(true);
    // Simulate generation with a simple filter effect for demo
    setTimeout(() => {
      // For demo, we'll use the same image with a CSS filter
      setGeneratedImage(uploadedImage);
      setIsGenerating(false);
    }, 3000);
  };

  const removeUploadedImage = (): void => {
    setUploadedImage(null);
    setGeneratedImage(null);
  };

  const downloadImage = (): void => {
    if (generatedImage) {
      const link = document.createElement("a");
      link.href = generatedImage;
      link.download = "avatar.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className=" bg-[#1a1f2e] text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-[1352px] relative z-20 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            AI Avatar Generation
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Turn yourself into anime character
          </p>
        </motion.div>

        {/* Main Content - Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Upload Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div
              className={`bg-white rounded-2xl p-6 h-[400px] flex flex-col items-center justify-center transition-all duration-300 ${
                isDragOver ? "ring-4 ring-purple-400 ring-opacity-50" : ""
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <AnimatePresence mode="wait">
                {!uploadedImage ? (
                  <motion.div
                    key="upload-area"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    {/* Cloud Icon Container */}
                    <div className="w-20 h-20 mx-auto mb-4 relative">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 80 80"
                        fill="none"
                      >
                        <circle
                          cx="40"
                          cy="40"
                          r="38"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />
                        <path
                          d="M40 25v20m0 0l-7-7m7 7l7-7"
                          stroke="#9ca3af"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M25 45c0 5.5 4.5 10 10 10h10c5.5 0 10-4.5 10-10"
                          stroke="#9ca3af"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <div className="mb-3">
                      <h3 className="text-gray-800 font-semibold text-sm mb-1">
                        Upload photos
                      </h3>
                      <p className="text-gray-500 text-xs">
                        Select and upload the files of your choice
                      </p>
                    </div>

                    <div className="space-y-2 mb-4">
                      <p className="text-gray-600 text-sm">
                        Choose a file or drag & drop it here
                      </p>
                      <p className="text-gray-400 text-xs">
                        JPEG, PNG, PGD, and MP4 formats, up to 50MB
                      </p>
                    </div>

                    <button
                      onClick={handleBrowseClick}
                      className="px-6 py-2 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg text-gray-700 text-sm font-medium transition-colors duration-200"
                    >
                      Browse File
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="uploaded-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <button
                      onClick={removeUploadedImage}
                      className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-black/70 rounded-full transition-colors backdrop-blur-sm"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </motion.div>

          {/* Original Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl h-[400px] overflow-hidden">
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Original"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center opacity-50">
                    <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto mb-3"></div>
                    <p className="text-gray-300 text-sm">Original photo</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Generated Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl h-[400px] overflow-hidden relative">
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div
                    key="generating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-12 h-12 mx-auto mb-4 border-4 border-white border-t-transparent rounded-full"
                      />
                      <p className="text-white font-medium">Generating...</p>
                    </div>
                  </motion.div>
                ) : generatedImage ? (
                  <motion.div
                    key="generated"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full h-full relative group"
                  >
                    <img
                      src={generatedImage}
                      alt="Generated Avatar"
                      className="w-full h-full object-cover"
                      style={{
                        filter: "contrast(1.2) saturate(1.3) hue-rotate(10deg)",
                        mixBlendMode: "normal",
                      }}
                    />
                    {/* Action buttons */}
                    <div className="absolute bottom-3 right-3 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-white rounded-full shadow-lg"
                        aria-label="Share"
                      >
                        <Share2 className="w-4 h-4 text-gray-700" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={downloadImage}
                        className="p-2 bg-white rounded-full shadow-lg"
                        aria-label="Download"
                      >
                        <Download className="w-4 h-4 text-gray-700" />
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/30 backdrop-blur rounded-full mx-auto mb-3"></div>
                      <p className="text-white text-sm">Generated avatar</p>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Controls Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Prompt Input */}
          <div className="mb-6">
            <input
              type="text"
              value={prompt}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPrompt(e.target.value)
              }
              placeholder="Add a prompt..."
              className="w-full px-4 py-3 bg-[#252b3b] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors duration-200"
            />
          </div>

          {/* Style Pills and Generate Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {styles.map((style) => (
                <motion.button
                  key={style.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedStyle(style.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedStyle === style.name
                      ? "bg-white text-gray-900"
                      : "bg-transparent border border-gray-600 text-gray-300 hover:border-gray-400"
                  }`}
                >
                  {style.name}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={generateAvatar}
              disabled={!uploadedImage || isGenerating}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                !uploadedImage || isGenerating
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl"
              }`}
            >
              {isGenerating ? "Generating..." : "Generate Avatar"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIAvatarGenerator;
