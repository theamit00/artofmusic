import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]" >
      <HeroSection/>
      <FeatureSection/>
    </main>
  );
}
