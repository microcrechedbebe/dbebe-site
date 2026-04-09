// Micro-crèche D'BEBE - Données centralisées
// Source: Projet pédagogique 2026-2027 & Règlement de fonctionnement 2026-2027

export const CRECHE_INFO = {
  name: "Micro-crèche D'BEBE",
  tagline: "Plus qu'un mode de garde, un cocon d'éveil où chaque sens est sollicité pour révéler le plein potentiel de votre enfant.",
  address: "1 avenue de l'Île-de-France",
  city: "25000 Besançon",
  phone: "09 51 88 60 06",
  email: "microcreche.dbebe@gmail.com",
  hours: "6h00 - 19h00",
  days: "Lundi - Vendredi",
  capacity: 12,
  capacitySurcharge: 14,
  ageRange: "10 semaines - 4 ans révolus",
  surface: "159 m²",
  director: "DAHMANE Sofiane",
  eje: "CRETIAUX Maryline",
  pmiVerified: true,
};

export const TEAM = [
  {
    name: "DAHMANE Sofiane",
    role: "Directeur & Référent Technique",
    description: "Garant du projet éducatif, il coordonne, impulse et veille à la qualité de l'accueil. Il assure également la gestion quotidienne de la structure.",
    icon: "directions",
  },
  {
    name: "CRETIAUX Maryline",
    role: "Éducatrice de Jeunes Enfants (EJE)",
    description: "Son suivi et accompagnement garantissent la qualité pédagogique. Elle apporte son expertise pour l'ensemble de l'équipe.",
    icon: "school",
  },
  {
    name: "L'équipe CAP AEPE",
    role: "Accompagnateurs Éducatifs Petite Enfance",
    description: "Le socle du quotidien. Passionnés et qualifiés, ils vivent au rythme de votre enfant, gèrent les repas, le sommeil et tissent le lien affectif indispensable.",
    icon: "users",
  },
];

export const PEDAGOGICAL_AXES = [
  {
    title: "Sécurité affective",
    icon: "heart",
    color: "coral",
    description: "Priorité absolue. Un enfant qui ne se sent pas en confiance ne peut pas explorer le monde. Notre aménagement, nos rituels apaisants et la disponibilité émotionnelle créent une base solide.",
  },
  {
    title: "Motricité libre",
    icon: "baby",
    color: "ocean",
    description: "Inspirée par la pédagogie d'Emmi Pikler, nous ne plaçons jamais un enfant dans une position qu'il ne sait pas acquérir seul. L'environnement encourage l'autonomie motrice.",
  },
  {
    title: "Pédagogie active",
    icon: "sparkles",
    color: "sun",
    description: "L'enfant n'est jamais spectateur : il est acteur de son développement. Nous proposons (« faire avec ») mais n'imposons jamais.",
  },
  {
    title: "Éveil sensoriel",
    icon: "eye",
    color: "sand",
    description: "Une approche profondément sensorielle où l'enfant explore librement pour devenir l'artisan de ses propres apprentissages.",
  },
  {
    title: "Langage & communication",
    icon: "message-circle",
    color: "ocean",
    description: "Nous encourageons l'éveil au langage à travers les comptines, les histoires et le dialogue constant avec l'enfant.",
  },
  {
    title: "Ouverture au monde",
    icon: "globe",
    color: "coral",
    description: "Découverte des cultures, de la nature et de l'environnement pour favoriser l'éveil et la curiosité.",
  },
  {
    title: "Éco-responsabilité",
    icon: "leaf",
    color: "sun",
    description: "Engagement pour l'environnement : tri des déchets, jardinage, sensibilisation au développement durable.",
  },
  {
    title: "Santé & bien-être",
    icon: "activity",
    color: "sand",
    description: "Hygiène, sommeil respecté, nutrition équilibrée avec Les Cuisines d'Uzel, et accueil inclusif.",
  },
  {
    title: "Inclusion & PAI",
    icon: "heart-handshake",
    color: "ocean",
    description: "Chaque enfant a sa place. Les projets d'accueil individualisés sont co-construits avec les familles et professionnels de santé.",
  },
  {
    title: "Partenariat familles",
    icon: "home",
    color: "coral",
    description: "Parents et crèche sont partenaires. Communication quotidienne, transmissions et dialogues bienveillants.",
  },
];

export const DAILY_SCHEDULE = [
  { time: "6h00 - 7h00", activity: "Accueil échelonné", icon: "sunrise" },
  { time: "7h00 - 9h00", activity: "Jeux libres et petit-déjeuner", icon: "coffee" },
  { time: "9h00 - 11h30", activity: "Activités éducatives et motricité", icon: "palette" },
  { time: "11h30 - 12h00", activity: "Repas de midi", icon: "utensils" },
  { time: "12h00 - 13h00", activity: "Hygiène et préparation au sommeil", icon: "bath" },
  { time: "13h00 - 15h00", activity: "Sieste", icon: "moon" },
  { time: "15h00 - 16h00", activity: "Goûter et réveil progressif", icon: "cookie" },
  { time: "16h00 - 18h30", activity: "Activités libres et ateliers", icon: "gamepad-2" },
  { time: "18h30 - 19h00", activity: "Transmission et départ", icon: "home" },
];

export const PRACTICAL_INFO = [
  {
    title: "Inscription",
    icon: "file-text",
    items: [
      "Demande sur place ou par internet",
      "Étude selon le temps de garde (priorité temps plein)",
      "Visite obligatoire avant confirmation",
      "Dossier complet à fournir via l'application Meeko",
    ],
  },
  {
    title: "Documents nécessaires",
    icon: "folder-open",
    items: [
      "Certificat médical d'aptitude",
      "Copie des vaccinations à jour",
      "Livret de famille ou acte de naissance",
      "Carte d'identité des parents",
      "Justificatif de domicile",
      "Attestation d'assurance responsabilité civile",
    ],
  },
  {
    title: "Frais d'entrée",
    icon: "euro",
    items: [
      "Frais d'inscription : 100 €",
      "Chèque de réservation (arrhes) : demi-mois de facturation",
      "Restitué en cas de rétractation dans les 14 jours",
    ],
  },
  {
    title: "Période de familiarisation",
    icon: "users",
    items: [
      "Durée : 1 à 2 semaines",
      "Parents présents les premiers jours",
      "Séparations progressives",
      "Tarification réduite pendant cette période",
    ],
  },
];

export const HEALTH_INFO = [
  {
    title: "Santé",
    icon: "stethoscope",
    description: "En cas de fièvre ou de maladie contagieuse, l'enfant doit rester à la maison. Nous suivons les protocoles d'hygiène stricts.",
  },
  {
    title: "Médicaments",
    icon: "pill",
    description: "Un Protocol d'Accueil Individualisé (PAI) est mis en place pour tout traitement. Seul le Doliprane peut être administré sur ordonnancede longue durée.",
  },
  {
    title: "Allergies",
    icon: "alert-triangle",
    description: " signalées lors de l'inscription et inscrites sur Meeko. Les repas sont préparés par Les Cuisines d'Uzel en respect des PAI.",
  },
  {
    title: "Urgences",
    icon: "phone",
    description: "En cas d'urgence, nous contactons immédiatement les parents puis les services de secours. Numéro d'urgence : 15 (SAMU) ou 18 (Pompiers).",
  },
];

export const FINANCIAL_INFO = {
  title: "Transparence financière",
  icon: "coins",
  cmg: {
    title: "Complément de Libre Choix du Mode de Garde (CMG)",
    description: "Aide de la CAF pour réduire vos frais de garde. Versé directement à la micro-crèche pour simplifier vos démarches.",
  },
  taxCredit: {
    title: "Crédit d'impôt",
    description: "50% des frais de garde engagés, plafonné à 3 500 € par enfant et par an (soit 1 750 € maximum). Ce crédit s'applique à toutes les modes de garde.",
  },
  mention: "Les tarifs précis sont disponibles sur demande lors de la visite ou sur l'application Meeko.",
};

export const RULES = [
  {
    title: "Sorties",
    icon: "log-out",
    description: "L'enfant est remis uniquement aux personnes autorisées et désignées sur Meeko. En cas de changement, une pièce d'identité peut être demandée.",
  },
  {
    title: "Objets personnels",
    icon: "backpack",
    description: "Doudous, cls de change et repas personalisés sont les bienvenus. Merci de tout marquer au nom de l'enfant.",
  },
  {
    title: "Communication",
    icon: "message-square",
    description: "L'application Meeko permet un suivi quotidien avec photos, transmissions et informations. Une permanence téléphonique est assurée pendant les heures d'ouverture.",
  },
  {
    title: "Absences",
    icon: "calendar-x",
    description: "Toute absence doit être signalée avant 9h. Les jours de fermeture (congés annuels) sont communiqués en début d'année.",
  },
];

export const DOCUMENTS_LINKS = [
  { name: "Projet pédagogique 2026-2027", path: "/documents/Projet pédagogique 2026-2027.pdf" },
  { name: "Règlement de fonctionnement 2026-2027", path: "/documents/Règlement de fonctionnement 2026-2027.pdf" },
];

export const TABS = [
  { id: "accueil", label: "Accueil", icon: "home" },
  { id: "projet", label: "Notre Projet", icon: "book-open" },
  { id: "equipe", label: "L'Équipe", icon: "users" },
  { id: "quotidien", label: "Quotidien", icon: "calendar" },
  { id: "infos", label: "Infos Pratiques", icon: "info" },
  { id: "familles", label: "Familles", icon: "heart" },
];
