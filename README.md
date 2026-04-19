# 🧠 Autonomous Support Resolution Agent

An AI-powered system that automatically processes customer support tickets, decides actions (resolve/escalate), and maintains full audit logs.

---

## 🚀 Features

* 🎯 Automatic ticket classification (refund, status, cancel, issue)
* ⚡ Fast local decision engine (instant response)
* 🤖 Optional AI-based reasoning using OpenAI
* 🔁 Intelligent fallback system (works even without API key)
* 📜 Full audit logs for every decision
* 📊 Summary dashboard (resolved vs escalated)

---

## 🏗️ Architecture

```
User Ticket → Agent → Decision Engine
                    ↓
        Local Logic (fast)
                    ↓
        AI (optional, async)
                    ↓
        Action (resolve / escalate)
                    ↓
        Logs + UI display
```

---

## 🛠️ Tech Stack

* Node.js (Backend)
* Express.js (API server)
* Vanilla JS + HTML + CSS (Frontend)
* OpenAI API (optional AI reasoning)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/PalakVohra/agentic-ai-support.git
cd agentic-ai-support
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. (Optional) Add OpenAI API Key

Create a `.env` file inside the **server folder**:

```
server/.env
```

Add:

```env
OPENAI_API_KEY=your_api_key_here
```

---

### 4. Run the server

```bash
npm start
```

---

### 5. Open in browser

```text
http://localhost:3000
```

Click **Run Agent** to process tickets.

---

## 🧠 How It Works

1. Extracts order ID from ticket
2. Detects intent (local + AI hybrid)
3. Fetches order & customer data
4. Decides:

   * ✅ Resolve (refund / status / cancel)
   * ⚠️ Escalate (if uncertain or invalid)
5. Logs every step for transparency

---

## ⚡ Important Note

> This system uses a **hybrid approach**:
>
> * Fast rule-based logic for instant response
> * AI reasoning (OpenAI) for smarter classification

👉 The application works **fully even without an API key**.

---

## 📸 Demo Output

* Ticket processing with logs
* Confidence scores
* Resolved vs escalated summary

---

## 🎯 Hackathon Focus

This project demonstrates:

* Agentic decision-making
* Tool usage (order, refund, customer APIs)
* Intelligent escalation
* Observability via logs

---

## 👨‍💻 Author

**Palak Vohra**

---

## 🏁 Final Note

Built as part of an Agentic AI Hackathon — focused on creating a production-ready autonomous support system.

---
