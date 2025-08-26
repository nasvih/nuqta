import React from 'react';
import { Palette, Globe, Menu, MapPin, Megaphone, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { content, isRTL } = useLanguage();

  const serviceIcons = [Palette, Globe, Menu, MapPin, Megaphone, FileText];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 
              className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.services.title}
            </h2>
            <p 
              className="text-xl text-navy-600 max-w-3xl mx-auto"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.services.subtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.items.map((service, index) => {
              const Icon = serviceIcons[index];
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-primary-200"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} className="text-primary-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 
                      className="text-2xl font-bold text-navy-900"
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {service.title}
                    </h3>
                    
                    <p 
                      className="text-navy-600"
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span 
                            className="text-sm text-navy-700"
                            style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Timeline */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm">
                        <span 
                          className="text-navy-500"
                          style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                        >
                          {isRTL ? 'مدة التنفيذ:' : 'Timeline:'}
                        </span>
                        <span 
                          className="font-semibold text-primary-600"
                          style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                        >
                          {service.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;