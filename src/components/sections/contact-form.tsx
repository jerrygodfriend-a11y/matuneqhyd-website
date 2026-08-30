// src/components/sections/contact-form.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simuler un envoi API (à remplacer par votre vraie API plus tard)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Données du formulaire:", data);
      
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100"
    >
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Envoyez-nous un message</h3>
      <p className="text-slate-600 mb-8">
        Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
      </p>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
        >
          <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-900">Message envoyé avec succès !</p>
            <p className="text-sm text-green-700">Nous vous répondrons très rapidement.</p>
          </div>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
        >
          <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900">Une erreur est survenue</p>
            <p className="text-sm text-red-700">Veuillez réessayer ou nous contacter par téléphone.</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nom complet */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Nom complet *
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
            placeholder="Votre nom complet"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Adresse email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
            placeholder="votre@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Téléphone *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.phone ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
            placeholder="+228 90 30 49 35"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Sujet */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
            Sujet *
          </label>
          <input
            id="subject"
            type="text"
            {...register("subject")}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.subject ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
            placeholder="Objet de votre message"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none`}
            placeholder="Décrivez votre projet ou votre demande..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center rounded-lg text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-blue-700 text-white hover:bg-blue-800 h-12 px-8 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Envoyer le message
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}