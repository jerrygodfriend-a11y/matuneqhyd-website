// src/constants/services.ts

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  domains: string[];
  image: string;
  gallery?: string[];
}

export const services: Service[] = [
  {
    id: "1",
    slug: "fourniture-equipements",
    title: "Fourniture d'équipements",
    shortDescription: "Solutions fiables et modernes pour équiper vos projets, avec des produits adaptés aux besoins professionnels et particuliers.",
    fullDescription: "Nous proposons des solutions fiables et modernes pour équiper vos projets, avec des produits adaptés aux besoins professionnels et particuliers. Notre catalogue couvre une large gamme d'équipements de qualité, sélectionnés pour leur durabilité et leur performance.",
    icon: "Package",
    features: ["Équipements professionnels", "Matériel pour particuliers", "Sélection de produits de qualité", "Livraison et installation", "Service après-vente", "Conseil personnalisé"],
    domains: ["Professionnels", "Particuliers", "Industrie", "Artisanat"],
    image: "/images/services/fourniture-equipements.png"
  },
  {
    id: "2",
    slug: "technologies-vertes",
    title: "Technologies vertes",
    shortDescription: "Engagez-vous pour un avenir durable grâce à nos innovations écologiques qui réduisent l'impact environnemental.",
    fullDescription: "Engagez-vous pour un avenir durable grâce à nos innovations écologiques qui réduisent l'impact environnemental. Nous concevons et déployons des solutions respectueuses de l'environnement, adaptées aux réalités du continent africain.",
    icon: "Leaf",
    features: ["Panneaux solaires photovoltaïques", "Systèmes solaires thermiques", "Éoliennes", "Biomasse et biogaz", "Efficacité énergétique", "Audit environnemental"],
    domains: ["Résidentiel", "Commercial", "Industriel", "Agricole"],
    image: "/images/services/technologies-vertes.png"
  },
  {
    id: "3",
    slug: "technologies-numeriques",
    title: "Technologies numériques",
    shortDescription: "Boostez votre performance avec des outils digitaux de pointe, pensés pour la transformation numérique des entreprises.",
    fullDescription: "Boostez votre performance avec des outils digitaux de pointe, pensés pour la transformation numérique des entreprises. Notre pôle numérique accompagne les organisations dans leur évolution digitale avec des solutions sur mesure.",
    icon: "Monitor",
    features: ["Développement web et mobile", "Applications sur mesure", "Systèmes d'information", "Cloud computing", "Cybersécurité", "Conseil en transformation digitale"],
    domains: ["Entreprises", "Administration", "Éducation", "Santé"],
    image: "/images/services/technologies-numeriques.png"
  },
  {
    id: "4",
    slug: "creation-et-innovation",
    title: "Création et Innovation",
    shortDescription: "Donnez vie à vos idées grâce à notre expertise en design, créativité et solutions innovantes.",
    fullDescription: "Donnez vie à vos idées grâce à notre expertise en design, créativité et solutions innovantes. Nous transformons vos concepts en réalités tangibles, en alliant esthétique, fonctionnalité et innovation technologique.",
    icon: "Lightbulb",
    features: ["Design graphique et branding", "Conception de produits", "Prototypage rapide", "Solutions créatives sur mesure", "Innovation technologique", "Accompagnement de projets"],
    domains: ["Startups", "Entreprises", "Artistes", "Inventeurs"],
    image: "/images/services/creation-et-innovation.png"
  },
  {
    id: "5",
    slug: "consultation-en-communication",
    title: "Consultation en Communication",
    shortDescription: "Optimisez votre image et vos messages avec nos stratégies de communication percutantes.",
    fullDescription: "Optimisez votre image et vos messages avec nos stratégies de communication percutantes. Notre équipe de consultants vous accompagne dans le développement de votre identité de marque et votre visibilité sur tous les canaux.",
    icon: "Megaphone",
    features: ["Stratégie de communication", "Marketing digital", "Relations publiques", "Gestion de l'image de marque", "Community management", "Conseil en communication"],
    domains: ["Entreprises", "Institutions", "ONG", "Particuliers"],
    image: "/images/services/consultation-communication.png"
  },
  {
    id: "6",
    slug: "production-audiovisuelle",
    title: "Production audiovisuelle",
    shortDescription: "Des vidéos et contenus visuels de qualité professionnelle pour captiver vos audiences.",
    fullDescription: "Des vidéos et contenus visuels de qualité professionnelle pour captiver vos audiences. Notre studio audiovisuel propose des services de production vidéo et photographique de haute qualité, de la conception à la post-production.",
    icon: "Video",
    features: ["Production vidéo", "Photographie professionnelle", "Couverture d'événements", "Montage et post-production", "Motion design", "Streaming live"],
    domains: ["Corporate", "Événementiel", "Publicitaire", "Documentaire"],
    image: "/images/services/production-audiovisuelle.png"
  },
  {
    id: "7",
    slug: "formation-et-education",
    title: "Formation et Éducation",
    shortDescription: "Développez vos compétences grâce à des programmes pédagogiques adaptés aux défis actuels.",
    fullDescription: "Développez vos compétences grâce à des programmes pédagogiques adaptés aux défis actuels. Notre centre de formation propose des programmes techniques, managériaux et professionnels pour développer les compétences de vos équipes.",
    icon: "GraduationCap",
    features: ["Formation technique", "Formation managériale", "Renforcement de capacités", "Coaching professionnel", "Formations certifiantes", "E-learning"],
    domains: ["Entreprises", "Individus", "Institutions", "ONG"],
    image: "/images/services/formation-education.png"
  },
  {
    id: "8",
    slug: "prestations-hydrauliques",
    title: "Prestations liées à l'Hydraulique",
    shortDescription: "Des solutions techniques pour une gestion optimale de l'eau et des infrastructures hydrauliques.",
    fullDescription: "Des solutions techniques pour une gestion optimale de l'eau et des infrastructures hydrauliques. Notre expertise couvre l'étude, la conception, l'installation et la maintenance de systèmes hydrauliques performants et durables.",
    icon: "Droplets",
    features: ["Adduction d'eau potable", "Systèmes d'irrigation", "Assainissement et drainage", "Forage et captage", "Stations de pompage", "Maintenance préventive"],
    domains: ["Eau potable", "Agriculture", "Industrie", "Collectivités"],
    image: "/images/services/prestations-hydrauliques.png"
  },
  {
    id: "9",
    slug: "construction-et-immobilier",
    title: "Construction et Immobilier",
    shortDescription: "Bâtissons ensemble vos projets immobiliers avec expertise et fiabilité.",
    fullDescription: "Bâtissons ensemble vos projets immobiliers avec expertise et fiabilité. MATUNEQHYD SARL U réalise des projets de construction de haute qualité, du bâtiment résidentiel aux infrastructures publiques, avec une équipe d'ingénieurs et d'architectes qualifiée.",
    icon: "Building",
    features: ["Construction résidentielle", "Bâtiments commerciaux", "Infrastructures publiques", "Promotion immobilière", "Gestion locative", "Suivi de chantier"],
    domains: ["Résidentiel", "Commercial", "Industriel", "Public"],
    image: "/images/services/construction-immobilier.png"
  },
  {
    id: "10",
    slug: "commerce-general",
    title: "Commerce Général",
    shortDescription: "Une large gamme de produits et services pour répondre à vos besoins quotidiens.",
    fullDescription: "Une large gamme de produits et services pour répondre à vos besoins quotidiens. MATUNEQHYD SARL U dispose d'un réseau commercial solide pour l'achat, la vente et la distribution de produits variés, avec une garantie de qualité et de traçabilité.",
    icon: "ShoppingCart",
    features: ["Importation de produits", "Distribution locale", "Vente en gros et détail", "Logistique et stockage", "Gestion de la chaîne d'approvisionnement", "Service après-vente"],
    domains: ["Alimentaire", "Équipements", "Matériaux", "Consommation"],
    image: "/images/services/commerce-general.png"
  },
  {
    id: "11",
    slug: "import-export",
    title: "Import-Export",
    shortDescription: "Nous facilitons vos échanges internationaux avec des solutions logistiques efficaces.",
    fullDescription: "Nous facilitons vos échanges internationaux avec des solutions logistiques efficaces. Nous accompagnons les entreprises dans leurs opérations d'import-export avec une expertise en logistique internationale, dédouanement et conformité réglementaire.",
    icon: "Globe",
    features: ["Importation de marchandises", "Exportation de produits locaux", "Dédouanement", "Logistique internationale", "Conseil en commerce international", "Assurance transport"],
    domains: ["Afrique de l'Ouest", "Europe", "Asie", "Amériques"],
    image: "/images/services/import-export.png"
  },
  {
    id: "12",
    slug: "representation",
    title: "Représentation",
    shortDescription: "Défendons vos intérêts et valorisons vos marques auprès de partenaires stratégiques.",
    fullDescription: "Défendons vos intérêts et valorisons vos marques auprès de partenaires stratégiques. Nous agissons en tant que représentant commercial pour des entreprises locales et internationales, en garantissant une présence forte et professionnelle sur le marché.",
    icon: "Handshake",
    features: ["Représentation commerciale", "Négociation de partenariats", "Développement de réseaux", "Valorisation de marques", "Prospection de marchés", "Accompagnement stratégique"],
    domains: ["Entreprises", "Marques internationales", "Distributeurs", "Investisseurs"],
    image: "/images/services/representation.png"
  },
  {
    id: "13",
    slug: "production-agricole",
    title: "Production et transformation agricole",
    shortDescription: "De la terre à la table, nous valorisons les produits agricoles avec des procédés modernes et durables.",
    fullDescription: "De la terre à la table, nous valorisons les produits agricoles avec des procédés modernes et durables. Nous soutenons le développement du secteur agricole au Togo en fournissant des équipements modernes, des conseils techniques et des solutions innovantes pour améliorer la productivité.",
    icon: "Wheat",
    features: ["Équipements agricoles", "Systèmes d'irrigation", "Conseil agronomique", "Transformation agroalimentaire", "Formation des agriculteurs", "Agriculture durable"],
    domains: ["Cultures vivrières", "Élevage", "Agro-industrie", "Export"],
    // ✅ CORRECTION ICI : Utilisation de la première image du diaporama comme image principale
    image: "/images/services/production-agricole (1).png",
    gallery: [
      "/images/services/production-agricole (1).png",
      "/images/services/production-agricole (2).png",
      "/images/services/production-agricole (3).png",
      "/images/services/production-agricole (4).png",
      "/images/services/production-agricole (5).png",
      "/images/services/production-agricole (6).png",
      "/images/services/production-agricole (7).png",
      "/images/services/production-agricole (8).png",
      "/images/services/production-agricole (9).png",
      "/images/services/production-agricole (10).png",
      "/images/services/production-agricole (11).png",
      "/images/services/production-agricole (12).png",
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}