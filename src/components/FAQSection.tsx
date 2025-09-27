'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'What age groups do you serve?',
    answer: 'We offer programs for all ages, from children as young as 5 years old to adults. Our courses are designed to accommodate different skill levels and learning paces.',
  },
  {
    question: 'Do I need prior musical experience?',
    answer: 'Not at all! We have programs for complete beginners as well as advanced students. Our instructors will assess your current level and create a personalized learning plan.',
  },
  {
    question: 'What instruments do you teach?',
    answer: 'We offer instruction in guitar, piano, drums, violin, saxophone, and vocals. We also provide comprehensive music theory and art programs.',
  },
  {
    question: 'Are there group classes available?',
    answer: 'Yes, we offer both individual and group classes. Group sessions are great for building community and learning through collaboration.',
  },
  {
    question: 'How long are the courses?',
    answer: 'Course durations vary from short workshops (1-2 weeks) to long-term programs (6-12 months). We also offer flexible individual coaching sessions.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our programs.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <span className="text-2xl text-gray-500">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;