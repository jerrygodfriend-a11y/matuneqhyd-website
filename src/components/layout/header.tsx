// src/components/layout/header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/constants/services";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Réalisations", href: "/projects" },
  { name: "Actualités", href: "/news" },
  { name: "Galerie", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Carrières", href: "/careers" },
];

const buttonClass =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-blue-700 text-white hover:bg-blue-800 h-11 px-5 whitespace-nowrap";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <Image
            src="/images/logo-matuneqhyd.png"
            alt="MATUNEQHYD - Des solutions durables, une vision d'avenir"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden xl:flex items-center gap-4">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors whitespace-nowrap"
              >
                {link.name}
                {link.name === "Services" && <ChevronDown className="ml-1 h-3.5 w-3.5" />}
              </Link>

              {/* Sous-menu généré dynamiquement à partir de services.ts */}
              {link.name === "Services" && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-[80vh] overflow-y-auto">
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact & CTA */}
        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors whitespace-nowrap"
          >
            <Phone className="mr-1.5 h-4 w-4" />
            {siteConfig.contact.phone}
          </a>
          <Link href="/contact" className={buttonClass}>
            Demander un devis
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          className="xl:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Ouvrir le menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="xl:hidden border-t bg-white px-4 py-4 space-y-2 animate-in slide-in-from-top-5 duration-200 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 px-3 py-2.5 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Sous-menu mobile pour les services */}
          <div className="pl-4 border-l-2 border-slate-200 ml-3 mt-2 space-y-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nos Services</p>
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="block text-sm text-slate-600 hover:text-blue-700 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {service.title}
              </Link>
            ))}
          </div>

          <div className="pt-4 mt-2 border-t border-slate-100">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center text-base font-semibold text-blue-700 mb-4 px-3">
              <Phone className="mr-2 h-5 w-5" />
              {siteConfig.contact.phone}
            </a>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={`${buttonClass} w-full text-center`}>
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}