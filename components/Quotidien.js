export default function Quotidien() {
  const items = [
    {
      title: '📅 Horaires d'ouverture',
      content: (
        <>
          <p><strong>Lundi au vendredi :</strong> 6h00 – 19h00</p>
          <p>Arrivées préférables : 6h00 – 9h00</p>
          <p>Départs à partir de : 15h30</p>
          <p className="mt-3">La structure ferme entre 4 et 5 semaines par an (fin décembre, début août) ainsi que les jours fériés. Le planning des fermetures est fourni en début d'année sur Meeko.</p>
        </>
      )
    },
    {
      title: '🍽️ Repas et nutrition',
      content: (
        <>
          <p>Repas préparés par <strong>Les Cuisines d'Uzel</strong> (Besançon), respectant les étapes de diversification et les PAI. Lait maternel accepté avec protocole strict.</p>
          <p>Nous fournissons les <strong>couches Pommette Brocéliande</strong> (fabrication française).</p>
        </>
      )
    },
    {
      title: '😴 Sommeil et sieste',
      content: (
        <p>Les enfants disposent d'un espace de sommeil individuel (literie fournie). Pas d'heure fixe pour les nourrissons : nous accompagnons les signes de fatigue et respectons le réveil naturel.</p>
      )
    },
    {
      title: '🧘 Accueil des émotions',
      content: (
        <p>Toutes les émotions ont leur place. Pas de punition. En cas de tension, le professionnel intervient calmement, aide à nommer ce qui s'est passé et à réparer. Coin calme et outils de régulation sont à disposition.</p>
      )
    }
  ]

  return (
    <section id="quotidien" className="py-24 bg-[#F5E6D3]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-14 after:content-[''] after:block after:w-20 after:h-1 after:bg-[#578CB4] after:mx-auto after:mt-3">
          Le quotidien chez D'BEBE
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}