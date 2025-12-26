// src/components/GuestNavBar.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

import { Sora } from "next/font/google";
import { DM_Sans } from "next/font/google";

// Load Sora font
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
});


// Load DM Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

interface GuestNavBarProps {
  onConnectWallet?: () => void;
}

export default function GuestNavBar({ onConnectWallet }: GuestNavBarProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#FAFBFD] px-4 py-4 shadow-sm">
      <div className="mx-auto flex max-w-9xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Cipher Logo Section */}
        <div className="flex">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center"
          >
            <Image
              src="/logos/Cipher Gate - Light.svg"
              alt="CipherGate Logo"
              width={230}
              height={10}
              className="h-auto"
              priority
            />
          </button>
        </div>

        {/* Center Nav Links */}
        <div className="hidden items-center space-x-16 md:flex">
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="font-dm-sans text-[20px] font-normal underline text-[#263453] transition-colors hover:text-blue-600"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            How It Works
          </button>

          <button
            onClick={() => scrollToSection("use-cases")}
            className="font-dm-sans text-[20px] font-normal underline text-[#263453] transition-colors hover:text-blue-600"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Use Cases
          </button>

          <button
            onClick={() => scrollToSection("security")}
            className="font-dm-sans text-[20px] font-normal underline text-[#263453] transition-colors hover:text-blue-600"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Security
          </button>

          <button
            onClick={() => scrollToSection("docs")}
            className="font-dm-sans text-[20px] font-normal underline text-[#263453] transition-colors hover:text-blue-600"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Docs
          </button>

          <button
            onClick={() => scrollToSection("faqs")}
            className="font-dm-sans text-[20px] font-normal underline text-[#263453] transition-colors hover:text-blue-600"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            FAQs
          </button>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center">
          {/* Divider Line */}
          <div className="hidden h-10 w-px bg-[#E1E4ED] mr-[30px] md:block"></div>
          <button
            onClick={onConnectWallet} // ConnectWallet Handler
            className="font-dm-sans text-[20px] font-normal underline text-[#263453] transition-colors hover:text-blue-600"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Connect Wallet
          </button>

          <div className="w-[30px]"></div>

          <button
            onClick={onConnectWallet} // ConnectWallet Handler
            className="flex items-center justify-center rounded-full px-5 py-2.5 shadow-[1px_1px_1px_rgba(11,13,23,0.2)] transition-all hover:shadow-[2px_2px_2px_rgba(11,13,23,0.3)]"
            style={{
              background: "linear-gradient(135deg, #0768EB 0%, #08C4CE 100%)",
            }}
          >
            <Image
              src="/icons/rocket.svg"
              alt="Rocket"
              width={28}
              height={28}
              className="mr-[10px]"
            />
            <span
              className="font-sora text-[18px] font-semibold text-[#FEFEFE]"
              style={{
                fontFamily: "Sora, sans-serif",
              }}
            >
              Launch App
            </span>
          </button>

          {/* 30px gap between Launch App and Theme Switch */}
          <div className="w-[30px]"></div>

          {/* Theme Switch Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#F2F2F2] shadow-[1px_1px_1px_rgba(11,13,23,0.2)] transition-all hover:shadow-[2px_2px_2px_rgba(11,13,23,0.3)]"
          >
            {isDarkMode ? (
              <Image
                src="/icons/sun.svg"
                alt="Light Mode"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="/icons/moon.svg"
                alt="Dark Mode"
                width={24}
                height={24}
              />
            )}
          </button>

          {/* 10px gap between Theme Switch and Change Language */}
          <div className="w-[20px]"></div>

          {/* Change Language Button - 20px from right edge of nav */}
          <button className="mr-[30px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#F2F2F2] shadow-[1px_1px_1px_rgba(11,13,23,0.2)] transition-all hover:shadow-[2px_2px_2px_rgba(11,13,23,0.3)]">
            <Image
              src="/icons/language-dark.svg"
              alt="Change Language"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
