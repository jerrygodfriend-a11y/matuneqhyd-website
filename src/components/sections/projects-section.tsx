// src/components/sections/projects-section.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { projects } from "@/constants/projects";

export function ProjectsSection() {
  // On affiche seulement les 3 derniers projets sur la page d'accueil
  const recentProjects = projects.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-lg text-slate-600">
            Découvrez quelques-uns des projets qui témoignent de notre expertise 
            et de notre engagement envers l'excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300"
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
                  Voir le projet
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors bg-slate-900 text-white hover:bg-slate-800 h-12 px-8"
          >
            Voir toutes nos réalisations
          </Link>
        </div>
      </div>
    </section>
  );
}