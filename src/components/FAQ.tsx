import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FAQ: React.FC = () => {
  const { content, isRTL } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.faq.title}
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {content.faq.items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full p-6 ${isRTL ? 'text-right' : 'text-left'} flex items-center justify-between hover:bg-gray-100 transition-colors duration-200`}
                >
                  <h3 
                    className="text-lg font-bold text-navy-900 flex-1"
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  >
                    {item.question}
                  </h3>
                  
                  <div className={`flex-shrink-0 ${isRTL ? 'mr-4' : 'ml-4'}`}>
                    {openIndex === index ? (
                      <Minus size={24} className="text-primary-600" />
                    ) : (
                      <Plus size={24} className="text-primary-600" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className={`px-6 pb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <p 
                      className="text-navy-600 leading-relaxed"
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 bg-gradient-to-r from-primary-50 to-amber-50 rounded-3xl p-8">
            <h3 
              className="text-2xl font-bold text-navy-900 mb-4"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {isRTL ? 'لديك سؤال آخر؟' : 'Have another question?'}
            </h3>
            <p 
              className="text-navy-600 mb-6"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {isRTL ? 'تواصل معنا مباشرة عبر واتساب أو الهاتف' : 'Contact us directly via WhatsApp or phone'}
            </p>
            <button
              onClick={() => window.open('https://wa.me/+919539966671?text=مرحبا، لدي سؤال عن خدماتكم', '_blank')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.buttons.whatsapp}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;