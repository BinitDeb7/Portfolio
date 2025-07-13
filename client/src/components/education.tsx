import { GraduationCap, Briefcase, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resume-data";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Education & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and professional experience in computer science and web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      {edu.location} • {edu.duration}
                    </p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {index === 0 ? "Currently Pursuing" : "Completed"}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              Experience
            </h3>
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.location} • {exp.duration}
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {resumeData.certifications.map((cert, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-primary font-medium mb-1">
                    {cert.organization}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {cert.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}