// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MATUNEChatbot } from "@/components/chatbot/MATUNE"; // ✅ IMPORT DU CHATBOT

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Hydraulique", "Technologies vertes", "Construction", "Togo", "MATUNEQHYD", "Yves Agbevivi"],
  authors: [{ name: siteConfig.founder.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "fr_TG",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteConfig.name,
  "image": siteConfig.ogImage,
  "description": siteConfig.description,
  "telephone": siteConfig.contact.phone,
  "email": siteConfig.contact.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lomé",
    "addressCountry": "TG",
  },
  "founder": {
    "@type": "Person",
    "name": siteConfig.founder.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-700 focus:text-white focus:rounded-md"
        >
          Aller au contenu principal
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Header />

        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>

        <Footer />

        {/* ✅ CHATBOT MATUNE - Visible sur toutes les pages */}
        <MATUNEChatbot />
      </body>
    </html>
  );
}