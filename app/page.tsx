import { BlogSection } from "@/components/home/blog-section";
import { CommunitySection } from "@/components/home/comunity-section";
import { CTASection } from "@/components/home/cta-section";
import { DownloadAppSection } from "@/components/home/download-app-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhoItsForSection } from "@/components/home/who-it-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CommunitySection />
        <TestimonialsSection />
        <CTASection />
        <BlogSection />
        <DownloadAppSection />
        <WhoItsForSection />
      </main>
    </div>
  );
}
