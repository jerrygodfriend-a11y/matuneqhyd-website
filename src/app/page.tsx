// src/app/page.tsx
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { SectorsSection } from "@/components/sections/sectors-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { NewsSection } from "@/components/sections/news-section";
import { FaqSection } from "@/components/sections/faq-section";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* 1. Bannière principale (Hero) */}
      <HeroSection />
      
      {/* 2. Chiffres clés */}
      <StatsSection />
      
      {/* 3. Domaines d'expertise */}
      <SectorsSection />
      
      {/* 4. Réalisations récentes */}
      <ProjectsSection />
      
      {/* 5. Témoignages clients */}
      <TestimonialsSection />
      
      {/* 6. Partenaires */}
      <PartnersSection />
      
      {/* 7. Actualités */}
      <NewsSection />
      
      {/* 8. FAQ */}
      <FaqSection />
      
      {/* 9. Appel à l'action final */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Contactez dès maintenant l'équipe de MATUNEQHYD SARL U pour une étude personnalisée 
            et un devis gratuit adapté à vos besoins.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-blue-600 text-white hover:bg-blue-700 h-12 px-8"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}