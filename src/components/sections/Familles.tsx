"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, MessageCircle, Calendar, Send } from "lucide-react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Familles() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="familles" className="py-20 sm:py-28 px-4 bg-gradient-to-b from-ocean-50/30 to-white/50">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-coral-100 text-coral-700 rounded-full text-sm font-semibold mb-4">
              Familles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-ocean-900 mb-6">
              Rejoignez{" "}
              <span className="gradient-text">notre crèche</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque famille est unique. Nous construisons avec vous une relation de confiance
              pour le bien-être de votre enfant.
            </p>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Heart, title: "Bienveillance", desc: "Un accueil chaleureux et personnalisé pour chaque famille." },
              { icon: MessageCircle, title: "Communication", desc: "Un dialogue constant via l'application Meeko." },
              { icon: Calendar, title: "Flexibilité", desc: "Des formules adaptées à vos besoins." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white shadow-md border border-gray-100 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-coral-100 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-coral-500" />
                </div>
                <h3 className="font-poppins font-bold text-ocean-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10">
            <h3 className="text-2xl font-poppins font-bold text-ocean-900 mb-2 text-center">
              Demande d&apos;inscription
            </h3>
            <p className="text-gray-500 text-center mb-8">
              Remplissez ce formulaire et nous vous recontacterons rapidement.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">✅</span>
                </div>
                <h4 className="text-2xl font-poppins font-bold text-ocean-900 mb-2">
                  Merci pour votre demande !
                </h4>
                <p className="text-gray-600">
                  Nous vous recontacterons dans les plus brefs délais.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Progress bar */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: step >= s ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                        className="h-full bg-gradient-to-r from-ocean-500 to-coral-500 rounded-full"
                      />
                    </div>
                  ))}
                </div>

                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-ocean-800 mb-1">Nom du parent</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 outline-none transition" placeholder="Votre nom" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ocean-800 mb-1">Prénom</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 outline-none transition" placeholder="Votre prénom" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ocean-800 mb-1">Email</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 outline-none transition" placeholder="votre@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ocean-800 mb-1">Téléphone</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 outline-none transition" placeholder="06 XX XX XX XX" />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-ocean-800 mb-1">Prénom de l&apos;enfant</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 outline-none transition" placeholder="Prénom de l'enfant" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ocean-800 mb-1">Date de naissance</label>
                        <input type="date" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 outline-none transition" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ocean-800 mb-1">Formule souhaitée</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 outline-none transition">
                        <option value="">Choisir une formule</option>
                        <option value="regulier">Régulier (5 jours/semaine)</option>
                        <option value="partiel">Partiel (2-3 jours/semaine)</option>
                        <option value="occasionnel">Occasionnel</option>
                        <option value="urgence">Urgence</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ocean-800 mb-1">Date de début souhaitée</label>
                      <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 outline-none transition" />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-ocean-800 mb-1">Message (optionnel)</label>
                      <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 outline-none transition resize-none" placeholder="Précisez vos besoins, questions..." />
                    </div>
                    <div className="p-4 bg-ocean-50 rounded-xl">
                      <p className="text-sm text-ocean-700">
                        📋 <strong>Rappel :</strong> L&apos;inscription nécessite un certificat médical, les vaccins à jour,
                        une pièce d&apos;identité et l&apos;attestation d&apos;assurance responsabilité civile.
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                    >
                      Précédent
                    </button>
                  )}
                  <div className="flex-1" />
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      className="px-8 py-3 bg-ocean-600 text-white rounded-xl font-semibold hover:bg-ocean-700 transition-colors shadow-lg shadow-ocean-500/25"
                    >
                      Suivant
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-8 py-3 bg-coral-500 text-white rounded-xl font-semibold hover:bg-coral-600 transition-colors shadow-lg shadow-coral-500/25 flex items-center gap-2"
                    >
                      <Send size={18} />
                      Envoyer
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
