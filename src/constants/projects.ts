// src/constants/projects.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  sector: string;
  date: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  client?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "forage-village-kpalime",
    title: "Forage et Adduction d'Eau Potable",
    sector: "Hydraulique",
    date: "Mars 2023",
    location: "Kpalimé, Togo",
    shortDescription: "Installation d'un système complet d'adduction d'eau potable pour un village de 5000 habitants.",
    fullDescription: "Ce projet a consisté en la réalisation d'un forage de 80 mètres de profondeur, l'installation d'une station de pompage solaire et la construction d'un château d'eau de 50m³. Le réseau de distribution couvre l'ensemble du village, offrant un accès à l'eau potable à plus de 5000 habitants.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop"
    ],
    client: "Mairie de Kpalimé"
  },
  {
    id: "2",
    slug: "complexe-residentiel-lome",
    title: "Complexe Résidentiel Les Palmiers",
    sector: "Construction & Immobilier",
    date: "Novembre 2023",
    location: "Lomé, Togo",
    shortDescription: "Construction d'un ensemble de 20 villas haut standing avec des matériaux écologiques.",
    fullDescription: "MATUNEQHYD a assuré la maîtrise d'œuvre et la construction de ce complexe résidentiel. Le projet intègre des panneaux solaires, un système de récupération des eaux de pluie et des matériaux de construction locaux, respectant ainsi notre engagement pour les technologies vertes.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
    ],
    client: "Promotion Immobilière Ouest-Africaine"
  },
  {
    id: "3",
    slug: "transformation-digitale-agricole",
    title: "Plateforme de Gestion Agricole",
    sector: "Solutions Numériques",
    date: "Janvier 2024",
    location: "Lomé, Togo",
    shortDescription: "Développement d'une application mobile de suivi des cultures pour les coopératives agricoles.",
    fullDescription: "Nous avons conçu et développé une solution numérique permettant aux agriculteurs de suivre l'évolution de leurs cultures, de gérer les stocks d'intrants et d'accéder à des conseils agronomiques en temps réel, même en zone à faible connectivité.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    ],
    client: "Coopérative des Producteurs du Mono"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}