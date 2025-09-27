'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reasons = [
  {
    icon: '🎵',
    title: 'Expert Instructors',
    description: 'Learn from certified professionals with years of experience in music and arts education.',
  },
  {
    icon: '🎯',
    title: 'Personalized Learning',
    description: 'Tailored programs that adapt to your skill level and learning pace.',
  },
  {
    icon: '🌟',
    title: 'Creative Environment',
    description: 'A supportive community that fosters creativity and artistic expression.',
  },
  {
    icon: '🏆',
    title: 'Proven Results',
    description: 'Track record of student success and achievements in competitions and performances.',
  },
  {
    icon: '📚',
    title: 'Comprehensive Curriculum',
    description: 'Well-structured courses covering theory, practice, and performance skills.',
  },
  {
    icon: '🤝',
    title: 'Community Focus',
    description: 'Building connections between students, instructors, and the local arts community.',
  },
];

const WhyChooseUsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Talanta?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what sets us apart in music and arts education.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300 hover:scale-105 transform">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300 flex-shrink-0 w-72">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;