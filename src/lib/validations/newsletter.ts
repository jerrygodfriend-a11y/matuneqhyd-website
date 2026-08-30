// src/lib/validations/newsletter.ts
import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;