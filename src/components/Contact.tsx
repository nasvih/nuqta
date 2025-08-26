import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { content, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // This function now handles the email redirection
  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, whatsapp, email, service, budget, message } = formData;
    
    // Find the readable labels for service and budget
    const serviceLabel = serviceOptions.find(opt => opt.value === service)?.label || service;
    const budgetLabel = budgetOptions.find(opt => opt.value === budget)?.label || budget;

    const subject = isRTL 
      ? `استفسار مشروع جديد من ${name}` 
      : `New Project Inquiry from ${name}`;
      
    const body = `
      ${isRTL ? 'مرحباً نقطة رقمية،' : 'Hello Nuqta Digital,'}

      ${isRTL ? 'أود الاستفسار عن مشروع جديد. وهذه تفاصيلي:' : 'I would like to inquire about a new project. Here are my details:'}

      ----------------------------------------
      ${isRTL ? 'الاسم الكامل:' : 'Full Name:'} ${name}
      ${isRTL ? 'رقم الجوال:' : 'Phone Number:'} ${phone}
      ${isRTL ? 'واتساب:' : 'WhatsApp:'} ${whatsapp || (isRTL ? 'لم يحدد' : 'Not provided')}
      ${isRTL ? 'البريد الإلكتروني:' : 'Email Address:'} ${email || (isRTL ? 'لم يحدد' : 'Not provided')}
      ----------------------------------------
      ${isRTL ? 'نوع الخدمة:' : 'Service Required:'} ${serviceLabel}
      ${isRTL ? 'الميزانية التقريبية:' : 'Approximate Budget:'} ${budgetLabel || (isRTL ? 'لم يحدد' : 'Not provided')}
      ----------------------------------------
      ${isRTL ? 'تفاصيل المشروع:' : 'Project Details:'}
      ${message || (isRTL ? 'لا يوجد' : 'None')}
      ----------------------------------------
    `;

    // Create and trigger the mailto link
    const mailtoLink = `mailto:${content.contact.info.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // This function now includes all form data for WhatsApp
  const handleWhatsApp = () => {
    const { name, phone, whatsapp, email, service, budget, message } = formData;
    
    // Find the readable labels for service and budget
    const serviceLabel = serviceOptions.find(opt => opt.value === service)?.label || service;
    const budgetLabel = budgetOptions.find(opt => opt.value === budget)?.label || budget;

    const fullMessage = `
*${isRTL ? 'استفسار مشروع جديد' : 'New Project Inquiry'}*
-------------------
*${isRTL ? 'الاسم الكامل:' : 'Full Name:'}* ${name || 'N/A'}
*${isRTL ? 'رقم الجوال:' : 'Phone Number:'}* ${phone || 'N/A'}
*${isRTL ? 'واتساب:' : 'WhatsApp:'}* ${whatsapp || 'N/A'}
*${isRTL ? 'البريد الإلكتروني:' : 'Email Address:'}* ${email || 'N/A'}
*${isRTL ? 'نوع الخدمة:' : 'Service Required:'}* ${serviceLabel || 'N/A'}
*${isRTL ? 'الميزانية التقريبية:' : 'Approximate Budget:'}* ${budgetLabel || 'N/A'}
*${isRTL ? 'تفاصيل المشروع:' : 'Project Details:'}*
${message || 'N/A'}
    `;
    window.open(`https://wa.me/${content.contact.info.phone.replace(/\s/g, '')}?text=${encodeURIComponent(fullMessage)}`, '_blank');
  };

  const serviceOptions = [
    { value: '', label: isRTL ? 'اختر نوع الخدمة' : 'Select service type' },
    { value: 'designs', label: isRTL ? 'تصاميم رقمية' : 'Digital designs' },
    { value: 'website', label: isRTL ? 'موقع إلكتروني' : 'Website' },
    { value: 'menu', label: isRTL ? 'قائمة مطعم' : 'Restaurant menu' },
    { value: 'google', label: isRTL ? 'خرائط جوجل وملف الأعمال' : 'Google Maps & Business' },
    { value: 'ads', label: isRTL ? 'إعلانات ميتا' : 'Meta ads' },
    { value: 'cv', label: isRTL ? 'سيرة ذاتية' : 'Resume/CV' },
    { value: 'package', label: isRTL ? 'باقة شاملة' : 'Complete package' },
  ];

  const budgetOptions = [
    { value: '', label: isRTL ? 'اختر الميزانية التقريبية' : 'Select approximate budget' },
    { value: 'basic', label: isRTL ? 'أقل من 1000 ريال' : 'Less than 1,000 SAR' },
    { value: 'standard', label: isRTL ? '1000 - 2500 ريال' : '1,000 - 2,500 SAR' },
    { value: 'premium', label: isRTL ? '2500 - 5000 ريال' : '2,500 - 5,000 SAR' },
    { value: 'enterprise', label: isRTL ? 'أكثر من 5000 ريال' : 'More than 5,000 SAR' },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.contact.title}
            </h2>
            <p 
              className="text-xl text-navy-600 max-w-3xl mx-auto"
              style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
            >
              {content.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8">
              <form onSubmit={handleSendEmail} className="space-y-6">
                {/* Name */}
                <div>
                  <label 
                    className={`block text-sm font-semibold text-navy-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  >
                    {content.contact.form.name} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all ${isRTL ? 'text-right' : 'text-left'}`}
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  />
                </div>

                {/* Phone & WhatsApp */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label 
                      className={`block text-sm font-semibold text-navy-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {content.contact.form.phone} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all ${isRTL ? 'text-right' : 'text-left'}`}
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    />
                  </div>
                  
                  <div>
                    <label 
                      className={`block text-sm font-semibold text-navy-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {content.contact.form.whatsapp}
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all ${isRTL ? 'text-right' : 'text-left'}`}
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label 
                    className={`block text-sm font-semibold text-navy-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  >
                    {content.contact.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all ${isRTL ? 'text-right' : 'text-left'}`}
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  />
                </div>

                {/* Service & Budget */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label 
                      className={`block text-sm font-semibold text-navy-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {content.contact.form.service} *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all ${isRTL ? 'text-right' : 'text-left'}`}
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {serviceOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label 
                      className={`block text-sm font-semibold text-navy-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {content.contact.form.budget}
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all ${isRTL ? 'text-right' : 'text-left'}`}
                      style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                    >
                      {budgetOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label 
                    className={`block text-sm font-semibold text-navy-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  >
                    {content.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all resize-none ${isRTL ? 'text-right' : 'text-left'}`}
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  ></textarea>
                </div>

                {/* Submit Buttons */}
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  >
                    <Send size={20} />
                    <span>{content.contact.form.submit}</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                  >
                    <MessageCircle size={20} />
                    <span>{content.buttons.whatsapp}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 
                  className={`text-2xl font-bold text-navy-900 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {isRTL ? 'معلومات التواصل' : 'Contact Information'}
                </h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-primary-600" />
                    </div>
                    <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                      <h4 
                        className="font-semibold text-navy-800 mb-1"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {isRTL ? 'العنوان' : 'Address'}
                      </h4>
                      <p 
                        className="text-navy-600"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {content.contact.info.address}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-amber-600" />
                    </div>
                    <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                      <h4 
                        className="font-semibold text-navy-800 mb-1"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {isRTL ? 'ساعات العمل' : 'Business Hours'}
                      </h4>
                      <p 
                        className="text-navy-600"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {content.contact.info.hours}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-green-600" />
                    </div>
                    <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                      <h4 
                        className="font-semibold text-navy-800 mb-1"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {isRTL ? 'الهاتف' : 'Phone'}
                      </h4>
                      <a 
                        href={`tel:${content.contact.info.phone}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {content.contact.info.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-purple-600" />
                    </div>
                    <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                      <h4 
                        className="font-semibold text-navy-800 mb-1"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {isRTL ? 'البريد الإلكتروني' : 'Email'}
                      </h4>
                      <a 
                        href={`mailto:${content.contact.info.email}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                        style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      >
                        {content.contact.info.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;