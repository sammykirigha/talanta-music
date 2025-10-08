import HeroBanner from "@/components/HeroBanner";
import Courses from "@/components/Courses";
import HistoryMissionSection from "@/components/HistoryMissionSection";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import EventsSection from "@/components/EventsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

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
