import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, Sun, Moon } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Vorteile', href: '#features' },
    { label: 'Ablauf', href: '#how-it-works' },
    { label: 'Preview', href: '#preview' },
    { label: 'Preise', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none">
        <header 
          className={`w-full max-w-[1200px] transition-all duration-300 rounded-full border pointer-events-auto ${
            isScrolled || mobileMenuOpen
              ? 'bg-white/80 dark:bg-[#1E1E2D]/80 backdrop-blur-xl border-gray-200 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/50 py-2' 
              : 'bg-white/60 dark:bg-[#1E1E2D]/60 backdrop-blur-md border-gray-200 dark:border-white/5 py-3'
          }`}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-12">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center cursor-pointer group">
                {/* Red Brand Icon */}
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mr-3 shadow-lg shadow-red-500/20 dark:shadow-red-900/20 group-hover:scale-105 transition-transform">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5 text-white">
                      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                   </svg>
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white hidden sm:block">
                  CanIBuy
                </span>
                <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white sm:hidden">
                  CIB
                </span>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* CTA & Theme Toggle */}
              <div className="hidden md:flex items-center space-x-3">
                 <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <div className="h-6 w-px bg-gray-300 dark:bg-white/10 mx-2"></div>

                <Button variant="ghost" size="sm" className="hidden lg:inline-flex text-gray-700 dark:text-white font-medium hover:text-gray-900 dark:hover:text-gray-200">
                  Web-App Login
                </Button>
                <Button size="sm" className="rounded-full px-6 h-10 shadow-lg shadow-red-500/20">
                  <Smartphone className="w-4 h-4 mr-2" />
                  App laden
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                 <button 
                  onClick={toggleTheme}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {isDark ? <Sun size={22} /> : <Moon size={22} />}
                </button>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white p-1"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 dark:bg-guru-dark/95 backdrop-blur-xl pt-28 px-6 transition-opacity duration-300">
          <div className="flex flex-col space-y-4 text-center max-w-sm mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-3 text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-guru-primary dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-8 space-y-4 flex flex-col items-center w-full">
               <Button variant="outline" className="w-full justify-center border-gray-300 dark:border-white/20 text-gray-900 dark:text-white">
                Web-App Login
              </Button>
              <Button className="w-full justify-center">
                App laden
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};