import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "AI Fitness Trainer",
      description: "A web application using Next.js that leverages AI to provide personalized fitness recommendations and track user progress with advanced data visualization dashboards.",
      features: [
        "AI-powered personalized fitness recommendations",
        "Advanced data visualization dashboards",
        "Real-time activity monitoring with adaptive feedback",
        "Machine learning integration for enhanced accuracy"
      ],
      technologies: ["Next.js", "AI/ML", "Data Visualization", "React"],
      liveUrl: "https://ai-fitness-trainer-zeta.vercel.app/",
      githubUrl: "https://github.com/BinitDeb7",
      colors: {
        primary: "bg-blue-600/20 text-blue-400",
        secondary: "bg-violet-600/20 text-violet-400",
        accent: "bg-green-600/20 text-green-400",
        tertiary: "bg-yellow-600/20 text-yellow-400"
      }
    },
    {
      title: "E-commerce Website",
      description: "A complete e-commerce application with seamless product browsing, secure authentication, shopping cart functionality, and integrated payment processing.",
      features: [
        "Full-stack MERN application with secure authentication",
        "Advanced search capabilities and product filtering",
        "Automated inventory synchronization",
        "Real-time shipment tracking integration"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://fullstack-ecommerce.netlify.app/",
      githubUrl: "https://github.com/BinitDeb7",
      colors: {
        primary: "bg-blue-600/20 text-blue-400",
        secondary: "bg-green-600/20 text-green-400",
        accent: "bg-violet-600/20 text-violet-400",
        tertiary: "bg-yellow-600/20 text-yellow-400"
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-muted/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">KEY FEATURES:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`${
                          techIndex === 0 ? project.colors.primary :
                          techIndex === 1 ? project.colors.secondary :
                          techIndex === 2 ? project.colors.accent :
                          project.colors.tertiary
                        } transition-all duration-300 hover:scale-110`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
