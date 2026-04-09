"use client";

import { motion } from "framer-motion";
import {
  UserCircle,
  GraduationCap,
  Users,
  Heart,
  Brain,
  Award,
} from "lucide-react";
import { TEAM } from "@/app/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  directions: UserCircle,
  school: GraduationCap,
  users: Users,
};

export default function Equipe() {
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
          Notre Équipe
        </h2>
        <p className="text-lg text-ocean-700 leading-relaxed">
          Le plus beau des projets n&apos;est rien sans l&apos;équipe professionnelle engagée
          qui l&apos;anime au quotidien. Chez D&apos;BEBE, l&apos;encadrement n&apos;est pas vu comme
          un simple ratio à respecter, mais comme un environnement humain riche,
          stable et contenant.
        </p>
      </motion.section>

      {/* Team Members */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {TEAM.map((member, index) => {
          const Icon = iconMap[member.icon] || Users;

          return (
            <motion.div
              key={member.name}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-full flex items-center justify-center shadow-lg">
                  <Icon className="w-16 h-16 text-white" />
                </div>
                <motion.div
                  className="absolute -bottom-2 -right-2 w-10 h-10 bg-coral-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-xl">✨</span>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold font-poppins text-ocean-800 mb-2">
                {member.name}
              </h3>
              <p className="text-coral-600 font-semibold mb-4">{member.role}</p>
              <p className="text-ocean-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          );
        })}
      </section>

      {/* Team Values */}
      <motion.section
        className="bg-gradient-to-br from-sand-50 to-sand-100 rounded-3xl p-8 md:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold font-poppins text-center mb-8">
          Nos engagements envers l&apos;équipe
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-coral-600" />
            </div>
            <h4 className="font-bold text-ocean-800 mb-2">Posture bienveillante</h4>
            <p className="text-ocean-600 text-sm">
              Formation continue à l&apos;écoute bienveillante et à la gestion des émotions
              pour un accompagnement de qualité.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-ocean-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-ocean-600" />
            </div>
            <h4 className="font-bold text-ocean-800 mb-2">Analyse des pratiques</h4>
            <p className="text-ocean-600 text-sm">
              Séances animées par un psychologue extérieur pour prendre du recul
              et désamorcer la charge émotionnelle.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-sun-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-sun-600" />
            </div>
            <h4 className="font-bold text-ocean-800 mb-2">Formation continue</h4>
            <p className="text-ocean-600 text-sm">
              Chaque année, nous formons notre personnel aux nouvelles approches
              éducatives et outils d&apos;accompagnement.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Encadrement */}
      <motion.section
        className="bg-white rounded-2xl p-8 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-xl font-bold font-poppins text-ocean-800 mb-6">
          Notre règle d&apos;encadrement
        </h3>
        <div className="space-y-4 text-ocean-700">
          <p>
            La loi impose <strong>1 professionnel pour 6 enfants</strong>. Au sein
            de D&apos;BEBE, nous avons systématiquement <strong>1 à 2 professionnels de
            plus</strong> que prévu par la réglementation, afin de préserver une
            grande qualité de suivi individualisé.
          </p>
          <div className="bg-ocean-50 border border-ocean-200 rounded-xl p-6">
            <p className="font-semibold text-ocean-800 mb-2">
              👥 Continuité de Direction
            </p>
            <p className="text-sm">
              En cas d&apos;absence temporaire du directeur, un référent désigné
              (professionnel qualifié et expérimenté) prend en charge le bon
              fonctionnement éducatif et administratif.
            </p>
          </div>
          <p className="text-sm text-ocean-600 italic">
            Nous accueillons ponctuellement des stagiaires en formation « Petite
            Enfance ». Ils interviennent en soutien sous la totale responsabilité
            de l&apos;équipe diplôméée.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
