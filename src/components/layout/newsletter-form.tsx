// src/components/layout/newsletter-form.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { newsletterSchema, type NewsletterFormValues } from "@/lib/validations/newsletter";

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true);
    setStatus(null);

    try {
      // Simulation d'envoi API (à remplacer par votre vraie logique plus tard)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Inscription newsletter :", data.email);
      
      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-6 pt-6 border-t border-slate-700">
      <h4 className="text-sm font-semibold text-white mb-2">Restez informé</h4>
      <p className="text-xs text-slate-400 mb-3">
        Recevez nos actualités, projets et offres exclusives.
      </p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="votre@email.com"
            {...register("email")}
            className="flex-1 px-3 py-2.5 text-sm bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shrink-0"
          >
            {isSubmitting ? (
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span className="hidden sm:inline">OK</span>
              </>
            )}
          </button>
        </div>

        {/* Messages de feedback */}
        {errors.email && (
          <p className="text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.email.message}
          </p>
        )}
        {status === "success" && (
          <p className="text-xs text-green-400 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
            <CheckCircle className="h-3 w-3" /> Merci pour votre inscription !
          </p>
        )}
        {status === "error" && (
          <p className="text-xs text-red-400 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
            <AlertCircle className="h-3 w-3" /> Une erreur est survenue, réessayez.
          </p>
        )}
      </form>
    </div>
  );
}