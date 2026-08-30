// src/components/sections/partners-section.tsx
"use client";

import { motion } from "framer-motion";
import { partners } from "@/constants/partners";

export function PartnersSection() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Ils nous font confiance
          </h2>
          <p className="text-slate-600 mt-2">
            Des partenariats solides pour des résultats exceptionnels.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="text-center">
                <p className="font-semibold text-slate-700 text-sm md:text-base">
                  {partner.name}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {partner.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}