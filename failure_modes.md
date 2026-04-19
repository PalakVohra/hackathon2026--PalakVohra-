# Failure Modes & Handling

## 1. OpenAI API Failure / Slow Response

* **Problem:** AI call takes too long or fails
* **Handling:** Fallback to rule-based logic
* **Result:** System still responds instantly

---

## 2. Order Not Found

* **Problem:** Invalid order ID in ticket
* **Handling:** Escalate ticket
* **Result:** Human intervention triggered

---

## 3. Customer Not Found

* **Problem:** Missing user data
* **Handling:** Escalate with logs
* **Result:** Avoids incorrect resolution

---

## 4. Tool Failure (API error)

* **Problem:** getOrder / refund fails
* **Handling:** Retry + fallback to null
* **Result:** Escalation if retry fails

---

## 5. Unknown Intent

* **Problem:** Message unclear
* **Handling:** Default to escalation
* **Result:** Safe handling

---
