// Micro-crèche D'BEBE - Données centralisées
// Source : Projet pédagogique 2026-2027 & Règlement de fonctionnement 2026-2027

export const CRECHE_INFO = {
  name: "Micro-crèche D'BEBE",
  tagline: "Plus qu'un mode de garde, un cocon d'éveil où chaque sens est sollicité pour révéler le plein potentiel de votre enfant.",
  address: "1 avenue de l'Éleu-de-France",
  city: "25000 Besançon",
  phone: "09 51 88 60 06",
  email: "microcreche.dbebe@gmail.com",
  hours: "6 h – 19 h",
  days: "Lundi – Vendredi",
  mapsUrl: "https://maps.google.com/?q=1+avenue+de+l%27Eleu-de-France+25000+Besan%C3%A7on",
  capacity: 12,
  capacitySurcharge: 14,
  ageRange: "10 semaines – 4 ans révolus",
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
    description: "Son suivi et son accompagnement garantissent la qualité pédagogique. Elle apporte son expertise au bénéfice de toute l'équipe.",
    icon: "school",
  },
  {
    name: "L'équipe CAPE / AEPE",
    role: "Accompagnatrices éducatives petite enfance",
    description: "Le socle du quotidien. Passionnées et qualifiées (CAP Accompagnant Éducatif Petite Enfance), elles vivent au rythme de votre enfant : repas, sommeil et lien affectif indispensable.",
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
  { time: "6 h – 7 h", activity: "Accueil individualisé", icon: "sunrise" },
  { time: "7 h – 9 h", activity: "Jeux libres et petit-déjeuner", icon: "coffee" },
  { time: "9 h – 11 h 30", activity: "Activités éducatives et motricité", icon: "palette" },
  { time: "11 h 30 – 12 h", activity: "Repas de midi", icon: "utensils" },
  { time: "12 h – 13 h", activity: "Hygiène et préparation au sommeil", icon: "bath" },
  { time: "13 h – 15 h", activity: "Sieste", icon: "moon" },
  { time: "15 h – 16 h", activity: "Goûter et réveil progressif", icon: "cookie" },
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
    answer: "Vous bénéficiez du Complément de Libre Choix du Mode de Garde (CMG) versé par la CAF, ainsi que d'un crédit d'impôt de 50 % des frais engagés (plafonnés à 3 500 €/an/enfant).",
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

export const PRACTICAL_INFO = [
  {
    title: "Inscription",
    icon: "file-text",
    items: [
      "Demande en ligne via le formulaire ci-dessous",
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
      "Carnet de vaccinations à jour",
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
    description: "En cas de fièvre ou de maladie contagieuse, l'enfant doit rester à la maison. Nous appliquons des protocoles d'hygiène stricts.",
  },
  {
    title: "Allergies",
    icon: "alert-triangle",
    description: "Toute allergie est signalée lors de l'inscription et enregistrée sur Meeko. Les repas sont préparés en tenant compte des spécificités de chaque enfant.",
  },
  {
    title: "Urgences",
    icon: "phone",
    description: "En cas d'urgence, nous contactons immédiatement les parents puis les services de secours. SAMU : 15 — Pompiers : 18.",
  },
];

export const FINANCIAL_INFO = {
  title: "Financement",
  icon: "coins",
  cmg: {
    title: "Complément de Libre Choix du Mode de Garde (CMG)",
    description: "Aide de la CAF versée directement à la micro-crèche pour réduire votre reste à charge et simplifier vos démarches.",
  },
  taxCredit: {
    title: "Crédit d'impôt",
    description: "50 % des frais de garde engagés, plafonnés à 3 500 € par enfant et par an (soit 1 750 € maximum de crédit). Ce dispositif s'applique à tous les modes de garde agréés.",
  },
  mention: "Les tarifs précis sont communiqués lors de la visite ou directement sur l'application Meeko.",
};

export const RULES = [
  {
    title: "Sorties",
    icon: "log-out",
    description: "L'enfant est confié uniquement aux personnes autorisées et désignées sur Meeko. En cas de changement, une pièce d'identité peut être demandée.",
  },
  {
    title: "Objets personnels",
    icon: "backpack",
    description: "Doudou et couverture sont les bienvenus. Merci de marquer chaque objet au nom de l'enfant.",
  },
  {
    title: "Communication",
    icon: "message-square",
    description: "L'application Meeko permet un suivi quotidien avec photos, transmissions et informations. Une permanence téléphonique est assurée pendant les heures d'ouverture.",
  },
  {
    title: "Absences",
    icon: "calendar-x",
    description: "Toute absence doit être signalée avant 8 h. Les périodes de fermeture (congés annuels) sont communiquées en début d'année.",
  },
];

export const DOCUMENTS_LINKS = [
  { name: "Projet pédagogique 2026-2027", path: "/documents/Projet pédagogique 2026-2027.pdf" },
  { name: "Règlement de fonctionnement 2026-2027", path: "/documents/Règlement de fonctionnement 2026-2027.pdf" },
];
