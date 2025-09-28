// components/dashboard/AIChat.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, Minimize2, Send } from "lucide-react";

interface AIChatProps {
  isChatExpanded: boolean;
  setIsChatExpanded: (expanded: boolean) => void;
  chatMessage: string;
  setChatMessage: (message: string) => void;
  handleChatSubmit: () => void;
}

const AIChat: React.FC<AIChatProps> = ({
  isChatExpanded,
  setIsChatExpanded,
  chatMessage,
  setChatMessage,
  handleChatSubmit,
}) => {
  return (
    <div
      className={`bg-[rgba(139,92,246,0.08)] rounded-2xl p-6 transition-all duration-300 flex flex-col ${
        isChatExpanded ? "h-[600px]" : "h-72 lg:h-96"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5CF6] to-pink-500 flex items-center justify-center">
            <span className="text-white text-sm font-bold">L</span>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg">LUNA</h4>
            <p className="text-gray-400 text-sm">The Slice-of-Life</p>
          </div>
        </div>
        <button
          onClick={() => setIsChatExpanded(!isChatExpanded)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {isChatExpanded ? (
            <Minimize2 className="w-5 h-5" />
          ) : (
            <Maximize2 className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="mb-6 flex-1">
        <p className="text-gray-300 text-base">Hi, James!</p>
        <p className="text-gray-300 text-base">How Can I help you Today?</p>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          placeholder="What's..."
          className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#8B5CF6] text-base"
          onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
        />
        <button
          onClick={handleChatSubmit}
          className="w-10 h-10 bg-gradient-to-r from-[#8B5CF6] to-pink-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all"
        >
          <Send className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default AIChat;
