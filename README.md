# 🔐 CipherGate

**Encrypted Conditional Access & Secret Logic Engine (FHEVM Demo App)**

> *Smart contracts that enforce access rules without ever knowing the data, the rule, or the outcome — unless cryptographically permitted.*

---

## 🚀 Overview

**CipherGate** is an end-to-end demo application built on **Zama’s FHEVM** that showcases how **Fully Homomorphic Encryption** enables  *true on-chain privacy-preserving access control* .

Unlike traditional smart contracts where:

* Access rules are public
* Conditions are transparent
* Sensitive data leaks through state or events

CipherGate ensures:

* **All sensitive data remains encrypted on-chain**
* **Access decisions are computed homomorphically**
* **Secrets are revealed only when encrypted conditions evaluate to true**

This project is designed as:

* A **reference implementation** for FHE-based access control
* A **developer primitive** reusable across DeFi, DAOs, identity, and data marketplaces
* A **judge-friendly educational demo** of FHEVM’s capabilities

---

## 🧠 Why FHE?

CipherGate demonstrates a class of applications that are  **impossible to build securely without FHE** .

| Traditional Smart Contracts     | CipherGate (FHEVM)        |
| ------------------------------- | ------------------------- |
| Conditions are public           | Conditions are encrypted  |
| Access logic is transparent     | Access logic is private   |
| Secrets leak via storage/events | Secrets remain encrypted  |
| Trust required in admins        | Cryptographic enforcement |

The contract:

* Never sees user attributes
* Never sees access thresholds
* Never sees access decisions

Yet it  **enforces rules correctly** .

---

## ✨ Core Features

* 🔐 Encrypted secret storage
* 🔑 Encrypted access rules (threshold-based)
* 👤 Encrypted user attributes
* 🧠 Homomorphic access evaluation
* 🔓 Conditional secret reveal
* ⏱ One-time and reusable secrets

---

## 🏗 Architecture

```
Frontend (Client-side Encryption)
        │
        ▼
CipherGate.sol (FHEVM)
        │
        ▼
Encrypted Computation & Enforcement
```

### Smart Contract Responsibilities

* Store encrypted secrets
* Store encrypted rules
* Evaluate encrypted conditions
* Enforce access via `FHE.req`

### Frontend Responsibilities

* Encrypt inputs before submission
* Pass encrypted values to contracts
* Decrypt outputs locally

---

## 🔄 End-to-End Flow

1. **Admin encrypts and stores a secret**
2. **Admin defines encrypted access rules**
3. **Admin assigns encrypted attributes to users**
4. **User requests access (encrypted evaluation)**
5. **If allowed, user decrypts secret locally**

At no point is sensitive data revealed on-chain.

---

## 🧪 Tests

The test suite validates:

* Correct encrypted computation
* Access enforcement correctness
* One-time reveal protection
* Absence of plaintext leaks

---

## 📚 Documentation

* `architecture.md` – system design
* `threat-model.md` – security & privacy guarantees
* `fhe-explainer.md` – how FHE is used in CipherGate

---

## 🏆 Builder Track Alignment

This submission satisfies all Builder Track requirements:

* ✅ Smart contracts using FHEVM
* ✅ End-to-end demo application
* ✅ Frontend with client-side encryption
* ✅ Comprehensive tests
* ✅ Clear documentation

CipherGate demonstrates a **real, reusable privacy primitive** — not a toy example.

---

## 🔗 Tech Stack

* Solidity (FHEVM)
* Zama FHE Library
* Hardhat
* Next.js + TypeScript
* FHE client SDK

---

## 📜 License

MIT

---

# 🔐 Threat Model & Security Guarantees

## 🎯 Threat Model Goals

CipherGate is designed to defend against:

* Curious validators
* Malicious contract observers
* Frontend compromise (partial)
* Unauthorized users

---

## 🛡 Assets Protected

* Secret values
* User attributes
* Access thresholds
* Access decisions

All protected assets remain  **encrypted on-chain at all times** .

---

## 👀 Adversary Capabilities

An attacker may:

* Read all on-chain storage
* Observe all transactions
* Monitor events
* Call public functions

An attacker  **cannot** :

* Decrypt encrypted values
* Infer access decisions
* Bypass `FHE.req` gating

---

## 🔒 Security Guarantees

| Property         | Guarantee                  |
| ---------------- | -------------------------- |
| Confidentiality  | Enforced by FHE            |
| Integrity        | Enforced by contract logic |
| Access Control   | Cryptographically enforced |
| One-Time Secrets | State + FHE enforced       |

---

## 🚫 Explicit Non-Goals

* CipherGate does not hide transaction metadata
* CipherGate does not prevent traffic analysis
* CipherGate assumes secure client-side key handling

---

# 🎨 High-Fidelity Frontend UI Design

## 🖥 Visual Style

* Dark mode, privacy-first aesthetic
* Minimalist layout
* Subtle encryption animations

Color Palette:

* Background: #0B0F14
* Primary: #4F46E5 (Indigo)
* Accent: #22D3EE (Cyan)
* Success: #22C55E
* Error: #EF4444

---

## 🧭 Main Screens

### 1️⃣ Dashboard

* List of secrets
* Status: Locked / Accessible / Revealed
* Rule summary (no values shown)

### 2️⃣ Create Secret (Admin)

* Input: Secret value
* Toggle: One-time / Reusable
* Encrypt → Store

### 3️⃣ Rule Builder (Admin)

* Slider: Threshold (abstracted)
* Role labels (Viewer, Editor, Admin)
* Encrypted preview indicator

### 4️⃣ Assign Attributes (Admin)

* Wallet address input
* Attribute slider
* Encrypted assignment confirmation

### 5️⃣ Access Request (User)

* Request access button
* Animated "Encrypted Evaluation" step

### 6️⃣ Reveal Screen

* Success animation
* Decrypted secret display
* One-time warning if applicable

---

## 🧠 UX Education Elements

* Inline tooltips: "This value is encrypted"
* Step-by-step encryption flow diagram
* Status badges: Encrypted / Evaluated / Revealed

---

## 🏁 Final Note

CipherGate is intentionally designed to feel like a  **real product** , not a hackathon prototype.

It demonstrates:

* Correct FHE usage
* Strong privacy guarantees
* Clear user experience
* Reusable developer patterns

> *CipherGate shows what becomes possible when smart contracts can compute without seeing.*
>
