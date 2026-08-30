// src/app/projects/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Building2 } from "lucide-react";
import { projects, getProjectBySlug } from "@/constants/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projet non trouvé" };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Hero du projet */}
      <section className="relative py-20 md:py-32 bg-slate-900 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 to-slate-900/80 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 mx-auto px-4">
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux réalisations
          </Link>
          <span className="inline-block px-3 py-1 mb-4 bg-blue-600 text-white text-sm font-semibold rounded-full">
            {project.sector}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          
          <div className="flex flex-wrap gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-400" />
              <span>{project.date}</span>
            </div>
            {project.client && (
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-blue-400" />
                <span>Client : {project.client}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                À propos du projet
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                {project.fullDescription}
              </p>

              {/* Galerie */}
              {project.gallery.length > 1 && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Galerie photos
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((img, index) => (
                      <div key={index} className="rounded-xl overflow-hidden shadow-md">
                        <img
                          src={img}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Fiche technique
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Secteur</span>
                    <span className="font-semibold text-slate-900">{project.sector}</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Localisation</span>
                    <span className="font-semibold text-slate-900">{project.location}</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Date</span>
                    <span className="font-semibold text-slate-900">{project.date}</span>
                  </li>
                  {project.client && (
                    <li className="flex justify-between pb-2">
                      <span className="text-slate-500">Client</span>
                      <span className="font-semibold text-slate-900">{project.client}</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="bg-blue-700 p-6 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-3">
                  Un projet similaire ?
                </h3>
                <p className="text-blue-100 mb-6">
                  Contactez-nous pour discuter de vos besoins et obtenir une étude personnalisée.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium bg-white text-blue-700 hover:bg-blue-50 h-11 px-6 transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}