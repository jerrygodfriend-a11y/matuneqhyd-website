// src/constants/partners.ts

export interface Partner {
  id: string;
  name: string;
  logo?: string; // Optionnel - texte par défaut si pas de logo
  category: "Institutionnel" | "Technique" | "Commercial" | "Financier";
  website?: string;
}

export const partners: Partner[] = [
  { id: "1", name: "Ministère de l'Hydraulique", category: "Institutionnel" },
  { id: "2", name: "Chambre de Commerce du Togo", category: "Institutionnel" },
  { id: "3", name: "SolarTech Africa", category: "Technique" },
  { id: "4", name: "AgroDev International", category: "Technique" },
  { id: "5", name: "Banque Ouest-Africaine de Développement", category: "Financier" },
  { id: "6", name: "Fédération des Bâtiment du Togo", category: "Commercial" },
  { id: "7", name: "Université de Lomé", category: "Institutionnel" },
  { id: "8", name: "EcoEnergy Solutions", category: "Technique" }
];