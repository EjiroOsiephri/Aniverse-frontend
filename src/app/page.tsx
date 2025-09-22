import AICompanionSelector from "@/components/landing/layout/AICompanionSelector";
import AIAvatarGenerator from "@/components/landing/layout/AIGenerator";
import AniVerse from "@/components/landing/layout/Aniverse";

export default function Home() {
  return (
    <div>
      <AniVerse />
      <AICompanionSelector />
      <AIAvatarGenerator />
    </div>
  );
}
