"use client";

import React, { useState } from "react";
import Sidebar from "@/components/dashboard/layout/Sidebar";
import TopNavbar from "@/components/dashboard/layout/TopNavBar";
import AvatarCreationPage from "@/components/dashboard/avatar/layout/AvatarCreationPage";

const Page = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex h-screen">
        <Sidebar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNavbar />
          <main className="flex-1 overflow-y-auto">
            <div className="h-full p-2 sm:p-4 lg:p-6 mx-auto w-full max-w-7xl">
              <AvatarCreationPage />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page;
