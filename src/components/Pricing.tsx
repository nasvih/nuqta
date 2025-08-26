import React from 'react';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Pricing: React.FC = () => {
  const { content, isRTL } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/+919539966671?text=مرحبا، أود الاستفسار عن الباقات والأسعار', '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.pricing.title}
            </h2>
            <p 
              className="text-xl text-navy-600 max-w-3xl mx-auto"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.pricing.subtitle}
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {content.pricing.plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  plan.recommended 
                    ? 'border-primary-500 ring-4 ring-primary-100 scale-105 lg:scale-110' 
                    : 'border-gray-200 hover:border-primary-200'
                } relative`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                      <Star size={16} fill="currentColor" />
                      <span 
                        className="font-bold text-sm"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {isRTL ? 'الأكثر شيوعاً' : 'Most Popular'}
                      </span>
                    </div>
                  </div>
                )}

                <div className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {/* Plan Header */}
                  <div className="space-y-4">
                    <h3 
                      className="text-2xl font-bold text-navy-900"
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {plan.name}
                    </h3>
                    
                    <div className="space-y-2">
                      <div 
                        className="text-3xl lg:text-4xl font-bold text-primary-600"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {plan.price}
                      </div>
                      
                      <p 
                        className="text-navy-600"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 
                      className="font-semibold text-navy-800"
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {isRTL ? 'يتضمن:' : 'Includes:'}
                    </h4>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                          <div className="flex-shrink-0 mt-1">
                            <Check size={16} className="text-primary-600" />
                          </div>
                          <span 
                            className="text-navy-700"
                            style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline & Support */}
                  <div className="space-y-3 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span 
                        className="text-navy-500"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {isRTL ? 'مدة التنفيذ:' : 'Timeline:'}
                      </span>
                      <span 
                        className="font-semibold text-navy-700"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {plan.timeline}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span 
                        className="text-navy-500"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {isRTL ? 'الدعم:' : 'Support:'}
                      </span>
                      <span 
                        className="font-semibold text-navy-700"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {plan.support}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={handleWhatsApp}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 ${
                      plan.recommended
                        ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg'
                        : 'bg-gray-100 hover:bg-primary-50 text-navy-800 border-2 border-gray-200 hover:border-primary-200'
                    }`}
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  >
                    {content.buttons.startNow}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Quote CTA */}
          <div className="text-center bg-gradient-to-r from-primary-50 to-amber-50 rounded-3xl p-8">
            <h3 
              className="text-2xl font-bold text-navy-900 mb-4"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {isRTL ? 'تحتاج شيء مختلف؟' : 'Need something different?'}
            </h3>
            <p 
              className="text-navy-600 mb-6"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {isRTL ? 'احصل على عرض سعر مخصص يناسب احتياجاتك بالضبط' : 'Get a custom quote tailored to your exact needs'}
            </p>
            <button
              onClick={handleWhatsApp}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.pricing.customQuote}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;