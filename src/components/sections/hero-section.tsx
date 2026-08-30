// src/components/sections/hero-section.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Arrière-plan avec overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-slate-900/80 z-10" />
        {/* Remplacez l'URL par une vraie image de vos projets plus tard */}
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Bâtiment moderne et technologies" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-200 uppercase bg-blue-800/50 rounded-full border border-blue-700/50 backdrop-blur-sm">
            {siteConfig.name}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            {siteConfig.slogan}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Votre partenaire de confiance au Togo pour l'hydraulique, la construction, 
            les technologies vertes et bien plus encore. Nous bâtissons l'avenir avec 
            expertise et innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-blue-600 text-white hover:bg-blue-700 h-12 px-8"
            >
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-white/10 text-white hover:bg-white/20 border border-white/20 h-12 px-8 backdrop-blur-sm"
            >
              Découvrir l'entreprise
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-400" />
              <span>{siteConfig.contact.phone}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-600" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Disponible pour vos projets</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}