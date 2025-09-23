import AICompanionSelector from "@/components/landing/layout/AICompanionSelector";
import AIAvatarGenerator from "@/components/landing/layout/AIGenerator";
import AniVerse from "@/components/landing/layout/Aniverse";
import FeaturesSection from "@/components/landing/layout/FeaturesSection";
import MangaBanner from "@/components/landing/layout/MangaBanner";
import PopularSeriesSection from "@/components/landing/layout/PopularSeriesSection";

export default function Home() {
  return (
    <div>
      <AniVerse />
      <AICompanionSelector />
      <AIAvatarGenerator />
      <FeaturesSection />
      <PopularSeriesSection />
      <MangaBanner />
    </div>
  );
}
