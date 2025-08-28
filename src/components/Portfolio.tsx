import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Portfolio: React.FC = () => {
  const { content, isRTL } = useLanguage();

  // Portfolio items with your real projects
  const portfolioItems = [
    {
      title: isRTL ? 'موقع نسڤيه التقني' : 'Tech Portfolio',
      category: isRTL ? 'موقع شخصي' : 'Personal Portfolio',
      image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'موقعي الشخصي لعرض خدماتي ومشاريعي' : 'Personal portfolio showcasing services and projects',
      link: 'https://www.nasvih.tech'
    },
    {
      title: isRTL ? 'هيد اند هيل' : 'Heed n Heal',
      category: isRTL ? 'موقع عيادة + تطبيق' : 'Clinic Website + App',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'موقع عيادة مع نظام حجز مواعيد' : 'Clinic website with appointment booking system',
      link: 'https://heednheal.com'
    },
    {
      title: isRTL ? 'واين ديز' : 'Wayndays',
      category: isRTL ? 'موقع أعمال' : 'Business Website',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'موقع أعمال احترافي' : 'Professional business website',
      link: 'https://wayndays.com'
    },
    {
      title: isRTL ? 'بوتشكو' : 'Poochkoo',
      category: isRTL ? 'موقع رعاية حيوانات' : 'Pet Care Website',
      image: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'موقع متخصص في رعاية الحيوانات الأليفة' : 'Specialized pet care website',
      link: 'https://poochkoo.com'
    },
    {
      title: isRTL ? 'سيفير أوكس للحيوانات الأليفة' : 'Sevenoaks Pet',
      category: isRTL ? 'موقع رعاية حيوانات' : 'Pet Care Website',
      image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'موقع متكامل للعناية بالحيوانات الأليفة' : 'Comprehensive pet care website',
      link: 'https://sevenoakspet.in'
    },
    {
      title: isRTL ? 'ظلال الطبيعية' : 'Dhalanaturals',
      category: isRTL ? 'موقع صحة وعافية' : 'Wellness Website',
      image: 'https://images.pexels.com/photos/3768004/pexels-photo-3768004.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'موقع منتجات صحية وطبيعية' : 'Natural health products website',
      link: 'https://dhalanaturals.com'
    },
    {
      title: isRTL ? 'بليسفل' : 'Blissful',
      category: isRTL ? 'منصة مشاركة قصص' : 'Story Sharing Platform',
      image: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'منصة لمشاركة القصص والتجارب' : 'Platform for sharing stories and experiences',
      link: 'https://blissful.help'
    },
    {
      title: isRTL ? 'إف تو إس الدولية' : 'F2S International',
      category: isRTL ? 'استشارات تعليمية' : 'Educational Consultancy',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'موقع استشارات تعليمية دولية' : 'International educational consultancy website',
      link: 'https://f2sinternational.com'
    },
    {
      title: isRTL ? 'الاستوديو الخيالي' : 'The Whimsical Studio',
      category: isRTL ? 'هندسة معمارية' : 'Architecture',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'موقع استوديو للهندسة المعمارية' : 'Architecture studio website',
      link: 'https://thewhimsicalstudio.co'
    },
    {
      title: isRTL ? 'فروتي الرودا' : 'Fruity Al Rawda',
      category: isRTL ? 'مقهى + قائمة رقمية' : 'Cafe + Digital Menu',
      image: 'https://images.pexels.com/photos/2059/restaurant-red-beans-coffee.jpg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'موقع مقهى مع قائمة رقمية تفاعلية' : 'Cafe website with interactive digital menu',
      link: 'https://fruityalrawda.shop'
    },
    {
      title: isRTL ? 'تيك سوب' : 'TechSube',
      category: isRTL ? 'موقع شركة ناشئة' : 'Startup Website',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'موقع لشركة ناشئة في مجال التقنية' : 'Website for a tech startup',
      link: 'https://techsube.netlify.app'
    },
    {
      title: isRTL ? 'منتجات رقمية' : 'Digital Products',
      category: isRTL ? 'تصاميم وبوسترات' : 'Designs & Posters',
      image: 'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: isRTL ? 'تصاميم رقمية، بوسترات، بروشورات، سير ذاتية' : 'Digital designs, posters, brochures, resumes',
      link: 'https://www.instagram.com/nuqta_raqmiya'
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
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer block"
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
              </a>
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