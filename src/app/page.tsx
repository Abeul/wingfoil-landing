import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProblemSection from "@/components/ProblemSection";
import MethodSection from "@/components/MethodSection";
import FlowSection from "@/components/FlowSection";
import VideoSection from "@/components/VideoSection";
import AudienceSection from "@/components/AudienceSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#020617] overflow-hidden antialiased">
      {/* 
        Abaixo estão todas as seções que compõem a landing page do curso da Manu La Porta.
        Cada seção é autocontida e não interfere no header ou footer global do tema WordPress pai,
        funcionando de forma modular quando integrada.
      */}
      <HeroSection />
      <AboutSection />
      <ProblemSection />
      <MethodSection />
      <FlowSection />
      <VideoSection />
      <AudienceSection />
      <DeliverablesSection />
      <CtaSection />
    </main>
  );
}
