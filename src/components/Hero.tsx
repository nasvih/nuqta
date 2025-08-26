import React from 'react';
import { Star, Award, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { content, isRTL } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/+919539966671?text=مرحبا، أود الاستفسار عن خدماتكم الرقمية', '_blank');
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badgeIcons = [Award, Star, Zap];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-amber-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              {/* Logo and Title */}
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <img 
                    src="/logo.svg" 
                    alt="Nuqta Digital Logo" 
                    className="h-16 w-16"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/logo.png';
                    }}
                  />
                </div>
                
                <h1 
                  className="text-4xl lg:text-6xl font-bold text-navy-900 leading-tight"
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {content.hero.title}
                </h1>
                
                <p 
                  className="text-2xl lg:text-3xl text-primary-600 font-semibold"
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {content.hero.subtitle}
                </p>
                
                <p 
                  className="text-xl text-navy-600 font-medium"
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {content.hero.tagline}
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {content.hero.badges.map((badge, index) => {
                  const Icon = badgeIcons[index % badgeIcons.length];
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-gray-100"
                    >
                      <Icon size={16} className="text-primary-600" />
                      <span 
                        className="text-navy-700 font-medium text-sm"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {badge}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToContact}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {content.hero.ctaPrimary}
                </button>
                
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {content.hero.ctaSecondary}
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-amber-100 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Mockup representation */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                      <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                      <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-primary-200 rounded w-2/3"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="space-y-3">
                      <div className="h-4 bg-amber-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/5"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-amber-400 text-white p-4 rounded-2xl shadow-lg animate-bounce">
                <Star size={24} />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-4 rounded-2xl shadow-lg animate-pulse">
                <Award size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;