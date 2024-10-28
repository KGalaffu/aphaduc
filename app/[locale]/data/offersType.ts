// data/offersData.js
const offers = [
    {
        id: 1,
        date: "05.12.", // Date for this new offer
        title: "Ateliers et formations en Suisse",
        details: `
        Ateliers de Sensibilisation à la Culture
        Objectif : Favoriser l’intégration des jeunes migrants dans la société suisse.
        Activités : Ateliers sur les coutumes suisses, échanges culturels, et cours de cuisine locale.
        
        Ateliers de Compétences de Vie
        Objectif : Aider les jeunes à développer des compétences pratiques pour la vie quotidienne.
        Activités : Gestion de budget personnel, planification de repas, et simulations d’entretiens d’embauche.
  
        Ateliers de Soutien Éducatif
        Objectif : Offrir un soutien académique aux jeunes migrants.
        Activités : Tutorat dans des matières scolaires (mathématiques, sciences), aide à la rédaction de devoirs.
  
        Formations Professionnelles
        Objectif : Préparer les jeunes aux exigences du marché du travail suisse.
        Activités : Formations sur les compétences techniques (informatique, métiers de la santé), et cours sur la création d'entreprise.
  
        Ateliers de Droits et d’Accès aux Services
        Objectif : Informer les jeunes migrants sur leurs droits et les ressources disponibles.
        Activités : Séminaires avec des avocats sur les droits des migrants, séances d’information sur l'accès à l'éducation.
  
        Ateliers de Développement Personnel
        Objectif : Renforcer la confiance en soi et l'estime de soi des jeunes.
        Activités : Activités de team-building, formations sur les compétences interpersonnelles, et ateliers sur la gestion des émotions.
      `,
        link: "En savoir plus",
      },
      {
        id: 2,
        date: "28.10.",
        title: "Ateliers et formations au Cameroun",
        details: `
        1. Ateliers de Sensibilisation à la Culture
        Objectif : Favoriser l'intégration des enfants défavorisés et handicapés en leur permettant de partager et de découvrir différentes cultures.
        Activités : Présentations de traditions locales, échanges culturels adaptés aux jeunes, et cours de cuisine traditionnelle pour encourager la participation.
        
        2. Ateliers de Compétences de Vie
        Objectif : Développer des compétences pratiques essentielles pour la vie quotidienne, adaptées aux besoins spécifiques des enfants.
        Activités : Gestion simple des ressources, initiation à l'autonomie personnelle, et ateliers pratiques sur les soins d'hygiène et de santé.
        
        3. Ateliers d'Éducation Spécialisée
        Objectif : Offrir un soutien éducatif aux enfants en situation de handicap, en utilisant des méthodes adaptées.
        Activités : Sessions d'apprentissage adaptées avec des éducateurs spécialisés, activités ludiques pour stimuler l'apprentissage, et programmes de rééducation fonctionnelle.
        
        4. Ateliers de Santé et de Bien-être
        Objectif : Promouvoir la santé physique et mentale des enfants, en tenant compte des situations d'urgence.
        Activités : Sensibilisation à la nutrition, ateliers sur les gestes de premiers secours, et séances de relaxation ou de yoga adaptées aux enfants.
        
        5. Formations Professionnelles (pour jeunes adultes)
        Objectif : Préparer les jeunes adultes, notamment ceux qui ont vécu des situations difficiles, aux exigences du marché du travail.
        Activités : Formations sur les compétences techniques (artisanat, agriculture durable) et cours d'entrepreneuriat axés sur des projets locaux.
        
        6. Ateliers de Développement Personnel
        Objectif : Renforcer la confiance en soi et l'estime de soi des enfants et des jeunes adultes.
        Activités : Activités de groupe pour favoriser la cohésion, jeux de rôle sur la gestion des émotions, et formations sur les compétences sociales et interpersonnelles.
      `,
        link: "En savoir plus",
      },
  ];
  
  export default offers;
  


  type CardKey =
  | 'cards.card1.title'
  | 'cards.card1.description'
  | 'cards.card1.fullContent'
  | 'cards.card2.title'
  | 'cards.card2.description'
  | 'cards.card2.fullContent'
  | 'cards.card3.title'
  | 'cards.card3.description'
  | 'cards.card3.fullContent'
  | 'cards.card4.title'
  | 'cards.card4.description'
  | 'cards.card4.fullContent';

export type CardType = {
  id: number;
  titleKey: CardKey;
  descriptionKey: CardKey;
  fullContentKey?: CardKey;
  bgColor: string;
  imgSrc?: string;
};

const cards: CardType[] = [
  {
    id: 1,
    titleKey: 'cards.card1.title',
    descriptionKey: 'cards.card1.description',
    fullContentKey: 'cards.card1.fullContent',
    bgColor: 'bg-yellow-200',
  },
  {
    id: 2,
    titleKey: 'cards.card2.title',
    descriptionKey: 'cards.card2.description',
    fullContentKey: 'cards.card2.fullContent',
    bgColor: 'bg-yellow-300',
  },
  {
    id: 3,
    titleKey: 'cards.card3.title',
    descriptionKey: 'cards.card3.description',
    fullContentKey: 'cards.card3.fullContent',
    bgColor: 'bg-yellow-400',
  },
  {
    id: 4,
    titleKey: 'cards.card4.title',
    descriptionKey: 'cards.card4.description',
    fullContentKey: 'cards.card4.fullContent',
    bgColor: 'bg-yellow-500',
  },
  {
    id: 5,
    titleKey: 'cards.card5.title',
    descriptionKey: 'cards.card5.description',
    fullContentKey: 'cards.card5.fullContent',
    bgColor: 'bg-yellow-400',
  },
  {
    id: 6,
    titleKey: 'cards.card6.title',
    descriptionKey: 'cards.card6.description',
    fullContentKey: 'cards.card6.fullContent',
    bgColor: 'bg-yellow-500',
  },
];

export default cards;
