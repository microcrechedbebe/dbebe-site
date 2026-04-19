"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CRECHE_INFO } from "@/app/lib/constants";
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from "lucide-react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4f9cf7]/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#a855f7]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 glass rounded-full text-xs font-medium text-[#fb923c] tracking-wider uppercase mb-6">
              Contact
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-space font-bold text-white mb-6">
              Rejoignez{" "}
              <span className="text-gradient-warm">l&apos;aventure</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Une place pour votre enfant ? Parlons-en.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info cards */}
          <AnimatedSection className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, label: "Adresse", value: `${CRECHE_INFO.address}, ${CRECHE_INFO.city}` },
              { icon: Phone, label: "Téléphone", value: CRECHE_INFO.phone },
              { icon: Mail, label: "Email", value: CRECHE_INFO.email },
              { icon: Clock, label: "Horaires", value: `${CRECHE_INFO.hours} — ${CRECHE_INFO.days}` },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-4 glass rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4f9cf7] to-[#a855f7] flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider">{item.label}</p>
                  <p className="text-white font-medium text-sm">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="lg:col-span-3">
            <div className="glass-strong rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4f9cf7] to-[#a855f7] flex items-center justify-center mx-auto mb-6">
                    <Sparkles size={36} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-space font-bold text-white mb-2">
                    Merci !
                  </h4>
                  <p className="text-white/50">
                    Nous vous recontacterons très vite ✨
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Progress */}
                  <div className="flex items-center gap-2 mb-8">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: step >= s ? "100%" : "0%" }}
                          transition={{ duration: 0.3 }}
                          className="h-full bg-gradient-to-r from-[#4f9cf7] to-[#a855f7] rounded-full"
                        />
                      </div>
                    ))}
                  </div>

                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Nom</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#4f9cf7] focus:ring-1 focus:ring-[#4f9cf7]/50 outline-none transition" placeholder="Votre nom" />
                        </div>
                        <div>
                          <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Prénom</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#4f9cf7] focus:ring-1 focus:ring-[#4f9cf7]/50 outline-none transition" placeholder="Votre prénom" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Email</label>
                        <input type="email" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#4f9cf7] focus:ring-1 focus:ring-[#4f9cf7]/50 outline-none transition" placeholder="votre@email.com" />
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Téléphone</label>
                        <input type="tel" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#4f9cf7] focus:ring-1 focus:ring-[#4f9cf7]/50 outline-none transition" placeholder="06 XX XX XX XX" />
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Prénom de l&apos;enfant</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#4f9cf7] focus:ring-1 focus:ring-[#4f9cf7]/50 outline-none transition" placeholder="Prénom" />
                        </div>
                        <div>
                          <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Date de naissance</label>
                          <input type="date" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#4f9cf7] focus:ring-1 focus:ring-[#4f9cf7]/50 outline-none transition" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Formule</label>
                        <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#4f9cf7] focus:ring-1 focus:ring-[#4f9cf7]/50 outline-none transition">
                          <option value="" className="bg-[#0a0e1a]">Choisir</option>
                          <option value="regulier" className="bg-[#0a0e1a]">Régulier (5j/semaine)</option>
                          <option value="partiel" className="bg-[#0a0e1a]">Partiel (2-3j/semaine)</option>
                          <option value="occasionnel" className="bg-[#0a0e1a]">Occasionnel</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                      <div>
                        <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Message (optionnel)</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#4f9cf7] focus:ring-1 focus:ring-[#4f9cf7]/50 outline-none transition resize-none" placeholder="Vos questions..." />
                      </div>
                      <div className="p-4 glass rounded-xl">
                        <p className="text-sm text-white/50">
                          📋 Certificat médical, vaccins à jour, pièce d&apos;identité et assurance responsabilité civile nécessaires à l&apos;inscription.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex justify-between mt-8">
                    {step > 1 && (
                      <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-3 rounded-xl glass text-white/60 font-medium hover:text-white hover:bg-white/10 transition-all">
                        Retour
                      </button>
                    )}
                    <div className="flex-1" />
                    {step < 3 ? (
                      <button type="button" onClick={() => setStep(step + 1)} className="px-8 py-3 bg-gradient-to-r from-[#4f9cf7] to-[#a855f7] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#4f9cf7]/20 transition-all">
                        Suivant
                      </button>
                    ) : (
                      <button type="submit" className="px-8 py-3 bg-gradient-to-r from-[#fb923c] to-[#f472b6] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#fb923c]/20 transition-all flex items-center gap-2">
                        <Send size={16} />
                        Envoyer
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
