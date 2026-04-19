"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Mail, Users, Heart } from "lucide-react";
import { CRECHE_INFO } from "@/app/lib/constants";

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

export default function Accueil() {
  return (
    <section id="accueil" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-ocean-100 text-ocean-700 rounded-full text-sm font-semibold mb-4">
              Bienvenue
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-ocean-900 mb-6">
              Un cocon d&apos;éveil pour{" "}
              <span className="gradient-text">votre enfant</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {CRECHE_INFO.tagline}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: MapPin,
              title: "Adresse",
              text: `${CRECHE_INFO.address}, ${CRECHE_INFO.city}`,
              color: "ocean",
            },
            {
              icon: Clock,
              title: "Horaires",
              text: `${CRECHE_INFO.hours} — ${CRECHE_INFO.days}`,
              color: "coral",
            },
            {
              icon: Users,
              title: "Capacité",
              text: `${CRECHE_INFO.capacity} places — ${CRECHE_INFO.ageRange}`,
              color: "sun",
            },
            {
              icon: Phone,
              title: "Téléphone",
              text: CRECHE_INFO.phone,
              color: "sand",
            },
            {
              icon: Mail,
              title: "Email",
              text: CRECHE_INFO.email,
              color: "ocean",
            },
            {
              icon: Heart,
              title: "Surface",
              text: `${CRECHE_INFO.surface} dédiés à l'éveil`,
              color: "coral",
            },
          ].map((item, i) => (
            <AnimatedSection key={i}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(12, 74, 110, 0.12)" }}
                className="p-6 rounded-2xl bg-white shadow-md border border-gray-100 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  item.color === "ocean" ? "bg-ocean-100 text-ocean-600" :
                  item.color === "coral" ? "bg-coral-100 text-coral-600" :
                  item.color === "sun" ? "bg-yellow-100 text-yellow-600" :
                  "bg-amber-100 text-amber-600"
                }`}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-poppins font-semibold text-ocean-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
