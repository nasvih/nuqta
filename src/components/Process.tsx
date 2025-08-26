import React from 'react';
import { MessageCircle, FileText, Zap, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Process: React.FC = () => {
  const { content, isRTL } = useLanguage();

  const icons = [MessageCircle, FileText, Zap, Rocket];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-navy-900 mb-8"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.process.title}
            </h2>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600 transform -translate-y-1/2 z-0"></div>

            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {content.process.steps.map((step, index) => {
                const Icon = icons[index];
                
                return (
                  <div
                    key={index}
                    className="text-center group"
                  >
                    {/* Step Number and Icon */}
                    <div className="mb-6 relative">
                      <div className="w-20 h-20 bg-white border-4 border-primary-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon size={32} className="text-primary-600" />
                      </div>
                      
                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 
                        className="text-xl font-bold text-navy-900"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {step.title}
                      </h3>
                      
                      <p 
                        className="text-navy-600"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;