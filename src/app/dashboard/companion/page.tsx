"use client";

import React, { useState } from "react";
import Sidebar from "@/components/dashboard/layout/Sidebar";
import TopNavbar from "@/components/dashboard/layout/TopNavBar";

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
        </div>
      </div>
    </div>
  );
};

export default page;
