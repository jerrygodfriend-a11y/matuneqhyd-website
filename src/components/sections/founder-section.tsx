// src/components/sections/founder-section.tsx
"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function FounderSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Côté Photo */}
            <div className="relative h-96 lg:h-auto bg-slate-200">
              <Image
                src={siteConfig.founder.imageSrc}
                alt={`Portrait de ${siteConfig.founder.name}, Fondateur de MATUNEQHYD`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 text-white lg:hidden">
                <p className="font-bold text-xl">{siteConfig.founder.name}</p>
                <p className="text-sm opacity-90">{siteConfig.founder.title}</p>
              </div>
            </div>

            {/* Côté Texte - NOUVEAU MESSAGE */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <Quote className="h-10 w-10 text-blue-200 mb-6" />
              
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Bienvenue sur le site de <span className="text-blue-700">MATUNEQHYD SARL U</span>
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Créée en <strong>2023</strong>, <strong>MATUNEQHYD SARL U</strong> est une entreprise multisectorielle qui accompagne ses clients et partenaires à travers des solutions innovantes dans des domaines variés : fourniture d'équipements, technologies vertes et numériques, création et innovation, communication, production audiovisuelle, formation, hydraulique, construction et immobilier, commerce, import-export, représentation ainsi que production et transformation agricole.
                </p>

                <p className="text-lg font-semibold text-blue-900 border-l-4 border-blue-600 pl-4 my-6">
                  Notre ambition est simple : transformer les besoins et les idées en solutions concrètes, durables et créatrices de valeur.
                </p>

                <p>
                  Nous vous invitons à découvrir notre savoir-faire, nos services et notre vision à travers ce site.
                </p>

                <p className="font-semibold">
                  Merci pour votre confiance et bienvenue chez <strong>MATUNEQHYD SARL U</strong>.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-sm font-semibold text-slate-900">
                  Le Directeur Général et Fondateur
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  {siteConfig.founder.name}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}