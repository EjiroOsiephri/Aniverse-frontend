"use client";

import React, { useState } from "react";
import Sidebar from "@/components/dashboard/layout/Sidebar";
import TopNavbar from "@/components/dashboard/layout/TopNavBar";
import ChatInterface from "@/components/dashboard/companion/layout/ChatInterface";

const page = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex h-screen">
        <Sidebar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <TopNavbar />
          <main className="flex-1 overflow-hidden">
            <div className="h-full p-2 sm:p-4 lg:p-6 mx-auto w-full max-w-7xl">
              <ChatInterface />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default page;
