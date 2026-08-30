// src/lib/chatbot/search.ts
import { SITE_CONTENT } from "./site-content";

// Fonction de recherche sémantique simple
export function searchSiteContent(query: string): string {
  const normalizedQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const words = normalizedQuery.split(/\s+/);
  
  let relevantContent = "";

  // Recherche dans les services
  for (const service of SITE_CONTENT.services) {
    const serviceName = service.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const serviceDesc = service.description.toLowerCase();
    
    if (words.some(word => serviceName.includes(word) || serviceDesc.includes(word))) {
      relevantContent += `\n\n**${service.name}**\n${service.description}\nPrestations : ${service.features.join(", ")}\nDomaines : ${service.domains.join(", ")}`;
    }
  }

  // Recherche dans les réalisations
  for (const project of SITE_CONTENT.projects) {
    if (words.some(word => project.title.toLowerCase().includes(word) || project.sector.toLowerCase().includes(word))) {
      relevantContent += `\n\n**Projet : ${project.title}**\nSecteur : ${project.sector}\nLieu : ${project.location}\nDescription : ${project.description}`;
    }
  }

  // Recherche dans la FAQ
  for (const faq of SITE_CONTENT.faq) {
    if (words.some(word => faq.q.toLowerCase().includes(word) || faq.a.toLowerCase().includes(word))) {
      relevantContent += `\n\n**FAQ : ${faq.q}**\n${faq.a}`;
    }
  }

  // Recherche dans les actualités
  for (const news of SITE_CONTENT.news) {
    if (words.some(word => news.title.toLowerCase().includes(word))) {
      relevantContent += `\n\n**Actualité : ${news.title}**\n${news.summary}`;
    }
  }

  // Recherche dans les carrières
  if (words.some(word => ["emploi", "carriere", "stage", "recrutement", "travail"].includes(word))) {
    relevantContent += `\n\n**Carrières**\nOffres : ${SITE_CONTENT.careers.offers.map(o => o.title).join(", ")}\nAvantages : ${SITE_CONTENT.careers.benefits.join(", ")}\n${SITE_CONTENT.careers.apply}`;
  }

  return relevantContent || "Aucune information spécifique trouvée.";
}

// Fonction pour obtenir un résumé complet du site
export function getFullSiteSummary(): string {
  return `
INFORMATIONS COMPLÈTES SUR MATUNEQHYD SARL U :

**Entreprise** : ${SITE_CONTENT.about.mission}

**Fondateur** : ${SITE_CONTENT.about.founder.name} - ${SITE_CONTENT.about.founder.title}
Bio : ${SITE_CONTENT.about.founder.bio}
Valeurs : ${SITE_CONTENT.about.founder.values.join(", ")}

**Contact** :
- Téléphone : ${SITE_CONTENT.contact.phone}
- Email : ${SITE_CONTENT.contact.email}
- Adresse : ${SITE_CONTENT.contact.address}
- Horaires : ${SITE_CONTENT.contact.hours}

**Statistiques** : ${SITE_CONTENT.homepage.stats.experience}, ${SITE_CONTENT.homepage.stats.projects}, ${SITE_CONTENT.homepage.stats.quality}, ${SITE_CONTENT.homepage.stats.sectors}

**13 Services** :
${SITE_CONTENT.services.map(s => `- ${s.name} : ${s.description}`).join("\n")}

**Réalisations récentes** :
${SITE_CONTENT.projects.map(p => `- ${p.title} (${p.sector}, ${p.location}, ${p.date}) : ${p.description}`).join("\n")}

**Actualités** :
${SITE_CONTENT.news.map(n => `- ${n.title} [${n.category}, ${n.date}] : ${n.summary}`).join("\n")}

**Carrières** :
Offres : ${SITE_CONTENT.careers.offers.map(o => `${o.title} (${o.type})`).join(", ")}
${SITE_CONTENT.careers.apply}

**FAQ** :
${SITE_CONTENT.faq.map(f => `Q: ${f.q}\nR: ${f.a}`).join("\n\n")}
`;
}