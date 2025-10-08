import type { Metadata } from 'next';
import HeroBanner from "@/components/HeroBanner";
import Courses from "@/components/Courses";
import HistoryMissionSection from "@/components/HistoryMissionSection";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Home | Talanta Craftcode Music and Art Space",
  description: "Welcome to Talanta Craftcode Music and Art Space - Nairobi's premier music and art education center. Discover our comprehensive courses, expert instructors, and vibrant community.",
  keywords: "music school Nairobi, art academy Kenya, music lessons, art classes, guitar piano violin training, creative education",
  openGraph: {
    title: "Talanta Craftcode Music and Art Space - Music & Art Education in Nairobi",
    url: "https://talantamusic.com",
    description: "Nairobi's leading music and art education center offering comprehensive training in musical instruments, vocals, and visual arts.",
    images: ["/founder-1.jpg"], // Replace with actual hero image
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <Courses />
      <HistoryMissionSection />
      <StatisticsSection />
      <TestimonialsSection />
      <ProgramsSection />
      <WhyChooseUsSection />
      <SuccessStoriesSection />
      {/* <EventsSection /> */}
      <CTASection />
      <FAQSection />
    </div>
  );
}
