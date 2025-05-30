
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-purple-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="w-8 h-8" />
            <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/">
              <Button variant="ghost" className="text-purple-700 hover:text-purple-800">
                Accueil
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="ghost" className="text-purple-700 hover:text-purple-800">
                Projets
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="ghost" className="text-purple-700 hover:text-purple-800">
                Blog
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
