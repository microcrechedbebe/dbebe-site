"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FINANCIAL_INFO, DOCUMENTS_LINKS } from "@/app/lib/constants";
import { FileText, ExternalLink, Info } from "lucide-react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Tarifs() {
  return (
    <section id="tarifs" className="py-16 sm:py-24 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-200/15 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-600 rounded-full text-xs sm:text-sm font-bold mb-3">
              💰 Tarifs & financement
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-baloo font-bold text-ocean-800 mb-4">
              Un mode de garde{" "}
              <span className="text-gradient-brand">accessible</span>
            </h2>
            <p className="text-base text-gray-500 max-w-lg mx-auto">
              Des aides existent pour réduire significativement le coût de la garde.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {/* CMG */}
          <AnimatedSection>
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-ocean-100 card-playful"
            >
              <div className="w-10 h-10 rounded-xl bg-ocean-100 flex items-center justify-center mb-4">
                <span className="text-xl">🏦</span>
              </div>
              <h3 className="font-baloo font-bold text-lg text-ocean-800 mb-2">{FINANCIAL_INFO.cmg.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{FINANCIAL_INFO.cmg.description}</p>
            </motion.div>
          </AnimatedSection>

          {/* Crédit d'impôt */}
          <AnimatedSection>
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gold-100 card-playful"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center mb-4">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="font-baloo font-bold text-lg text-ocean-800 mb-2">{FINANCIAL_INFO.taxCredit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{FINANCIAL_INFO.taxCredit.description}</p>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Mention tarif */}
        <AnimatedSection>
          <div className="flex items-start gap-3 p-4 bg-gold-50 rounded-xl border border-gold-100 mb-8">
            <Info size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
            <p className="text-gold-700 text-sm">{FINANCIAL_INFO.mention}</p>
          </div>
        </AnimatedSection>

        {/* Documents */}
        <AnimatedSection>
          <div className="p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-baloo font-bold text-ocean-800 mb-4 flex items-center gap-2">
              <FileText size={18} className="text-ocean-500" />
              Documents officiels
            </h3>
            <div className="space-y-3">
              {DOCUMENTS_LINKS.map((doc, i) => (
                <a
                  key={i}
                  href={doc.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Télécharger ${doc.name}`}
                  className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-ocean-50 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400"
                >
                  <span className="text-ocean-700 font-semibold text-sm group-hover:text-ocean-900">{doc.name}</span>
                  <ExternalLink size={14} className="text-ocean-400 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
