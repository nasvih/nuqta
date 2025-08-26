import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Portfolio: React.FC = () => {
  const { content, isRTL } = useLanguage();

  // Portfolio items with placeholder data
  const portfolioItems = [
    {
      title: isRTL ? 'مطعم الأصالة' : 'Asala Restaurant',
      category: isRTL ? 'موقع + منيو رقمي' : 'Website + Digital Menu',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'موقع احترافي مع منيو رقمي تفاعلي' : 'Professional website with interactive digital menu'
    },
    {
      title: isRTL ? 'متجر الموضة' : 'Fashion Store',
      category: isRTL ? 'تصاميم رقمية' : 'Digital Designs',
      image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'تصاميم إنستغرام احترافية' : 'Professional Instagram designs'
    },
    {
      title: isRTL ? 'شركة الخدمات' : 'Services Company',
      category: isRTL ? 'موقع شركة' : 'Company Website',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'موقع شركة مع ملف Google Business' : 'Company website with Google Business profile'
    },
    {
      title: isRTL ? 'مقهى الثقافة' : 'Culture Cafe',
      category: isRTL ? 'منيو + إعلانات' : 'Menu + Ads',
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'منيو رقمي مع حملات ميتا' : 'Digital menu with Meta campaigns'
    },
    {
      title: isRTL ? 'عيادة طبية' : 'Medical Clinic',
      category: isRTL ? 'موقع + Google Business' : 'Website + Google Business',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'موقع عيادة مع ملف أعمال محسن' : 'Clinic website with optimized business profile'
    },
    {
      title: isRTL ? 'متجر إلكترونيات' : 'Electronics Store',
      category: isRTL ? 'تصاميم + إعلانات' : 'Designs + Ads',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'تصاميم وحملات إعلانية فعّالة' : 'Effective designs and ad campaigns'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.portfolio.title}
            </h2>
            <p 
              className="text-xl text-navy-600 max-w-3xl mx-auto"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.portfolio.subtitle}
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* View Link */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <ExternalLink size={16} className="text-navy-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 
                      className="text-xl font-bold text-navy-900 mb-2"
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    
                    <div className="text-primary-600 font-semibold text-sm mb-3">
                      {item.category}
                    </div>
                    
                    <p 
                      className="text-navy-600 text-sm"
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.buttons.viewWork}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;