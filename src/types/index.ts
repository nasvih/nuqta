export interface Language {
  code: 'ar' | 'en';
  name: string;
  direction: 'rtl' | 'ltr';
}

export interface Content {
  ar: any;
  en: any;
}

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
  timeline: string;
  support: string;
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
}