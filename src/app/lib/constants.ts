// Micro-crèche D'BEBE - Données centralisées

export const CRECHE_INFO = {
  name: "Micro-crèche D'BEBE",
  tagline: "Plus qu'un mode de garde, un cocon d'éveil où chaque sens est sollicité pour révéler le plein potentiel de votre enfant.",
  address: "1 avenue de l'Île-de-France",
  city: "25000 Besançon",
  phone: "09 51 88 60 06",
  email: "microcreche.dbebe@gmail.com",
  hours: "6 h – 19 h",
  days: "Lundi – Vendredi",
  mapsUrl: "https://maps.google.com/?q=D%27BEBE+1+avenue+de+l%27ile+de+france+Besan%C3%A7on",
  capacity: 12,
  capacitySurcharge: 14,
  ageRange: "10 semaines – 4 ans révolus",
  surface: "159 m²",
  pmiVerified: true,
};

export const TEAM = [
  {
    role: "Direction",
    description: "Garant du projet éducatif, il coordonne l'équipe, impulse la dynamique pédagogique et veille à la qualité de l'accueil au quotidien.",
    icon: "compass",
  },
  {
    role: "Encadrement pédagogique",
    description: "Spécialiste du développement de l'enfant, elle accompagne l'équipe, garantit la cohérence du projet éducatif et assure le lien avec les familles.",
    icon: "school",
  },
  {
    role: "Auxiliaires de puériculture",
    description: "Le socle du quotidien. Passionnées et qualifiées (CAP AEPE), elles accompagnent chaque enfant dans ses repas, son sommeil et son éveil, avec douceur et bienveillance.",
    icon: "users",
  },
];

export const PEDAGOGICAL_AXES = [
  {
    title: "Sécurité affective",
    subtitle: "La confiance avant tout",
    icon: "heart",
    description: "Un enfant qui se sent en sécurité peut explorer le monde. Nos rituels apaisants et notre disponibilité émotionnelle créent une base solide pour chaque enfant.",
  },
  {
    title: "Motricité libre",
    subtitle: "L'enfant explore à son rythme",
    icon: "baby",
    description: "Inspirée par la pédagogie d'Emmi Pikler, nous ne plaçons jamais un enfant dans une position qu'il ne peut atteindre seul. L'environnement encourage l'autonomie.",
  },
  {
    title: "Pédagogie active",
    subtitle: "L'enfant acteur de ses apprentissages",
    icon: "sparkles",
    description: "L'enfant n'est jamais spectateur : il est acteur de son développement. Nous proposons, accompagnons, mais n'imposons jamais.",
  },
  {
    title: "Éveil sensoriel",
    subtitle: "Toucher, voir, entendre, ressentir",
    icon: "eye",
    description: "L'enfant explore librement son environnement pour développer ses sens et construire ses propres apprentissages à travers l'expérience.",
  },
  {
    title: "Langage & communication",
    subtitle: "Les mots pour grandir",
    icon: "message-circle",
    description: "Nous encourageons l'éveil au langage à travers les comptines, les histoires et le dialogue constant avec l'enfant, dès les premiers mois.",
  },
  {
    title: "Ouverture au monde",
    subtitle: "Curiosité et découverte",
    icon: "globe",
    description: "Découvertes culturelles, de la nature et de l'environnement pour éveiller la curiosité et l'ouverture d'esprit de chaque enfant.",
  },
  {
    title: "Éco-responsabilité",
    subtitle: "Respecter la planète dès le plus jeune âge",
    icon: "leaf",
    description: "Tri des déchets, jardinage, matériaux naturels… Nous sensibilisons les enfants au respect de l'environnement au quotidien.",
  },
  {
    title: "Santé & bien-être",
    subtitle: "Un corps sain dans un esprit serein",
    icon: "activity",
    description: "Hygiène, nutrition équilibrée et repos adapté sont au cœur de notre projet. Chaque enfant évolue dans un cadre sain et bienveillant.",
  },
  {
    title: "Partenariat familles",
    subtitle: "Ensemble pour votre enfant",
    icon: "handshake",
    description: "Parents et crèche sont partenaires. Transmissions quotidiennes, dialogue bienveillant et application Meeko pour rester connectés.",
  },
];

export const DAILY_SCHEDULE = [
  { time: "6 h – 7 h 30", activity: "Accueil individualisé et petit-déjeuner", icon: "sunrise" },
  { time: "7 h 30 – 9 h", activity: "Jeux libres", icon: "coffee" },
  { time: "9 h – 11 h 30", activity: "Activités éducatives et motricité", icon: "palette" },
  { time: "11 h 30 – 12 h", activity: "Repas de midi", icon: "utensils" },
  { time: "12 h – 13 h", activity: "Hygiène et préparation au sommeil", icon: "bath" },
  { time: "13 h – 15 h", activity: "Sieste", icon: "moon" },
  { time: "15 h – 16 h", activity: "Réveil progressif et goûter", icon: "cookie" },
  { time: "16 h – 18 h 30", activity: "Activités libres et ateliers créatifs", icon: "gamepad-2" },
  { time: "18 h 30 – 19 h", activity: "Transmissions et départ", icon: "home" },
];

export const FAQ = [
  {
    question: "Quel est l'âge minimum pour l'admission ?",
    answer: "Nous accueillons les enfants dès 10 semaines jusqu'à 4 ans révolus.",
  },
  {
    question: "Quels sont les horaires d'ouverture ?",
    answer: "La micro-crèche est ouverte du lundi au vendredi, de 6 h à 19 h.",
  },
  {
    question: "Comment fonctionne le financement ?",
    answer: "Vous bénéficiez du Complément de Libre Choix du Mode de Garde (CMG) versé par la CAF directement aux parents, ainsi que d'un crédit d'impôt de 50 % des frais engagés (plafonnés à 3 500 €/an/enfant).",
  },
  {
    question: "Combien de places sont disponibles ?",
    answer: "La structure accueille jusqu'à 12 enfants simultanément (14 en cas de surtaux).",
  },
  {
    question: "Quels documents sont nécessaires à l'inscription ?",
    answer: "Certificat médical d'aptitude, carnet de vaccinations à jour, livret de famille, pièce d'identité des parents, justificatif de domicile et attestation d'assurance responsabilité civile.",
  },
  {
    question: "Comment se passe l'adaptation ?",
    answer: "Une période d'adaptation progressive est prévue avec les parents pour que l'enfant s'intègre en douceur, à son rythme.",
  },
];

export const FINANCIAL_INFO = {
  cmg: {
    title: "Complément de Libre Choix du Mode de Garde (CMG)",
    description: "Aide de la CAF versée directement aux parents pour réduire le coût de la garde. Son montant varie selon vos revenus et le nombre d'enfants à charge.",
  },
  taxCredit: {
    title: "Crédit d'impôt",
    description: "50 % des frais de garde engagés, plafonnés à 3 500 € par enfant et par an (soit 1 750 € maximum de crédit). Ce dispositif s'applique à tous les modes de garde agréés.",
  },
  mention: "Les tarifs précis sont communiqués lors de la visite ou directement sur l'application Meeko.",
};
