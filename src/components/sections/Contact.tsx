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
    <section id="contact" className="py-20 sm:py-28 px-4 relative overflow-hidden bg-gradient-to-b from-white to-cream">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-ocean-200/15 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold-200/15 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-600 rounded-full text-sm font-bold mb-4">
              💌 Contact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-baloo font-bold text-ocean-800 mb-6">
              Rejoignez{" "}
              <span className="text-gradient-brand">l&apos;aventure</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Une place pour votre enfant ? Parlons-en ✨
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info cards */}
          <AnimatedSection className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, label: "Adresse", value: `${CRECHE_INFO.address}, ${CRECHE_INFO.city}`, color: "bg-ocean-100" },
              { icon: Phone, label: "Téléphone", value: CRECHE_INFO.phone, color: "bg-gold-100" },
              { icon: Mail, label: "Email", value: CRECHE_INFO.email, color: "bg-peach-50" },
              { icon: Clock, label: "Horaires", value: `${CRECHE_INFO.hours} — ${CRECHE_INFO.days}`, color: "bg-ocean-50" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <item.icon size={18} className="text-ocean-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{item.label}</p>
                  <p className="text-ocean-800 font-semibold text-sm">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ocean-300 to-gold-400 flex items-center justify-center mx-auto mb-6">
                    <Sparkles size={36} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-baloo font-bold text-ocean-800 mb-2">
                    Merci ! 🎉
                  </h4>
                  <p className="text-gray-500">
                    Nous vous recontacterons très vite !
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Progress */}
                  <div className="flex items-center gap-2 mb-8">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: step >= s ? "100%" : "0%" }}
                          transition={{ duration: 0.3 }}
                          className="h-full bg-gradient-to-r from-ocean-400 to-gold-400 rounded-full"
                        />
                      </div>
                    ))}
                  </div>

                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-semibold">Nom</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl bg-cream border border-gray-200 text-ocean-900 placeholder-gray-300 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-200 outline-none transition" placeholder="Votre nom" />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-semibold">Prénom</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl bg-cream border border-gray-200 text-ocean-900 placeholder-gray-300 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-200 outline-none transition" placeholder="Votre prénom" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-semibold">Email</label>
                        <input type="email" required className="w-full px-4 py-3 rounded-xl bg-cream border border-gray-200 text-ocean-900 placeholder-gray-300 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-200 outline-none transition" placeholder="votre@email.com" />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-semibold">Téléphone</label>
                        <input type="tel" required className="w-full px-4 py-3 rounded-xl bg-cream border border-gray-200 text-ocean-900 placeholder-gray-300 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-200 outline-none transition" placeholder="06 XX XX XX XX" />
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-semibold">Prénom de l&apos;enfant</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl bg-cream border border-gray-200 text-ocean-900 placeholder-gray-300 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-200 outline-none transition" placeholder="Prénom" />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-semibold">Date de naissance</label>
                          <input type="date" required className="w-full px-4 py-3 rounded-xl bg-cream border border-gray-200 text-ocean-900 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-200 outline-none transition" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-semibold">Formule</label>
                        <select required className="w-full px-4 py-3 rounded-xl bg-cream border border-gray-200 text-ocean-900 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-200 outline-none transition">
                          <option value="">Choisir</option>
                          <option value="regulier">Régulier (5j/semaine)</option>
                          <option value="partiel">Partiel (2-3j/semaine)</option>
                          <option value="occasionnel">Occasionnel</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-semibold">Message (optionnel)</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-cream border border-gray-200 text-ocean-900 placeholder-gray-300 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-200 outline-none transition resize-none" placeholder="Vos questions..." />
                      </div>
                      <div className="p-4 bg-ocean-50 rounded-xl">
                        <p className="text-sm text-ocean-700">
                          📋 Certificat médical, vaccins à jour, pièce d&apos;identité et assurance responsabilité civile nécessaires à l&apos;inscription.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex justify-between mt-8">
                    {step > 1 && (
                      <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-3 rounded-xl border border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 transition-all">
                        Retour
                      </button>
                    )}
                    <div className="flex-1" />
                    {step < 3 ? (
                      <button type="button" onClick={() => setStep(step + 1)} className="px-8 py-3 bg-gradient-to-r from-ocean-400 to-ocean-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-ocean-400/25 transition-all">
                        Suivant
                      </button>
                    ) : (
                      <button type="submit" className="px-8 py-3 bg-gradient-to-r from-gold-400 to-gold-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-gold-400/25 transition-all flex items-center gap-2">
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
