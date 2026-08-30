// src/app/news/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { newsArticles, getNewsBySlug } from "@/constants/news";

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    return { title: "Article non trouvé" };
  }

  return {
    title: article.title,
    description: article.shortDescription,
  };
}

export default async function ArticlePage({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* En-tête de l'article */}
      <section className="relative py-20 md:py-28 bg-slate-900 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 to-slate-900/80 z-10" />
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 mx-auto px-4">
          <Link
            href="/news"
            className="inline-flex items-center text-blue-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux actualités
          </Link>
          
          <span className={`inline-block px-3 py-1 mb-4 text-sm font-semibold rounded-full text-white ${
            article.category === "Événement" ? "bg-purple-600" : 
            article.category === "Communiqué" ? "bg-red-600" : "bg-blue-600"
          }`}>
            {article.category}
          </span>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-400" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-blue-400" />
              <span>Par {article.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
              {article.shortDescription}
            </p>
            
            {/* Le texte complet est divisé en paragraphes pour la lisibilité */}
            {article.fullDescription.split('. ').map((paragraph, index) => (
              <p key={index} className="mb-6 text-slate-700 leading-relaxed">
                {paragraph}.
              </p>
            ))}
          </div>

          {/* Section de partage */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Partager cet article</h3>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Share2 className="h-4 w-4" />
                Facebook
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                <Share2 className="h-4 w-4" />
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}