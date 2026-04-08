const axes = [
  { num: 'I', title: 'Philosophie D'BEBE', desc: "Bâtir un cocon de développement où bienveillance, sécurité affective et éveil sensoriel sont les piliers." },
  { num: 'II', title: 'Équipe engagée', desc: "Une équipe qualifiée, stable et contenante. Formation continue et analyse des pratiques nourrissent notre professionnalisme." },
  { num: 'III', title: 'L'accueil : familiarisation', desc: "Période de douceur pour créer le lien de confiance. L'environnement s'ajuste à votre enfant." },
  { num: 'IV', title: 'Vie au quotidien', desc: "Un cadre rassurant, sans rigidité : sommeil, repas, soins d'hygiène au rythme de chaque enfant." },
  { num: 'V', title: 'Une journée type', desc: "Accueil échelonné, rituels du matin, temps d'éveil, repas, sieste, éveil doux et goûter, fin de journée." },
  { num: 'VI', title: 'L'espace et le jeu', desc: "L'environnement est un troisième éducateur. Zones : calme, moteur, jeux symboliques, atelier créatif. Le jeu libre est respecté." },
  { num: 'VII', title: 'Langage et communication', desc: "Signes complémentaires, reformulations positives, lexique émotionnel, lectures et comptines pour faire émerger le langage." },
  { num: 'VIII', title: 'Éveil par les 5 sens', desc: "Vue, toucher, ouïe, goût/odorat sont sollicités équilibrément pour construire confiance en soi et en le monde." },
  { num: 'IX', title: 'Engagement éco-responsable', desc: "Nettoyage EveryClean (eau électrolysée), tri des déchets, éco-gestes. Santé : protocoles stricts et inclusion (PAI)." },
  { num: 'X', title: 'Projet social : familles partenaires', desc: "La famille reste le premier éducateur. Outil numérique Meeko, entretiens, moments conviviaux, questionnaire annuel." },
]

export default function Projet() {
  return (
    <section id="projet" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 after:content-[''] after:block after:w-20 after:h-1 after:bg-[#578CB4] after:mx-auto after:mt-3">
          Notre projet pédagogique
        </h2>

        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-14">
          Notre projet pédagogique formalise le cœur battant de notre structure. Il s'articule autour de 10 axes fondamentaux pour offrir à chaque enfant un environnement bienveillant, sécurisant et stimulant.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {axes.map((axe, i) => (
            <div key={i} className="bg-[#F5E6D3] rounded-xl p-6 flex gap-5 items-start hover:shadow-md transition-shadow">
              <span className="flex-shrink-0 w-14 h-14 rounded-full bg-[#578CB4] text-white flex items-center justify-center text-xl font-bold">
                {axe.num}
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{axe.title}</h3>
                <p className="text-gray-600">{axe.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}