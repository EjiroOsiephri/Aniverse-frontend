"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Send,
  Github,
  Linkedin,
  Facebook,
  Twitter,
  Globe,
  Dribbble,
} from "lucide-react";

const AniVerseFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const linkVariants: Variants = {
    hover: {
      scale: 1.05,
      color: "#8B5CF6",
      transition: {
        duration: 0.2,
      },
    },
  };

  const socialIconVariants: Variants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <footer className="bg-gray-800/70 text-white">
      <div className="max-w-[1410px] mx-auto relative z-20 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-12 lg:py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="space-y-4">
                {/* Logo only */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex items-center"
                >
                  <motion.div
                    animate={{
                      filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))",
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

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  Stream, create, and connect in one anime-powered world.
                </p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="space-y-3">
                {[
                  "Home",
                  "Create Avatar",
                  "AI Companion",
                  "Community (Coming Soon)",
                ].map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    variants={linkVariants}
                    whileHover="hover"
                    className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Company */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <div className="space-y-3">
                {[
                  "About Us",
                  "Terms of Service",
                  "Privacy Policies",
                  "Contact Us",
                ].map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    variants={linkVariants}
                    whileHover="hover"
                    className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Get in touch</h3>
              <p className="text-gray-400 text-sm">
                Join our weekly newsletter
              </p>

              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address..."
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors duration-200"
                    required
                  />
                  <motion.button
                    type="submit"
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitted}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-200 disabled:opacity-50"
                  >
                    {isSubmitted ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                      />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </motion.button>
                </div>

                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm"
                  >
                    Thanks for subscribing!
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2026 Aniverse. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Dribbble, href: "#", label: "Dribbble" },
                { icon: Globe, href: "#", label: "Website" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/20 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default AniVerseFooter;
