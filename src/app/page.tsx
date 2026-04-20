"use client";

import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Day from "@/components/sections/Day";
import Tarifs from "@/components/sections/Tarifs";
import FaqSection from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import MapSection from "@/components/sections/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0]">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Team />
        <Day />
        <Tarifs />
        <FaqSection />
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
