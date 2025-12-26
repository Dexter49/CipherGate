// src/components/ConnectWallet.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ConnectWalletProps {
  isOpen: boolean;
  onClose: () => void;
}

// Define wallet providers with their data
const walletProviders = [
  {
    id: "metamask",
    name: "MetaMask",
    logoPath: "/wallet-logos/MetaMask.svg",
    description: "Connect with your MetaMask wallet",
  },
  {
    id: "trustwallet",
    name: "Trust Wallet",
    logoPath: "/wallet-logos/Trust Wallet.svg",
    description: "Connect with your Trust Wallet",
  },
  {
    id: "phantom",
    name: "Phantom",
    logoPath: "/wallet-logos/Phantom.svg",
    description: "Connect with your Phantom wallet",
  },
  {
    id: "solflare",
    name: "Solflare",
    logoPath: "/wallet-logos/Solflare.svg",
    description: "Connect with your Solflare wallet",
  },
  {
    id: "reown",
    name: "Reown",
    logoPath: "/wallet-logos/Reown.svg",
    description: "Connect with Reown",
  },
];

export default function ConnectWallet({ isOpen, onClose }: ConnectWalletProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Handle animation of isOpen and onClose
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      document.body.style.overflow = "unset";
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle Wallet Connection
  const handleWalletConnect = (walletId: string) => {
    console.log(`Connecting to ${walletId}`);
    onClose();
  };

  // Don't render if not visible and not open
  if (!isOpen && !isVisible) return null;

  return (
    <>
      {/* Overlay with #111166 and 80% opacity */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundColor: "rgba(17, 17, 102, 0.8)" }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container - This should be SEPARATE from the overlay */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="connect-wallet-title"
      >
        <div
          className="relative w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
        >
          {/* Gradient border */}
          <div className="absolute inset-0 p-0.5 rounded-3xl bg-gradient-to-b from-[#7048E8] to-[#00C1D4]">
            <div className="bg-white rounded-[calc(1.5rem-0.5px)] h-full">
              {/* Modal Content */}
              <div className="flex flex-col lg:flex-row min-h-[600px]">
                {/* Wallet Illustration - Left Side */}
                <div className="lg:w-1/2 bg-gradient-to-b from-[#7048E8] to-[#00C1D4] p-10 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Temporary placeholder - replace with your actual image */}
                    <div className="text-6xl mb-4">🔐</div>
                    {/* If you want to use the actual image, make sure it's in public folder */}
                    <Image
                      src="/wallet-picture/Wallet Modal Image.png"
                      alt="Wallet Connection Illustration"
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Right Side - Wallet Options */}
                <div className="lg:w-1/2 p-10 relative">
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>

                  {/* Header */}
                  <div className="mb-8">
                    <h2
                      id="connect-wallet-title"
                      className="text-2xl font-semibold text-[#263453] mb-2"
                      style={{
                        fontFamily: "'Sora', sans-serif",
                      }}
                    >
                      Connect Your Wallet
                    </h2>

                    <p
                      className="text-[#5F6A8C]"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      Securely connect to CipherGate!
                    </p>
                  </div>

                  {/* Wallet Options List */}
                  <div className="space-y-4">
                    {walletProviders.map((wallet) => (
                      <button
                        key={wallet.id}
                        onClick={() => handleWalletConnect(wallet.id)}
                        className="w-full h-[60px] flex items-center px-4 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                        style={{
                          backgroundColor: "#E1E4ED",
                          border: "0.5px solid #050B15",
                          borderRadius: "16px",
                          maxWidth: "350px",
                        }}
                        aria-label={`Connect with ${wallet.name}`}
                      >
                        {/* Logo Container */}
                        <div
                          className="w-[50px] h-[50px] rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "#F2F2F2" }}
                        >
                          {/* Wallet Logo */}
                          <div className="w-[30px] h-[30px] flex items-center justify-center relative">
                            {/* Wallet Logos */}
                            <Image
                              src={wallet.logoPath}
                              alt={`${wallet.name} logo`}
                              width={30}
                              height={30}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* Wallet Name */}
                        <div className="ml-4 text-left">
                          <span
                            className="font-semibold text-[#263453]"
                            style={{
                              fontFamily: "'Sora', sans-serif",
                              fontSize: "18px",
                            }}
                          >
                            Connect with {wallet.name}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Helper Text */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p
                      className="text-center text-[#5F6A8C]"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      Don't have a wallet?{" "}
                      <a
                        href="https://ethereum.org/en/wallets/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0768EB] hover:text-[#034BB5] font-medium transition-colors underline"
                      >
                        Learn how to set one up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
