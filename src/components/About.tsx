
import { Code, Palette, Zap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Développement",
      description: "Code propre et performant avec les dernières technologies"
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description: "Interfaces intuitives et expériences utilisateur optimales"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Solutions rapides et optimisées pour tous les appareils"
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Standards élevés et attention aux détails"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À Propos de Moi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionné par la création d'expériences digitales innovantes, 
              je combine créativité et expertise technique pour donner vie à vos projets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-8">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                  alt="Portrait professionnel" 
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-30"></div>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Créateur d'expériences digitales
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Avec plus de 5 ans d'expérience dans le développement web et le design, 
                  je spécialise dans la création de solutions digitales qui allient esthétique 
                  moderne et fonctionnalité optimale.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Mon approche combine une compréhension approfondie des besoins utilisateurs 
                  avec les dernières technologies pour créer des expériences memorables et performantes.
                </p>
              </div>

              {/* Highlights grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
                          <item.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
