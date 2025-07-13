import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb, 
  SiMysql,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress
} from "react-icons/si";

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const technicalSkills = [
    { name: "JavaScript & React", level: 90, color: "bg-blue-500" },
    { name: "Node.js & Express", level: 85, color: "bg-green-500" },
    { name: "Next.js & Modern Frameworks", level: 85, color: "bg-cyan-500" },
    { name: "Python & Data Structures", level: 80, color: "bg-violet-500" },
    { name: "Database Management", level: 75, color: "bg-yellow-500" },
    { name: "TypeScript", level: 70, color: "bg-blue-600" },
  ];

  const technologies = [
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
    { name: "Python", icon: SiPython, color: "text-yellow-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "MySQL", icon: SiMysql, color: "text-orange-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Express", icon: SiExpress, color: "text-foreground" },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="skill-item"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <Progress value={isVisible ? skill.level : 0} className="h-2" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="glass-effect hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 hover-lift">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <tech.icon className={`text-2xl ${tech.color} animate-bounce-gentle`} />
                        <span className="font-medium">{tech.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
