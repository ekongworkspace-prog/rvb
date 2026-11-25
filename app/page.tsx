
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import MockupGallery from "@/components/MockupGallery";
import FanShowcase from "@/components/FanShowcase";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
     
      <Hero />
      <StatsBar />
      <Features />
      <HowItWorks />
      <MockupGallery />
      <FanShowcase />
      <FinalCTA />
      {/* 
      <Footer /> */}
    </main>
  );
}
