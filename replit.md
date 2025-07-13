# Portfolio Website

## Overview

This is a modern portfolio website built as a full-stack application showcasing the developer's skills, projects, and experience. The application features a React frontend with a Node.js/Express backend, using PostgreSQL for data storage and Nodemailer for email functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite for development and production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Animations**: Framer Motion for smooth animations and transitions
- **Theme System**: Custom theme provider with dark/light mode support

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Email Service**: Nodemailer with Gmail SMTP configuration
- **Session Management**: Basic session handling with connect-pg-simple
- **Development**: Hot reload with Vite integration in development mode

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and active section highlighting
- **Hero Section**: Animated landing section with floating elements
- **About Section**: Personal information and professional summary
- **Projects Section**: Showcase of key projects with live demos and GitHub links
- **Skills Section**: Technical skills with progress indicators and technology icons
- **Contact Section**: Contact form with real-time validation and submission handling
- **Theme Provider**: Dark/light mode toggle with localStorage persistence

### Backend Components
- **Contact API**: Handles form submissions and email sending
- **Storage Layer**: In-memory storage with interface for database operations
- **User Management**: Basic user schema and operations (prepared for future authentication)
- **Email Service**: Nodemailer configuration for sending contact form emails

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using Zod schemas
   - POST request sent to `/api/contact` endpoint
   - Backend validates data and saves to storage
   - Email sent via Nodemailer to developer's email
   - Success/error response sent back to frontend
   - Toast notification displayed to user

2. **Theme Management**:
   - Theme state managed in React context
   - User preference stored in localStorage
   - CSS variables updated dynamically for theme changes

3. **Animation System**:
   - Intersection Observer API used for scroll-triggered animations
   - Framer Motion handles smooth transitions and micro-interactions

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **UI Components**: Radix UI primitives, Lucide React icons
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Development**: Vite, TypeScript, PostCSS

### Backend Dependencies
- **Server Framework**: Express.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Email**: Nodemailer with Gmail transport
- **Validation**: Zod for schema validation
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Database Schema
- **Users Table**: Basic user structure with username/password (for future authentication)
- **Contacts Table**: Stores contact form submissions with timestamps
- **Migrations**: Drizzle migrations in `/migrations` directory

## Deployment Strategy

### Development Mode
- Vite dev server for frontend hot reload
- tsx for backend TypeScript execution
- Concurrent development with proxy setup
- Replit integration with cartographer plugin

### Production Build
- Frontend: Vite builds optimized React bundle to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Environment variables for database and email configuration
- Static file serving for production frontend assets

### Database Configuration
- PostgreSQL database with Drizzle ORM
- Environment variable `DATABASE_URL` for connection
- Migration system with `drizzle-kit push` command
- Neon Database serverless integration

### Email Configuration
- Gmail SMTP with app-specific password
- Environment variables for email credentials
- Fallback error handling for email failures
- HTML email templates for contact form submissions

The application is designed to be easily deployable on platforms like Replit, Vercel, or similar hosting providers with PostgreSQL database support.