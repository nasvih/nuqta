import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials: React.FC = () => {
  const { content, isRTL } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.testimonials.title}
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {content.testimonials.items.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <Quote size={16} className="text-white" />
                  </div>
                </div>

                <div className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {/* Rating */}
                  <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'} space-x-1`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-amber-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote 
                    className="text-lg text-navy-700 leading-relaxed"
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  >
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="pt-6 border-t border-gray-100">
                    <div 
                      className="font-bold text-navy-900"
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {testimonial.name}
                    </div>
                    <div 
                      className="text-primary-600 text-sm"
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p 
              className="text-navy-600 mb-6 text-lg"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {isRTL ? 'انضم لعملائنا السعداء' : 'Join our happy clients'}
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.buttons.startNow}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;