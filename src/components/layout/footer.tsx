// src/components/layout/footer.tsx
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { NewsletterForm } from "@/components/layout/newsletter-form";

// Composants SVG pour les réseaux sociaux
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Colonne 1: À propos + Newsletter */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white">MATUNEQHYD SARL U</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {siteConfig.slogan}
              </p>
              <p className="text-sm text-slate-400">
                Sous la direction de <span className="text-white font-medium">{siteConfig.founder.name}</span>
              </p>
            </div>
            
            {/* Formulaire Newsletter intégré ici */}
            <NewsletterForm />
          </div>

          {/* Colonne 2: Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Liens Rapides</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">À propos</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Nos Services</Link></li>
              <li><Link href="/projects" className="hover:text-blue-400 transition-colors">Réalisations</Link></li>
              <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Carrières</Link></li>
            </ul>
          </div>

          {/* Colonne 3: Domaines */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Domaines</h4>
            <ul className="space-y-2.5 text-sm">
              <li>Hydraulique & Énergie</li>
              <li>Construction & Immobilier</li>
              <li>Technologies Vertes</li>
              <li>Commerce Général</li>
            </ul>
          </div>

          {/* Colonne 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contactez-nous</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-6">
              <a href={siteConfig.links.facebook} className="hover:text-blue-400 transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href={siteConfig.links.linkedin} className="hover:text-blue-400 transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href={siteConfig.links.twitter} className="hover:text-blue-400 transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}