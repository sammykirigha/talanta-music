import React from 'react';
import Image from 'next/image';

const HistoryMissionSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Mission Statement</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Empower aspiring musicians through comprehensive music learning. We provide personalized instruction
                in various musical instruments and genres, nurturing talents and passion to foster creativity and skill development.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Vision Statement</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Establish ourselves as a music institution recognised for excellence in music education. We aim to produce
                well-rounded musicians who contribute to the vibrant music scene.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Story</h3>
              <p className="text-lg text-gray-600">
                Founded in 2010, Talanta Music and Art Space began as a small community initiative
                to provide accessible music education. Over the years, we&#39;ve grown into a comprehensive
                center for artistic development, helping individuals of all ages discover their passion
                and unlock their talents through personalized instruction and a supportive community.
              </p>
            </div>
          </div>
          <div className="relative h-96">
            <Image
              src="/founder-1.jpg"
              alt="Talanta Music and Art Space community"
              fill
              className="object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryMissionSection;