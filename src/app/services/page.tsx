// src/app/services/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ServicesListSection } from "@/components/sections/services-list-section";

export const metadata: Metadata = {
  title: "Nos Services",
  description: `Découvrez les 12 domaines d'expertise de ${siteConfig.name} : hydraulique, construction, technologies vertes, numérique, et bien plus encore.`,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero de la page Services */}
      <section className="relative py-20 md:py-28 bg-slate-900 text-white text-center">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 to-slate-900/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
          alt="Services professionnels"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Une expertise multisectorielle au service de votre réussite.
          </p>
        </div>
      </section>

      {/* Liste des services */}
      <ServicesListSection />
    </div>
  );
}