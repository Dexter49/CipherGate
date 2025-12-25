// src/components/Footer.tsx
"use client";

import Image from "next/image";

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

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-32 border-t border-gray-200 bg-[#FAFBFD] pt-12 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex flex-col items-start space-y-3">
              <Image
                src="/logos/Cipher Gate - Light.svg"
                alt="CipherGate Logo"
                width={150}
                height={10}
                className="h-auto"
                priority
              />
              <div>
                <h3
                  className="font-sora text-[24px] font-bold text-gray-900 mb-2"
                  style={{
                    fontFamily: "Sora, sans-serif",
                  }}
                >
                  CipherGate
                </h3>
                <p
                  className="font-sora text-[18px] text-gray-600"
                  style={{
                    fontFamily: "Sora, sans-serif",
                  }}
                >
                  Privacy-First On-Chain Access Control
                </p>
              </div>
            </div>
            <p
              className="font-dm-sans text-gray-600 max-w-xs"
              style={{
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Secure, private, and programmable access control for on-chain
              secrets using Fully Homomorphic Encryption.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/daniel-tobi-onipe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="Linkedin"
                  width={32}
                  height={32}
                />
              </a>

              {/* Twitter/X */}
              <a
                href="https://x.com/BigDexter_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/x_logo.svg"
                  alt="Twitter"
                  width={32}
                  height={32}
                />
              </a>

              {/* Discord */}
              <a
                href="https://discord.com/users/807165217808056340"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/discord.svg"
                  alt="Discord"
                  width={36}
                  height={32}
                />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className=" mt-8 space-y-4">
            <h4
              className="text-[24px] font-bold text-gray-900 font-sora"
              style={{
                fontFamily: "Sora, sans-serif",
              }}
            >
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.ciphergate.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[20px] font-dm-sans font-medium hover:underline text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  <Image
                    src="/icons/documentation.svg"
                    alt="Documentation"
                    width={24}
                    height={24}
                  />
                  <div className="w-[8px]"></div>
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Dexter49/CipherGate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[20px] font-dm-sans font-medium hover:underline text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  <Image
                    src="/icons/github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                  <div className="w-[8px]"></div>
                  GitHub
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("security")}
                  className="text-[20px] font-dm-sans font-medium hover:underline text-[#263453] hover:text-blue-600 transition-colors flex items-center"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  <Image
                    src="/icons/shield.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                  <div className="w-[8px]"></div>
                  Security Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="text-[20px] font-dm-sans font-medium hover:underline text-[#263453] hover:text-blue-600 transition-colors flex items-center"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  <Image
                    src="/icons/faqs.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                  <div className="w-[8px]"></div>
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Contact/Newsletter */}
          <div className="mt-8 space-y-4">
            <h4
              className="text-[24px] font-bold text-[#263453] font-sora"
              style={{
                fontFamily: "Sora, sans-serif",
              }}
            >
              Stay Updated
            </h4>
            <p
              className="font-dm-sans text-[18px] text-[#263453]"
              style={{
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Join our community for updates and announcements.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:text-[#263453] focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400"
              />
              <div className="w-[8px]"></div>
              <button className="bg-gradient-to-r from-[#0768EB] to-[#08C4CE] text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                <span
                  className="font-sora font-bold text-[20px]"
                  style={{
                    fontFamily: "Sora, sans-serif",
                  }}
                >
                  Subscribe
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            CipherGate • Built by Dexter with ❤️ for a private future.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © {new Date().getFullYear()} CipherGate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
