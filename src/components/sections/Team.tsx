"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TEAM } from "@/app/lib/constants";
import { Compass, GraduationCap, Users } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  compass: Compass, school: GraduationCap, users: Users,
};

const gradients = [
  "from-ocean-400 to-ocean-500",
  "from-gold-400 to-peach-400",
  "from-ocean-300 to-gold-300",
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-20 sm:py-28 px-4 relative overflow-hidden bg-gradient-to-b from-cream to-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-200/15 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-600 rounded-full text-sm font-bold mb-4">
              💛 L&apos;équipe
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-baloo font-bold text-ocean-800 mb-6">
              L&apos;humain au{" "}
              <span className="text-gradient-brand">cœur</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Passionnées, qualifiées, dédiées au bien-être de chaque enfant.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM.map((member, i) => {
            const Icon = iconMap[member.icon] || Users;
            return (
              <AnimatedSection key={i}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-8 rounded-2xl bg-white shadow-md border border-gray-100 text-center card-playful"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                    <Icon size={36} className="text-white" />
                  </div>
                  <h3 className="font-baloo font-bold text-xl text-ocean-800 mb-1">{member.name}</h3>
                  <p className="text-gold-500 font-bold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
