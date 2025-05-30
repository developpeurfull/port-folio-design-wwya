
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 animate-fade-in">
            Créateur Digital
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            Designer & Développeur Full-Stack
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
            Je transforme vos idées en expériences digitales exceptionnelles. 
            Spécialisé dans la création d'interfaces modernes et de solutions web innovantes.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Mail className="mr-2 h-5 w-5" />
              Me Contacter
            </Button>
            <Button variant="outline" size="lg" className="border-2 hover:bg-gray-50 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Download className="mr-2 h-5 w-5" />
              Télécharger CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16 animate-fade-in [animation-delay:0.8s] opacity-0 [animation-fill-mode:forwards]">
            <a href="#" className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-50">
              <Github className="h-6 w-6 text-gray-700 hover:text-blue-600" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-50">
              <Linkedin className="h-6 w-6 text-gray-700 hover:text-blue-600" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-50">
              <Mail className="h-6 w-6 text-gray-700 hover:text-blue-600" />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
