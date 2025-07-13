import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export default function Hero() {
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
      
      {/* Enhanced Floating elements with more variety */}
      <div className="absolute top-20 left-10 w-20 h-20 gradient-primary rounded-full animate-float opacity-20 blur-sm" />
      <div className="absolute bottom-20 right-10 w-16 h-16 gradient-secondary rounded-full animate-float opacity-20 blur-sm" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 gradient-accent rounded-full animate-float opacity-20 blur-sm" style={{ animationDelay: '2s' }} />
      <div className="absolute top-32 right-1/4 w-8 h-8 gradient-success rounded-full animate-bounce-gentle opacity-30" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-1/3 w-14 h-14 gradient-primary rounded-full animate-float opacity-15 blur-sm" style={{ animationDelay: '1.5s' }} />

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
