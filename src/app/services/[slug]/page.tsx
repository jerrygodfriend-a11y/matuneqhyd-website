// src/app/services/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { services, getServiceBySlug } from "@/constants/services";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { ImageGallery } from "@/components/ui/image-gallery";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service non trouvé" };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Préparer les images pour la galerie
  const galleryImages = service.gallery && service.gallery.length > 0
    ? service.gallery
    : [service.image];

  return (
    <div className="flex flex-col">
      {/* Hero du service */}
      <section className="relative py-20 md:py-28 bg-slate-900 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 to-slate-900/80 z-10" />
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <DynamicIcon name={service.icon} className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description + Galerie */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  À propos de ce service
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* 🎯 Galerie Diaporama */}
              <ImageGallery
                images={galleryImages}
                title={`Galerie - ${service.title}`}
              />

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Nos prestations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Domaines d'intervention */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Domaines d'intervention
                </h3>
                <ul className="space-y-3">
                  {service.domains.map((domain, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <div className="w-2 h-2 bg-blue-700 rounded-full" />
                      {domain}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-blue-700 p-6 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-3">
                  Besoin de ce service ?
                </h3>
                <p className="text-blue-100 mb-6">
                  Contactez-nous pour obtenir un devis personnalisé ou plus
                  d'informations.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium bg-white text-blue-700 hover:bg-blue-50 h-11 px-6 transition-colors"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}