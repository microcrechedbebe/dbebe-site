export default function Infos() {
  const blocks = [
    {
      title: '📍 Adresse',
      content: (
        <>
          <p>Micro-Crèche D'BEBE<br/>1 avenue de l'Île-de-France<br/>25000 Besançon</p>
          <p className="mt-2">Structure agréée par la PMI du Doubs.</p>
        </>
      )
    },
    {
      title: '📞 Contact',
      content: (
        <>
          <p>Téléphone : <em>(sur demande)</em></p>
          <p>Email : <em>contact@dbebe.fr</em></p>
          <p className="mt-2">La transmission administrative s'effectue via l'application <strong>Meeko</strong>.</p>
        </>
      )
    },
    {
      title: '📋 Inscriptions',
      content: (
        <>
          <p>La demande est étudiée selon le temps de garde et la date de sollicitation. Une visite est organisée avant toute confirmation.</p>
          <p className="mt-2"><strong>Frais d'inscription :</strong> 100 € (dossier, visite, préparation).</p>
          <p><strong>Chèque de réservation :</strong> demi-mois de facturation.</p>
        </>
      )
    },
    {
      title: '🩺 Santé et sécurité',
      content: (
        <>
          <p>Vaccinations obligatoires, certificat médical, assurance RC.</p>
          <p>Protocoles : fièvre (≥ 38,5°C), maladies à éviction légale, évacuation incendie trimestrielle.</p>
        </>
      )
    }
  ]

  return (
    <section id="infos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-14 after:content-[''] after:block after:w-20 after:h-1 after:bg-[#578CB4] after:mx-auto after:mt-3">
          Infos pratiques
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {blocks.map((block, i) => (
            <div key={i} className="bg-[#F5E6D3] rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{block.title}</h3>
              {block.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}