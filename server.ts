import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  userAgent?: string;
}

const contactSubmissions: ContactSubmission[] = [];
// Simple in-memory rate limiting map: ip -> last timestamp
const ipRateLimits = new Map<string, number>();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "1mb" }));

  // API Health Check
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Real Contact Submission Handler
  app.post("/api/contact", (req: Request, res: Response): void => {
    try {
      const { name, email, message, honeypot } = req.body;

      // Anti-bot check
      if (honeypot && honeypot.trim().length > 0) {
        res.status(400).json({
          success: false,
          error: "Spam detected.",
        });
        return;
      }

      // Rate limit check (minimum 5 seconds between submissions per IP)
      const clientIp = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "anonymous";
      const now = Date.now();
      const lastSent = ipRateLimits.get(clientIp);

      if (lastSent && now - lastSent < 5000) {
        res.status(429).json({
          success: false,
          error: "Please wait a moment before sending another message.",
        });
        return;
      }

      // Field presence checks
      if (!name || typeof name !== "string" || name.trim().length === 0) {
        res.status(400).json({
          success: false,
          error: "Please provide your name.",
          field: "name",
        });
        return;
      }

      if (name.trim().length < 2 || name.trim().length > 100) {
        res.status(400).json({
          success: false,
          error: "Name must be between 2 and 100 characters.",
          field: "name",
        });
        return;
      }

      if (!email || typeof email !== "string" || email.trim().length === 0) {
        res.status(400).json({
          success: false,
          error: "Please provide your email address.",
          field: "email",
        });
        return;
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email.trim())) {
        res.status(400).json({
          success: false,
          error: "Please provide a valid email address.",
          field: "email",
        });
        return;
      }

      if (!message || typeof message !== "string" || message.trim().length === 0) {
        res.status(400).json({
          success: false,
          error: "Please enter a message.",
          field: "message",
        });
        return;
      }

      if (message.trim().length < 10) {
        res.status(400).json({
          success: false,
          error: "Message must be at least 10 characters long.",
          field: "message",
        });
        return;
      }

      if (message.trim().length > 3000) {
        res.status(400).json({
          success: false,
          error: "Message cannot exceed 3,000 characters.",
          field: "message",
        });
        return;
      }

      // Check for duplicate submission within last 60 seconds
      const isDuplicate = contactSubmissions.some(
        (sub) =>
          sub.email.toLowerCase() === email.trim().toLowerCase() &&
          sub.message.trim() === message.trim() &&
          Date.now() - new Date(sub.timestamp).getTime() < 60000
      );

      if (isDuplicate) {
        res.status(409).json({
          success: false,
          error: "You have already sent this exact message recently. Thank you!",
        });
        return;
      }

      const newSubmission: ContactSubmission = {
        id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString(),
        userAgent: req.headers["user-agent"],
      };

      contactSubmissions.unshift(newSubmission);
      ipRateLimits.set(clientIp, now);

      console.log(`[Contact Form Received] From: ${newSubmission.name} <${newSubmission.email}> - ID: ${newSubmission.id}`);

      res.status(200).json({
        success: true,
        message: "Your message has been delivered to Jeff. Thank you for reaching out!",
        submissionId: newSubmission.id,
      });
    } catch (err: any) {
      console.error("Error processing contact message:", err);
      res.status(500).json({
        success: false,
        error: "An unexpected error occurred while sending your message. Please try again or email jeffmuriithi89@gmail.com directly.",
      });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
