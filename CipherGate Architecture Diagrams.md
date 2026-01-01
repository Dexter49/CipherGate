# 🏗 CipherGate Architecture Diagrams

## 1️⃣ System Architecture (High-Level)

```
┌──────────────┐
│   Frontend   │
│ (Next.js UI) │
└──────┬───────┘
       │ Client-side encryption
       ▼
┌──────────────────────────┐
│     CipherGate.sol       │
│  (Zama FHEVM Contract)   │
│                          │
│ • Encrypted secrets      │
│ • Encrypted rules        │
│ • Encrypted attributes   │
│ • Homomorphic logic      │
└──────┬───────────────────┘
       │ Encrypted output
       ▼
┌──────────────┐
│   Frontend   │
│ Local decrypt│
└──────────────┘
```

---

## 2️⃣ Access Evaluation Flow

```
User Attribute (Encrypted)
        │
        ▼
Encrypted Threshold ──► FHE.ge ──► Encrypted Boolean
                                      │
                                      ▼
                               FHE.req Gate
                                      │
                                      ▼
                             Encrypted Secret
```

---

## 3️⃣ Trust Boundaries

* Frontend: plaintext exists briefly
* Blockchain: **never sees plaintext**
* Validators: observe ciphertext only

---

## 4️⃣ What This Diagram Proves

* End-to-end encryption
* No trusted intermediaries
* Cryptographic access enforcement
