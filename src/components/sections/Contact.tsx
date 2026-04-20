"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CRECHE_INFO } from "@/app/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 relative overflow-hidden bg-gradient-to-b from-white to-cream">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-ocean-200/15 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold-200/15 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-600 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
              💌 Inscription
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-baloo font-bold text-ocean-800 mb-4">
              Demandez une{" "}
              <span className="text-gradient-brand">pré-inscription</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
              Remplissez le formulaire ci-dessous. Nous vous recontactons sous 48 h pour organiser une visite.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact info cards */}
        <AnimatedSection className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {[
            { icon: Phone, label: "Téléphone", value: CRECHE_INFO.phone, href: `tel:${CRECHE_INFO.phone.replace(/\s/g, "")}`, color: "bg-ocean-100" },
            { icon: Mail, label: "Email", value: "Nous écrire", href: `mailto:${CRECHE_INFO.email}`, color: "bg-gold-100" },
            { icon: MapPin, label: "Adresse", value: CRECHE_INFO.city, href: CRECHE_INFO.mapsUrl, color: "bg-peach-50" },
            { icon: Clock, label: "Horaires", value: CRECHE_INFO.hours, href: null, color: "bg-ocean-50" },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -3 }}>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className={`flex flex-col items-center gap-2 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center w-full`}
                >
                  <div className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center`}>
                    <item.icon size={16} className="text-ocean-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">{item.label}</p>
                    <p className="text-ocean-800 font-bold text-xs sm:text-sm">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className={`flex flex-col items-center gap-2 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-center`}>
                  <div className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center`}>
                    <item.icon size={16} className="text-ocean-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">{item.label}</p>
                    <p className="text-ocean-800 font-bold text-xs sm:text-sm">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatedSection>

        {/* Meeko iframe */}
        <AnimatedSection>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-ocean-100 flex items-center justify-center">
                <span className="text-ocean-600 text-sm">📝</span>
              </div>
              <div>
                <p className="font-baloo font-bold text-ocean-800 text-sm sm:text-base">Formulaire de pré-inscription</p>
                <p className="text-gray-400 text-xs">Via notre partenaire Meeko — sécurisé et confidentiel</p>
              </div>
            </div>
            <iframe
              src="https://dbebe.meeko.site/iframe/registration/one"
              style={{ margin: "0 auto", width: "100%" }}
              height="2500"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Formulaire de pré-inscription D'BEBE"
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
