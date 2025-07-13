// EmailJS configuration for client-side email sending
export const emailjsConfig = {
  serviceId: process.env.VITE_EMAILJS_SERVICE_ID || "service_default",
  templateId: process.env.VITE_EMAILJS_TEMPLATE_ID || "template_default",
  publicKey: process.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key"
};

// Note: This is a fallback client-side implementation
// The primary email functionality is handled server-side with Nodemailer
