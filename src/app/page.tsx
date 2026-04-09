"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import TabNavigation from "@/components/TabNavigation";
import Footer from "@/components/Footer";
import Accueil from "@/components/sections/Accueil";
import Projet from "@/components/sections/Projet";
import Equipe from "@/components/sections/Equipe";
import Quotidien from "@/components/sections/Quotidien";
import Infos from "@/components/sections/Infos";
import Familles from "@/components/sections/Familles";

const sections: Record<string, React.ElementType> = {
  accueil: Accueil,
  projet: Projet,
  equipe: Equipe,
  quotidien: Quotidien,
  infos: Infos,
  familles: Familles,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("accueil");
  const ActiveSection = sections[activeTab];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {ActiveSection && <ActiveSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
