"use client";

import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Accueil from "@/components/sections/Accueil";
import Projet from "@/components/sections/Projet";
import Equipe from "@/components/sections/Equipe";
import Quotidien from "@/components/sections/Quotidien";
import Infos from "@/components/sections/Infos";
import Familles from "@/components/sections/Familles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Accueil />
        <Projet />
        <Equipe />
        <Quotidien />
        <Infos />
        <Familles />
      </main>
      <Footer />
    </div>
  );
}
