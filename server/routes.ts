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
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: contactData.email,
        subject: `Portfolio Contact: ${contactData.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">New Contact Form Submission</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${contactData.name}</p>
              <p><strong>Email:</strong> ${contactData.email}</p>
              <p><strong>Subject:</strong> ${contactData.subject}</p>
            </div>
            <div style="background: #ffffff; padding: 20px; border-left: 4px solid #8b5cf6; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #6b7280;">${contactData.message}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="color: #9ca3af; font-size: 12px;">This message was sent from your portfolio website contact form.</p>
          </div>
        `
      };

      if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
        await transporter.sendMail(mailOptions);
      } else {
        throw new Error('Email configuration missing');
      }
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error('Contact form error:', error);
      
      // More specific error handling
      if (error instanceof Error) {
        if (error.message.includes('Invalid login') || error.message.includes('Application-specific password')) {
          console.error('Gmail authentication failed. Please check EMAIL_USER and EMAIL_APP_PASSWORD environment variables.');
          res.status(500).json({ 
            success: false, 
            message: "Email service temporarily unavailable. Please contact directly at binitdeb5396@gmail.com" 
          });
        } else if (error.message.includes('Email configuration missing')) {
          console.error('Email environment variables not configured.');
          res.status(500).json({ 
            success: false, 
            message: "Email service not configured. Please contact directly at binitdeb5396@gmail.com" 
          });
        } else {
          res.status(500).json({ 
            success: false, 
            message: "Failed to send message. Please try again or contact directly at binitdeb5396@gmail.com" 
          });
        }
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again or contact directly at binitdeb5396@gmail.com" 
        });
      }
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
