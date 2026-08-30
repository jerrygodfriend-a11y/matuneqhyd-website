// src/app/careers/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { jobOffers } from "@/constants/careers";
import { JobApplicationForm } from "@/components/sections/job-application-form";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Carrières et Recrutement",
  description: `Rejoignez l'équipe de ${siteConfig.name}. Découvrez nos offres d'emploi, stages et opportunités de carrière au Togo.`,
};

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero de la page Carrières */}
      <section className="relative py-20 md:py-28 bg-slate-900 text-white text-center">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 to-slate-900/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
          alt="Équipe MATUNEQHYD"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rejoignez-nous</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Construisez votre avenir avec MATUNEQHYD SARL U. Nous recherchons des talents passionnés pour innover et grandir ensemble.
          </p>
        </div>
      </section>

      {/* Section Pourquoi nous rejoindre */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Développement Professionnel</h3>
              <p className="text-slate-600">Des formations continues et des opportunités d'évolution au sein de nos 12 domaines d'activité.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Impact Concret</h3>
              <p className="text-slate-600">Participez à des projets qui ont un impact réel sur le développement du Togo et de la sous-région.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Environnement Stimulant</h3>
              <p className="text-slate-600">Une culture d'entreprise basée sur l'innovation, le respect et la collaboration d'équipe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Offres et Formulaire */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Colonne de gauche : Liste des offres */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Offres d'emploi en cours</h2>
              
              <div className="space-y-6">
                {jobOffers.map((offer) => (
                  <div key={offer.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{offer.title}</h3>
                        <p className="text-blue-700 font-medium text-sm">{offer.department}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        offer.type === "CDI" ? "bg-green-100 text-green-800" :
                        offer.type === "CDD" ? "bg-blue-100 text-blue-800" :
                        "bg-purple-100 text-purple-800"
                      }`}>
                        {offer.type}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 mb-4 line-clamp-2">{offer.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {offer.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Publié le {offer.postedDate}
                      </div>
                    </div>

                    <details className="group">
                      <summary className="cursor-pointer text-sm font-semibold text-blue-700 hover:text-blue-800 list-none flex items-center gap-1">
                        Voir les prérequis
                        <span className="group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <ul className="mt-3 space-y-2">
                        {offer.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Aucune offre ne vous correspond ?</h3>
                <p className="text-blue-800 text-sm mb-4">
                  Nous sommes toujours à la recherche de talents. Envoyez-nous une candidature spontanée !
                </p>
                <p className="text-sm text-blue-700">
                  📧 <a href={`mailto:${siteConfig.contact.email}`} className="underline hover:text-blue-900">{siteConfig.contact.email}</a>
                </p>
              </div>
            </div>

            {/* Colonne de droite : Formulaire de candidature */}
            <div className="lg:sticky lg:top-24 h-fit">
              <JobApplicationForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}