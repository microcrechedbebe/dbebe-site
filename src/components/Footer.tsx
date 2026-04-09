"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";
import { CRECHE_INFO, DOCUMENTS_LINKS } from "@/app/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-ocean-800 to-ocean-900 text-white mt-16">
      {/* Wave decoration top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 42C1248 44 1344 58 1392 65L1440 72V0H0V60Z"
            fill="#faf8f5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold font-poppins mb-4">
              {CRECHE_INFO.name}
            </h3>
            <p className="text-ocean-200 text-sm leading-relaxed mb-4">
              Un cocon d&apos;éveil où chaque sens est sollicité pour révéler le plein
              potentiel de votre enfant.
            </p>
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-full bg-ocean-700/50 flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "rgb(249 96 64)" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-lg">
                    {i === 1 ? "👶" : i === 2 ? "🌈" : "✨"}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-coral-400 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${CRECHE_INFO.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-ocean-200 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {CRECHE_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CRECHE_INFO.email}`}
                  className="flex items-center gap-3 text-ocean-200 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {CRECHE_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-ocean-200">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  {CRECHE_INFO.address}
                  <br />
                  {CRECHE_INFO.city}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Horaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-coral-400 mb-4">Horaires</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-ocean-200">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>{CRECHE_INFO.hours}</span>
              </li>
              <li className="flex items-center gap-3 text-ocean-200">
                <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                  📅
                </span>
                <span>{CRECHE_INFO.days}</span>
              </li>
              <li className="flex items-center gap-3 text-ocean-200 mt-4">
                <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                  👶
                </span>
                <span>Capacité: {CRECHE_INFO.capacity} enfants</span>
              </li>
              <li className="flex items-center gap-3 text-ocean-200">
                <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                  📏
                </span>
                <span>{CRECHE_INFO.surface} d&apos;espace</span>
              </li>
            </ul>
          </motion.div>

          {/* Documents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-coral-400 mb-4">Documents</h4>
            <ul className="space-y-2 text-sm">
              {DOCUMENTS_LINKS.map((doc) => (
                <li key={doc.name}>
                  <a
                    href={doc.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-ocean-200 hover:text-white transition-colors"
                  >
                    <span className="text-coral-400">📄</span>
                    {doc.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-ocean-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ocean-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            © {currentYear} {CRECHE_INFO.name}. Tous droits réservés.
          </p>
          <p className="flex items-center gap-2">
            Fait avec <Heart className="w-4 h-4 text-coral-400 animate-pulse" /> pour
            vos enfants
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
