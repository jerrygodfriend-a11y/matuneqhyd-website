// src/app/projects/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/constants/projects";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description: `Découvrez les projets réalisés par ${siteConfig.name} dans les domaines de l'hydraulique, la construction, le numérique et bien plus.`,
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero de la page Réalisations */}
      <section className="relative py-20 md:py-28 bg-slate-900 text-white text-center">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 to-slate-900/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
          alt="Nos réalisations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Réalisations</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Des projets concrets qui témoignent de notre savoir-faire et de notre engagement.
          </p>
        </div>
      </section>

      {/* Liste complète des projets */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-700 text-white text-xs font-semibold rounded-full">
                      {project.sector}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-col gap-2 mb-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    Voir les détails
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}