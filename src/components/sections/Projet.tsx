"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Baby,
  Sparkles,
  Eye,
  MessageCircle,
  Globe,
  Leaf,
  Activity,
  HeartHandshake,
  Home,
} from "lucide-react";
import { PEDAGOGICAL_AXES } from "@/app/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  heart: Heart,
  baby: Baby,
  sparkles: Sparkles,
  eye: Eye,
  "message-circle": MessageCircle,
  globe: Globe,
  leaf: Leaf,
  activity: Activity,
  "heart-handshake": HeartHandshake,
  home: Home,
};

const colorClasses: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  coral: { bg: "bg-coral-50", text: "text-coral-600", border: "border-coral-200", icon: "bg-coral-100" },
  ocean: { bg: "bg-ocean-50", text: "text-ocean-600", border: "border-ocean-200", icon: "bg-ocean-100" },
  sun: { bg: "bg-sun-50", text: "text-sun-600", border: "border-sun-200", icon: "bg-sun-100" },
  sand: { bg: "bg-sand-100", text: "text-sand-700", border: "border-sand-300", icon: "bg-sand-200" },
};

export default function Projet() {
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
          Notre Projet Pédagogique
        </h2>
        <p className="text-lg text-ocean-700 leading-relaxed">
          Le projet pédagogique de D&apos;BEBE est le cœur battant de notre structure.
          Il définit nos valeurs, nos méthodes et notre vision de l&apos;accueil du
          jeune enfant. Elaboré avec soin, il guide chaque jour l&apos;ensemble de nos
          actions.
        </p>
      </motion.section>

      {/* Philosophy Quote */}
      <motion.section
        className="bg-gradient-to-br from-ocean-600 to-ocean-700 text-white rounded-3xl p-8 md:p-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold font-poppins mb-4 flex items-center gap-3">
            <span className="text-3xl">💝</span>
            Notre philosophie
          </h3>
          <p className="text-lg text-ocean-100 leading-relaxed mb-6">
            Dans un groupe à effectif réduit, nous avons la chance de pouvoir
            observer le rythme propre à chaque enfant. À l&apos;inverse d&apos;un accueil
            standardisé, nous privilégions un accompagnement individualisé.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Heart className="w-8 h-8 text-coral-300 mb-2" />
              <h4 className="font-bold mb-1">Sécurité affective</h4>
              <p className="text-sm text-ocean-200">
                Priorité absolue pour l&apos;épanouissement
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Baby className="w-8 h-8 text-sun-300 mb-2" />
              <h4 className="font-bold mb-1">Motricité libre</h4>
              <p className="text-sm text-ocean-200">
                Pédagogie Pikler inspiratrice
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Sparkles className="w-8 h-8 text-sand-300 mb-2" />
              <h4 className="font-bold mb-1">Pédagogie active</h4>
              <p className="text-sm text-ocean-200">
                L&apos;enfant acteur de son développement
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 10 Pedagogical Axes */}
      <section>
        <motion.h3
          className="text-2xl md:text-3xl font-bold font-poppins text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Nos 10 axes pédagogiques
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PEDAGOGICAL_AXES.map((axe, index) => {
            const Icon = iconMap[axe.icon] || Heart;
            const colors = colorClasses[axe.color] || colorClasses.ocean;

            return (
              <motion.div
                key={axe.title}
                className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-6 card-hover`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-4">
                  <div className={`${colors.icon} p-3 rounded-xl flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${colors.text} mb-2`}>
                      {axe.title}
                    </h4>
                    <p className="text-ocean-700 text-sm leading-relaxed">
                      {axe.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <motion.section
        className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold font-poppins text-center mb-8">
          Nos valeurs fondamentales
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-coral-600 mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Bienveillance active
            </h4>
            <p className="text-ocean-700 text-sm leading-relaxed">
              La bienveillance n&apos;est pas qu&apos;un mot : c&apos;est une posture à chaque
              instant. Se mettre à hauteur d&apos;enfant, des formulations positives,
              valorisation des réussites, accompagnement des frustrations avec
              exigence professionnelle.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-ocean-600 mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Observation attentive
            </h4>
            <p className="text-ocean-700 text-sm leading-relaxed">
              Nous observons le rythme propre à chaque enfant pour adapter notre
              accompagnement. Cette observation bienveillante permet une prise en
              charge sur mesure et un respect du développement de chacun.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sun-600 mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Inclusion
            </h4>
            <p className="text-ocean-700 text-sm leading-relaxed">
              Chaque enfant a sa place chez D&apos;BEBE. Les projets d&apos;accueil
              individualisés (PAI) sont co-construits avec les familles et les
              professionnels de santé pour garantir un accueil adapté.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sand-600 mb-3 flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              Éco-responsabilité
            </h4>
            <p className="text-ocean-700 text-sm leading-relaxed">
              Engagement pour l&apos;environnement à travers le tri des déchets, le
              jardinage et la sensibilisation au développement durable dès le
              plus jeune âge.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
