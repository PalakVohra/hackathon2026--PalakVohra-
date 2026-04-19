# 🧠 Autonomous Support Resolution Agent

An AI-powered system that automatically processes customer support tickets, decides actions (resolve/escalate), and maintains full audit logs.

---

## 🚀 Problem Statement

Modern platforms receive thousands of repetitive support tickets daily.  
Most of them are:
- Refund requests
- Order status queries
- Policy clarifications

These are often handled manually, leading to:
- ❌ Delays
- ❌ High operational cost
- ❌ Inconsistent decisions

---

## 💡 Solution

We built an **Autonomous Support Agent** that:

1. 📥 Ingests support tickets  
2. 🔍 Extracts relevant information (order ID, intent)  
3. 📚 Checks policies (knowledge base)  
4. 🧠 Uses AI to decide actions  
5. ⚖️ Applies fallback logic when AI fails  
6. 💰 Resolves (e.g., refund) OR escalates  
7. 📝 Logs every step for auditability  

---

## 🏗️ Architecture


---

## ⚙️ Features

### ✅ Autonomous Decision Making
- Uses AI to decide action
- Falls back to rule-based logic if AI fails

### 🔁 Retry Mechanism
- Handles service failures (e.g., order service timeout)
- Retries before escalation

### 🛡️ Safe Fallback
- Ensures no ticket fails silently
- Always resolves or escalates

### 📊 Audit Logging
- Logs every step:
  - Extraction
  - Policy check
  - Decision
  - Final action

### 🎯 Confidence-Based Escalation
- Low-confidence decisions are escalated automatically

### 🎨 Interactive UI
- Displays results in clean cards
- Shows status (Resolved / Escalated)
- Expandable logs
- Summary metrics

---

## 🧪 Example Output

| Ticket | Action | Reason |
|------|--------|--------|
| T1 | ✅ Resolved | Refund issued |
| T2 | ⚠️ Escalated | Low confidence |
| T3 | ❌ Escalated | Order not found |

---

## 📁 Project Structure


---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express  
- **Frontend:** HTML, CSS, JavaScript  
- **AI:** OpenAI API  
- **Environment:** dotenv  

---

## ▶️ How to Run

### 1. Install dependencies
### 2. Add API key
Create `.env` file:

### 3. Start server

### 4. Open UI


Click **Run Agent** to process tickets.

---

## 🔄 Flow of Execution

1. Ticket received  
2. Order ID extracted  
3. Customer & order fetched  
4. Policy checked  
5. Refund eligibility evaluated  
6. AI decision OR fallback logic  
7. Action executed:
   - Refund → resolved  
   - Not eligible → escalated  
   - Error → safe escalation  
8. Logs generated  

---

## 🧠 Key Highlights

- Hybrid AI + Rule-based system  
- Fault-tolerant design  
- Real-world production thinking  
- Fully transparent decision-making  

---

## 🚀 Future Improvements

- Real-time ticket ingestion (Kafka / queues)  
- Database integration (MongoDB / PostgreSQL)  
- Advanced NLP for classification  
- Multi-language support  
- Admin dashboard  

---

## 🏆 Why This Stands Out

Unlike basic chatbots, this system:

- Takes **actions**, not just responses  
- Handles **uncertainty intelligently**  
- Ensures **no failure cases**  
- Maintains **full auditability**  

---

## 👨‍💻 Author

Built as part of an **Agentic AI Hackathon Project**

---

## 📌 License

MIT License