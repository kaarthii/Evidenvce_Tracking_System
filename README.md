# Evidence Tracking System using Blockchain

This project is a **Blockchain-based Evidence Tracking System** designed to ensure the **integrity, transparency, and security** of digital evidence collected during criminal investigations. By leveraging the **immutability and decentralization** of blockchain, the system provides a tamper-proof chain of custody for all digital evidence, making it suitable for use in legal and forensic applications.

---

## Features

- **Blockchain Ledger** – Stores evidence data with hash-based linkage to ensure immutability.
- **Role-Based Access** – Secure login for investigators, forensic experts, and admin.
- **Evidence Upload** – Upload digital evidence with timestamp and hash generation.
- **Evidence Verification** – Verify the authenticity and integrity of uploaded files.
- **Audit Trail** – Every update is recorded with a timestamp and user identity.
- **Case Management** – Link evidence to specific cases and monitor their lifecycle.

---

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript, Bootstrap  
- **Backend:** Node.js / Express.js (or your backend tech)  
- **Blockchain:** Ethereum (private chain) / Ganache  
- **Smart Contracts:** Solidity  
- **Database:** MongoDB / MySQL  
- **Wallet Integration:** MetaMask  
- **Hashing:** SHA256

---

## System Workflow

1. **User Authentication** – Role-based login using secure credentials.
2. **Add Evidence** – Upload file, generate SHA-256 hash, and store metadata on blockchain.
3. **Smart Contract Execution** – Record file hash, timestamp, and owner details on chain.
4. **Verification** – Anyone with permission can verify hash integrity to check for tampering.
5. **View History** – Track who accessed/updated the evidence and when.

---

## Contributors
- Velayudham Narendhran
- Karthi D
- Mehul A


