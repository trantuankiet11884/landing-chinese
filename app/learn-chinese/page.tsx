"use client";

import { HeroSection } from "@/components/home/hero-section";
import FAQSection from "@/components/learn/faq";
import LearningApproachSection from "@/components/learn/learning-approach-section";
import TeacherProfilesSection from "@/components/learn/teacher";
import TryItSection from "@/components/learn/try-it-section";
import WhyChooseSection from "@/components/learn/why-choose";

export default function LearnChinesePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <WhyChooseSection />
        <LearningApproachSection />
        <TryItSection />
        <TeacherProfilesSection />
        <FAQSection />
      </main>
    </div>
  );
}
