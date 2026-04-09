"use client";

import { motion } from "framer-motion";
import {
  FileText,
  FolderOpen,
  Euro,
  Users,
  Stethoscope,
  Pill,
  AlertTriangle,
  Phone,
  MapPin,
  Clock,
  Download,
} from "lucide-react";
import { PRACTICAL_INFO, HEALTH_INFO, CRECHE_INFO, DOCUMENTS_LINKS } from "@/app/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  "file-text": FileText,
  "folder-open": FolderOpen,
  euro: Euro,
  users: Users,
  stethoscope: Stethoscope,
  pill: Pill,
  "alert-triangle": AlertTriangle,
  phone: Phone,
};

export default function Infos() {
  return (
    <div className="space-y-16 py-8">
      {/* Introduction */}
      <motion.section
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 gradient-text">
          Informations Pratiques
        </h2>
        <p className="text-lg text-ocean-700 leading-relaxed">
          Tout ce que vous devez savoir pour inscrise votre enfant et vivre
          sereinement l&apos;expérience D&apos;BEBE.
        </p>
      </motion.section>

      {/* Inscription */}
      <section>
        <h3 className="text-2xl font-bold font-poppins text-center mb-8">
          Procédure d&apos;inscription
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRACTICAL_INFO.map((info, index) => {
            const Icon = iconMap[info.icon] || FileText;

            return (
              <motion.div
                key={info.title}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-coral-100 rounded-xl">
                    <Icon className="w-6 h-6 text-coral-600" />
                  </div>
                  <h4 className="font-bold text-ocean-800">{info.title}</h4>
                </div>
                <ul className="space-y-2">
                  {info.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-ocean-700 text-sm"
                    >
                      <span className="text-coral-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Documents */}
      <motion.section
        className="bg-ocean-50 border-2 border-ocean-200 rounded-3xl p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-bold font-poppins mb-6 flex items-center gap-3">
          <Download className="w-6 h-6 text-ocean-600" />
          Documents à télécharger
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DOCUMENTS_LINKS.map((doc) => (
            <a
              key={doc.name}
              href={doc.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-coral-100 rounded-xl">
                <FileText className="w-6 h-6 text-coral-600" />
              </div>
              <div>
                <p className="font-semibold text-ocean-800">{doc.name}</p>
                <p className="text-sm text-ocean-500">PDF • À lire et signer</p>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* Santé */}
      <section>
        <h3 className="text-2xl font-bold font-poppins text-center mb-8">
          Santé & Bien-être
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HEALTH_INFO.map((info, index) => {
            const Icon = iconMap[info.icon] || Stethoscope;

            return (
              <motion.div
                key={info.title}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-sun-100 rounded-xl">
                    <Icon className="w-6 h-6 text-sun-600" />
                  </div>
                  <h4 className="font-bold text-ocean-800">{info.title}</h4>
                </div>
                <p className="text-ocean-700 text-sm leading-relaxed">
                  {info.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <motion.section
        className="bg-gradient-to-br from-ocean-600 to-ocean-700 text-white rounded-3xl p-8 md:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold font-poppins mb-6 text-center">
          Nous contacter
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-coral-300" />
            <p className="font-semibold mb-1">{CRECHE_INFO.address}</p>
            <p className="text-ocean-200">{CRECHE_INFO.city}</p>
          </div>
          <div className="text-center">
            <Phone className="w-8 h-8 mx-auto mb-3 text-coral-300" />
            <p className="font-semibold mb-1">{CRECHE_INFO.phone}</p>
            <p className="text-ocean-200">Du lundi au vendredi</p>
          </div>
          <div className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-3 text-coral-300" />
            <p className="font-semibold mb-1">{CRECHE_INFO.hours}</p>
            <p className="text-ocean-200">{CRECHE_INFO.days}</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
