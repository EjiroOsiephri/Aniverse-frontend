// components/MobileMenu.tsx
"use client";
import React from "react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { navItems } from "../utils/constant";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  // Container animation variants
  const menuVariants: Variants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        mass: 1,
        when: "beforeChildren",
        staggerChildren: 0.05,
      } as Transition,
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "afterChildren",
        staggerChildren: 0.02,
        staggerDirection: -1,
      } as Transition,
    },
  };

  // Individual menu item variants
  const itemVariants: Variants = {
    hidden: {
      x: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 25,
        mass: 0.5,
      } as Transition,
    },
    exit: {
      x: 30,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      } as Transition,
    },
  };

  // Header variants
  const headerVariants: Variants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 30,
      } as Transition,
    },
    exit: {
      y: -10,
      opacity: 0,
      transition: {
        duration: 0.1,
      } as Transition,
    },
  };

  // Button variants
  const buttonVariants: Variants = {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
        delay: 0.1,
      } as Transition,
    },
    exit: {
      y: 20,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.15,
      } as Transition,
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isMenuOpen && (
        <>
          {/* Backdrop with enhanced animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 xl:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Enhanced Mobile Menu */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 w-full h-full z-50 xl:hidden overflow-y-auto overflow-x-hidden"
            style={{
              background:
                "linear-gradient(135deg, #1F2937 0%, #374151 30%, #1F2937 100%)",
            }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full"
              />
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2,
                }}
                className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full"
              />
            </div>

            {/* Menu Header with enhanced animation */}
            <motion.div
              variants={headerVariants}
              className="flex items-center justify-between p-6 border-b border-gray-700/30 relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Image
                  src="/ani-logo.svg"
                  alt="AniVerse"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
              </motion.div>

              <motion.button
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                  backgroundColor: "rgba(139, 92, 246, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(false)}
                className="p-3 rounded-full bg-purple-600/20 hover:bg-purple-600/30 transition-colors duration-300 backdrop-blur-sm"
              >
                <X size={22} />
              </motion.button>
            </motion.div>

            {/* Menu Content */}
            <div className="flex flex-col justify-start min-h-[calc(100vh-120px)] pl-6 pr-6 py-8 relative z-10">
              {/* Menu Items with enhanced animations */}
              <motion.div className="space-y-1 mb-12 pt-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    variants={itemVariants}
                    whileHover={{
                      x: 15,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-xl font-medium text-gray-300 hover:text-white transition-all duration-300 relative group py-3 px-0 rounded-xl hover:bg-white/5"
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      />
                      <motion.span
                        className="group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                        whileHover={{ letterSpacing: "0.5px" }}
                      >
                        {item.name}
                      </motion.span>
                    </div>

                    {/* Enhanced underline animation */}
                    <motion.div
                      className="absolute bottom-2 left-4 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ width: 0, opacity: 0 }}
                      whileHover={{
                        width: "60%",
                        opacity: 1,
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                    />
                  </motion.a>
                ))}
              </motion.div>

              {/* Enhanced Login Button */}
              <motion.button
                variants={buttonVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(139, 92, 246, 0.5)",
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                  y: 0,
                }}
                className="relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-base transition-all duration-300 overflow-hidden group"
              >
                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Login</span>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              {/* Enhanced decorative elements */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute top-1/4 right-8 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-1/4 left-8 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
