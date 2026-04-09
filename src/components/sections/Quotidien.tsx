"use client";

import { motion } from "framer-motion";
import {
  Sunrise,
  Coffee,
  Palette,
  Utensils,
  Bath,
  Moon,
  Cookie,
  Gamepad2,
  Home,
  Heart,
  Baby,
  Sun,
} from "lucide-react";
import { DAILY_SCHEDULE } from "@/app/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  sunrise: Sunrise,
  coffee: Coffee,
  palette: Palette,
  utensils: Utensils,
  bath: Bath,
  moon: Moon,
  cookie: Cookie,
  "gamepad-2": Gamepad2,
  home: Home,
};

export default function Quotidien() {
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
          La Vie au Quotidien
        </h2>
        <p className="text-lg text-ocean-700 leading-relaxed">
          Le quotidien du tout-petit a besoin de repères. Chez D&apos;BEBE, la structure
          s&apos;adapte au rythme biologique de votre enfant, pas l&apos;inverse.
        </p>
      </motion.section>

      {/* Daily Schedule */}
      <section>
        <h3 className="text-2xl font-bold font-poppins text-center mb-8">
          Une journée type
        </h3>
        <div className="space-y-4">
          {DAILY_SCHEDULE.map((item, index) => {
            const Icon = iconMap[item.icon] || Sun;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.time}
                className={`flex items-center gap-4 p-4 rounded-xl ${
                  isEven ? "bg-ocean-50" : "bg-sand-50"
                } hover:shadow-md transition-shadow`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
              >
                <div
                  className={`p-3 rounded-xl ${
                    isEven ? "bg-ocean-100" : "bg-sand-200"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isEven ? "text-ocean-600" : "text-sand-600"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-ocean-800">{item.activity}</p>
                </div>
                <div className="text-sm font-semibold text-ocean-600 bg-white px-3 py-1 rounded-full shadow-sm">
                  {item.time}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Key aspects */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sommeil */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg card-hover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-moon-100 rounded-xl">
              <Moon className="w-6 h-6 text-moon-600" />
            </div>
            <h4 className="font-bold text-lg text-ocean-800">Le sommeil</h4>
          </div>
          <p className="text-ocean-700 text-sm leading-relaxed">
            Le sommeil soutient le développement. Nous n&apos;imposons pas d&apos;heure fixe
            de sieste pour les nourrissons : dès les signes de fatigue,
            l&apos;enfant est accompagné dans son espace de sommeil individuel.
          </p>
        </motion.div>

        {/* Repas */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg card-hover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-coral-100 rounded-xl">
              <Utensils className="w-6 h-6 text-coral-600" />
            </div>
            <h4 className="font-bold text-lg text-ocean-800">Le repas</h4>
          </div>
          <p className="text-ocean-700 text-sm leading-relaxed">
            Moment de lien et de découverte. Nos repas et goûters sont préparés
            par <strong>Les Cuisines d&apos;Uzel</strong>, avec respect des PAI et
            allergies. Nous encourageons l&apos;autonomie à table.
          </p>
        </motion.div>

        {/* Soins */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg card-hover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-sun-100 rounded-xl">
              <Heart className="w-6 h-6 text-sun-600" />
            </div>
            <h4 className="font-bold text-lg text-ocean-800">
              Soins d&apos;hygiène
            </h4>
          </div>
          <p className="text-ocean-700 text-sm leading-relaxed">
            Il n&apos;y a pas de changes « à la chaîne ». Les soins suivent les
            besoins réels de l&apos;enfant. Le change est un moment d&apos;échange
            individuel où nous verbalisons les gestes.
          </p>
        </motion.div>
      </section>

      {/* Emotions section */}
      <motion.section
        className="bg-gradient-to-br from-coral-50 to-coral-100 rounded-3xl p-8 md:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold font-poppins text-center mb-6">
          Accueillir toutes les émotions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-coral-600 mb-3 flex items-center gap-2">
              <Baby className="w-5 h-5" />
              Notre posture
            </h4>
            <p className="text-ocean-700 text-sm leading-relaxed">
              Pas de punition. En cas de tension, le professionnel intervient
              calmement, se met à hauteur de l&apos;enfant, formalise ce qui s&apos;est
              passé et aide à la réparation. Nous aidons chaque enfant à nommer
              peu à peu ce qu&apos;il ressent.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-ocean-600 mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Comprendre les comportements
            </h4>
            <p className="text-ocean-700 text-sm leading-relaxed">
              Morsures, poussées ou pleurs de frustration relèvent du
              développement normal : ce n&apos;est ni de la désobéissance gratuite,
              ni de la méchanceté, mais l&apos;expression d&apos;émotions encore difficiles
              à dire.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Propreté */}
      <motion.section
        className="bg-white rounded-2xl p-8 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h4 className="font-bold text-ocean-800 mb-4 flex items-center gap-2">
          <Sun className="w-5 h-5 text-sun-500" />
          Propreté : au rythme de l&apos;enfant
        </h4>
        <p className="text-ocean-700 leading-relaxed">
          La propreté repose sur la maturité physiologique et psychologique. Nous
          ne forçons pas : chaque enfant a son calendrier. Nous accompagnons
          avec patience et positivité cette étape importante.
        </p>
      </motion.section>
    </div>
  );
}
