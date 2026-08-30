// src/components/sections/news-section.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { newsArticles } from "@/constants/news";

export function NewsSection() {
  // On affiche les 3 derniers articles
  const recentNews = newsArticles.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Actualités & Événements
          </h2>
          <p className="text-lg text-slate-600">
            Restez informé des dernières nouvelles, de nos projets et de la vie de l'entreprise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentNews.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors bg-slate-900 text-white hover:bg-slate-800 h-12 px-8"
          >
            Voir toutes les actualités
          </Link>
        </div>
      </div>
    </section>
  );
}