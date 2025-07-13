import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/api/resume';
    link.download = 'Binit_Deb_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-background to-cyan-500/10 dark:from-violet-500/20 dark:via-background dark:to-cyan-500/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent" />
      
      {/* Enhanced Floating elements with mouse tracking */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 gradient-primary rounded-full animate-float opacity-20 blur-sm"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-16 h-16 gradient-secondary rounded-full animate-float opacity-20 blur-sm"
        animate={{
          x: mousePosition.x * -0.01,
          y: mousePosition.y * -0.01,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ animationDelay: '1s' }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-12 h-12 gradient-accent rounded-full animate-float opacity-20 blur-sm"
        animate={{
          x: mousePosition.x * 0.015,
          y: mousePosition.y * -0.015,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        style={{ animationDelay: '2s' }}
      />
      <motion.div 
        className="absolute top-32 right-1/4 w-8 h-8 gradient-success rounded-full animate-bounce-gentle opacity-30"
        animate={{
          x: mousePosition.x * -0.025,
          y: mousePosition.y * 0.025,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        style={{ animationDelay: '0.5s' }}
      />
      <motion.div 
        className="absolute bottom-32 left-1/3 w-14 h-14 gradient-primary rounded-full animate-float opacity-15 blur-sm"
        animate={{
          x: mousePosition.x * 0.008,
          y: mousePosition.y * -0.008,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 25 }}
        style={{ animationDelay: '1.5s' }}
      />
      
      {/* Additional mouse-following elements */}
      <motion.div 
        className="absolute top-1/4 right-1/3 w-6 h-6 gradient-accent rounded-full opacity-40 blur-sm"
        animate={{
          x: mousePosition.x * 0.03,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/2 w-10 h-10 gradient-secondary rounded-full opacity-25 blur-sm"
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * 0.03,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 15 }}
      />

      {/* Mouse-following particles behind text */}
      <motion.div 
        className="absolute w-4 h-4 bg-primary/30 rounded-full blur-sm"
        animate={{
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      />
      <motion.div 
        className="absolute w-3 h-3 bg-violet-500/40 rounded-full blur-sm"
        animate={{
          x: mousePosition.x * 0.04,
          y: mousePosition.y * 0.04,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, delay: 0.1 }}
      />
      <motion.div 
        className="absolute w-2 h-2 bg-cyan-500/50 rounded-full blur-sm"
        animate={{
          x: mousePosition.x * 0.06,
          y: mousePosition.y * 0.06,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 15, delay: 0.2 }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className="text-gradient animate-glow">Binit Deb</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium"
          >
            Full Stack Developer & Tech Enthusiast
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Analytical professional equipped with technical expertise and strong critical thinking skills. 
            Approaches challenges with a positive attitude and determination to succeed.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="gradient-primary text-white hover:opacity-90 transform hover:scale-105 transition-all duration-300 hover-lift shadow-lg border-0"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="glass-effect hover:bg-primary/10 dark:hover:bg-primary/20 transform hover:scale-105 transition-all duration-300 hover-lift border-primary/30 text-foreground"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
}
