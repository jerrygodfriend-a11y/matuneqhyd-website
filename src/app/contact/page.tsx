// src/app/contact/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactInfo } from "@/components/sections/contact-info";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description: `Contactez ${siteConfig.name} pour toute demande d'information, devis ou partenariat. Notre équipe est à votre écoute.`,
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero de la page Contact */}
      <section className="relative py-20 md:py-28 bg-slate-900 text-white text-center">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 to-slate-900/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
          alt="Communication et contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Une question ? Un projet ? Nous sommes là pour vous accompagner.
          </p>
        </div>
      </section>

      {/* Section principale avec formulaire et infos */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Section Carte Google Maps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Notre Localisation</h2>
            <p className="text-slate-600">Retrouvez-nous au cœur de Lomé, Togo</p>
          </div>
          
          {/* Carte Google Maps intégrée (gratuite, sans clé API) */}
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.18998279998!2d1.16085565!3d6.17204795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023b64c0a0a0a0a%3A0x0!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sfr!2stg!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de MATUNEQHYD SARL U à Lomé, Togo"
              className="w-full h-full"
            />
          </div>

          {/* Informations complémentaires sous la carte */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
            {/* Adresse */}
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Adresse</p>
                <p className="text-base font-semibold text-slate-900">{siteConfig.contact.address}</p>
              </div>
            </div>
            
            {/* Téléphone */}
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Téléphone</p>
                <a 
                  href={`tel:${siteConfig.contact.phone}`} 
                  className="text-base font-semibold text-slate-900 hover:text-blue-700 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Email</p>
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="text-base font-semibold text-slate-900 hover:text-blue-700 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}