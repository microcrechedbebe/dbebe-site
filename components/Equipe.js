export default function Equipe() {
  const members = [
    {
      initials: 'SD',
      name: 'Sofiane DAHMANE',
      role: 'Référent Technique et Directeur',
      desc: "Garant du projet éducatif, il coordonne, impulse et veille à la qualité de l'accueil. Son regard expert accompagne l'équipe pour une prise en charge sur mesure."
    },
    {
      initials: 'MC',
      name: 'Maryline CRETIAUX',
      role: 'Éducatrice de Jeunes Enfants (EJE)',
      desc: "Elle assure le suivi et l'accompagnement de la direction et de l'équipe. Son expertise pédagogique structure notre projet et veille à la bienveillance éducative."
    },
    {
      initials: 'AE',
      name: 'Auxiliaires diplômées',
      role: 'CAP AEPE ou équivalent',
      desc: "Elles assurent la présence constante auprès des enfants au quotidien. Leur dévouement et leur bienveillance sont le socle de notre accueil."
    }
  ]

  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-14 after:content-[''] after:block after:w-20 after:h-1 after:bg-[#578CB4] after:mx-auto after:mt-3">
          Notre équipe
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {members.map((member, i) => (
            <div key={i} className="bg-[#F5E6D3] rounded-2xl p-8 text-center shadow-sm">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#578CB4] text-white flex items-center justify-center text-2xl font-bold">
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-[#578CB4] font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600">{member.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 italic">
          Nous veillons à maintenir un effectif supérieur aux ratios légaux (1 professionnel pour 6 enfants)
          pour garantir un accompagnement individualisé de qualité.
        </p>
      </div>
    </section>
  )
}