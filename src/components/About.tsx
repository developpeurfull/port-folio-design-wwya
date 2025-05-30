
import { Code, Palette, Zap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Développement",
      description: "Code propre et performant avec les dernières technologies",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description: "Interfaces intuitives et expériences utilisateur optimales",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Solutions rapides et optimisées pour tous les appareils",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Standards élevés et attention aux détails",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
              À Propos de Moi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionnée par la création d'expériences digitales innovantes, 
              je combine créativité et expertise technique pour donner vie à vos projets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 p-8">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616c28ca9ee?w=400&h=500&fit=crop&crop=face" 
                  alt="Portrait professionnel" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-30"></div>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-700 bg-clip-text text-transparent mb-4">
                  Créatrice d'expériences digitales
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Avec plus de 5 ans d'expérience dans le développement web et le design, 
                  je me spécialise dans la création de solutions digitales qui allient esthétique 
                  moderne et fonctionnalité optimale.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Mon approche combine une compréhension approfondie des besoins utilisateurs 
                  avec les dernières technologies pour créer des expériences mémorables et performantes.
                </p>
              </div>

              {/* Highlights grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="h-6 w-6 text-white" />
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
