// src/components/sections/contact-info.tsx
"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

// Composants SVG pour les réseaux sociaux (Lucide React ne les inclut plus)
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

const contactDetails = [
  {
    icon: Phone,
    label: "Téléphone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: siteConfig.contact.address,
    href: "#",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun - Ven: 8h00 - 18h00",
    href: "#",
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Informations de contact</h3>
        <p className="text-slate-600 leading-relaxed">
          Notre équipe est à votre disposition pour répondre à toutes vos questions 
          et vous accompagner dans vos projets. N'hésitez pas à nous contacter 
          par le moyen qui vous convient le mieux.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
              <item.icon className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">{item.label}</p>
              {item.href.startsWith("tel:") || item.href.startsWith("mailto:") ? (
                <a 
                  href={item.href}
                  className="text-lg font-semibold text-slate-900 hover:text-blue-700 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-lg font-semibold text-slate-900">{item.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Réseaux sociaux avec vraies icônes SVG */}
      <div>
        <h4 className="text-lg font-semibold text-slate-900 mb-4">Suivez-nous</h4>
        <div className="flex gap-3">
          <a
            href={siteConfig.links.facebook}
            className="w-12 h-12 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-colors text-slate-600"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            className="w-12 h-12 bg-slate-100 hover:bg-blue-700 hover:text-white rounded-lg flex items-center justify-center transition-colors text-slate-600"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.links.twitter}
            className="w-12 h-12 bg-slate-100 hover:bg-slate-900 hover:text-white rounded-lg flex items-center justify-center transition-colors text-slate-600"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}