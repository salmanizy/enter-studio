import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/LogoNav.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: { en: 'Home', id: 'Beranda' } },
    { path: '/portfolio', label: { en: 'Portfolio', id: 'Portofolio' } },
    { path: '/about', label: { en: 'About Us', id: 'Tentang Kami' } }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/70 backdrop-blur-sm shadow-lg' : 'bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group" onClick={() => window.scrollTo(0, 0)}>
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                onClick={() => window.scrollTo(0, 0)}
                key={link.path}
                to={link.path}
                className={`text-sm font-medium smooth-transition relative group ${
                  isActive(link.path)
                    ? 'text-secondary'
                    : 'text-primary-foreground hover:text-secondary'
                }`}
              >
                {t(link.label)}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-primary-foreground hover:text-secondary hover:bg-secondary/10"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'en' ? 'ID' : 'EN'}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary-foreground hover:text-secondary smooth-transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-secondary/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium smooth-transition ${
                  isActive(link.path)
                    ? 'bg-secondary/20 text-secondary'
                    : 'text-primary-foreground hover:bg-secondary/10 hover:text-secondary'
                }`}
              >
                {t(link.label)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};