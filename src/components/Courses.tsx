'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Guitar Fundamentals',
    description: 'Learn the basics of guitar playing, from holding the instrument to playing your first chords.',
    image: '/guitar.jpg',
    alt: 'Guitar course at Talanta Music and Art Space',
  },
  {
    id: 2,
    title: 'Piano Mastery',
    description: 'Master the piano with expert guidance, covering theory, technique, and repertoire.',
    image: '/image-1.jpg',
    alt: 'Piano lesson session',
  },
  {
    id: 3,
    title: 'Vocal Training',
    description: 'Develop your singing voice with professional vocal coaching and breathing techniques.',
    image: '/image-2.jpg',
    alt: 'Vocal training class',
  },
  {
    id: 4,
    title: 'Drum Beats',
    description: 'Explore rhythm and percussion with hands-on drum instruction for all levels.',
    image: '/image-3.jpg',
    alt: 'Drumming workshop',
  },
  {
    id: 5,
    title: 'Music Theory',
    description: 'Understand the language of music through comprehensive theory lessons.',
    image: '/image-4.jpg',
    alt: 'Music theory class',
  },
  {
    id: 6,
    title: 'Art and Music Fusion',
    description: 'Combine visual arts with musical expression in this unique interdisciplinary course.',
    image: '/image-5.jpg',
    alt: 'Art and music fusion workshop',
  },
];

const Courses: React.FC = () => {
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
            Our Music Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of music courses designed to nurture your talent and passion.
            From beginners to advanced, we have something for everyone.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 hover:scale-105 transform"
            >
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                <Link href="/contact" className="inline-block bg-[#f06723] text-white px-4 py-2 rounded-md hover:bg-[#d55a1f] transition-colors">
                  Learn More
                </Link>
              </div>
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
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex-shrink-0 w-72"
              >
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {course.description}
                  </p>
                  <Link href="/contact" className="inline-block bg-[#f06723] text-white px-4 py-2 rounded-md hover:bg-[#d55a1f] transition-colors">
                    Learn More
                  </Link>
                </div>
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

export default Courses;