import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, Twitter, ChevronDown, Code, Globe, Zap } from "lucide-react";
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
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Binit_Deb_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-background to-blue-900/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/10 to-transparent" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,theme(colors.purple.500),transparent)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_0%,theme(colors.blue.500),transparent)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_100%_100%,theme(colors.pink.500),transparent)] opacity-30" />
      </div>
      
      {/* Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Mouse-following glowing orbs */}
      <motion.div 
        className="absolute w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        animate={{
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div 
        className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"
        animate={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 25 }}
      />
      <motion.div 
        className="absolute w-24 h-24 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * -0.02,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 30 }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-12"
        >
          {/* Name with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
                Binit Deb
              </span>
            </h1>
          </motion.div>
          
          {/* Enhanced subtitle with icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Code className="h-8 w-8 text-purple-400" />
              </motion.div>
              <span>Full Stack Developer</span>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Globe className="h-8 w-8 text-blue-400" />
              </motion.div>
            </div>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative web applications and solving complex problems 
              with modern technologies. Turning ideas into reality through clean, efficient code.
            </p>
            
            {/* Tech stack badges */}
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="h-4 w-4 text-yellow-400" />
                <span>React & Node.js</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="h-4 w-4 text-green-400" />
                <span>TypeScript</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="h-4 w-4 text-blue-400" />
                <span>Next.js</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a href="#contact">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get In Touch
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="group relative overflow-hidden border-2 border-purple-500/50 hover:border-purple-500 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleDownloadResume}
          >
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Download Resume
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </motion.div>

        {/* Social media buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-8 mb-16"
        >
          <motion.a
            href="https://github.com/BinitDeb7"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-gray-800/20 to-gray-900/20 hover:from-gray-700/30 hover:to-gray-800/30 border border-gray-500/20 hover:border-gray-400/40 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-8 w-8 text-foreground group-hover:text-purple-400 transition-colors" />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/binitdeb"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-700/20 hover:from-blue-500/30 hover:to-blue-600/30 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-8 w-8 text-foreground group-hover:text-blue-400 transition-colors" />
          </motion.a>
          
          <motion.a
            href="https://twitter.com/BinitDeb7"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-sky-500/20 to-sky-600/20 hover:from-sky-400/30 hover:to-sky-500/30 border border-sky-500/20 hover:border-sky-400/40 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter className="h-8 w-8 text-foreground group-hover:text-sky-400 transition-colors" />
          </motion.a>
          
          <motion.a
            href="mailto:binitdeb5396@gmail.com"
            className="group flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-400/30 hover:to-pink-500/30 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-8 w-8 text-foreground group-hover:text-purple-400 transition-colors" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-muted-foreground cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-3 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}