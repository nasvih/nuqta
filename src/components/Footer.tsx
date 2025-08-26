import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { content, isRTL } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/+919539966671?text=مرحبا، أود الاستفسار عن خدماتكم الرقمية', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'pricing', href: '#pricing' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'faq', href: '#faq' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo.svg" 
                  alt="Nuqta Digital Logo" 
                  className="h-12 w-12"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/logo.png';
                  }}
                />
                <div>
                  <h3 
                    className="text-xl font-bold"
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  >
                    {content.hero.title}
                  </h3>
                </div>
              </div>
              
              <p 
                className="text-gray-300 leading-relaxed"
                style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
              >
                {content.footer.tagline}
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle size={20} />
                </button>
                
                <a
                  href="https://instagram.com/nuqta_digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-colors"
                  title="Instagram"
                >
                  <Instagram size={20} />
                </a>
                
                <a
                  href="https://business.google.com/nuqta-digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-colors"
                  title="Google Business"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h4 
                className="text-lg font-bold"
                style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
              >
                {content.footer.quickLinks}
              </h4>
              
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors"
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {content.nav[link.key as keyof typeof content.nav]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h4 
                className="text-lg font-bold"
                style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
              >
                {content.footer.contact}
              </h4>
              
              <div className="space-y-4">
                {/* Address */}
                <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                  <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                  <span 
                    className="text-gray-300"
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  >
                    {content.contact.info.address}
                  </span>
                </div>

                {/* Hours */}
                <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                  <Clock size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                  <span 
                    className="text-gray-300"
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  >
                    {content.contact.info.hours}
                  </span>
                </div>

                {/* Phone */}
                <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                  <Phone size={18} className="text-green-400 mt-1 flex-shrink-0" />
                  <a 
                    href={`tel:${content.contact.info.phone}`}
                    className="text-gray-300 hover:text-white transition-colors"
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  >
                    {content.contact.info.phone}
                  </a>
                </div>

                {/* Email */}
                <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                  <Mail size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                  <a 
                    href={`mailto:${content.contact.info.email}`}
                    className="text-gray-300 hover:text-white transition-colors"
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  >
                    {content.contact.info.email}
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h4 
                className="text-lg font-bold"
                style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
              >
                {isRTL ? 'جاهز للانطلاق؟' : 'Ready to Launch?'}
              </h4>
              
              <p 
                className="text-gray-300"
                style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
              >
                {isRTL ? 'لنصنع حضورك الرقمي اليوم' : "Let's build your digital presence today"}
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 transform hover:scale-105"
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {content.buttons.whatsapp}
                </button>
                
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 transform hover:scale-105"
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {content.buttons.contactUs}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`border-t border-gray-700 mt-12 pt-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p 
                className="text-gray-400"
                style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
              >
                {content.footer.copyright}
              </p>
              
              <div className="flex space-x-6">
                <button 
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {content.footer.privacy}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;