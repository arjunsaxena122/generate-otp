# 📌 generate-otp

A simple and lightweight OTP (One-Time Password) generator for Node.js.  
Generate secure numeric OTPs with ease! 🔐

---

## 🚀 Features

✔ **Lightweight & Fast** – Minimal dependencies, high performance.  
✔ **Custom Length Support** – Generate OTPs of any length.  
✔ **Easy to Use** – Just one function call to generate an OTP.

---

## 📖 Table of Contents

- [Installation](#installation)
- [Usage](#usage)

---

## 📦 Installation

Install the package via **npm**:

```bash
npm install otp-genius
```

---

## 🔥 Usage

**Import the package and generate an OTP:**

```js
import generateOtp from "otp-genius";

// Generate a 6-digit OTP

console.log(`Your OTP is: ${generateOtp.numeric(6)}`);
console.log(`Your OTP is: ${generateOtp.lowAplha(6)}`);
console.log(`Your OTP is: ${generateOtp.capsAlpha(6)}`);
console.log(`Your OTP is: ${generateOtp.lowCapsAplha(6)}`);
console.log(`Your OTP is: ${generateOtp.lowAplhaNumeric(6)}`);
console.log(`Your OTP is: ${generateOtp.capsAplhaNumeric(6)}`);
```
