// src/components/sections/vision-mission-section.tsx
"use client";

import { motion } from "framer-motion";
import { Target, Eye, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    title: "Notre Vision",
    description: "Devenir le leader référence en Afrique de l'Ouest dans l'intégration des solutions durables, alliant innovation technologique et respect de l'environnement."
  },
  {
    icon: Target,
    title: "Notre Mission",
    description: "Accompagner nos clients et partenaires avec des solutions sur mesure, fiables et performantes, tout en contribuant au développement économique local."
  },
  {
    icon: HeartHandshake,
    title: "Nos Valeurs",
    description: "Intégrité, Excellence, Innovation et Engagement citoyen sont les piliers qui guident chacune de nos actions au quotidien."
  }
];

export function VisionMissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Notre ADN</h2>
          <p className="text-lg text-slate-600">
            Depuis notre création, nous sommes guidés par des principes forts qui garantissent 
            la qualité et la pérennité de nos interventions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}