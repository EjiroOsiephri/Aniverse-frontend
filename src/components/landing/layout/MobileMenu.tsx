// components/MobileMenu.tsx
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Full Screen Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 xl:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Full Screen Mobile Menu */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            className="fixed inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 z-50 xl:hidden overflow-y-auto"
            style={{
              background:
                "linear-gradient(135deg, #1F2937 0%, #374151 50%, #1F2937 100%)",
            }}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
              <Image
                src="/ani-logo.png"
                alt="AniVerse"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/30 transition-colors"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col justify-center min-h-[calc(100vh-120px)] px-6 py-8">
              {/* Menu Items */}
              <div className="space-y-8 mb-12">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-xl font-medium text-gray-300 hover:text-white transition-all duration-300 relative group py-3"
                  >
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-4"
                    >
                      <motion.div
                        className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.2 }}
                      />
                      <span className="group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {item.name}
                      </span>
                    </motion.div>
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                      whileHover={{ width: "50%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Login Button */}
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.1 + navItems.length * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Login
              </motion.button>

              {/* Decorative elements */}
              <div className="absolute top-1/4 right-8 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl" />
              <div className="absolute bottom-1/4 left-8 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-xl" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
