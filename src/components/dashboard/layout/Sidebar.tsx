// components/dashboard/Sidebar.tsx
"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SidebarItem } from "../types/sidebar";
import { sidebarItems } from "../utils/dashboard";

interface SidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (item: SidebarItem) => {
    if (item.disabled || !item.path) return;
    router.push(item.path);
    setIsMobileMenuOpen(false);
  };

  const isActive = (item: SidebarItem) => {
    if (!item.path) return false;
    return pathname === item.path;
  };

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-[#111827] rounded-lg flex items-center justify-center"
      >
        <Menu className="w-5 h-5 text-white" />
      </button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="lg:hidden fixed left-0 top-0 h-full w-full z-50"
            >
              <div className="w-full h-full bg-[#111827] border-r border-gray-800 flex flex-col">
                <div className="flex justify-end p-4">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="px-6 pb-6 border-b border-gray-800">
                  <img
                    onClick={navigateToHome}
                    src="/ani-logo.svg"
                    alt="AniVerse"
                    className="h-8 w-auto cursor-pointer"
                  />
                </div>
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                          isActive(item)
                            ? "bg-[#8B5CF6] text-white"
                            : item.disabled
                            ? "text-gray-600 cursor-not-allowed"
                            : "text-gray-300 hover:bg-[#8B5CF6]/10 hover:text-white"
                        }`}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{item.name}</span>
                      </button>
                    );
                  })}
                </nav>
                <div className="p-4 border-t border-gray-800">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 text-center relative overflow-hidden">
                    <img
                      src="/Badge.svg"
                      alt="7 Day Streak"
                      className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
                    />
                    <h4 className="text-white font-semibold mb-1">
                      7-Day Streak
                    </h4>
                    <p className="text-orange-100 text-xs">
                      A whole week strong! Keep it unstoppable!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-80 bg-[#111827] border-r border-gray-800 flex-col">
        <div className="p-6 border-b  border-gray-800 flex-shrink-0">
          <img
            onClick={navigateToHome}
            src="/ani-logo.svg"
            alt="AniVerse"
            className="h-8 cursor-pointer w-auto"
          />
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                  isActive(item)
                    ? "bg-[#8B5CF6] text-white"
                    : item.disabled
                    ? "text-gray-600 cursor-not-allowed"
                    : "text-gray-300 hover:bg-[#8B5CF6]/10 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-800 flex-shrink-0">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 text-center relative overflow-hidden">
            <img
              src="/Badge.svg"
              alt="7 Day Streak"
              className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
            />
            <h4 className="text-white font-semibold mb-1">7-Day Streak</h4>
            <p className="text-orange-100 text-xs">
              A whole week strong! Keep it unstoppable!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
