export default function Philosophie() {
  const items = [
    {
      icon: '♥',
      title: 'Sécurité affective',
      desc: "Priorité absolue. Un enfant qui ne se sent pas en confiance ne peut pas explorer le monde. Notre aménagement, nos rituels apaisants et la disponibilité émotionnelle de notre équipe créent une base de sécurité solide."
    },
    {
      icon: '🧠',
      title: 'Motricité libre',
      desc: "Inspirée par Emmi Pikler, nous ne plaçons jamais un enfant dans une position qu'il ne sait pas acquérir lui-même. L'enfant découvre ses capacités motrices de manière autonome."
    },
    {
      icon: '✨',
      title: 'Pédagogie active',
      desc: "L'enfant n'est jamais spectateur, il est acteur de son développement. Nous proposons mais n'imposons jamais. L'exploration libre et l'approche sensorielle sont au cœur de nos pratiques."
    }
  ]

  return (
    <section id="philosophie" className="py-24 bg-[#F5E6D3]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-14 after:content-[''] after:block after:w-20 after:h-1 after:bg-[#578CB4] after:mx-auto after:mt-3">
          Notre philosophie
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}