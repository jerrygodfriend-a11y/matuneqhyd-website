// src/app/gallery/page.tsx
"use client";

import { useState } from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { galleryItems } from "@/constants/gallery";
import { Image, Video, Folder, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Note: Pour une vraie page Next.js avec Metadata, on sépare souvent le client du serveur.
// Ici, pour simplifier le filtrage client, on garde le composant principal en "use client".
// Les moteurs de recherche indexeront quand même le contenu initial.

const tabs = [
  { id: "all", label: "Tout", icon: null },
  { id: "photo", label: "Photos", icon: Image },
  { id: "video", label: "Vidéos", icon: Video },
  { id: "album", label: "Albums", icon: Folder },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = activeTab === "all" 
    ? galleryItems 
    : galleryItems.filter((item) => item.type === activeTab);

  return (
    <div className="flex flex-col">
      {/* Hero de la page Galerie */}
      <section className="relative py-20 md:py-28 bg-slate-900 text-white text-center">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 to-slate-900/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop"
          alt="Galerie MATUNEQHYD"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Galerie</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Découvrez nos projets, nos équipes et nos réalisations en images et en vidéos.
          </p>
        </div>
      </section>

      {/* Section Filtres et Grille */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          
          {/* Onglets de filtrage */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-700 text-white shadow-lg shadow-blue-700/20"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Grille des éléments */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Image / Thumbnail */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.type === "video" ? item.thumbnail : item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay pour Vidéo */}
                    {item.type === "video" && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="h-6 w-6 text-blue-700 ml-1" fill="currentColor" />
                        </div>
                      </div>
                    )}

                    {/* Overlay pour Album */}
                    {item.type === "album" && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                          <Folder className="h-3.5 w-3.5" />
                          {item.itemCount} photos
                        </div>
                      </div>
                    )}

                    {/* Badge Catégorie */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold rounded-md shadow-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Informations */}
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 line-clamp-1 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 capitalize">
                      {item.type === "photo" ? "Photographie" : item.type === "video" ? "Vidéo" : "Album photo"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">Aucun élément trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}