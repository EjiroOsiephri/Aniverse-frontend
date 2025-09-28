// components/AICompanionOrb.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, Heart, Star, ArrowRight } from "lucide-react";

const AICompanions = [
  {
    name: "Luna",
    genre: "Slice of Life",
    avatar: "/luna.png", // Update with actual image
    color: "#8b5cf6", // Purple accent
    tips: [
      "Ready to explore the cozy world of slice-of-life? Have you signed up yet to unlock personalized recs and daily vibes?",
      "Chill sessions await—sign up to add heartwarming stories to your watchlist and join the fun!",
      "Pro tip: Signing up unlocks cute badges and streaks. What's holding you back from that first episode?",
    ],
  },
  {
    name: "Kai",
    genre: "Seinen",
    avatar: "/kai.png", // Update with actual image
    color: "#8b5cf6", // Purple accent
    tips: [
      "Deep, introspective journeys call—ready to explore? Sign up to dive into mature themes and track your growth!",
      "Unlock hidden layers in seinen tales. Have you signed up? It's the key to your epic reading list!",
      "Reflect and evolve: Signup for achievements that mirror your anime soul-searching adventure.",
    ],
  },
  {
    name: "Akira",
    genre: "Shonen",
    avatar: "/akira.png", // Update with actual image
    color: "#8b5cf6", // Purple accent
    tips: [
      "Power levels rising! Ready to explore shonen battles? Sign up now for trending drops and squad-building tools!",
      "Epic quests begin with a click—have you signed up? Gear up your avatars and conquer the watch order!",
      "Legendary rewards incoming: Signup to level up your journey and claim those hard-earned trophies!",
    ],
  },
] as const;

type Companion = (typeof AICompanions)[number];

const AICompanionOrb: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState<Companion | null>(
    null
  );
  const [buttonCompanion, setButtonCompanion] = useState<Companion>(
    AICompanions[0]
  );
  const [showSignupNudge, setShowSignupNudge] = useState(false);

  useEffect(() => {
    // Random companion for button on mount
    const randomIndex = Math.floor(Math.random() * AICompanions.length);
    setButtonCompanion(AICompanions[randomIndex]);
  }, []);

  const getRandomCompanion = () => {
    const randomIndex = Math.floor(Math.random() * AICompanions.length);
    return AICompanions[randomIndex];
  };

  const openOrb = () => {
    const companion = getRandomCompanion();
    setSelectedCompanion(companion);
    setIsOpen(true);
    setShowSignupNudge(Math.random() > 0.5); // 50% chance to show signup nudge for variety
  };

  const closeOrb = () => {
    setIsOpen(false);
    setSelectedCompanion(null);
  };

  const handleExplore = () => {
    router.push("/auth/signup");
    closeOrb();
  };

  const getRandomTip = () => {
    if (!selectedCompanion) return "";
    const randomTipIndex = Math.floor(
      Math.random() * selectedCompanion.tips.length
    );
    return selectedCompanion.tips[randomTipIndex];
  };

  return (
    <>
      {/* Floating Orb Button with Random Avatar Preview */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -15, 0], rotate: [0, 360] }}
        transition={{
          y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity },
        }}
        onClick={openOrb}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-[#8b5cf6] to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white border-4 border-white/30 overflow-hidden hover:shadow-purple-500/50 transition-all group"
      >
        <motion.img
          src={buttonCompanion.avatar}
          alt={buttonCompanion.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white/50 group-hover:scale-110 transition-transform"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/20 to-purple-600/20 rounded-full blur-xl animate-ping" />
      </motion.button>

      {/* Companion Orb Modal */}
      <AnimatePresence>
        {isOpen && selectedCompanion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end justify-center p-4 md:items-center"
            onClick={closeOrb}
          >
            <motion.div
              initial={{ scale: 0.7, y: 60, rotate: -10 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.7, y: 60, rotate: -10 }}
              className="bg-[rgba(139,92,246,0.08)] backdrop-blur-lg rounded-3xl w-full max-w-sm p-6 relative border border-[#8b5cf6]/40 md:max-w-md lg:max-w-lg flex flex-col items-center text-center overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mystical Background Particles & Aura */}
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#8b5cf6]/40 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 2, 0],
                      opacity: [0, 1, 0],
                      x: [0, Math.random() * 50 - 25, 0],
                      y: [0, Math.random() * 50 - 25, 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-radial from-[#8b5cf6]/20 via-transparent to-transparent rounded-3xl" />
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={closeOrb}
                className="absolute top-3 right-3 text-white/60 hover:text-white transition-all z-10"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Summoned Avatar with Epic Entrance */}
              <motion.img
                src={selectedCompanion.avatar}
                alt={selectedCompanion.name}
                className="w-24 h-24 rounded-2xl object-cover mb-4 border-4 border-[#8b5cf6]/60 shadow-2xl relative z-10"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />

              {/* Companion Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4 z-10"
              >
                <h3 className="text-white font-bold text-xl mb-1 drop-shadow-lg">
                  {selectedCompanion.name} Awakens!
                </h3>
                <p className="text-[#8b5cf6] font-semibold text-sm bg-white/10 px-2 py-1 rounded-full inline-block">
                  {selectedCompanion.genre} Summon
                </p>
              </motion.div>

              {/* Dynamic Tip Scroll */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-white/10 z-10 relative overflow-hidden"
              >
                <div className="flex items-center justify-center mb-2">
                  <motion.div
                    className="w-full bg-white/5 rounded-full h-1"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5 }}
                  >
                    <motion.div
                      className="bg-gradient-to-r from-[#8b5cf6] to-purple-400 h-1 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: showSignupNudge ? 0.7 : 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                    />
                  </motion.div>
                </div>
                <p className="text-white/95 text-sm leading-relaxed italic font-light">
                  {getRandomTip()}
                </p>
              </motion.div>

              {/* Signup Nudge Overlay (Creative Twist: "Portal" Effect) */}
              {/* {showSignupNudge && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-orange-500/20 rounded-3xl flex items-center justify-center z-20"
                >
                  <motion.div
                    className="text-center p-4 bg-white/10 rounded-2xl border border-yellow-400/50"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                    <p className="text-yellow-100 text-xs font-medium">
                      Unlock the Portal
                    </p>
                  </motion.div>
                </motion.div>
              )} */}

              {/* Action Buttons with Flair */}
              <motion.div
                className="flex gap-3 w-full z-10 mt-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleExplore}
                  className="flex-1 bg-gradient-to-r from-[#8b5cf6] to-purple-600 text-white py-3 px-4 rounded-2xl font-bold text-sm shadow-lg hover:shadow-purple-500/50 transition-all relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Ready to Explore? <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 bg-white/20" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  onClick={closeOrb}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all"
                >
                  <Zap className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Genre Aura Footer */}
              <div className="absolute bottom-2 left-2 right-2 flex justify-center z-0">
                {selectedCompanion.genre === "Slice of Life" && (
                  <Heart className="w-5 h-5 text-pink-400 drop-shadow-lg" />
                )}
                {selectedCompanion.genre === "Seinen" && (
                  <Zap className="w-5 h-5 text-blue-400 drop-shadow-lg" />
                )}
                {selectedCompanion.genre === "Shonen" && (
                  <Star className="w-5 h-5 text-yellow-400 drop-shadow-lg" />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AICompanionOrb;
