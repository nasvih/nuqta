import React, { createContext, useContext, useState, useEffect } from 'react';
import { arabicContent, englishContent, Content } from '../data/content';

interface LanguageContextType {
  language: 'ar' | 'en';
  content: Content;
  toggleLanguage: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  const content = language === 'ar' ? arabicContent : englishContent;
  const isRTL = language === 'ar';

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Update page title and meta description based on language
    const title = language === 'ar' 
      ? 'نقطة رقمية | نصنع حضورك الرقمي'
      : 'Nuqta Digital | Your Digital Launch Point';
    
    const description = language === 'ar'
      ? 'وكالة رقمية من مكة تقدم تصاميم احترافية، مواقع، قوائم مطاعم، إعلانات ميتا، وGoogle Business. إنجاز سريع وجودة موثوقة.'
      : 'Makkah-based digital studio for posters, websites, menu design, Meta ads, and Google Business. Fast delivery, trusted quality.';
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, content, toggleLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};