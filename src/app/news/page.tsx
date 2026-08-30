// src/app/news/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { newsArticles } from "@/constants/news";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Actualités et Événements",
  description: `Suivez les dernières nouvelles, communiqués et événements de ${siteConfig.name}.`,
};

export default function NewsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero de la page Actualités */}
      <section className="relative py-20 md:py-28 bg-slate-900 text-white text-center">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 to-slate-900/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
          alt="Actualités"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Restez informé de nos dernières avancées, projets et événements.
          </p>
        </div>
      </section>

      {/* Liste complète des articles */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${
                      article.category === "Événement" ? "bg-purple-600" : 
                      article.category === "Communiqué" ? "bg-red-600" : "bg-blue-600"
                    }`}>
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      <span>{article.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-3 flex-1">
                    {article.shortDescription}
                  </p>

                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors mt-auto"
                  >
                    Lire la suite
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}