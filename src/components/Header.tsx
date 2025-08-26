import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const { content, language, toggleLanguage, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'pricing', href: '#pricing' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'faq', href: '#faq' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/+919539966671?text=مرحبا، أود الاستفسار عن خدماتكم الرقمية', '_blank');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <img 
              src="/logo.svg" 
              alt="Nuqta Digital Logo" 
              className="h-10 w-10"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/logo.png';
              }}
            />
            <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
              <h1 className="text-xl font-bold text-navy-900" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}>
                {content.hero.title}
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className={`flex items-center ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
              {navItems.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-navy-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  >
                    {content.nav[item.key as keyof typeof content.nav]}
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              title={language === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>

            {/* CTA Button */}
            <button
              onClick={handleWhatsApp}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.buttons.whatsapp}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Globe size={18} />
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="py-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-${isRTL ? 'right' : 'left'} px-6 py-3 text-navy-700 hover:bg-gray-50 hover:text-primary-600 transition-colors font-medium`}
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {content.nav[item.key as keyof typeof content.nav]}
                </button>
              ))}
              
              <div className="px-6 py-4 border-t border-gray-100 mt-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-semibold transition-all duration-200"
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {content.buttons.whatsapp}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;