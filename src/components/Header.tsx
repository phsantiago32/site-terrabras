import React, { useState, useEffect } from 'react';
import { Share2, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Terrabrás Já!',
        text: 'A nossa Terra é Rara. O futuro do Brasil não está à venda! Assine a petição.',
        url: window.location.origin,
      }).catch(console.error);
    }
  };

  const navLinks = [
    { name: 'Início', path: '/inicio' },
    { name: 'Dossiê', path: '/dossie' },
    { name: 'Manifesto', path: '/manifesto' },
    { name: 'Lutas', path: '/lutas' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-[60] bg-terra-dark/95 backdrop-blur-sm border-b-2 border-terra-yellow/20">
        <div className="px-4 sm:px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/inicio" className="text-xl sm:text-2xl font-black italic uppercase tracking-tighter text-white flex flex-col leading-none z-50 relative">
            <span>Terra<span className="text-terra-yellow">brás</span></span>
            <span className="text-[10px] sm:text-xs text-terra-yellow/80 tracking-widest mt-1">Nossa terra é rara</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`font-bold text-xs uppercase tracking-widest pb-1 transition-colors ${
                  location.pathname === link.path ? 'text-terra-yellow border-b-2 border-terra-yellow' : 'text-white hover:text-terra-yellow'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 text-white hover:text-terra-yellow transition-colors font-bold text-xs uppercase tracking-widest ml-4"
            >
              <span>Compartilhar</span>
              <Share2 className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile Menu Toggle & Share */}
          <div className="flex md:hidden items-center gap-4 z-50 relative">
            <button onClick={handleShare} className="text-white hover:text-terra-yellow p-2" aria-label="Compartilhar">
              <Share2 className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white hover:text-terra-yellow p-2" 
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-terra-dark z-50 pt-24 px-6 flex flex-col gap-6 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            to={link.path} 
            className={`font-black italic uppercase tracking-tighter text-3xl sm:text-4xl transition-colors ${
              location.pathname === link.path ? 'text-terra-yellow' : 'text-white'
            }`}
          >
            {link.name}
          </Link>
        ))}
        
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
           <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Apoie a causa</p>
           <a href="https://c.org/rHLH5fd6sP" target="_blank" rel="noopener noreferrer" className="bg-terra-yellow text-terra-dark px-6 py-4 font-black text-sm uppercase tracking-widest text-center shadow-[4px_4px_0px_rgba(255,255,255,0.1)]">
             Assinar Petição Agora
           </a>
        </div>
      </div>
    </>
  );
}
