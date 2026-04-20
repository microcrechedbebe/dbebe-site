"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CRECHE_INFO } from "@/app/lib/constants";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

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
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(800);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Meeko envoie la hauteur via postMessage
      if (event.origin.includes("meeko.site")) {
        const data = event.data;
        if (typeof data === "number" && data > 100) {
          setIframeHeight(data + 40); // petit padding de sécurité
        } else if (data && typeof data === "object") {
          const h = data.height || data.frameHeight || data.size;
          if (h && typeof h === "number" && h > 100) {
            setIframeHeight(h + 40);
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 relative overflow-hidden bg-gradient-to-b from-white to-cream">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-ocean-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-600 rounded-full text-xs sm:text-sm font-bold mb-3">
              💌 Inscription
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-baloo font-bold text-ocean-800 mb-4">
              Demandez une{" "}
              <span className="text-gradient-brand">pré-inscription</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
              Remplissez le formulaire ci-dessous. Nous vous recontactons sous 48 h pour organiser une visite.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact info cards */}
        <AnimatedSection className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <a
            href={`tel:${CRECHE_INFO.phone.replace(/\s/g, "")}`}
            aria-label="Appeler la micro-crèche"
            className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400"
          >
            <div className="w-9 h-9 rounded-lg bg-ocean-100 flex items-center justify-center">
              <Phone size={16} className="text-ocean-500" aria-hidden="true" />
            </div>
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">Téléphone</p>
              <p className="text-ocean-800 font-bold text-xs sm:text-sm">{CRECHE_INFO.phone}</p>
            </div>
          </a>

          <a
            href={`mailto:${CRECHE_INFO.email}`}
            aria-label="Envoyer un email"
            className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400"
          >
            <div className="w-9 h-9 rounded-lg bg-gold-100 flex items-center justify-center">
              <Mail size={16} className="text-ocean-500" aria-hidden="true" />
            </div>
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">Email</p>
              <p className="text-ocean-800 font-bold text-xs sm:text-sm">Nous écrire</p>
            </div>
          </a>

          <a
            href={CRECHE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Obtenir l'itinéraire"
            className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400"
          >
            <div className="w-9 h-9 rounded-lg bg-peach-50 flex items-center justify-center">
              <Navigation size={16} className="text-ocean-500" aria-hidden="true" />
            </div>
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">Adresse</p>
              <p className="text-ocean-800 font-bold text-xs sm:text-sm">Obtenir l&apos;itinéraire →</p>
            </div>
          </a>

          <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-9 h-9 rounded-lg bg-ocean-50 flex items-center justify-center">
              <Clock size={16} className="text-ocean-500" aria-hidden="true" />
            </div>
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">Horaires</p>
              <p className="text-ocean-800 font-bold text-xs sm:text-sm">{CRECHE_INFO.hours}</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Meeko iframe — hauteur auto */}
        <AnimatedSection>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-ocean-100 flex items-center justify-center flex-shrink-0">
                <span className="text-ocean-600 text-sm" aria-hidden="true">📝</span>
              </div>
              <div>
                <p className="font-baloo font-bold text-ocean-800 text-sm sm:text-base">Formulaire de pré-inscription</p>
                <p className="text-gray-400 text-xs">Via notre partenaire Meeko — sécurisé et confidentiel</p>
              </div>
            </div>
            <iframe
              ref={iframeRef}
              src="https://dbebe.meeko.site/iframe/registration/one"
              width="100%"
              height={iframeHeight}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Formulaire de pré-inscription D'BEBE"
              loading="lazy"
              style={{ display: "block", transition: "height 0.3s ease" }}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
