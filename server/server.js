import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { runAgent } from "./agent.js";

dotenv.config();
console.log("API KEY:", process.env.OPENAI_API_KEY);
const app = express();
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Health check
app.get("/", (req, res) => {
  res.send(" Autonomous Agent Server Running");
});

// Run agent
app.post("/run-agent", async (req, res) => {
  try {
    const { ticket } = req.body;

    if (!ticket) {
      return res.status(400).json({ error: "Ticket is required" });
    }

    const result = await runAgent(ticket);

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});