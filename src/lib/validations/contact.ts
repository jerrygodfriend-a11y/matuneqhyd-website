// src/lib/validations/contact.ts
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z
    .string()
    .email("Veuillez entrer une adresse email valide"),
  phone: z
    .string()
    .min(8, "Le numéro de téléphone doit contenir au moins 8 chiffres")
    .regex(/^[0-9+\s()-]+$/, "Numéro de téléphone invalide"),
  subject: z
    .string()
    .min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000, "Le message ne peut pas dépasser 1000 caractères"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;