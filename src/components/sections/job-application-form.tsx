// src/components/sections/job-application-form.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Upload } from "lucide-react";

// Schéma de validation pour la candidature
const jobApplicationSchema = z.object({
  fullName: z.string().min(2, "Le nom complet est requis"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  jobTitle: z.string().min(1, "Veuillez sélectionner un poste"),
  coverLetter: z.string().min(20, "Le message doit contenir au moins 20 caractères"),
  // Le fichier est optionnel dans le schéma Zod, mais géré séparément
});

type JobApplicationValues = z.infer<typeof jobApplicationSchema>;

interface JobApplicationFormProps {
  preselectedJob?: string;
}

export function JobApplicationForm({ preselectedJob }: JobApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobApplicationValues>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      jobTitle: preselectedJob || "",
    },
  });

  const onSubmit = async (data: JobApplicationValues) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulation d'envoi API (à remplacer par votre vraie logique d'upload + envoi)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Candidature envoyée:", { ...data, cv: fileName });
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100"
    >
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Postuler à cette offre</h3>
      <p className="text-slate-600 mb-8">
        Remplissez le formulaire ci-dessous et joignez votre CV au format PDF.
      </p>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
        >
          <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-900">Candidature envoyée avec succès !</p>
            <p className="text-sm text-green-700">Notre équipe RH vous contactera prochainement.</p>
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
            <p className="text-sm text-red-700">Veuillez réessayer ou nous contacter directement par email.</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nom complet */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
            Nom complet *
          </label>
          <input
            id="fullName"
            type="text"
            {...register("fullName")}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.fullName ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
            placeholder="Votre nom et prénom"
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
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
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Poste concerné */}
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-slate-700 mb-2">
            Poste concerné *
          </label>
          <select
            id="jobTitle"
            {...register("jobTitle")}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.jobTitle ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors bg-white`}
          >
            <option value="">Sélectionnez un poste</option>
            <option value="Candidature spontanée">Candidature spontanée</option>
            <option value="Ingénieur Hydraulicien">Ingénieur Hydraulicien</option>
            <option value="Développeur Full Stack">Développeur Full Stack</option>
            <option value="Stagiaire en Marketing Digital">Stagiaire en Marketing Digital</option>
          </select>
          {errors.jobTitle && <p className="mt-1 text-sm text-red-600">{errors.jobTitle.message}</p>}
        </div>

        {/* Upload CV */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Votre CV (PDF, Max 5Mo) *
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-3 text-slate-400" />
                <p className="mb-2 text-sm text-slate-500">
                  <span className="font-semibold">Cliquez pour uploader</span> ou glissez-déposez
                </p>
                <p className="text-xs text-slate-500">PDF uniquement</p>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".pdf"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    if (file.size > 5 * 1024 * 1024) {
                      alert("Le fichier est trop volumineux (Max 5Mo)");
                      e.target.value = "";
                      setFileName("");
                    } else {
                      setFileName(file.name);
                    }
                  }
                }}
              />
            </label>
          </div>
          {fileName && (
            <p className="mt-2 text-sm text-green-600 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" /> {fileName}
            </p>
          )}
        </div>

        {/* Lettre de motivation / Message */}
        <div>
          <label htmlFor="coverLetter" className="block text-sm font-medium text-slate-700 mb-2">
            Message ou lettre de motivation *
          </label>
          <textarea
            id="coverLetter"
            rows={4}
            {...register("coverLetter")}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.coverLetter ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none`}
            placeholder="Présentez-vous brièvement et expliquez pourquoi vous souhaitez rejoindre MATUNEQHYD..."
          />
          {errors.coverLetter && <p className="mt-1 text-sm text-red-600">{errors.coverLetter.message}</p>}
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
              Envoyer ma candidature
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}