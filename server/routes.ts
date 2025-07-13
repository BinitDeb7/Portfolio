import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // Save to storage
      const contact = await storage.createContact(contactData);
      
      // Send email using Nodemailer
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || 'binitdeb5396@gmail.com',
          pass: process.env.EMAIL_PASS || process.env.EMAIL_APP_PASSWORD || 'your-app-password'
        }
      });

      const mailOptions = {
        from: contactData.email,
        to: 'binitdeb5396@gmail.com',
        subject: `Portfolio Contact: ${contactData.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${contactData.message}</p>
        `
      };

      await transporter.sendMail(mailOptions);
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again or contact directly at binitdeb5396@gmail.com" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    const resumePath = path.join(process.cwd(), "client/public/resume.pdf");
    res.download(resumePath, "Binit_Deb_Resume.pdf", (err) => {
      if (err) {
        console.error('Resume download error:', err);
        res.status(404).json({ message: "Resume not found" });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
