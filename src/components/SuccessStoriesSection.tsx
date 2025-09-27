import React from 'react';
import Image from 'next/image';

const stories = [
  {
    name: 'Alex Thompson',
    achievement: 'Won National Music Competition',
    image: '/image-10.avif',
    story: 'Started as a beginner and now performing professionally. Talanta gave me the foundation I needed.',
  },
  {
    name: 'Maria Garcia',
    achievement: 'Art Exhibition Feature',
    image: '/image-11.avif',
    story: 'The art programs helped me develop my unique style. My work has been featured in local galleries.',
  },
  {
    name: 'David Kim',
    achievement: 'Music Production Career',
    image: '/image-12.avif',
    story: 'From learning basic chords to producing my own tracks. The journey started here at Talanta.',
  },
];

const SuccessStoriesSection: React.FC = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover rounded-full"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{story.name}</h3>
              <p className="text-[#f06723] font-medium mb-3">{story.achievement}</p>
              <p className="text-gray-600 text-sm italic">&quot;{story.story}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;