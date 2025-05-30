
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroIllustration from './HeroIllustration';
import Logo from './Logo';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Logo en haut */}
          <div className="flex justify-center mb-8">
            <Logo className="w-16 h-16" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div className="text-center lg:text-left">
              {/* Main heading */}
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-6 animate-fade-in">
                Créatrice Digital
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
                Designer & Développeuse Full-Stack
              </p>
              
              {/* Description */}
              <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
                Je transforme vos idées en expériences digitales exceptionnelles. 
                Spécialisée dans la création d'interfaces modernes et de solutions web innovantes 
                qui allient esthétique et performance.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16 animate-fade-in [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
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
              <div className="flex justify-center lg:justify-start gap-6 animate-fade-in [animation-delay:0.8s] opacity-0 [animation-fill-mode:forwards]">
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

            {/* Right column - Illustration */}
            <div className="flex justify-center lg:justify-end animate-fade-in [animation-delay:1s] opacity-0 [animation-fill-mode:forwards]">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-orange-400/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <HeroIllustration />
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-purple-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
