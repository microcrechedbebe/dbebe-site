"use client";

import { motion } from "framer-motion";
import {
  Users,
  LogOut,
  Backpack,
  MessageSquare,
  CalendarX,
  Coins,
  Heart,
  Smartphone,
  FileCheck,
  Baby,
} from "lucide-react";
import { RULES, FINANCIAL_INFO } from "@/app/lib/constants";

export default function Familles() {
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
          Espace Familles
        </h2>
        <p className="text-lg text-ocean-700 leading-relaxed">
          Parents et crèche sont partenaires. Nous croyons en une collaboration
          étroite pour offrir à votre enfant le meilleur accompagnement possible.
        </p>
      </motion.section>

      {/* Partnership Section */}
      <motion.section
        className="bg-gradient-to-br from-coral-50 to-coral-100 rounded-3xl p-8 md:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold font-poppins text-center mb-8 flex items-center justify-center gap-3">
          <Heart className="w-8 h-8 text-coral-500" />
          Familles & Crèche : Partenaires
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-ocean-800 mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-coral-500" />
              Accueil du matin
            </h4>
            <p className="text-ocean-700 text-sm leading-relaxed">
              Nous prenons le temps des consignes, du salut à la hauteur de
              l&apos;enfant et de l&apos;accompagnement vers le jeu, pour que vous puissiez
              partir en étant rassurés.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-ocean-800 mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-coral-500" />
              Transmission du soir
            </h4>
            <p className="text-ocean-700 text-sm leading-relaxed">
              Nous vous restituons le fil de la journée (fatigue, émotions, jeux,
              repas) pour prolonger le dialogue éducatif à la maison.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Règles de vie */}
      <section>
        <h3 className="text-2xl font-bold font-poppins text-center mb-8">
          Règles de vie
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RULES.map((rule, index) => {
            const iconMap: Record<string, React.ElementType> = {
              "log-out": LogOut,
              backpack: Backpack,
              "message-square": MessageSquare,
              "calendar-x": CalendarX,
            };
            const Icon = iconMap[rule.icon] || FileCheck;

            return (
              <motion.div
                key={rule.title}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-ocean-100 rounded-xl">
                    <Icon className="w-6 h-6 text-ocean-600" />
                  </div>
                  <h4 className="font-bold text-ocean-800">{rule.title}</h4>
                </div>
                <p className="text-ocean-700 text-sm leading-relaxed">
                  {rule.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Transparence financière */}
      <motion.section
        className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold font-poppins text-center mb-8 flex items-center justify-center gap-3">
          <Coins className="w-8 h-8 text-sun-500" />
          Transparence Financière
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* CMG */}
          <div className="bg-ocean-50 rounded-xl p-6">
            <h4 className="font-bold text-ocean-800 mb-3 flex items-center gap-2">
              <Coins className="w-5 h-5 text-sun-500" />
              {FINANCIAL_INFO.cmg.title}
            </h4>
            <p className="text-ocean-700 text-sm leading-relaxed">
              {FINANCIAL_INFO.cmg.description}
            </p>
          </div>

          {/* Credit impot */}
          <div className="bg-sun-50 rounded-xl p-6">
            <h4 className="font-bold text-ocean-800 mb-3 flex items-center gap-2">
              <Coins className="w-5 h-5 text-coral-500" />
              {FINANCIAL_INFO.taxCredit.title}
            </h4>
            <p className="text-ocean-700 text-sm leading-relaxed">
              {FINANCIAL_INFO.taxCredit.description}
            </p>
          </div>
        </div>

        <div className="bg-sand-100 border border-sand-300 rounded-xl p-6">
          <p className="text-ocean-800 text-center font-medium">
            📋 Les tarifs précis sont disponibles sur demande lors de la visite
            ou sur l&apos;application Meeko.
          </p>
        </div>
      </motion.section>

      {/* Meeko App */}
      <motion.section
        className="bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white rounded-3xl p-8 md:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-10 h-10 text-coral-300" />
              <h3 className="text-2xl font-bold font-poppins">Application Meeko</h3>
            </div>
            <p className="text-ocean-100 mb-6 leading-relaxed">
              La transmission administrative et les signatures s&apos;effectuent
              électroniques via notre application partenaire Meeko. Un tableau de
              bord 100% numérique pour simplifier votre quotidien.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-coral-300">✓</span>
                Documents et signatures électroniques
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coral-300">✓</span>
                Suivi des transmissions quotidiennes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coral-300">✓</span>
                Gestion des personnes autorisées
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coral-300">✓</span>
                Calendrier et réservations
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Baby className="w-24 h-24 mx-auto mb-4 text-coral-300" />
              <p className="font-bold text-lg">100% numérique</p>
              <p className="text-ocean-200 text-sm">Simple et pratique</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Inclusion */}
      <motion.section
        className="bg-sand-50 rounded-2xl p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-start gap-4">
          <div className="p-4 bg-coral-100 rounded-xl flex-shrink-0">
            <Heart className="w-8 h-8 text-coral-600" />
          </div>
          <div>
            <h4 className="font-bold text-ocean-800 text-lg mb-2">
              Inclusion & PAI
            </h4>
            <p className="text-ocean-700 leading-relaxed">
              L&apos;inclusion est au cœur du modèle de D&apos;BEBE. Lorsqu&apos;un enfant
              présente un trouble ou une maladie chronique nécessitant des
              aménagements, un projet d&apos;accueil individualisé (PAI) est
              co-construit avec vous et les professionnels de santé. Chaque
              enfant a sa place dans notre projet.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
