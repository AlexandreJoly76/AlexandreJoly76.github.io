// Tous les textes du site, par langue. Le français est la langue par défaut.
export const translations = {
  fr: {
    meta: {
      title: 'Alexandre Joly — Portfolio',
      description:
        'Alexandre Joly, développeur full stack en alternance. Découvrez mes compétences techniques et mes projets.',
    },
    nav: {
      home: 'Accueil',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
      themeLabel: 'Changer de thème',
      langButton: 'EN',
      langLabel: 'Switch to English',
    },
    home: {
      rolePrefix: 'Développeur ',
      roles: ['Full Stack', 'Back-end', 'Front-end'],
      intro:
        "Développeur full stack en alternance depuis février 2026 et ancien chef d'atelier automobile, je conçois et maintiens des applications web métier, du back-end jusqu'à l'interface, avec un vrai souci de la qualité et des performances.",
      search:
        "Je recherche une alternance dès septembre 2027 (3 semaines en entreprise / 1 semaine à l'école) pour un Bac+5 Chef de projet, architecture et Green IT.",
      viewWork: 'Voir mes projets',
      resume: 'Mon CV',
      scroll: 'Défiler',
    },
    skills: {
      title: 'Arsenal technique',
      categories: {
        frontend: 'Frontend & UI',
        backend: 'Backend & Systèmes',
        devops: 'DevOps & Outils',
      },
    },
    projects: {
      title: 'Projets phares',
      tabCourse: 'Formation',
      tabPersonal: 'Projets perso',
      viewCode: 'Voir le code',
      playGame: 'Jouer au jeu',
      descs: {
        project1: "Forum dédié à l'anime avec système de discussions et profils personnalisables.",
        project2: 'Réseau social full stack : authentification JWT, groupes, notifications et chat en temps réel.',
        project3: 'Jeu en JavaScript avec animations fluides et niveaux de difficulté.',
        project4: 'Forum propulsé par WebSocket avec messagerie instantanée.',
        project5: "Explorateur de données sur des artistes musicaux via des API externes.",
        personal1: 'Explorateur des pays du monde avec recherche et filtres.',
        personal2: 'Jeu tycoon de course automobile aux mécaniques dynamiques.',
        personal3: 'Tycoon de gestion de ressources dans une usine.',
        personal4: 'Outil de gestion du personnel et de suivi des missions.',
      },
    },
    contact: {
      title: 'Travaillons ensemble',
      intro:
        "Je recherche une alternance Bac+5 à partir de septembre 2027. N'hésitez pas à me contacter, je réponds toujours.",
      github: 'Voir mes dépôts',
      linkedin: 'Réseau professionnel',
    },
    footer: {
      tagline: 'Conçu avec intention.',
    },
  },

  en: {
    meta: {
      title: 'Alexandre Joly — Portfolio',
      description:
        'Alexandre Joly, full-stack developer apprentice. Discover my technical skills and featured projects.',
    },
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      themeLabel: 'Change theme',
      langButton: 'FR',
      langLabel: 'Passer en français',
    },
    home: {
      rolePrefix: 'Full-Stack ',
      roles: ['Developer', 'Problem Solver', 'Team Player'],
      intro:
        'Full-stack developer working as an apprentice since February 2026 and former automotive workshop manager, I build and maintain business web applications, from the back end to the user interface, with a strong focus on quality and performance.',
      search:
        "I'm looking for an apprenticeship starting September 2027 (3 weeks at work / 1 week at school) for a Master's-level degree in project management, software architecture and Green IT.",
      viewWork: 'View Work',
      resume: 'Resume',
      scroll: 'Scroll Down',
    },
    skills: {
      title: 'Technical Arsenal',
      categories: {
        frontend: 'Frontend & UI',
        backend: 'Backend & Systems',
        devops: 'DevOps & Tools',
      },
    },
    projects: {
      title: 'Featured Work',
      tabCourse: 'Curriculum',
      tabPersonal: 'Side Projects',
      viewCode: 'View Code',
      playGame: 'Play Game',
      descs: {
        project1: 'Anime forum with discussion systems and customizable profiles.',
        project2: 'Full-stack social network with JWT authentication, groups, notifications and real-time chat.',
        project3: 'JavaScript game with fluid animations and difficulty levels.',
        project4: 'WebSocket powered forum with instant messaging.',
        project5: 'Musical artists data explorer using external APIs.',
        personal1: 'World explorer with search and filtering features.',
        personal2: 'Racing simulation tycoon game with dynamic mechanics.',
        personal3: 'Resource management tycoon in a factory setting.',
        personal4: 'Management tool for personnel and job tracking.',
      },
    },
    contact: {
      title: "Let's Collaborate",
      intro:
        "I'm looking for a Master's-level apprenticeship starting September 2027. Feel free to reach out, my inbox is always open.",
      github: 'Browse Repositories',
      linkedin: 'Professional Network',
    },
    footer: {
      tagline: 'Designed with intention.',
    },
  },
};

export const LANGS = ['fr', 'en'];
export const DEFAULT_LANG = 'fr';
