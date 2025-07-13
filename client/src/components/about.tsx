import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MapPin, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resume-data";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-muted/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Professional Summary
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {resumeData.summary}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary mr-2" />
                    <span>{resumeData.personalInfo.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary mr-2" />
                    <span>{resumeData.personalInfo.email}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="sm" asChild className="bg-primary/10 hover:bg-primary/20 border-primary/20">
                    <a href="https://github.com/BinitDeb7" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="bg-primary/10 hover:bg-primary/20 border-primary/20">
                    <a href="https://linkedin.com/in/binitdeb" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="bg-primary/10 hover:bg-primary/20 border-primary/20">
                    <a href="/resume.pdf" download>
                      <Download className="h-4 w-4 mr-2" />
                      Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground group-hover:text-primary transition-colors">
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.technical.slice(0, 6).map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground group-hover:text-primary transition-colors">
                  Quick Facts
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Current Status</p>
                    <p className="font-medium text-foreground">B.Tech Student</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Graduation</p>
                    <p className="font-medium text-foreground">2026</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Focus Area</p>
                    <p className="font-medium text-foreground">Full Stack Development</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Experience</p>
                    <p className="font-medium text-foreground">Internship + Projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
