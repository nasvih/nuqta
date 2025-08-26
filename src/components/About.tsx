import React from 'react';
import { Target, Users, Award, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { content, isRTL } = useLanguage();

  const valueIcons = [Heart, Users, Award, Target];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.about.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              {/* Description */}
              <div className="space-y-6">
                <p 
                  className="text-xl text-navy-700 leading-relaxed"
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {content.about.description}
                </p>
                
                <p 
                  className="text-lg text-navy-600 leading-relaxed"
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {content.about.mission}
                </p>
              </div>

              {/* Values */}
              <div className="space-y-4">
                <h3 
                  className="text-2xl font-bold text-navy-900"
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {isRTL ? 'قيمنا' : 'Our Values'}
                </h3>
                
                <div className="grid gap-4">
                  {content.about.values.map((value, index) => {
                    const Icon = valueIcons[index];
                    
                    return (
                      <div
                        key={index}
                        className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-4 bg-white rounded-2xl p-4 shadow-sm`}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon size={24} className="text-primary-600" />
                        </div>
                        <span 
                          className="text-navy-700 font-medium"
                          style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                        >
                          {value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8">
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {content.buttons.contactUs}
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-amber-100 rounded-3xl p-8 shadow-2xl">
                {/* Team illustration placeholder */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                        <Users size={24} className="text-primary-600" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                        <div className="h-3 bg-gray-100 rounded w-16"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                        <Target size={24} className="text-amber-600" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                        <div className="h-3 bg-gray-100 rounded w-12"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                        <Award size={24} className="text-green-600" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-4 bg-gray-200 rounded w-28"></div>
                        <div className="h-3 bg-gray-100 rounded w-20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-primary-500 text-white p-4 rounded-2xl shadow-lg animate-bounce">
                <Heart size={24} />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-4 rounded-2xl shadow-lg animate-pulse">
                <Target size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;