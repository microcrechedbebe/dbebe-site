"use client";

import { motion } from "framer-motion";
import {
  Baby,
  Heart,
  Sparkles,
  Users,
  Shield,
  GraduationCap,
  Sun,
  Moon,
  ArrowRight,
  Clock,
} from "lucide-react";
import { CRECHE_INFO } from "@/app/lib/constants";

const highlights = [
  {
    icon: Baby,
    title: "Accueil dès 10 semaines",
    description: `Ouvert aux enfants de ${CRECHE_INFO.ageRange}`,
    color: "coral",
  },
  {
    icon: Heart,
    title: "Sécurité affective",
    description: "Priorité absolue pour l'épanouissement",
    color: "ocean",
  },
  {
    icon: Sparkles,
    title: "Pédagogie active",
    description: "L'enfant acteur de son développement",
    color: "sun",
  },
  {
    icon: Users,
    title: "Équipe qualifiée",
    description: "Encadrement renforcé au quotidien",
    color: "sand",
  },
  {
    icon: Shield,
    title: "Structure PMI",
    description: "Agrément et contrôle réguliers",
    color: "ocean",
  },
  {
    icon: GraduationCap,
    title: "Éveil sensoriel",
    description: "Une approche Pikler/Montessori",
    color: "coral",
  },
];

export default function Accueil() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white px-6 py-12 md:px-12 md:py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 right-10 w-40 h-40 bg-coral-400/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-60 h-60 bg-sun-400/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold font-poppins mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Bienvenue chez{" "}
            <span className="text-coral-400">{CRECHE_INFO.name}</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-ocean-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {CRECHE_INFO.tagline}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              className="px-8 py-4 bg-coral-500 hover:bg-coral-600 rounded-full font-bold shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Visit our structure</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full font-bold border border-white/30 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact us</span>
              <Heart className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Info Cards */}
      <section>
        <motion.h3
          className="text-2xl md:text-3xl font-bold font-poppins text-center mb-10 gradient-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Nos engagements
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const colorClasses: Record<string, string> = {
              coral: "bg-coral-50 text-coral-600 border-coral-200",
              ocean: "bg-ocean-50 text-ocean-600 border-ocean-200",
              sun: "bg-sun-50 text-sun-600 border-sun-200",
              sand: "bg-sand-100 text-sand-700 border-sand-300",
            };

            return (
              <motion.div
                key={item.title}
                className={`p-6 rounded-2xl border-2 ${colorClasses[item.color]} card-hover`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl ${colorClasses[item.color].replace(
                      "border-",
                      "bg-"
                    ).replace("-200", "-100").replace("-300", "-200")}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm opacity-80">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Philosophy Quote */}
      <motion.section
        className="relative bg-gradient-to-r from-sand-100 to-sand-50 rounded-3xl p-8 md:p-12 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="absolute top-0 left-0 w-24 h-24 bg-coral-200/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-ocean-200/30 rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-nunito italic text-ocean-800 mb-6 leading-relaxed">
            &ldquo;Créer ce projet pédagogique, c&apos;est bien plus que répondre à une
            exigence légale ; c&apos;est formaliser le cœur battant de notre structure,
            l&apos;âme de ce que nous proposons à vos enfants chaque jour.&rdquo;
          </p>
          <p className="text-coral-600 font-bold">— La Direction</p>
        </div>
      </motion.section>

      {/* Quick Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-sun-100 rounded-xl">
              <Sun className="w-8 h-8 text-sun-600" />
            </div>
            <h3 className="text-xl font-bold font-poppins">Horaires d&apos;ouverture</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-ocean-700">
              <Clock className="w-5 h-5 text-coral-500" />
              <span>6h00 - 19h00, du lundi au vendredi</span>
            </li>
            <li className="flex items-center gap-3 text-ocean-700">
              <Moon className="w-5 h-5 text-coral-500" />
              <span>Fermé les week-ends et jours fériés</span>
            </li>
            <li className="flex items-center gap-3 text-ocean-700">
              <Baby className="w-5 h-5 text-coral-500" />
              <span>Accueil dès 10 semaines jusqu&apos;à 4 ans</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-ocean-100 rounded-xl">
              <Shield className="w-8 h-8 text-ocean-600" />
            </div>
            <h3 className="text-xl font-bold font-poppins">Notre structure</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-ocean-700">
              <span className="text-2xl">🏠</span>
              <span>{CRECHE_INFO.surface} d&apos;espace dédié aux enfants</span>
            </li>
            <li className="flex items-center gap-3 text-ocean-700">
              <span className="text-2xl">👶</span>
              <span>Capacité de {CRECHE_INFO.capacity} enfants ({CRECHE_INFO.capacitySurcharge} en surcharge)</span>
            </li>
            <li className="flex items-center gap-3 text-ocean-700">
              <span className="text-2xl">✅</span>
              <span>Structure agréée par la PMI</span>
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
