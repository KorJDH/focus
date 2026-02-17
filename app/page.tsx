import { FeatureCards } from "@/components/sections/feature-cards";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { HeroSection } from "@/components/sections/hero";
import { JoinBanner } from "@/components/sections/join-banner";
import { homeGalleryItems } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <GalleryPreview items={homeGalleryItems} />
      <JoinBanner />
    </>
  );
}
