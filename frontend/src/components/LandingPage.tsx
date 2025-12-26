// app/components/LandingPage.tsx
"use client";

import GuestNavBar from "@/components/GuestNavBar";
import Footer from "@/components/Footer";
import ConnectWallet from "@/components/ConnectWallet";
import { useConnectWalletModal } from "@/hooks/ConnectWalletModal";

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

export default function LandingPage() {
  const { isConnectWalletOpen, openConnectWallet, closeConnectWallet } =
    useConnectWalletModal();

  return (
    <div
      className={`min-h-screen bg-linear-to-br from-gray-50 to-white ${dmSans.variable} font-sans`}
    >
      <GuestNavBar onConnectWallet={openConnectWallet} />

      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        {/* Hero Section */}
        <section className="text-center mt-16 mb-80">
          <h1
            className="font-sora text-8xl md:text-7xl font-bold mb-6 bg-linear-to-r from-[#0768EB] to-[#08C4CE] bg-clip-text text-transparent"
            style={{
              fontFamily: "Sora, sans-serif",
            }}
          >
            Cipher Gate
          </h1>
          <div className="text-2xl md:text-3xl text-[#263453] font-semibold mb-10">
            <p className="block">Private Access Control for</p>
            <p className="block">On-Chain Secrets</p>
          </div>
          <p className="text-[#5F6A8C] font-dm-sans text-[20px] font-medium max-w-3xl mx-auto mb-12">
            CipherGate lets you store, share, and gate sensitive data on-chain
            using encrypted permissions — without ever revealing the secret
            itself.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button
              onClick={openConnectWallet} // ConnectWallet Handler
              className="px-8 py-4 bg-linear-to-r from-[#0768EB] to-[#08C4CE] hover:from-[#034BB5] hover:to-[#05949E] rounded-xl font-sora text-[20px] font-semibold text-[#FEFEFE] shadow-lg transition-all hover:shadow-xl"
              style={{
                fontFamily: "Sora, sans-serif",
              }}
            >
              Connect Wallet
            </button>
            <button
              className="px-8 py-4 border-2 border-[#0768EB] text-[#0768EB] hover:bg-blue-50 rounded-xl font-sora text-[20px] font-semibold transition"
              style={{
                fontFamily: "Sora, sans-serif",
              }}
            >
              View Docs
            </button>
          </div>
        </section>

        <section>{/* Trust Signal Section */}</section>

        {/* How It Works Section */}
        <section id="how-it-works" className="mb-20 scroll-mt-20">
          <h2
            className="font-sora text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0768EB] to-[#08C4CE] bg-clip-text text-transparent"
            style={{
              fontFamily: "Sora, sans-serif",
            }}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold bg-linear-to-r from-[#0768EB] to-[#08C4CE] bg-clip-text text-transparent mb-4">
                1. Fully Homomorphic Encryption
              </h3>
              <p className="text-[#5F6A8C]">
                Perform computations on encrypted data without decryption,
                ensuring complete privacy.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold bg-linear-to-r from-[#0768EB] to-[#08C4CE] bg-clip-text text-transparent mb-4">
                2. Privacy-Preserving Smart Contracts
              </h3>
              <p className="text-[#5F6A8C]">
                Execute smart contracts that keep transaction details
                confidential.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0768EB] to-[#08C4CE] bg-clip-text text-transparent mb-4">
                3. Elevated Access Control
              </h3>
              <p className="text-[#5F6A8C] mb-3">
                Owners define who can access a secret and how:
              </p>
              <ul className="text-[#5F6A8C] space-y-2">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#08C4CE] mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Set individual or group permissions</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#08C4CE] mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Define time-based access windows</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#08C4CE] mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Require multi-signature approvals</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#08C4CE] mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Implement usage limits and conditions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="py-12">
          <h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0768EB] to-[#08C4CE] bg-clip-text text-transparent"
            style={{
              fontFamily: "Sora, sans-serif",
            }}
          >
            Why CipherGate?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="group relative p-6 rounded-2xl border border-gray-200 bg-white hover:border-transparent transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0768EB] to-[#08C4CE] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-[#263453] mb-3">
                  True Privacy
                </h3>
                <p className="text-[#5F6A8C]">
                  Your secrets are never revealed on-chain — not even to
                  validators.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-6 rounded-2xl border border-gray-200 bg-white hover:border-transparent transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0768EB] to-[#08C4CE] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-[#263453] mb-3">
                  Programmable Access
                </h3>
                <p className="text-[#5F6A8C]">
                  Access control is enforced by smart contracts, not trust.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-6 rounded-2xl border border-gray-200 bg-white hover:border-transparent transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0768EB] to-[#08C4CE] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-[#263453] mb-3">
                  Composable
                </h3>
                <p className="text-[#5F6A8C]">
                  Easily integrate CipherGate into dApps, DAOs, and protocols.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative p-6 rounded-2xl border border-gray-200 bg-white hover:border-transparent transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0768EB] to-[#08C4CE] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl mb-4">🛡</div>
                <h3 className="text-xl font-bold text-[#263453] mb-3">
                  Non-Custodial
                </h3>
                <p className="text-[#5F6A8C]">
                  You stay in control. CipherGate never owns your data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <section id="use-cases" className="mt-16 mb-42 scroll-mt-20">
          <h2
            className="font-sora text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0768EB] to-[#08C4CE] bg-clip-text text-transparent"
            style={{
              fontFamily: "Sora, sans-serif",
            }}
          >
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Private DeFi */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8">
              <h3 className="text-2xl font-bold text-[#263453] mb-4">
                Private DeFi
              </h3>
              <p className="text-[#5F6A8C] mb-4">
                Conduct financial transactions without revealing amounts or
                participants.
              </p>
              <ul className="text-[#5F6A8C] text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Confidential trading strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Private liquidity pools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Hidden transaction amounts</span>
                </li>
              </ul>
            </div>

            {/* Medical Data */}
            <div className="rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 p-8">
              <h3 className="text-2xl font-bold text-[#263453] mb-4">
                Medical Data
              </h3>
              <p className="text-[#5F6A8C] mb-4">
                Process patient data for research while maintaining HIPAA
                compliance.
              </p>
              <ul className="text-[#5F6A8C] text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Encrypted health records</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Clinical trial data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Patient privacy compliance</span>
                </li>
              </ul>
            </div>

            {/* New: DAO Governance */}
            <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8">
              <h3 className="text-2xl font-bold text-[#263453] mb-4">
                DAO Governance
              </h3>
              <p className="text-[#5F6A8C] mb-4">
                Enable confidential decision-making and document sharing for
                decentralized organizations.
              </p>
              <ul className="text-[#5F6A8C] text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Private proposals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Confidential voting metadata</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Restricted internal documents</span>
                </li>
              </ul>
            </div>

            {/* New: DeFi Protocols */}
            <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 p-8">
              <h3 className="text-2xl font-bold text-[#263453] mb-4">
                DeFi Protocols
              </h3>
              <p className="text-[#5F6A8C] mb-4">
                Protect sensitive protocol parameters and integration details.
              </p>
              <ul className="text-[#5F6A8C] text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Strategy parameters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Protected configuration values</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Sensitive integrations</span>
                </li>
              </ul>
            </div>

            {/* New: NFT & Gaming */}
            <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 p-8">
              <h3 className="text-2xl font-bold text-[#263453] mb-4">
                NFT & Gaming
              </h3>
              <p className="text-[#5F6A8C] mb-4">
                Create immersive experiences with hidden content and timed
                reveals.
              </p>
              <ul className="text-[#5F6A8C] text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Hidden traits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Unlockable content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Time-based reveals</span>
                </li>
              </ul>
            </div>

            {/* New: Enterprise & Teams */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
              <h3 className="text-2xl font-bold text-[#263453] mb-4">
                Enterprise & Teams
              </h3>
              <p className="text-[#5F6A8C] mb-4">
                Securely manage credentials and access-controlled documents.
              </p>
              <ul className="text-[#5F6A8C] text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>API keys</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Credentials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5F6A8C] mr-2">•</span>
                  <span>Access-controlled documents</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="mb-32 scroll-mt-20">
          <h2
            className="font-sora text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0768EB] to-[#08C4CE] bg-clip-text text-transparent"
            style={{
              fontFamily: "Sora, sans-serif",
            }}
          >
            Security
          </h2>

          <div className="space-y-8">
            {/* Military-Grade Encryption */}
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 hover:border-blue-300 hover:shadow-md transition-all duration-200">
              <h3 className="text-2xl font-bold text-[#263453] mb-4">
                Military-Grade Encryption
              </h3>
              <div className="text-[#5F6A8C]">
                <p>
                  Our FHE implementation uses lattice-based cryptography that's
                  quantum-resistant and proven secure.
                </p>
              </div>
            </div>

            {/* End-to-end encryption */}
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 hover:border-blue-300 hover:shadow-md transition-all duration-200">
              <h3 className="text-2xl font-bold text-[#263453] mb-4">
                End-to-End Encryption
              </h3>
              <div className="text-[#5F6A8C]">
                <p>
                  Data is encrypted client-side before reaching the blockchain,
                  ensuring only intended recipients can decrypt.
                </p>
              </div>
            </div>

            {/* On-chain permission enforcement */}
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 hover:border-blue-300 hover:shadow-md transition-all duration-200">
              <h3 className="text-2xl font-bold text-[#263453] mb-4">
                On-Chain Permission Enforcement
              </h3>
              <div className="text-[#5F6A8C]">
                <p>
                  Access rules are codified in smart contracts and enforced
                  autonomously, eliminating human intervention.
                </p>
              </div>
            </div>

            {/* No plaintext storage */}
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 hover:border-blue-300 hover:shadow-md transition-all duration-200">
              <h3 className="text-2xl font-bold text-[#263453] mb-4">
                No Plaintext Storage
              </h3>
              <div className="text-[#5F6A8C]">
                <p>
                  Sensitive data is never stored unencrypted — not in databases,
                  logs, or memory — at any point.
                </p>
              </div>
            </div>

            {/* Tested smart contracts */}
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 hover:border-blue-300 hover:shadow-md transition-all duration-200">
              <h3 className="text-2xl font-bold text-[#263453] mb-4">
                Tested Smart Contracts
              </h3>
              <div className="text-[#5F6A8C]">
                <p>
                  Rigorous auditing, formal verification, and comprehensive test
                  suites ensure contract security and reliability.
                </p>
              </div>
            </div>

            {/* Minimal trusted assumptions */}
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 hover:border-blue-300 hover:shadow-md transition-all duration-200">
              <h3 className="text-2xl font-bold text-[#263453] mb-4">
                Minimal Trusted Assumptions
              </h3>
              <div className="text-[#5F6A8C]">
                <p>
                  Designed with a zero-trust philosophy. If you don't have
                  access, you mathematically cannot see the data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Docs Section */}
        <section id="docs" className="mb-32 scroll-mt-20">
          <h2
            className="font-sora text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0768EB] to-[#08C4CE] bg-clip-text text-transparent"
            style={{
              fontFamily: "Sora, sans-serif",
            }}
          >
            CipherGate Documentation
          </h2>
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <p className="text-gray-600 text-[20px] mb-4">
              Access our comprehensive documentation for developers and users.
            </p>
            <button className="text-[20px] text-blue-600 font-semibold hover:text-blue-700">
              📖 Read Documentation →
            </button>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-32 scroll-mt-20">
          <h2
            className="font-sora text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0768EB] to-[#08C4CE] bg-clip-text text-transparent"
            style={{
              fontFamily: "Sora, sans-serif",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                What is Fully Homomorphic Encryption?
              </h3>
              <p className="text-gray-600">
                FHE allows computations on encrypted data without decrypting it
                first, ensuring data privacy throughout processing.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                How does Zama's technology work?
              </h3>
              <p className="text-gray-600">
                Zama provides open-source FHE tools that enable
                privacy-preserving applications across blockchain and AI.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Does CipherGate store my secrets?
              </h3>
              <p className="text-gray-600">
                No. CipherGate only manages encrypted data and access rules.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Can anyone see the encrypted data?
              </h3>
              <p className="text-gray-600">
                Yes - but without permission, it's useless and impossible.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Do I need a backend?
              </h3>
              <p className="text-gray-600">
                No. CipherGate is fully on-chain and non-custodial.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Is CipherGate open-source?
              </h3>
              <p className="text-gray-600">
                Yes. Transparency is core to security.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Replace the old footer with the new Footer component */}
      {/* <Footer
        scrollToSection={function (id: string): void {
          throw new Error("Function not implemented.");
        }}
      /> */}

      {/* ConnectWallet Modal */}
      <ConnectWallet isOpen={isConnectWalletOpen} onClose={closeConnectWallet} />
    </div>
  );
}
