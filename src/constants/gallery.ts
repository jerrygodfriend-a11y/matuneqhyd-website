// src/constants/gallery.ts

export interface GalleryItem {
  id: string;
  type: "photo" | "video" | "album";
  title: string;
  category: string;
  src: string; // URL de l'image ou de la vidéo
  thumbnail?: string; // Pour les vidéos ou albums
  itemCount?: number; // Nombre d'éléments dans un album
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "photo",
    title: "Chantier de construction Lomé",
    category: "Construction",
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    type: "photo",
    title: "Installation de panneaux solaires",
    category: "Technologies Vertes",
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    type: "video",
    title: "Présentation de l'entreprise 2024",
    category: "Corporate",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Exemple d'embed YouTube
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "4",
    type: "album",
    title: "Équipe MATUNEQHYD",
    category: "Ressources Humaines",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    itemCount: 12
  },
  {
    id: "5",
    type: "photo",
    title: "Système d'irrigation agricole",
    category: "Agriculture",
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "6",
    type: "album",
    title: "Inauguration du nouveau siège",
    category: "Événementiel",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    itemCount: 24
  },
  {
    id: "7",
    type: "video",
    title: "Témoignage client : Projet Hydraulique",
    category: "Hydraulique",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "8",
    type: "photo",
    title: "Formation des techniciens",
    category: "Formation",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
  }
];