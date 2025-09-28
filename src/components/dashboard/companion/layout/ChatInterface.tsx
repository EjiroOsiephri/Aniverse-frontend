"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Clock,
  Heart,
  Zap,
  Smile,
  MessageSquare,
  Calendar,
  Sparkles,
  X,
  ChevronLeft,
  Menu,
} from "lucide-react";

interface ChatMessage {
  id: string;
  text: string;
  timestamp: string;
  isUser: boolean;
}

interface ChatHistoryItem {
  id: string;
  title: string;
  date: string;
  snippet: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [showPulseHint, setShowPulseHint] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Thank you for work, see you!",
      timestamp: "16:42",
      isUser: false,
    },
    {
      id: "2",
      text: "Hello! Have you seen my backpack anywhere in office?",
      timestamp: "16:42",
      isUser: true,
    },
    {
      id: "3",
      text: "Hi, yes, David have found it, ask our concierge",
      timestamp: "16:42",
      isUser: false,
    },
  ]);
  const [dragCoords, setDragCoords] = useState({ x: 0, y: 0 });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Set initial drag position to match bottom-20 right-4
    const initialX = window.innerWidth - 16 - 48; // right-4 (1rem), button w-12 (3rem)
    const initialY = window.innerHeight - 80 - 48; // bottom-20 (5rem), button h-12 (3rem)
    setDragCoords({ x: initialX, y: initialY });

    // Hide the pulse hint after 5 seconds
    const timer = setTimeout(() => {
      setShowPulseHint(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        text: message,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isUser: true,
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleOpenSidebar = () => {
    setShowMobileSidebar(true);
    setShowPulseHint(false);
  };

  const handleDragEnd = (e: any, info: any) => {
    setDragCoords({ x: info.point.x, y: info.point.y });
  };

  const historyItems: ChatHistoryItem[] = [
    {
      id: "1",
      title: "Cozy Night Recs",
      date: "Sep 25, 2025",
      snippet:
        "Chatted about heartwarming slice-of-life picks like 'K-On!' and mood-boosting episodes.",
      icon: Heart,
      color: "text-pink-400",
    },
    {
      id: "2",
      title: "Mood Check-In",
      date: "Sep 22, 2025",
      snippet:
        "Shared my day and got tips on unwinding with 'Your Lie in April' OST vibes.",
      icon: Smile,
      color: "text-yellow-400",
    },
    {
      id: "3",
      title: "Watchlist Brainstorm",
      date: "Sep 20, 2025",
      snippet:
        "Brainstormed autumn anime lineup—added 'Violet Evergarden' to my list!",
      icon: Sparkles,
      color: "text-purple-400",
    },
    {
      id: "4",
      title: "Daily Reflection",
      date: "Sep 18, 2025",
      snippet:
        "Reflected on the week; Luna suggested journaling with 'A Silent Voice' themes.",
      icon: MessageSquare,
      color: "text-blue-400",
    },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Companion Profile */}
      <div className="p-4 sm:p-6 border-b border-gray-800 flex-shrink-0">
        <div className="rounded-[12px] p-4 sm:p-6 flex flex-col items-center text-center">
          <div className="relative mb-3 sm:mb-4">
            <img
              src="/luna.png"
              alt="LUNA"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover bg-gray-700"
            />
            <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-[#1a1b23]"></div>
          </div>

          <h3 className="text-white font-bold text-base sm:text-lg mb-1">
            LUNA
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
            The Slice-of-Life
          </p>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 px-2">
            Hi, I'm Luna your calm and thoughtful companion. I love heartwarming
            stories, quiet moments, and anime that makes you feel every emotion.
          </p>

          <button className="bg-gradient-to-r from-[#8B5CF6] to-pink-500 text-white px-6 sm:px-8 py-2 text-sm sm:text-base rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 w-full sm:w-auto">
            Change Companion
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="p-4 sm:p-6 border-b border-gray-800 flex-shrink-0">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Heart className="w-4 h-4 text-pink-500" />
          <span className="text-white font-medium text-sm sm:text-base">
            Luna & I
          </span>
        </div>

        <div className="rounded-[12px] p-3 sm:p-4 space-y-3 sm:space-y-4">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-gray-400">Days Together</span>
            <span className="text-white font-medium">99</span>
          </div>

          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-gray-400">Total Messages</span>
            <span className="text-white font-medium">6768</span>
          </div>

          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-gray-400">Anime Recommended</span>
            <span className="text-white font-medium">12</span>
          </div>

          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-gray-400">Bond Level</span>
            <div className="flex items-center gap-2">
              <div className="w-16 sm:w-20 bg-gray-700 rounded-full h-1.5 sm:h-2">
                <div
                  className="bg-gradient-to-r from-[#8B5CF6] to-pink-500 h-1.5 sm:h-2 rounded-full"
                  style={{ width: "97%" }}
                ></div>
              </div>
              <span className="text-white font-medium text-xs sm:text-sm">
                97%
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-gray-400">Current Streak</span>
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
              <span className="text-orange-400 font-medium">7 days</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-gray-400">Current Mood</span>
            <div className="flex items-center gap-1">
              <Smile className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
              <span className="text-yellow-400 font-medium">Happy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat History - Now flows with parent scroll */}
      <div className="flex-1 p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Clock className="w-4 h-4 text-gray-400" />
          <span className="text-white font-medium text-sm sm:text-base">
            Chat History
          </span>
        </div>

        <div className="space-y-2 sm:space-y-3 rounded-[12px] p-3 sm:p-4 border border-[rgba(139,92,246,0.2)]">
          {historyItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 hover:bg-[rgba(139,92,246,0.1)] rounded-lg transition-colors cursor-pointer text-xs sm:text-sm"
              >
                <div
                  className={`p-1.5 sm:p-2 rounded-lg bg-white/10 ${item.color} flex-shrink-0`}
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="text-white font-medium truncate">
                      {item.title}
                    </h5>
                    <div className="flex items-center gap-1 ml-2 hidden sm:flex">
                      <Calendar className="w-3 h-3 text-gray-500" />
                      <span className="text-gray-400 text-xs">{item.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 truncate">{item.snippet}</p>
                  <span className="text-gray-400 text-xs sm:hidden">
                    {item.date}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col lg:flex-row text-white relative">
      {/* Mobile Floating Button - Draggable */}
      <motion.button
        onClick={handleOpenSidebar}
        style={{ x: dragCoords.x, y: dragCoords.y }}
        drag
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        className="lg:hidden fixed z-40 group cursor-move"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3,
        }}
      >
        <motion.div
          className="relative"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            },
          }}
        >
          {/* Pulse effect for attention */}
          {showPulseHint && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-pink-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.7, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          )}

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-pink-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />

          {/* Main button container */}
          <div className="relative bg-gradient-to-r from-[#8B5CF6] to-pink-500 p-1 rounded-full shadow-2xl">
            <div className="bg-gray-900 p-1 rounded-full">
              <motion.img
                src="/luna.png"
                alt="View Luna's Profile"
                className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            </div>
          </div>

          {/* "Tap me" hint */}
          {showPulseHint && (
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Tap to view profile
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
            </motion.div>
          )}

          {/* Sparkle effects */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </motion.div>
      </motion.button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {showMobileSidebar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 z-50"
            onClick={() => setShowMobileSidebar(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {showMobileSidebar && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="lg:hidden fixed right-0 top-0 h-full w-80 bg-gray-900 z-50 shadow-2xl overflow-y-auto"
          >
            {/* Mobile Sidebar Header */}
            <div className="sticky top-0 bg-gray-900 z-10 flex items-center justify-between p-4 border-b border-gray-800">
              <h2 className="text-white font-semibold flex items-center gap-2">
                <img
                  src="/luna.png"
                  alt="Luna"
                  className="w-6 h-6 rounded-full"
                />
                Companion Info
              </h2>
              <button
                onClick={() => setShowMobileSidebar(false)}
                className="text-gray-400 hover:text-white p-1 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sidebar Content - Single scrollable container */}
            <SidebarContent />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full bg-[rgba(139,92,246,0.08)] rounded-[12px] m-1 sm:m-2">
        {/* Chat Header */}
        <div className="border-b border-gray-800 p-3 sm:p-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-sm font-medium">
              Luna is Happy
            </span>
          </div>
          {/* Mobile companion avatar */}
          <div className="lg:hidden flex items-center gap-2">
            <img
              src="/luna.png"
              alt="LUNA"
              className="w-8 h-8 rounded-full object-cover bg-gray-700"
            />
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 sm:space-y-6">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-2 sm:gap-3 ${
                msg.isUser ? "justify-end" : "justify-start"
              }`}
            >
              {!msg.isUser && (
                <div className="flex-shrink-0">
                  <img
                    src="/luna.png"
                    alt="LUNA"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover bg-gray-700"
                  />
                </div>
              )}

              <div
                className={`flex flex-col ${
                  msg.isUser ? "items-end" : "items-start"
                } max-w-[75%] sm:max-w-[80%] lg:max-w-md`}
              >
                {!msg.isUser && (
                  <div className="mb-1">
                    <span className="text-white font-medium text-xs sm:text-sm">
                      LUNA
                    </span>
                    <span className="text-gray-400 text-xs ml-2 hidden sm:inline">
                      The Slice-of-Life
                    </span>
                  </div>
                )}

                <div
                  className={`px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-xs sm:text-sm ${
                    msg.isUser
                      ? "bg-[#8B5CF6] text-white rounded-tr-sm"
                      : "bg-gray-800 text-gray-200 rounded-tl-sm"
                  }`}
                >
                  <p className="leading-relaxed break-words">{msg.text}</p>
                </div>

                <span className="text-gray-500 text-xs mt-1">
                  {msg.timestamp}
                </span>
              </div>

              {msg.isUser && (
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#8B5CF6] to-pink-500 flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-bold">
                      J
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 border-t border-gray-800 flex-shrink-0">
          <div className="flex gap-2 sm:gap-3 items-end">
            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="w-full bg-gray-800 border border-gray-700 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-[#8B5CF6]"
              />
            </div>
            <button
              onClick={handleSendMessage}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#8B5CF6] to-pink-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 flex-shrink-0"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Right Sidebar */}
      <div className="hidden lg:flex w-80 flex-col h-full bg-[rgba(139,92,246,0.08)] rounded-[12px] m-1 sm:m-2 overflow-y-auto">
        <SidebarContent />
      </div>
    </div>
  );
};

export default ChatInterface;
