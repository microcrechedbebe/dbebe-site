"use client";

import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Day from "@/components/sections/Day";
import Contact from "@/components/sections/Contact";
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
