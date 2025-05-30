
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Mon Portfolio
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Créateur d'expériences digitales innovantes. 
                Spécialisé dans le développement web moderne et le design UI/UX.
              </p>
              <p className="text-gray-400 text-sm">
                Basé à Paris, France 🇫🇷
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">À Propos</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Compétences</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projets</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Développement Web</li>
                <li className="text-gray-400">Design UI/UX</li>
                <li className="text-gray-400">Applications Mobile</li>
                <li className="text-gray-400">Consulting Tech</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Mon Portfolio. Fait avec <Heart className="inline h-4 w-4 text-red-400 mx-1" /> et beaucoup de café.
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Développé avec React & Tailwind CSS</span>
              <Button
                onClick={scrollToTop}
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full p-2"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
