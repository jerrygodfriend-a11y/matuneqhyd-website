// src/components/sections/stats-section.tsx
"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Award, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "4", label: "Années d'expérience" },
  { icon: Briefcase, value: "3", label: "Projets réalisés" },
  { icon: Award, value: "100%", label: "Engagement qualité" },
  { icon: Globe, value: "12", label: "Domaines d'expertise" },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="h-10 w-10 text-blue-300" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200 text-sm md:text-base font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}