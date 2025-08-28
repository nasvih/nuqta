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
    ctaPrimary: 'اكتشف خدماتنا',
    ctaSecondary: 'واتساب مباشرة',
  },
services: {
  title: 'خدماتنا',
  subtitle: 'نقدم حزمة متكاملة من الحلول الرقمية التي تخدم الأفراد، الطلاب، وأصحاب المشاريع',
  items: [
    {
      title: 'التصميم والمحتوى الإبداعي',
      description: 'تصميم بوسترات، بنرات إعلانية، فيديوهات قصيرة (ريلز)، ومحتوى إبداعي بالذكاء الاصطناعي.',
      features: [
        'تصميم بوسترات وإنستغرام (Posts & Stories)',
        'تصميم بنرات وإعلانات رقمية',
        'صناعة فيديوهات قصيرة (Reels)',
        'فيديوهات بالذكاء الاصطناعي (AI Videos)',
        'صور ومحتوى رقمي إبداعي'
      ],
      timeline: '2-4 أيام',
    },
    {
      title: 'تطوير المواقع والتطبيقات',
      description: 'بناء مواقع إلكترونية (ثابتة، ديناميكية، ومتقدمة) وتطبيقات ويب وبرمجيات مخصصة.',
      features: [
        'تطوير مواقع إلكترونية (ثابتة، ديناميكية، ومتقدمة)',
        'تطبيقات ويب وبرمجيات مخصصة',
        'أنظمة رقمية وقوائم للمطاعم والشركات',
        'حلول DevOps واستشارات تقنية',
        'تصميم متجاوب لجميع الشاشات'
      ],
      timeline: '7-21 يوم',
    },
    {
      title: 'التسويق الرقمي والإعلانات',
      description: 'إدارة حسابات التواصل الاجتماعي وإطلاق حملات إعلانية فعالة على Meta و Google.',
      features: [
        'إدارة حسابات وسائل التواصل الاجتماعي',
        'حملات إعلانية على فيسبوك وإنستغرام (Meta Ads)',
        'حملات إعلانية على جوجل (Google Ads)',
        'تحليل أداء الحملات الإعلانية',
        'استهداف الجمهور وتحسين النتائج'
      ],
      timeline: 'شهرياً',
    },
    {
      title: 'حلول الأعمال والأنظمة الرقمية',
      description: 'أنظمة وقوائم رقمية للمطاعم والشركات، وأتمتة العمليات باستخدام n8n.',
      features: [
        'أنظمة رقمية وقوائم للمطاعم والشركات',
        'أتمتة العمليات باستخدام n8n',
        'استشارات وخدمات DevOps',
        'إدارة البنية التحتية السحابية',
        'تنفيذ خطوط CI/CD'
      ],
      timeline: '5-10 أيام',
    },
    {
      title: 'المواد التسويقية والهوية',
      description: 'تصميم كتالوجات رقمية، عروض منتجات، كروت شخصية، وبروشورات احترافية.',
      features: [
        'كتالوجات رقمية، عروض منتجات',
        'كروت وبروشورات',
        'هوية بصرية للعلامات التجارية',
        'تصميم السير الذاتية والـ CVs',
        'حزم الهوية الاحترافية'
      ],
      timeline: '3-5 أيام',
    },
    {
      title: 'خدمات الأفراد والطلاب',
      description: 'كتابة وتصميم السير الذاتية (CVs) والمساعدة في مشاريع المدارس والجامعات.',
      features: [
        'السير الذاتية وتصميم الـ Resume & CVs',
        'المساعدة في مشاريع طلاب المدارس والجامعات',
        'محتوى رقمي تعليمي وتفاعلي',
        'دروس تقنية وبرمجية',
        'حلول رقمية خاصة حسب الطلب'
      ],
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
      role: 'مالك مطعم أصالة',
      content: 'خدمة ممتازة وتنفيذ سريع. القائمة الرقمية زادت طلبات المطعم بشكل واضح.',
      rating: 5,
    },
    {
      name: 'فاطمة العتيبي',
      role: 'مالكة متجر أزياء',
      content: 'تصاميم احترافية تعكس هوية المتجر. زادت المتابعين والعملاء بشكل ملحوظ.',
      rating: 5,
    },
    {
      name: 'محمد الغامدي',
      role: 'مؤسس شركة خدمات',
      content: 'الموقع الإلكتروني أعطى انطباعاً احترافياً وساعدنا في كسب ثقة عملاء جدد.',
      rating: 5,
    },
    {
      name: 'نورة الحربي',
      role: 'خريجة جامعية',
      content: 'ساعدوني في تصميم سيرة ذاتية احترافية حصلت بها على وظيفتي التي حلمت بها.',
      rating: 5,
    },
    {
      name: 'عمر الزهراني',
      role: 'رائد أعمال',
      content: 'تصميم الهوية والبروشور أعطى مشروعي الجديد صورة قوية ومصداقية في السوق.',
      rating: 5,
    },
    {
      name: 'ليلى القحطاني',
      role: 'مديرة تسويق',
      content: 'الحملات الإعلانية على وسائل التواصل زادت التفاعل وحققت نمواً في المبيعات.',
      rating: 5,
    },
    {
      name: 'خالد الدوسري',
      role: 'مالك مشروع برمجي',
      content: 'حلول التطبيقات الإلكترونية وفرت علينا وقتاً كثيراً وسهلت سير العمل.',
      rating: 5,
    },
    {
      name: 'سارة الفهد',
      role: 'طالبة جامعية',
      content: 'ساعدوني في عرض وتنسيق مشروعي التخرجي. كان مميزاً وأثار إعجاب الدكاترة.',
      rating: 5,
    },
    {
      name: 'يوسف الحارثي',
      role: 'صاحب مشروع صغير',
      content: 'الكتالوج الرقمي والعرض التفاعلي للمنتجات سهل على العملاء استكشاف الخدمات والشراء.',
      rating: 5,
    },
    {
      name: 'منى الأنصاري',
      role: 'مستقلة',
      content: 'تصميم بطاقة الأعمال والملف الشخصي ساعدني في جذب المزيد من العملاء بمظهر احترافي.',
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
    description: 'في نقطة رقمية، نقدم حزمة متكاملة من الحلول الرقمية التي تخدم الأفراد، الطلاب، أصحاب المشاريع الصغيرة، والمطاعم. خدماتنا تبدأ من التصاميم البسيطة مثل البوسترات والإعلانات، وتمتد إلى تطوير المواقع والأنظمة الرقمية المتقدمة. نبتكر حلولاً مخصصة تناسب كل احتياج.',
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
      hours: 'مفتوح ٢٤ ساعة • ٧ أيام في الأسبوع',
      phone: '+91 953 996 6671',
      email: 'nasvih.va@gmail.com',
    },
  },
  footer: {
    tagline: 'نقطة انطلاقك الرقمية',
    quickLinks: 'روابط سريعة',
    contact: 'معلومات التواصل',
    followUs: 'تابعنا',
    copyright: '© 2025 نقطة رقمية. جميع الحقوق محفوظة.',
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
    sendMessage: 'Send Mail',
  },
  hero: {
    title: 'Nuqta Digital',
    subtitle: 'Your Digital Launch Point',
    tagline: 'We Build Your Digital Presence',
    badges: ['Trusted in Saudi Arabia', 'Pro Solutions', 'Fast Delivery'],
    ctaPrimary: 'Discover Our Services',
    ctaSecondary: 'WhatsApp Chat',
  },
 services: {
  title: 'Our Services',
  subtitle: 'We provide a complete range of digital solutions for individuals, students, and businesses',
  items: [
    {
      title: 'Creative Design & Content',
      description: 'Professional designs for social media, ads, videos, and creative digital content.',
      features: [
        'Instagram Posts & Stories Design',
        'Banner & Digital Ads Design',
        'Short Videos (Reels) Production',
        'AI-Generated Videos',
        'Creative Digital Images & Content'
      ],
      timeline: '2-4 days',
    },
    {
      title: 'Website & App Development',
      description: 'Building static, dynamic, and advanced websites plus custom web applications.',
      features: [
        'Static Websites',
        'Dynamic Websites',
        'Advanced Web Applications',
        'Custom Software Development',
        'Responsive Design'
      ],
      timeline: '7-21 days',
    },
    {
      title: 'Digital Marketing & Ads',
      description: 'Social media management and effective ad campaigns on Meta and Google platforms.',
      features: [
        'Social Media Account Management',
        'Facebook & Instagram Ad Campaigns (Meta Ads)',
        'Google Ad Campaigns',
        'Performance Analytics & Optimization',
        'Audience Targeting'
      ],
      timeline: 'Monthly',
    },
    {
      title: 'Business & Digital Systems',
      description: 'Digital systems, menus for restaurants/businesses, and process automation.',
      features: [
        'Digital Systems & Menus for Restaurants',
        'Process Automation using n8n',
        'DevOps Services & Consultation',
        'Cloud Infrastructure Management',
        'CI/CD Pipeline Implementation'
      ],
      timeline: '5-10 days',
    },
    {
      title: 'Marketing & Brand Materials',
      description: 'Design of digital catalogs, product showcases, and professional branding materials.',
      features: [
        'Digital Catalogs',
        'Product Showcases',
        'Business Cards Design',
        'Professional Brochures',
        'Brand Identity Packages'
      ],
      timeline: '3-5 days',
    },
    {
      title: 'Individual & Student Services',
      description: 'CV/resume design, academic project support, and educational content creation.',
      features: [
        'Resume & CV Writing & Design',
        'School & College Project Support',
        'Educational & Interactive Digital Content',
        'Academic Tutoring & Mentoring',
        'Custom Digital Solutions on Demand'
      ],
      timeline: '2-5 days',
    },
  ],
},
  valueProps: {
    title: 'Why Nuqta Digital?',
    items: [
      {
        title: 'Trust & Quality',
        description: 'Professional design that reflects your business values and builds credibility.',
      },
      {
        title: 'Speed & Commitment',
        description: 'We meet deadlines and ensure clear, fast delivery of all projects.',
      },
      {
        title: 'Practical Results',
        description: 'Effective digital presence that increases your reach and customer engagement.',
      },
    ],
  },
  process: {
    title: 'How We Work',
    steps: [
      {
        title: 'Free Consultation',
        description: 'We discuss your needs and digital goals.',
      },
      {
        title: 'Simple Plan',
        description: 'We create a clear strategy that fits your budget.',
      },
      {
        title: 'Fast Execution',
        description: 'Our team delivers the project with high quality and speed.',
      },
      {
        title: 'Launch & Follow-up',
        description: 'We launch the project and monitor results with you.',
      },
    ],
  },
  portfolio: {
    title: 'Our Work',
    subtitle: "Projects we're proud to have delivered for our clients",
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
      role: 'Founder, Services Company',
      content: 'The website gives a professional impression and helped gain trust from new clients.',
      rating: 5,
    },
    {
      name: 'Nora Al-Harbi',
      role: 'University Graduate',
      content: 'They helped me design a professional CV that got me my dream job.',
      rating: 5,
    },
    {
      name: 'Omar Al-Zahrani',
      role: 'Startup Entrepreneur',
      content: 'Their branding and brochure design gave my new business a strong identity and credibility.',
      rating: 5,
    },
    {
      name: 'Layla Al-Qahtani',
      role: 'Marketing Manager',
      content: 'The social media campaigns increased engagement and drove real sales growth. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Khalid Al-Dossary',
      role: 'Software Project Owner',
      content: 'Their web application solution automated many tasks and saved us valuable time.',
      rating: 5,
    },
    {
      name: 'Sara Al-Fahad',
      role: 'College Student',
      content: 'They guided me with my graduation project presentation and design. It stood out and impressed professors.',
      rating: 5,
    },
    {
      name: 'Yousef Al-Harthi',
      role: 'Small Business Owner',
      content: 'The digital catalog and product showcase made it easy for my customers to explore my offerings online.',
      rating: 5,
    },
    {
      name: 'Mona Al-Ansari',
      role: 'Freelancer',
      content: 'The business card and portfolio design helped me attract more clients and look professional.',
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
    description: 'At Nuqta Digital, we provide a complete range of digital solutions for individuals, students, small business owners, and restaurants. Our services cover everything from simple posters and ads to advanced website and system development. We create tailored solutions to fit every unique need.',
    mission: 'We strive to simplify digital transformation and make it accessible to everyone, while maintaining the highest standards of quality and professionalism.',
    values: ['Trust & Transparency', 'Quality & Excellence', 'Meeting Deadlines', 'Continuous Support'],
  },
  contact: {
    title: 'Contact Us',
    subtitle: "Let's start your digital journey today",
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
      hours: 'Open 24 Hours • 7 Days a Week',
      phone: '+91 953 996 6671',
      email: 'nasvih.va@gmail.com',
    },
  },
  footer: {
    tagline: 'Your Digital Launch Point',
    quickLinks: 'Quick Links',
    contact: 'Contact Info',
    followUs: 'Follow Us',
    copyright: '© 2025 Nuqta Digital. All rights reserved.',
    privacy: 'Privacy Policy',
  },
};