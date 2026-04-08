'use client'

import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white/98 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm tracking-[0.2em] font-bold text-gray-800">MICRO - CRÈCHE</span>
          <span className="text-2xl font-extrabold text-[#578CB4] tracking-wider">D'BEBE</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {['Philosophie', 'Équipe', 'Projet', 'Quotidien', 'Infos', 'Tarifs'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-[#578CB4] font-semibold relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#578CB4] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t py-4 px-6 flex flex-col gap-4 shadow-lg">
          {['Philosophie', 'Équipe', 'Projet', 'Quotidien', 'Infos', 'Tarifs'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-[#578CB4] font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}