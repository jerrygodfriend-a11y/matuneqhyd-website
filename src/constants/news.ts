// src/constants/news.ts

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: "Article" | "Communiqué" | "Événement";
  date: string;
  author: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "lancement-nouvelle-division-agricole",
    title: "Lancement de notre nouvelle division Agriculture Durable",
    category: "Communiqué",
    date: "15 Février 2024",
    author: "Yves Agbevivi",
    shortDescription: "MATUNEQHYD SARL U étend ses activités avec une nouvelle branche dédiée à l'agriculture moderne et durable au Togo.",
    fullDescription: "Nous sommes fiers d'annoncer le lancement officiel de notre division Agriculture Durable. Cette nouvelle branche vise à accompagner les coopératives et les agriculteurs togolais dans la modernisation de leurs pratiques. Nous proposerons des équipements d'irrigation solaire, des formations aux techniques agroécologiques et un accès facilité aux intrants de qualité. Cette initiative s'inscrit dans notre vision de contribuer à la souveraineté alimentaire de notre pays.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "2",
    slug: "partenariat-strategique-energie-solaire",
    title: "Partenariat stratégique pour l'électrification rurale",
    category: "Article",
    date: "28 Janvier 2024",
    author: "Direction Technique",
    shortDescription: "Signature d'un accord majeur avec un leader européen du solaire pour déployer des kits solaires dans les zones rurales.",
    fullDescription: "Dans le cadre de notre engagement pour les technologies vertes, MATUNEQHYD a signé un partenariat stratégique avec un fournisseur européen de premier plan. Cet accord nous permettra de déployer des solutions d'électrification hors réseau (off-grid) à des coûts compétitifs. Les premiers projets pilotes débuteront dans la région des Plateaux au cours du deuxième trimestre 2024.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: "3",
    slug: "forum-de-l-emploi-lome-2024",
    title: "Présence de MATUNEQHYD au Forum de l'Emploi de Lomé",
    category: "Événement",
    date: "10 Mars 2024",
    author: "Ressources Humaines",
    shortDescription: "Retrouvez notre équipe au stand B12 pour découvrir nos offres de stage et d'emploi, et échanger sur nos métiers.",
    fullDescription: "MATUNEQHYD SARL U sera présente au prochain Forum de l'Emploi et de l'Entrepreneuriat de Lomé. Ce sera l'occasion pour nous de rencontrer les jeunes talents togolais, de présenter notre culture d'entreprise et de recruter pour nos différents départements (Hydraulique, Numérique, Construction). Nous organiserons également des mini-conférences sur les métiers de demain dans le bâtiment et les énergies renouvelables.",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop"
  }
];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}