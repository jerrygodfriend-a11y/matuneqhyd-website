// src/components/chatbot/MATUNE.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, AlertCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  role?: "user" | "assistant" | "system";
}

// Message d'accueil épuré, sans astérisques visibles (markdown sera rendu)
const WELCOME_MESSAGE = `Bonjour et bienvenue chez **MATUNEQHYD SARL U**.

Je suis **MATUNE**, votre assistant intelligent.

Je suis à votre disposition pour vous renseigner sur nos services, nos réalisations et vous accompagner dans vos projets.

**Ce que je peux faire pour vous :**
- Vous présenter nos 13 domaines d'expertise
- Vous informer sur nos réalisations concrètes
- Vous orienter vers un devis personnalisé
- Répondre à vos questions pratiques

Par quoi souhaitez-vous commencer ?`;

const SUGGESTED_QUESTIONS = [
  "Découvrir vos services",
  "Obtenir un devis",
  "Voir vos réalisations",
  "Nous contacter",
];

export function MATUNEChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([
          {
            id: "welcome",
            text: WELCOME_MESSAGE,
            sender: "bot",
            timestamp: new Date(),
            role: "assistant",
          },
        ]);
        setIsTyping(false);
      }, 500);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
      role: "user",
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);
    setError(null);

    try {
      const apiMessages = newMessages.map((m) => ({
        role: m.role || "user",
        content: m.text,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur de connexion");
      }

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        text: data.reply,
        sender: "bot",
        timestamp: new Date(),
        role: "assistant",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error("Erreur chatbot :", err);
      setError("Erreur de connexion. Veuillez réessayer.");
      
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        text: "Je rencontre un souci technique. Appelez-nous au +228 90 30 49 35 pour une assistance immédiate.",
        sender: "bot",
        timestamp: new Date(),
        role: "assistant",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-br from-blue-600 to-blue-800 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-blue-500/40 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Ouvrir l'assistant MATUNE"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <div className="relative">
              <MessageCircle className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-600 animate-pulse" />
            </div>
            <span className="font-bold text-sm tracking-wide">MATUNE</span>
          </>
        )}
      </motion.button>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100%-3rem)] sm:w-[380px] h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header - SANS Sparkle */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/20">
                    <Bot className="h-5 w-5" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-800" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">MATUNE</h3>
                  <p className="text-[10px] text-blue-200">Assistant intelligent • En ligne</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages avec rendu Markdown */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white">
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.sender === "bot" && (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shrink-0 shadow-md">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                        msg.sender === "user"
                          ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-md"
                          : "bg-white text-slate-700 border border-slate-200 rounded-bl-md"
                      }`}
                    >
                      {/* Rendu Markdown propre */}
                      <div className="markdown-content">
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                            strong: ({ children }) => <strong className="font-bold text-blue-900">{children}</strong>,
                            ul: ({ children }) => <ul className="list-disc pl-5 mb-2 space-y-1">{children}</ul>,
                            li: ({ children }) => <li className="text-slate-700">{children}</li>,
                            h1: ({ children }) => <h1 className="text-base font-bold mb-2">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-sm font-bold mb-2">{children}</h2>,
                            h3: ({ children }) => <h3 className="text-sm font-bold mb-1">{children}</h3>,
                          }}
                        >
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                      <div className={`text-[10px] mt-1.5 text-right ${msg.sender === "user" ? "text-blue-200" : "text-slate-400"}`}>
                        {msg.timestamp.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </div>
                    {msg.sender === "user" && (
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center shrink-0">
                        <User className="h-4 w-4 text-slate-600" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2.5 justify-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-slate-200">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && !isTyping && (
              <div className="px-4 py-3 bg-white border-t border-slate-100">
                <p className="text-[10px] font-semibold text-slate-500 mb-2 uppercase tracking-wider">Suggestions :</p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors border border-blue-100 font-medium"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Erreur */}
            {error && (
              <div className="px-4 py-2 bg-red-50 border-t border-red-100 flex items-center gap-2 text-xs text-red-700">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-200 flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Votre message..."
                className="flex-1 px-4 py-2.5 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all border border-transparent focus:border-blue-300"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl flex items-center justify-center hover:from-blue-700 hover:to-blue-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0 shadow-md"
                aria-label="Envoyer"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}