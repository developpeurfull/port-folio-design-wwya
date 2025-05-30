
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden pt-20">
      {/* Image d'illustration en arrière-plan */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <img 
          src="/lovable-uploads/d4752443-ea06-4e1f-bdf9-2d01dfc30f3e.png" 
          alt="Femme afro travaillant sur ordinateur" 
          className="w-auto h-[70%] object-contain"
        />
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Créatrice Digital
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            Designer & Développeuse Full-Stack
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
            Je transforme vos idées en expériences digitales exceptionnelles. 
            Spécialisée dans la création d'interfaces modernes et de solutions web innovantes 
            qui allient esthétique et performance.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Mail className="mr-2 h-5 w-5" />
              Me Contacter
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-300 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 text-purple-700">
              <Download className="mr-2 h-5 w-5" />
              Télécharger CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in [animation-delay:0.8s] opacity-0 [animation-fill-mode:forwards]">
            <a href="#" className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-purple-50 border border-purple-100">
              <Github className="h-6 w-6 text-gray-700 hover:text-purple-600" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-pink-50 border border-pink-100">
              <Linkedin className="h-6 w-6 text-gray-700 hover:text-pink-600" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-orange-50 border border-orange-100">
              <Mail className="h-6 w-6 text-gray-700 hover:text-orange-600" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
