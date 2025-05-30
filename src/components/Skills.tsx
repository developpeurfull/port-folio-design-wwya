
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 85 }
      ]
    },
    {
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 }
      ]
    },
    {
      title: "Design & Tools",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe Creative", level: 85 },
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 75 }
      ]
    }
  ];

  const technologies = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL",
    "Tailwind CSS", "Figma", "Git", "Docker", "AWS", "Vercel",
    "GraphQL", "REST API", "MongoDB", "Express", "Vue.js", "Nuxt.js"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Compétences & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une maîtrise complète de l'écosystème web moderne, 
              du design à la mise en production.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <CardTitle className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        style={{
                          background: `linear-gradient(to right, ${category.color.includes('blue') ? '#3b82f6' : category.color.includes('green') ? '#10b981' : '#8b5cf6'} 0%, ${category.color.includes('blue') ? '#06b6d4' : category.color.includes('green') ? '#34d399' : '#ec4899'} 100%)`
                        }}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies Cloud */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies Maîtrisées</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-300 cursor-default border hover:border-blue-200 hover:shadow-md"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
