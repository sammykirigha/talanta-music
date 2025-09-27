import React from 'react';
import Link from 'next/link';

const events = [
  {
    title: 'Annual Music Showcase',
    date: 'March 15, 2025',
    description: 'Join us for an evening of incredible performances by our talented students.',
    type: 'Performance',
  },
  {
    title: 'Art Workshop: Digital Illustration',
    date: 'April 5, 2025',
    description: 'Learn modern digital art techniques with professional artists.',
    type: 'Workshop',
  },
  {
    title: 'Summer Music Camp',
    date: 'June 1-30, 2025',
    description: 'Intensive summer program for young musicians aged 8-16.',
    type: 'Camp',
  },
];

const EventsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay connected with our latest workshops, performances, and special programs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-sm text-[#f06723] font-medium mb-2">{event.type}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
              <div className="text-gray-600 font-medium mb-3">{event.date}</div>
              <p className="text-gray-600 text-sm mb-4">{event.description}</p>
              <Link
                href="/contact"
                className="text-[#f06723] hover:text-[#d55a1f] font-medium text-sm"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/contact"
            className="bg-[#f06723] text-white px-8 py-3 rounded-md hover:bg-[#d55a1f] transition-colors inline-block"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;