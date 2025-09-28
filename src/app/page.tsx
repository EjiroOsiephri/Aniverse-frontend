import AICompanionOrb from "@/components/dashboard/layout/AiGuide";
import AICompanionSelector from "@/components/landing/layout/AICompanionSelector";
import AIAvatarGenerator from "@/components/landing/layout/AIGenerator";
import AnimeAnnouncementsCarousel from "@/components/landing/layout/AnimeAnnouncements";
import AniVerse from "@/components/landing/layout/Aniverse";
import FanTestimonialsSection from "@/components/landing/layout/FanTestimonialSection";
import FeaturesSection from "@/components/landing/layout/FeaturesSection";
import AniVerseFooter from "@/components/landing/layout/Footer";
import RotatingHeroBanner from "@/components/landing/layout/HeroBanner";
import MangaBanner from "@/components/landing/layout/MangaBanner";
import PopularSeriesSection from "@/components/landing/layout/PopularSeriesSection";

export default function Home() {
  return (
    <div>
      <AICompanionOrb />
      <AniVerse />
      <AICompanionSelector />
      <AIAvatarGenerator />
      <FeaturesSection />
      <PopularSeriesSection />
      <MangaBanner />
      <AnimeAnnouncementsCarousel />
      <FanTestimonialsSection />
      <RotatingHeroBanner />
      <AniVerseFooter />
    </div>
  );
}
