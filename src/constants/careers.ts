// src/constants/careers.ts

export interface JobOffer {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "CDI" | "CDD" | "Stage";
  description: string;
  requirements: string[];
  postedDate: string;
}

export const jobOffers: JobOffer[] = [
  {
    id: "1",
    title: "Ingénieur Hydraulicien",
    department: "Hydraulique & Énergie",
    location: "Lomé, Togo",
    type: "CDI",
    description: "Nous recherchons un ingénieur hydraulicien expérimenté pour superviser nos projets d'adduction d'eau et d'assainissement.",
    requirements: [
      "Diplôme d'ingénieur en hydraulique ou génie civil",
      "Minimum 3 ans d'expérience sur des projets similaires",
      "Maîtrise des logiciels de conception (AutoCAD, Covadis)",
      "Disponibilité pour des déplacements sur le terrain"
    ],
    postedDate: "10 Février 2024"
  },
  {
    id: "2",
    title: "Développeur Full Stack",
    department: "Solutions Numériques",
    location: "Lomé, Togo (Hybride)",
    type: "CDI",
    description: "Rejoignez notre pôle numérique pour développer des applications web et mobiles innovantes pour nos clients.",
    requirements: [
      "Maîtrise de React, Next.js et Node.js",
      "Expérience avec TypeScript et les bases de données SQL/NoSQL",
      "Capacité à travailler en méthode Agile",
      "Bonnes compétences en communication"
    ],
    postedDate: "15 Février 2024"
  },
  {
    id: "3",
    title: "Stagiaire en Marketing Digital",
    department: "Communication",
    location: "Lomé, Togo",
    type: "Stage",
    description: "Stage de 6 mois pour assister l'équipe communication dans la gestion des réseaux sociaux et la création de contenu.",
    requirements: [
      "En cours de formation en Marketing, Communication ou Digital",
      "Connaissance des outils Canva, Adobe Suite est un plus",
      "Créativité et esprit d'équipe",
      "Rédaction impeccable en français"
    ],
    postedDate: "20 Février 2024"
  }
];