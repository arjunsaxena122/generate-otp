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

````bash
npm install generate-otp
````
---

## 🔥 Usage  

**Import the package and generate an OTP:**  

```js
import otpGenerator from 'generate-otp';

// Generate a 6-digit OTP
const otp = otpGenerator(6);

console.log(`Your OTP is: ${otp}`);

```
