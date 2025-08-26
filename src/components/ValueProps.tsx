import React from 'react';
import { Shield, Clock, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ValueProps: React.FC = () => {
  const { content, isRTL } = useLanguage();

  const icons = [Shield, Clock, Target];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16`}>
            <h2 
              className="text-4xl lg:text-5xl font-bold text-navy-900 mb-8"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.valueProps.title}
            </h2>
          </div>

          {/* Value Props Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {content.valueProps.items.map((item, index) => {
              const Icon = icons[index];
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon size={40} className="text-primary-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 
                      className="text-2xl font-bold text-navy-900"
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    
                    <p 
                      className="text-navy-600 leading-relaxed"
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {item.description}
                    </p>
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

export default ValueProps;