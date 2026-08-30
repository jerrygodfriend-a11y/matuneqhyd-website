// src/constants/testimonials.ts

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Kofi Mensah",
    role: "Directeur Technique",
    company: "Société Immobilière de l'Ouest",
    content: "MATUNEQHYD a livré notre complexe résidentiel dans les délais avec une qualité exceptionnelle. Leur expertise en construction et technologies vertes a fait toute la différence.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Aminata Dossou",
    role: "Présidente",
    company: "Coopérative Agricole du Mono",
    content: "Grâce à leur système d'irrigation solaire, notre production a augmenté de 40%. Une équipe à l'écoute et des solutions vraiment durables.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Jean-Pierre Agbéko",
    role: "Maire",
    company: "Commune de Kpalimé",
    content: "Le projet d'adduction d'eau réalisé par MATUNEQHYD a transformé la vie de nos administrés. Professionnalisme et engagement citoyen remarquables.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  }
];