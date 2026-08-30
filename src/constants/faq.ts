// src/constants/faq.ts

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "Quels sont les domaines d'activité de MATUNEQHYD ?",
    answer: "Nous intervenons dans 12 secteurs : Hydraulique, Technologies Vertes, Solutions Numériques, Construction, Immobilier, Agriculture, Communication, Audiovisuel, Commerce Général, Import-Export, Formation et Fourniture d'Équipements.",
    category: "Général"
  },
  {
    id: "2",
    question: "Comment demander un devis ?",
    answer: "Vous pouvez remplir le formulaire de contact sur notre site, nous appeler au +228 90 30 49 35, ou nous envoyer un email à contact@matuneqhyd.tn. Notre équipe vous répond sous 24h.",
    category: "Devis"
  },
  {
    id: "3",
    question: "Intervenez-vous en dehors du Togo ?",
    answer: "Oui, nous intervenons principalement au Togo mais aussi dans toute la sous-région Ouest-Africaine (Bénin, Ghana, Burkina Faso, Côte d'Ivoire) pour nos projets d'envergure.",
    category: "Général"
  },
  {
    id: "4",
    question: "Proposez-vous des solutions de financement ?",
    answer: "Nous travaillons avec plusieurs partenaires financiers et pouvons vous accompagner dans le montage de dossiers de financement pour vos projets, notamment dans le domaine des énergies renouvelables.",
    category: "Financement"
  },
  {
    id: "5",
    question: "Quels sont vos délais d'intervention ?",
    answer: "Les délais varient selon la nature du projet. Une étude préliminaire est réalisée sous 7 à 15 jours. Pour les projets de construction, nous établissons un planning détaillé lors de la phase de conception.",
    category: "Projets"
  },
  {
    id: "6",
    question: "Comment postuler à une offre d'emploi ?",
    answer: "Rendez-vous sur notre page Carrières où vous trouverez nos offres en cours. Vous pouvez également envoyer une candidature spontanée avec votre CV à l'adresse contact@matuneqhyd.tn.",
    category: "Carrières"
  }
];