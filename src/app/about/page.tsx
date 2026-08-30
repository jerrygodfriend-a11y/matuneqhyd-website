// src/app/about/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { VisionMissionSection } from "@/components/sections/vision-mission-section";
import { FounderSection } from "@/components/sections/founder-section";
import { PartnersSection } from "@/components/sections/partners-section";

export const metadata: Metadata = {
  title: "À propos de nous",
  description: `Découvrez l'histoire, la vision et les valeurs de ${siteConfig.name}, ainsi que le mot de notre fondateur, Yves Agbevivi.`,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero simple pour la page À propos */}
      <section className="relative py-20 md:py-32 bg-slate-900 text-white text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-slate-900/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Bureau moderne" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de Nous</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            L'histoire d'une vision, l'engagement d'une équipe, et la construction d'un avenir durable au Togo.
          </p>
        </div>
      </section>

      {/* Sections de contenu */}
      <VisionMissionSection />
      <FounderSection />
      <PartnersSection />
    </div>
  );
}