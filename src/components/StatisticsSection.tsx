'use client';

import React, { useState, useEffect } from 'react';

const statistics = [
  { label: 'Students Trained', value: 5000, suffix: '+' },
  { label: 'Schools Reached', value: 100, suffix: '+' },
  { label: 'Years of Excellence', value: 10, suffix: '+' },
  { label: 'Courses Offered', value: 20, suffix: '+' },
];

const StatisticsSection: React.FC = () => {
  const [counts, setCounts] = useState(statistics.map(() => 0));

  useEffect(() => {
    const timers = statistics.map((stat, index) => {
      const increment = stat.value / 100;
      let current = 0;
      return setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timers[index]);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, 20);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="py-16 bg-[#01435d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statistics.map((stat, index) => (
            <div key={stat.label} className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-[#f06723] mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;