"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaUser } from 'react-icons/fa';

const stories = [
  {
    name: 'ibrahim akolo',
    image: '/image-10.avif',
    story: 'Great classes and excellent teachers who make sure everything is well understood.It’s an amazing space to learn and grow musically.',
  },
  {
    name: 'Mr Ngash',
    image: '/image-11.avif',
    story: 'My instructor was incredibly patient and knowledgeable. He really tailored the lessons to my interests and pushed my abilities to new levels.',
  },
  {
    name: 'Simon Mweu',
    image: '/image-12.avif',
    story: 'Great music school in Nairobi where you can get help to learn how to play your dream musical instrument. I recommend it to parents for their kids and anyone interested in learning how to play and use musical instruments!',
  },
  {
    name: 'Anderson',
    image: '/image-12.avif',
    story: 'I nice place. They do commendable job',
  },
];

const SuccessStoriesSection: React.FC = () => {
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real achievements from our talented community members.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center" itemScope itemType="https://schema.org/Person">
              <div className="relative w-20 h-20 mx-auto mb-4">
                  <FaUser className="w-20 h-20 text-gray-300 rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1" itemProp="name">{story.name}</h3>
              <p className="text-gray-600 text-sm italic" itemProp="description">&quot;{story.story}&quot;</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stories.map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center flex-shrink-0 w-80" itemScope itemType="https://schema.org/Person">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  {/* use user avatar */}
                  <FaUser className="w-20 h-20 text-gray-300 rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1" itemProp="name">{story.name}</h3>
                <p className="text-gray-600 text-sm italic" itemProp="description">&quot;{story.story}&quot;</p>
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

export default SuccessStoriesSection;