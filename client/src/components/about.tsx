import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MapPin, GraduationCap, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Professional Summary</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              Currently pursuing B.Tech in Computer Science & Engineering at Assam Downtown University, 
              I excel both independently and in collaboration with teams, consistently surpassing expectations.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My recent internship at Myjobgrow enhanced my skills in React, Node.js, and modern web development practices. 
              I'm passionate about creating efficient, scalable solutions and staying updated with the latest technology trends.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mr-2" />
                <span>Guwahati, Assam, India</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-primary mr-2" />
                <span>B.Tech CSE (2022-2026)</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/BinitDeb7" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/binitdeb" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:binitdeb5396@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-4 bg-card/50 rounded-r-lg">
                <h4 className="text-lg font-semibold text-primary">Web Development Intern</h4>
                <p className="text-muted-foreground font-medium">Myjobgrow • July 2024 - November 2024</p>
                <ul className="text-muted-foreground mt-2 space-y-1 text-sm">
                  <li>• Developed and maintained web applications using React and JavaScript</li>
                  <li>• Enhanced cross-browser compatibility and user experience</li>
                  <li>• Collaborated with development teams on technical requirements</li>
                  <li>• Contributed to front-end performance improvements</li>
                </ul>
              </div>

              <div className="border-l-4 border-secondary pl-6 py-4 bg-card/50 rounded-r-lg">
                <h4 className="text-lg font-semibold text-secondary">Education</h4>
                <p className="text-muted-foreground font-medium">Assam Downtown University • 2022-2026</p>
                <p className="text-muted-foreground mt-2 text-sm">B.Tech in Computer Science & Engineering</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
