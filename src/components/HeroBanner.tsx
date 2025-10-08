'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/image-6.avif',
    title: 'Discover Your Musical Journey',
    description: 'Unlock your potential with our expert music instruction and personalized learning paths.',
    alt: 'Guitar lesson at Talanta Craftcode Music and Art Space'
  },
  {
    image: '/image-7.avif',
    title: 'Art Meets Music',
    description: 'Experience the perfect fusion of visual arts and musical expression in our creative space.',
    alt: 'Art and music collaboration session'
  },
  {
    image: '/image-8.avif',
    title: 'Nurture Your Talent',
    description: 'From beginners to advanced, our programs cater to all skill levels and musical interests.',
    alt: 'Music students practicing together'
  },
  {
    image: '/image-9.avif',
    title: 'Community of Artists',
    description: 'Join a vibrant community where creativity thrives and talents are celebrated.',
    alt: 'Group of artists and musicians'
  },
  {
    image: '/image-10.avif',
    title: 'Inspiring Performances',
    description: 'Witness and participate in events that showcase the best of music and art.',
    alt: 'Live music performance'
  }
];

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl drop-shadow-md max-w-2xl mx-auto mb-8">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/courses"
                    className="bg-[#f06723] text-white px-8 py-3 rounded-md hover:bg-[#d55a1f] transition-colors text-lg font-medium"
                  >
                    Explore Courses
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors text-lg font-medium"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Background Video */}
      <div className="absolute bottom-4 left-4 w-48 h-32 md:w-64 md:h-40 lg:w-80 lg:h-48 z-10">
        <video
          src="/video-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-lg shadow-lg"
          preload="metadata"
        >
          <track kind="captions" srcLang="en" label="English" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;