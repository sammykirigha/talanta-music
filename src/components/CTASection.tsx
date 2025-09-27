import React from 'react';
import Link from 'next/link';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-[#01435d] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Musical Journey?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of students who have discovered their passion for music and arts at Talanta.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-[#f06723] text-white px-8 py-3 rounded-md hover:bg-[#d55a1f] transition-colors text-lg font-medium"
          >
            Enroll Today
          </Link>
          <Link
            href="/courses"
            className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-[#01435d] transition-colors text-lg font-medium"
          >
            View Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;