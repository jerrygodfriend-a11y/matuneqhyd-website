// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { SYSTEM_PROMPT } from "@/lib/chatbot/system-prompt";
import { searchSiteContent } from "@/lib/chatbot/search";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Format de messages invalide" },
        { status: 400 }
      );
    }

    if (!process.env.GROQ_API_KEY) {
      console.error(" GROQ_API_KEY manquante");
      return NextResponse.json(
        { error: "Configuration incomplète" },
        { status: 500 }
      );
    }

    // Récupérer le dernier message utilisateur pour faire une recherche contextuelle
    const lastUserMessage = messages.filter((m: any) => m.role === "user").pop();
    let contextualInfo = "";
    
    if (lastUserMessage) {
      contextualInfo = searchSiteContent(lastUserMessage.content);
    }

    // Appel API Groq avec contexte enrichi
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { 
          role: "system", 
          content: SYSTEM_PROMPT 
        },
        ...messages.map((m: any) => ({
          role: m.role || "user",
          content: m.content || m.text || "",
        })),
        // Ajouter les informations contextuelles si disponibles
        ...(contextualInfo ? [{
          role: "system" as const,
          content: `Informations contextuelles pertinentes pour cette conversation :\n${contextualInfo}`
        }] : []),
      ],
      temperature: 0.7,
      max_tokens: 600,
    });

    const reply = completion.choices[0]?.message?.content || "Désolé, je n'ai pas pu répondre.";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Erreur Groq :", error);
    return NextResponse.json(
      { error: error.message || "Erreur serveur" },
      { status: 500 }
    );
  }
}