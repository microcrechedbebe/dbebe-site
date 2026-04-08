export default function Tarifs() {
  return (
    <section id="tarifs" className="py-24 bg-[#F5E6D3]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 after:content-[''] after:block after:w-20 after:h-1 after:bg-[#578CB4] after:mx-auto after:mt-3">
          Tarifs et aides
        </h2>

        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-10">
          Notre tarification inclut l'entretien, les repas et goûters, les activités, et la fourniture des couches.
        </p>

        {/* Tarifs horaires */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">💵 Tarifs horaires (par tranche de revenus N-2)</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#578CB4] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Situation</th>
                  <th className="px-6 py-4 text-right">Tarif horaire</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ['Taux plein (revenus < 23 903 € pour 1 enfant)', '8,30 €/h'],
                  ['Taux médian (23 903 € à 53 119 €)', '8,50 €/h'],
                  ['Taux réduit (> 53 119 €)', '8,70 €/h']
                ].map(([label, price], i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">{label}</td>
                    <td className="px-4 py-4 text-right font-bold text-[#578CB4]">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Aides */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h4 className="text-2xl font-bold text-[#578CB4] mb-4">🛡️ Aide CAF – CMG</h4>
            <p>Le <strong>Complément de Libre Choix du Mode de Garde</strong> est versé directement par la CAF. Pour les 0-3 ans, la prise en charge est de <strong>85 %</strong> avec des plafonds mensuels selon vos revenus.</p>
            <p className="mt-4"><strong>Plafonds exemples (1 enfant) :</strong></p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
              <li>Taux plein : 992,13 €/mois</li>
              <li>Taux médian : 855,25 €/mois</li>
              <li>Taux réduit : 718,41 €/mois</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">* Majoration +30 % pour familles monoparentales, AAH, AEEH.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h4 className="text-2xl font-bold text-[#578CB4] mb-4">💶 Crédit d'impôt</h4>
            <p>Les frais de garde ouvrent droit à un crédit d'impôt à hauteur de <strong>50 %</strong> des dépenses, plafonnées à <strong>3 500 € par an et par enfant</strong>.</p>
            <p className="mt-4">Crédit maximal : <strong>1 750 €</strong> par an et par enfant.</p>
            <p className="mt-2 text-sm text-gray-600">À déclarer sur le formulaire 2042-RICI, cases 7GA à 7GC.</p>
          </div>
        </div>

        <p className="text-center text-gray-600 italic">
          La facturation est lissée sur 12 mois (mensualisation) pour garantir la stabilité de l'équipe et des plannings.
          Absences et retards : se référer au règlement de fonctionnement.
        </p>
      </div>
    </section>
  )
}