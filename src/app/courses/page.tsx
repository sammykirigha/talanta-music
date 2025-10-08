import type { Metadata } from 'next';
import Courses from '@/components/Courses';

export const metadata: Metadata = {
  title: 'Courses | Talanta Craftcode Music and Art Space',
  description: 'Explore our comprehensive music courses designed for all skill levels. Learn guitar, piano, vocals, and more with expert instructors.',
  keywords: 'music courses, guitar lessons, piano lessons, vocal training, music education',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Courses />
    </div>
  );
}