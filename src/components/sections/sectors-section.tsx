// src/components/sections/sectors-section.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/constants/services";
import { DynamicIcon } from "@/components/ui/dynamic-icon";

export function SectorsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nos Domaines d'Expertise
          </h2>
          <p className="text-lg text-slate-600">
            Une polyvalence au service de votre réussite. Découvrez nos 13 secteurs 
            d'intervention et la valeur ajoutée que nous apportons à chaque projet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <DynamicIcon name={sector.icon} className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                {sector.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
                {sector.shortDescription}
              </p>
              <Link 
                href={`/services/${sector.slug}`}
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors mt-auto"
              >
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}