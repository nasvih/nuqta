export interface Content {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    pricing: string;
    testimonials: string;
    faq: string;
    about: string;
    contact: string;
  };
  buttons: {
    whatsapp: string;
    startNow: string;
    getQuote: string;
    viewWork: string;
    contactUs: string;
    readMore: string;
    sendMessage: string;
  };
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    badges: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      features: string[];
      timeline: string;
    }[];
  };
  valueProps: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  process: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  portfolio: {
    title: string;
    subtitle: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: {
      name: string;
      price: string;
      description: string;
      features: string[];
      timeline: string;
      support: string;
      recommended?: boolean;
    }[];
    customQuote: string;
  };
  testimonials: {
    title: string;
    items: {
      name: string;
      role: string;
      content: string;
      rating: number;
    }[];
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  about: {
    title: string;
    description: string;
    mission: string;
    values: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      phone: string;
      whatsapp: string;
      email: string;
      service: string;
      budget: string;
      message: string;
      submit: string;
    };
    info: {
      address: string;
      hours: string;
      phone: string;
      email: string;
    };
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    copyright: string;
    privacy: string;
  };
}

export const arabicContent: Content = {
  nav: {
    home: 'الرئيسية',
    services: 'الخدمات',
    portfolio: 'الأعمال',
    pricing: 'الأسعار',
    testimonials: 'آراء العملاء',
    faq: 'الأسئلة الشائعة',
    about: 'من نحن',
    contact: 'تواصل معنا',
  },
  buttons: {
    whatsapp: 'واتساب الآن',
    startNow: 'ابدأ الآن',
    getQuote: 'اطلب عرض سعر',
    viewWork: 'عرض الأعمال',
    contactUs: 'تواصل معنا',
    readMore: 'اقرأ المزيد',
    sendMessage: 'إرسال الرسالة',
  },
  hero: {
    title: 'نقطة رقمية',
    subtitle: 'نقطة انطلاقك الرقمية',
    tagline: 'نصنع حضورك الرقمي',
    badges: ['موثوق في السعودية', 'حلول احترافية', 'إنجاز سريع'],
    ctaPrimary: 'ابدأ الآن',
    ctaSecondary: 'واتساب مباشرة',
  },
  services: {
    title: 'خدماتنا',
    subtitle: 'نقدم حلول رقمية شاملة لنشاطك التجاري',
    items: [
      {
        title: 'التصاميم الرقمية',
        description: 'بوسترات إنستغرام، بانرات، فلكسات، هويات مصغرة احترافية',
        features: ['تصاميم إنستغرام', 'بانرات إعلانية', 'فلكسات طباعة', 'هويات بصرية'],
        timeline: '2-3 أيام',
      },
      {
        title: 'المواقع الإلكترونية',
        description: 'صفحات هبوط، مواقع شركات، مواقع مطاعم لعرض المنيو',
        features: ['صفحات هبوط', 'مواقع شركات', 'مواقع مطاعم', 'تصميم تجاوبي'],
        timeline: '7-14 يوم',
      },
      {
        title: 'قوائم المطاعم',
        description: 'قوائم رقمية (QR/موقع) + ملفات للطباعة عالية الدقة',
        features: ['قوائم رقمية', 'ملفات طباعة', 'كود QR', 'تحديث مستمر'],
        timeline: '3-5 أيام',
      },
      {
        title: 'خرائط جوجل وملف الأعمال',
        description: 'إنشاء وتحسين ملف Google Business الخاص بك',
        features: ['إنشاء الملف', 'تحسين الوصف', 'إضافة الصور', 'إدارة المراجعات'],
        timeline: '1-2 يوم',
      },
      {
        title: 'إعلانات ميتا',
        description: 'إعداد حسابات الإعلانات وحملات أساسية فعّالة',
        features: ['إعداد الحسابات', 'حملات أساسية', 'تقارير مبسطة', 'تحسين الأداء'],
        timeline: '3-7 أيام',
      },
      {
        title: 'السير الذاتية والمشاريع',
        description: 'تصميم السير الذاتية ودعم مشاريع الطلاب',
        features: ['CV/Resume', 'مشاريع ويب', 'دعم البرمجة', 'تصاميم أكاديمية'],
        timeline: '2-5 أيام',
      },
    ],
  },
  valueProps: {
    title: 'لماذا نقطة رقمية؟',
    items: [
      {
        title: 'ثقة وجودة',
        description: 'تصميم احترافي يليق بعملك ويعكس قيم علامتك التجارية',
      },
      {
        title: 'سرعة والتزام',
        description: 'نلتزم بالمواعيد ونضمن تسليم واضح وسريع لجميع المشاريع',
      },
      {
        title: 'نتائج عملية',
        description: 'حضور رقمي فعّال يزيد من وصولك وتفاعل عملائك',
      },
    ],
  },
  process: {
    title: 'كيف نعمل؟',
    steps: [
      {
        title: 'استشارة مجانية',
        description: 'نناقش احتياجاتك وأهدافك الرقمية',
      },
      {
        title: 'خطة بسيطة',
        description: 'نضع استراتيجية واضحة ومناسبة لميزانيتك',
      },
      {
        title: 'تنفيذ سريع',
        description: 'فريقنا ينفذ المشروع بجودة عالية وسرعة',
      },
      {
        title: 'إطلاق ومتابعة',
        description: 'نطلق المشروع ونتابع النتائج معك',
      },
    ],
  },
  portfolio: {
    title: 'أعمالنا',
    subtitle: 'مشاريع نفخر بإنجازها لعملائنا',
  },
  pricing: {
    title: 'باقاتنا',
    subtitle: 'اختر الباقة المناسبة لاحتياجاتك',
    plans: [
      {
        name: 'الباقة الأساسية',
        price: 'ابتداءً من 999 ريال',
        description: 'مناسبة للبدايات والمشاريع الصغيرة',
        features: [
          '5 تصاميم بوسترات',
          'صفحة هبوط بسيطة',
          'إضافة لخرائط جوجل',
          'حملة ميتا واحدة',
        ],
        timeline: '5-7 أيام',
        support: 'دعم شهر واحد',
      },
      {
        name: 'الباقة الاحترافية',
        price: 'ابتداءً من 2499 ريال',
        description: 'مثالية للشركات الصغيرة والمتوسطة',
        features: [
          '12 تصميم بوستر',
          'موقع 3-5 صفحات',
          'منيو مطعم (رقمي + طباعة)',
          '2 حملات ميتا',
          'Google Business كامل',
        ],
        timeline: '10-14 يوم',
        support: 'دعم شهرين',
        recommended: true,
      },
      {
        name: 'الباقة المتقدمة',
        price: 'ابتداءً من 4999 ريال',
        description: 'للتوسع والنمو السريع',
        features: [
          '20 تصميم بوستر',
          'موقع مخصص متقدم',
          'منيو تفاعلي',
          '4 حملات ميتا',
          'إدارة Google Business',
          'تقارير شهرية',
        ],
        timeline: '14-21 يوم',
        support: 'دعم 3 أشهر',
      },
    ],
    customQuote: 'احصل على عرض سعر مخصص',
  },
  testimonials: {
    title: 'آراء العملاء',
    items: [
      {
        name: 'أحمد المالكي',
        role: 'مالك مطعم الأصالة',
        content: 'تعامل ممتاز وسرعة في التنفيذ. المنيو الرقمي زاد من طلبات المطعم بشكل واضح.',
        rating: 5,
      },
      {
        name: 'فاطمة العتيبي',
        role: 'مالكة محل أزياء',
        content: 'التصاميم احترافية جداً وتعكس هوية المحل. زاد عدد المتابعين والعملاء.',
        rating: 5,
      },
      {
        name: 'محمد الغامدي',
        role: 'مؤسس شركة خدمات',
        content: 'الموقع يعطي انطباع احترافي وساعد في كسب ثقة العملاء الجدد.',
        rating: 5,
      },
      {
        name: 'نورا الحربي',
        role: 'خريجة جامعية',
        content: 'ساعدوني في تصميم CV احترافي حصلت بسببه على وظيفة أحلامي.',
        rating: 5,
      },
    ],
  },
  faq: {
    title: 'الأسئلة الشائعة',
    items: [
      {
        question: 'لماذا التحول الرقمي الآن؟',
        answer: 'التحول الرقمي ضروري في عصرنا الحالي. يساعدك على الوصول لعملاء أكثر، بناء ثقة أكبر، وزيادة المبيعات بطريقة فعّالة ومقيسة.',
      },
      {
        question: 'كم يستغرق تنفيذ الموقع؟',
        answer: 'يختلف حسب تعقيد المشروع. الصفحات البسيطة تحتاج 5-7 أيام، المواقع المتوسطة 10-14 يوم، والمواقع المتقدمة 14-21 يوم.',
      },
      {
        question: 'هل توفرون محتوى عربي وإنجليزي؟',
        answer: 'نعم، نقدم المحتوى باللغتين العربية والإنجليزية. كما نضمن التصميم المناسب لكل لغة (RTL للعربية، LTR للإنجليزية).',
      },
      {
        question: 'كيف يتم الدفع والاتفاق؟',
        answer: 'نبدأ بمقدم 50% لبدء العمل، والباقي عند التسليم النهائي. نوفر طرق دفع متعددة ونوقع عقد واضح يحمي حقوق الطرفين.',
      },
      {
        question: 'هل تديرون حساب Google Business؟',
        answer: 'نعم، نقوم بإنشاء وتحسين ملف Google Business الخاص بك، ونساعد في إدارة المراجعات والردود عليها.',
      },
      {
        question: 'هل تقدمون دعم ما بعد التسليم؟',
        answer: 'نعم، نوفر دعم فني مجاني حسب الباقة المختارة (شهر إلى 3 أشهر). كما نقدم خدمات صيانة وتطوير مستمرة.',
      },
    ],
  },
  about: {
    title: 'من نحن',
    description: 'فريق رقمي متخصص يساعد الأنشطة التجارية في مكة المكرمة والمملكة العربية السعودية على الظهور باحتراف في العالم الرقمي.',
    mission: 'نسعى لتبسيط عملية التحول الرقمي وجعلها في متناول الجميع، مع الحفاظ على أعلى معايير الجودة والاحتراف.',
    values: ['الثقة والشفافية', 'الجودة والإتقان', 'الالتزام بالمواعيد', 'الدعم المستمر'],
  },
  contact: {
    title: 'تواصل معنا',
    subtitle: 'لنبدأ رحلتك الرقمية اليوم',
    form: {
      name: 'الاسم الكامل',
      phone: 'رقم الجوال',
      whatsapp: 'واتساب',
      email: 'البريد الإلكتروني',
      service: 'نوع الخدمة المطلوبة',
      budget: 'الميزانية التقريبية',
      message: 'تفاصيل المشروع',
      submit: 'إرسال الرسالة',
    },
    info: {
      address: 'مكة المكرمة، المملكة العربية السعودية',
      hours: 'الأحد - الخميس: 9:00 ص - 9:00 م',
      phone: '+91 953 996 6671',
      email: 'nasvih.va@gmail.com',
    },
  },
  footer: {
    tagline: 'نقطة انطلاقك الرقمية',
    quickLinks: 'روابط سريعة',
    contact: 'معلومات التواصل',
    followUs: 'تابعنا',
    copyright: '© 2024 نقطة رقمية. جميع الحقوق محفوظة.',
    privacy: 'سياسة الخصوصية',
  },
};

export const englishContent: Content = {
  nav: {
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    pricing: 'Pricing',
    testimonials: 'Testimonials',
    faq: 'FAQ',
    about: 'About',
    contact: 'Contact',
  },
  buttons: {
    whatsapp: 'WhatsApp Now',
    startNow: 'Start Now',
    getQuote: 'Get Quote',
    viewWork: 'View Work',
    contactUs: 'Contact Us',
    readMore: 'Read More',
    sendMessage: 'Send Message',
  },
  hero: {
    title: 'Nuqta Digital',
    subtitle: 'Your Digital Launch Point',
    tagline: 'We Build Your Digital Presence',
    badges: ['Trusted in Saudi Arabia', 'Pro Solutions', 'Fast Delivery'],
    ctaPrimary: 'Start Now',
    ctaSecondary: 'WhatsApp Chat',
  },
  services: {
    title: 'Our Services',
    subtitle: 'Comprehensive digital solutions for your business',
    items: [
      {
        title: 'Digital Designs',
        description: 'Professional Instagram posters, banners, flex prints, and brand identities',
        features: ['Instagram Posts', 'Ad Banners', 'Print Flex', 'Brand Identity'],
        timeline: '2-3 days',
      },
      {
        title: 'Websites',
        description: 'Landing pages, company websites, and restaurant menu sites',
        features: ['Landing Pages', 'Company Sites', 'Restaurant Sites', 'Responsive Design'],
        timeline: '7-14 days',
      },
      {
        title: 'Restaurant Menus',
        description: 'Digital menus (QR/website) + high-quality print-ready files',
        features: ['Digital Menus', 'Print Files', 'QR Codes', 'Easy Updates'],
        timeline: '3-5 days',
      },
      {
        title: 'Google Maps & Business',
        description: 'Create and optimize your Google Business profile',
        features: ['Profile Setup', 'Description Optimization', 'Photo Management', 'Review Management'],
        timeline: '1-2 days',
      },
      {
        title: 'Meta Ads',
        description: 'Ad account setup and effective basic campaigns',
        features: ['Account Setup', 'Basic Campaigns', 'Simple Reports', 'Performance Optimization'],
        timeline: '3-7 days',
      },
      {
        title: 'Resumes & Student Projects',
        description: 'Professional CV design and student project support',
        features: ['CV/Resume', 'Web Projects', 'Programming Support', 'Academic Designs'],
        timeline: '2-5 days',
      },
    ],
  },
  valueProps: {
    title: 'Why Nuqta Digital?',
    items: [
      {
        title: 'Trust & Quality',
        description: 'Professional design that reflects your business values and builds credibility',
      },
      {
        title: 'Speed & Commitment',
        description: 'We meet deadlines and ensure clear, fast delivery of all projects',
      },
      {
        title: 'Practical Results',
        description: 'Effective digital presence that increases your reach and customer engagement',
      },
    ],
  },
  process: {
    title: 'How We Work',
    steps: [
      {
        title: 'Free Consultation',
        description: 'We discuss your needs and digital goals',
      },
      {
        title: 'Simple Plan',
        description: 'We create a clear strategy that fits your budget',
      },
      {
        title: 'Fast Execution',
        description: 'Our team delivers the project with high quality and speed',
      },
      {
        title: 'Launch & Follow-up',
        description: 'We launch the project and monitor results with you',
      },
    ],
  },
  portfolio: {
    title: 'Our Work',
    subtitle: 'Projects we\'re proud to have delivered for our clients',
  },
  pricing: {
    title: 'Our Packages',
    subtitle: 'Choose the package that fits your needs',
    plans: [
      {
        name: 'Basic Package',
        price: 'Starting from 999 SAR',
        description: 'Perfect for startups and small projects',
        features: [
          '5 poster designs',
          'Simple landing page',
          'Google Maps listing',
          'One Meta campaign',
        ],
        timeline: '5-7 days',
        support: '1 month support',
      },
      {
        name: 'Professional Package',
        price: 'Starting from 2,499 SAR',
        description: 'Ideal for small to medium businesses',
        features: [
          '12 poster designs',
          '3-5 page website',
          'Restaurant menu (digital + print)',
          '2 Meta campaigns',
          'Complete Google Business',
        ],
        timeline: '10-14 days',
        support: '2 months support',
        recommended: true,
      },
      {
        name: 'Advanced Package',
        price: 'Starting from 4,999 SAR',
        description: 'For expansion and rapid growth',
        features: [
          '20 poster designs',
          'Custom advanced website',
          'Interactive menu',
          '4 Meta campaigns',
          'Google Business management',
          'Monthly reports',
        ],
        timeline: '14-21 days',
        support: '3 months support',
      },
    ],
    customQuote: 'Get Custom Quote',
  },
  testimonials: {
    title: 'Client Testimonials',
    items: [
      {
        name: 'Ahmad Al-Malki',
        role: 'Owner, Asala Restaurant',
        content: 'Excellent service and fast execution. The digital menu clearly increased restaurant orders.',
        rating: 5,
      },
      {
        name: 'Fatima Al-Otaibi',
        role: 'Fashion Store Owner',
        content: 'Very professional designs that reflect the store identity. Increased followers and customers.',
        rating: 5,
      },
      {
        name: 'Mohammed Al-Ghamdi',
        role: 'Services Company Founder',
        content: 'The website gives a professional impression and helped gain trust from new clients.',
        rating: 5,
      },
      {
        name: 'Nora Al-Harbi',
        role: 'University Graduate',
        content: 'They helped me design a professional CV that got me my dream job.',
        rating: 5,
      },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'Why go digital now?',
        answer: 'Digital transformation is essential in our current era. It helps you reach more customers, build greater trust, and increase sales effectively and measurably.',
      },
      {
        question: 'How long does website development take?',
        answer: 'It depends on project complexity. Simple pages need 5-7 days, medium websites 10-14 days, and advanced websites 14-21 days.',
      },
      {
        question: 'Do you provide Arabic and English content?',
        answer: 'Yes, we provide content in both Arabic and English. We also ensure appropriate design for each language (RTL for Arabic, LTR for English).',
      },
      {
        question: 'How does payment and agreement work?',
        answer: 'We start with 50% upfront to begin work, and the remainder upon final delivery. We offer multiple payment methods and sign a clear contract protecting both parties.',
      },
      {
        question: 'Do you manage Google Business accounts?',
        answer: 'Yes, we create and optimize your Google Business profile, and help manage reviews and responses.',
      },
      {
        question: 'Do you provide post-delivery support?',
        answer: 'Yes, we provide free technical support according to the chosen package (1 to 3 months). We also offer ongoing maintenance and development services.',
      },
    ],
  },
  about: {
    title: 'About Us',
    description: 'A specialized digital team helping businesses in Makkah and Saudi Arabia appear professionally in the digital world.',
    mission: 'We strive to simplify digital transformation and make it accessible to everyone, while maintaining the highest standards of quality and professionalism.',
    values: ['Trust & Transparency', 'Quality & Excellence', 'Meeting Deadlines', 'Continuous Support'],
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'Let\'s start your digital journey today',
    form: {
      name: 'Full Name',
      phone: 'Phone Number',
      whatsapp: 'WhatsApp',
      email: 'Email Address',
      service: 'Service Type',
      budget: 'Approximate Budget',
      message: 'Project Details',
      submit: 'Send Message',
    },
    info: {
      address: 'Makkah, Saudi Arabia',
      hours: 'Sunday - Thursday: 9:00 AM - 9:00 PM',
      phone: '+91 953 996 6671',
      email: 'nasvih.va@gmail.com',
    },
  },
  footer: {
    tagline: 'Your Digital Launch Point',
    quickLinks: 'Quick Links',
    contact: 'Contact Info',
    followUs: 'Follow Us',
    copyright: '© 2024 Nuqta Digital. All rights reserved.',
    privacy: 'Privacy Policy',
  },
};