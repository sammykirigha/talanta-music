import React from 'react';
import Link from 'next/link';

const programs = [
  {
    title: 'School Programs',
    description: 'Tailored music and art education packages for institutions. Comprehensive curriculum with certified instructors.',
    features: ['Customized curriculum', 'Group sessions', 'Progress tracking', 'Certification'],
    cta: 'Learn More',
    link: '/courses',
  },
  {
    title: 'Individual Programs',
    description: 'Flexible one-on-one and small group learning for personal development. Choose your pace and focus areas.',
    features: ['Personalized schedule', 'One-on-one coaching', 'Flexible timing', 'Project-based learning'],
    cta: 'Enroll Now',
    link: '/contact',
  },
];

const ProgramsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the program that best fits your learning style and goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <ul className="mb-6 space-y-2">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-[#f06723] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={program.link}
                className="bg-[#f06723] text-white px-6 py-3 rounded-md hover:bg-[#d55a1f] transition-colors inline-block"
              >
                {program.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;