import AICompanionSelector from "@/components/landing/layout/AICompanionSelector";
import AIAvatarGenerator from "@/components/landing/layout/AIGenerator";
import AniVerse from "@/components/landing/layout/Aniverse";
import FeaturesSection from "@/components/landing/layout/FeaturesSection";

export default function Home() {
  return (
    <div>
      <AniVerse />
      <AICompanionSelector />
      <AIAvatarGenerator />
      <FeaturesSection />
    </div>
  );
}
