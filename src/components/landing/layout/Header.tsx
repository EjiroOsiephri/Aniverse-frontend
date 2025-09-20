// components/Header.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { navItems } from "../utils/constant";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  windowDimensions: { width: number; height: number };
}

const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  windowDimensions,
}) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 xl:px-20 py-4"
      style={{
        background:
          windowDimensions.width <= 1440
            ? "linear-gradient(180deg, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.8) 50%, rgba(17, 24, 39, 0.6) 100%)"
            : "linear-gradient(180deg, rgba(17, 24, 39, 0.8) 0%, rgba(17, 24, 39, 0.4) 50%, transparent 100%)",
        backdropFilter: windowDimensions.width > 1440 ? "none" : "blur(15px)",
        borderBottom:
          windowDimensions.width <= 1440
            ? "1px solid rgba(139, 92, 246, 0.2)"
            : "none",
      }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="flex items-center"
        >
          <Image
            src="/ani-logo.png"
            alt="AniVerse"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                color: "#8B5CF6",
                transition: { duration: 0.2 },
              }}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 relative group"
            >
              {item.name}
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Desktop Login Button */}
        <div className="hidden xl:block">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-gray-600 rounded-full text-white hover:border-purple-400 transition-all duration-300"
          >
            Login
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden p-2 relative z-50"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Header;
