"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TEAM } from "@/app/lib/constants";
import { Directions, School, Users } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  directions: Directions, school: School, users: Users,
};

const gradients = [
  "from-[#4f9cf7] to-[#a855f7]",
  "from-[#a855f7] to-[#f472b6]",
  "from-[#f472b6] to-[#fb923c]",
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
    <section id="team" className="py-24 sm:py-32 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f472b6]/8 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 glass rounded-full text-xs font-medium text-[#f472b6] tracking-wider uppercase mb-6">
              L&apos;équipe
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-space font-bold text-white mb-6">
              L&apos;humain au{" "}
              <span className="text-gradient-warm">cœur</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
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
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group p-8 rounded-2xl glass text-center"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={36} className="text-white" />
                  </div>
                  <h3 className="font-space font-bold text-xl text-white mb-1">{member.name}</h3>
                  <p className="text-[#f472b6] font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
