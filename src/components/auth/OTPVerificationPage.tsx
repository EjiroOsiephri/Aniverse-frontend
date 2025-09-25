"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { nav } from "framer-motion/client";
import Link from "next/link";

const AnimeVerifyPage = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleInputChange = (index: any, value: any) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Handle backspace to go to previous input
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const navigate = useRouter();

  const handlePaste = (e: {
    preventDefault: () => void;
    clipboardData: { getData: (arg0: string) => string | any[] };
  }) => {
    e.preventDefault();
    const pastedData = String(e.clipboardData.getData("text")).slice(0, 4);
    if (/^[0-9]{1,4}$/.test(pastedData)) {
      const newCode = pastedData.split("").concat(["", "", "", ""]).slice(0, 4);
      setCode(newCode);

      // Focus the next empty input or the last input
      const nextIndex = Math.min(pastedData.length, 3);
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const handleSubmit = () => {
    const verificationCode = code.join("");

    if (verificationCode.length === 4) {
      console.log("Verification code:", verificationCode);
    }

    navigate.push("/auth/success");
  };

  const handleResendCode = async () => {
    if (countdown > 0) return;

    setIsResending(true);
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
      setCountdown(30);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/anime-characters-bg.png)" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Top Left Logo - Desktop */}
      <div className="absolute top-6 left-6 z-10 hidden xl:block">
        <Link href="/">
          <img
            src="/ani-logo.svg"
            alt="AniVerse Logo"
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Bottom Left Copyright */}
      <div className="absolute bottom-6 left-6 z-10 text-white text-sm">
        <span>© AniVerse 2077</span>
      </div>

      {/* Bottom Right Contact */}
      <div className="absolute bottom-6 right-6 z-10">
        <button className="text-white text-sm hover:text-gray-300 transition-colors duration-200">
          help@aniverse.com
        </button>
      </div>

      {/* Verify Account Form Container */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Verify Account Form */}
          <div className="bg-white relative z-50 rounded-2xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              {/* Close Button */}

              {/* Logo - Mobile */}
              <div className="xl:hidden mb-6">
                <img
                  src="/ani-logo.svg"
                  alt="AniVerse Logo"
                  className="h-8 w-auto mx-auto cursor-pointer"
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Verify Account
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Please enter the 4-digit code sent to your email address for
                verification.
              </p>
            </div>

            {/* Verification Illustration */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Main illustration container */}
                <div className="w-32 h-32 bg-purple-50 rounded-full flex items-center justify-center">
                  {/* Character illustration */}
                  <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full relative">
                      {/* Simple character representation */}
                      <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute top-2 right-4 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Email icons around the character */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-3 border-2 border-white rounded-sm"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-3 border-2 border-white rounded-sm"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-3 border-2 border-white rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Stars decoration */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-purple-400 rounded-full"
                  ></div>
                ))}
              </div>
            </div>

            {/* Code Input Fields */}
            <div className="flex justify-center space-x-4 mb-8">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-14 h-14 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
                  maxLength={1}
                  autoComplete="off"
                />
              ))}
            </div>

            {/* Resend Code Section */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-600 mb-2">
                Didn't receive any code?{" "}
                <button
                  onClick={handleResendCode}
                  disabled={countdown > 0 || isResending}
                  className={`font-medium transition-colors duration-200 ${
                    countdown > 0 || isResending
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-purple-600 hover:text-purple-700"
                  }`}
                >
                  {isResending ? "Sending..." : "Resend Again"}
                </button>
              </p>
              {countdown > 0 && (
                <p className="text-xs text-gray-500">
                  Request new code in{" "}
                  {countdown < 10 ? `0${countdown}` : countdown}s
                </p>
              )}
            </div>

            {/* Verify Button */}
            <motion.button
              whileHover={{ scale: code.join("").length === 4 ? 1.02 : 1 }}
              whileTap={{ scale: code.join("").length === 4 ? 0.98 : 1 }}
              onClick={handleSubmit}
              disabled={code.join("").length !== 4}
              className={`w-full py-3 px-4 text-white font-medium rounded-lg transition-all duration-200 shadow-lg ${
                code.join("").length === 4
                  ? "hover:shadow-xl cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
              style={{
                backgroundColor:
                  code.join("").length === 4 ? "#8B5CF6" : "#D1D5DB",
              }}
            >
              Verify Account
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimeVerifyPage;
