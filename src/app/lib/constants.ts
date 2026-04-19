// Micro-crèche D'BEBE - Données centralisées
// Source : Projet pédagogique 2026-2027 & Règlement de fonctionnement 2026-2027

export const CRECHE_INFO = {
  name: "Micro-crèche D'BEBE",
  tagline: "Plus qu'un mode de garde, un cocon d'éveil où chaque sens est sollicité pour révéler le plein potentiel de votre enfant.",
  address: "1 avenue de l'Éleu-de-France",
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
    description: "Garant du projet éducatif, il coordonne, impulse et veille à la qualité de l'accueil. Il assure la gestion quotidienne de la structure.",
    icon: "compass",
  },
  {
    name: "CRETIAUX Maryline",
    role: "Éducatrice de Jeunes Enfants (EJE)",
    description: "Son suivi et accompagnement garantissent la qualité pédagogique. Elle apporte son expertise pour l'ensemble de l'équipe.",
    icon: "school",
  },
  {
    name: "L'équipe CAPE AEPE",
    role: "Accompagnatrices Éducatives Petite Enfance",
    description: "Le socle du quotidien. Passionnées et qualifiées, elles vivent au rythme de votre enfant, gèrent les repas, le sommeil et tissent le lien affectif indispensable.",
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
    description: "Inspirée par la pédagogie d'Emmi Pikler, nous ne plaçons jamais un enfant dans une position qu'il ne sait atteindre seul. L'environnement encourage l'autonomie motrice.",
  },
  {
    title: "Pédagogie active",
    icon: "sparkles",
    color: "sun",
    description: "L'enfant n'est jamais spectateur : il est acteur de son développement. Nous proposons (≠ faire avec) mais jamais n'imposons.",
  },
  {
    title: "Éveil sensoriel",
    icon: "eye",
    color: "sand",
    description: "Une approche professionnelle sensorielle où l'enfant explore librement pour développer l'art de ses propres apprentissages.",
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
    description: "Découvertes culturelles, de la nature et de l'environnement pour favoriser l'éveil et la curiosité.",
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
    description: "Hygiène, nutrition, repos et développement durable au cœur de notre projet éducatif.",
  },
  {
    title: "Partenariat familles",
    icon: "handshake",
    color: "coral",
    description: "Parents et crèche sont partenaires. Communication quotidienne, transmissions et dialogue bienveillants.",
  },
];

export const DAILY_SCHEDULE = [
  { time: "6h00 - 7h00", activity: "Accueil individualisé", icon: "sunrise" },
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
      "Étude du temps de garde (priorité temps plein)",
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
];

export const HEALTH_INFO = [
  {
    title: "Santé",
    icon: "stethoscope",
    description: "En cas de fièvre ou de maladie contagieuse, l'enfant doit rester à la maison. Nous suivons les protocoles d'hygiène stricts.",
  },
  {
    title: "Allergies",
    icon: "alert-triangle",
    description: " signalement lors de l'inscription et inscrits sur Meeko. Les repas sont préparés par demi-journée de fabrication.",
  },
  {
    title: "Urgences",
    icon: "phone",
    description: "En cas d'urgence, nous contactons immédiatement les parents puis les services de secours. Numéro d'urgence : 15 (SAMU) ou 18 (Pompiers).",
  },
];

export const FINANCIAL_INFO = {
  title: "Financement",
  icon: "coins",
  cmg: {
    title: "Complément Libre Choix du Mode de Garde (CMG)",
    description: "Aide de la CAF pour réduire vos frais de garde. Versée directement à la micro-crèche pour simplifier vos démarches.",
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
    description: "DouDou, couverture et doudou sont les bienvenus. Merci de tout marquer au nom de l'enfant.",
  },
  {
    title: "Communication",
    icon: "message-square",
    description: "L'application Meeko permet un suivi quotidien avec photos, transmissions et informations. Une permanence téléphonique est assurée pendant les heures d'ouverture.",
  },
  {
    title: "Absences",
    icon: "calendar-x",
    description: "Toute absence doit être signalée avant 8h. Les jours de fermeture (congés annuels) sont communiqués en début d'année.",
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
