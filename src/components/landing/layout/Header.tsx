"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // Set scrolled state when user scrolls past 50px
    setIsScrolled(latest > 50);

    // Hide/show header based on scroll direction
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Background styles based on scroll state and window size
  const getBackgroundStyle = () => {
    if (!isScrolled) {
      // No background when at top
      return {
        background: "transparent",
        backdropFilter: "none",
        borderBottom: "none",
      };
    }

    // Scrolled state - add background
    if (windowDimensions.width <= 1440) {
      return {
        background:
          "linear-gradient(180deg, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.8) 50%, rgba(17, 24, 39, 0.6) 100%)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(139, 92, 246, 0.2)",
      };
    } else {
      return {
        background:
          "linear-gradient(180deg, rgba(17, 24, 39, 0.9) 0%, rgba(17, 24, 39, 0.6) 50%, rgba(17, 24, 39, 0.4) 100%)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(139, 92, 246, 0.1)",
      };
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: hidden ? -100 : 0,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className="fixed top-0 left-0 right-0 z-50 px-1 xl:px-20 py-4 transition-all duration-300"
      style={getBackgroundStyle()}
    >
      {/* Background blur overlay for better text contrast when scrolled */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gray-900/20 backdrop-blur-md rounded-xl"
      />

      <div className="flex items-center justify-between relative z-10">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="flex items-center"
        >
          <motion.div
            animate={{
              filter: isScrolled
                ? "drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))"
                : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/ani-logo.svg"
              alt="AniVerse"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                textShadow: isScrolled
                  ? "0 0 10px rgba(255, 255, 255, 0.1)"
                  : "none",
              }}
              transition={{
                delay: 0.1 * index,
                duration: 0.5,
                textShadow: { duration: 0.3 },
              }}
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
            animate={{
              boxShadow: isScrolled
                ? "0 0 15px rgba(139, 92, 246, 0.2)"
                : "none",
            }}
            transition={{ duration: 0.3 }}
            className="px-6 py-2 border border-gray-600 rounded-full text-white hover:border-purple-400 transition-all duration-300"
          >
            Login
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          animate={{
            backgroundColor: isScrolled
              ? "rgba(139, 92, 246, 0.1)"
              : "transparent",
          }}
          transition={{ duration: 0.3 }}
          className="xl:hidden p-2 relative z-50 rounded-lg"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Animated bottom border */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isScrolled ? 1 : 0,
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
        style={{ originX: 0.5 }}
      />
    </motion.nav>
  );
};

export default Header;
