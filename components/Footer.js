export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-sm tracking-[0.2em] font-bold">MICRO - CRÈCHE</span>
              <span className="text-2xl font-extrabold text-[#9ecae6] tracking-wider">D'BEBE</span>
            </div>
            <p className="text-gray-300">« Plus qu'un mode de garde, un véritable partenaire de votre parentalité. »</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Philosophie', 'Équipe', 'Projet', 'Quotidien', 'Infos', 'Tarifs'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <p className="text-gray-300">
              1 avenue de l'Île-de-France<br/>
              25000 Besançon
            </p>
            <p className="text-gray-300 mt-2">Structure agréée PMI</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Micro-Crèche D'BEBE. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}