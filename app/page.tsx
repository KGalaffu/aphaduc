"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import LogoMdc from "../public/logo.png";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export default function Home() {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme(); // Gestion du thème avec next-themes
  const [selectedCard, setSelectedCard] = useState<
  | {
      id: number;
      title: string;
      description: string;
      fullContent?: string; // fullContent devient optionnel
      bgColor: string;
      imgSrc?: string;
    }
  | null
>(null);

const [selectedOffer, setSelectedOffer] = useState<
  | {
      id: number;
      date: string;
      title: string;
      details: string;
      link: string;
    }
  | null
>(null);

  if (session) {
    redirect("/dashboard/notes");
  }

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
  const cards = [
    {
      id: 1,
      title: "Bienvenue sur le site de l'Association Aphaduc",
      description:
        "Découvrez comment nous soutenons les migrants et les personnes en voie de naturalisation à Genève et au Cameroun.",
      fullContent: `
        Nous sommes ravis de vous accueillir sur le site de l'Association Aphaduc, une organisation à but non lucratif dédiée à l'amélioration de la qualité de vie des migrants et des personnes en voie de naturalisation. 
        Basée à Genève, notre association œuvre avec passion et engagement pour créer un environnement inclusif et solidaire, où chacun peut s'épanouir et trouver sa place dans la société.
        Depuis notre création, nous avons développé une multitude d'initiatives et de programmes qui visent à soutenir les populations vulnérables, tant à Genève qu'au Cameroun. 
        Grâce à nos ateliers, formations, et groupes de parole, nous favorisons l'échange, la connaissance, et le soutien mutuel entre les membres de notre communauté. 
        Notre projet phare, le Centre d'Accueil et de Recherche APHADUC, vise à offrir un refuge aux enfants défavorisés et handicapés, tout en leur fournissant les ressources nécessaires pour accéder à l'éducation et à la formation.
        Parallèlement, notre Programme d'Accompagnement à l'Intégration Éducative pour les Jeunes Migrants aide les jeunes à valider leurs compétences et à s'intégrer dans le système éducatif.
        Nous croyons fermement que chaque individu a un potentiel unique à offrir. C'est pourquoi nous nous engageons à promouvoir l'égalité des chances et à soutenir le développement personnel et professionnel de chaque membre de notre communauté.
        Rejoignez-nous dans notre mission et découvrez comment vous pouvez contribuer à faire une différence. Ensemble, construisons un avenir meilleur, basé sur la solidarité, le respect, et l’inclusion.
      `,
      bgColor: "bg-yellow-500",
      imgSrc: "https://craft.stiftung-mercator.ch/files/Fotos/_previewImage2x/PLN-Kommunikation.jpg", // Tu peux ajouter une image appropriée
    },
    {
      id: 2,
      title: "À propos de nous",
      description:
        "Découvrez notre mission et notre histoire, et comment nous avons impacté la vie de nombreux migrants à Genève et au Cameroun.",
      fullContent: `
        Historique de l'Association
        Notre Mission
  
        L'Association Aphaduc est une organisation à but non lucratif dédiée à l'amélioration de la qualité de vie des migrants et des personnes en voie de naturalisation. Située à Genève, notre mission est d'encourager l'intégration sociale, économique et éducative des populations vulnérables à travers des initiatives inclusives et durables.
  
        Notre Histoire
  
        Depuis notre création en [année de création], nous avons engagé des efforts soutenus pour établir des projets innovants et pertinents en réponse aux besoins pressants des migrants et réfugiés en Suisse, ainsi qu'à ceux des enfants défavorisés et handicapés au Cameroun. Notre approche stratégique nous a permis d'identifier des initiatives clés qui apportent un impact significatif.
  
        Nous avons travaillé activement à la recherche de financements privés pour acquérir un terrain au Cameroun, sur lequel nous prévoyons de construire un Centre d'Accueil et de Recherche. Ce centre aura pour vocation d'offrir un soutien essentiel aux enfants en difficulté, leur fournissant un environnement sûr ainsi que des opportunités d'apprentissage et de développement.
  
        À Genève, nous avons également organisé des ateliers et des forums de discussion en collaboration avec des avocats spécialisés dans les droits des immigrants. Ces échanges enrichissants ont renforcé notre compréhension des défis auxquels ces populations font face, nous permettant ainsi de cibler précisément les lacunes à combler par notre action.
  
        C'est grâce à notre engagement indéfectible et notre détermination que nous avons développé des solutions concrètes pour soutenir les migrants et réfugiés en Suisse, ainsi que les enfants abandonnés ou en situation de handicap au Cameroun. Nous sommes convaincus qu'il est crucial d'équiper ces jeunes, qu'ils soient en quête de formation ou d'éducation, avec les outils nécessaires pour bâtir un avenir prometteur.
  
        Nous croyons fermement en la force de la collaboration et en la synergie des efforts. Nous vous invitons à vous joindre à nous dans cette noble mission, car ensemble, nous pouvons créer des changements durables et offrir un avenir meilleur à ceux qui en ont le plus besoin.
  
        Équipe
        Notre équipe se compose de professionnels et de bénévoles passionnés, qui travaillent sans relâche pour atteindre nos objectifs. Chaque membre apporte son expertise et son engagement.
  
        Partenaires
        Nous collaborons avec diverses organisations et institutions, tant au niveau local qu'international, pour renforcer nos initiatives et maximiser notre impact.
      `,
      bgColor: "bg-blue-500",
    },
    {
      id: 3,
      title: "Nos projets",
      description:
        "Découvrez notre Centre d'Accueil et de Recherche au Cameroun ainsi que notre Programme d'Accompagnement pour les jeunes migrants.",
      fullContent: `
        Centre d'Accueil et de Recherche AFADUC
        Le projet du Centre d'Accueil et de Recherche APHADUC est conçu pour fournir un espace sûr et accueillant pour les enfants défavorisés et handicapés au Cameroun. Ce centre vise à répondre à des besoins urgents en offrant une gamme de services essentiels, notamment :
        
        - Hébergement temporaire : Des installations sécurisées où les enfants peuvent trouver refuge, se sentir en sécurité et bénéficier d'un soutien affectif.
        - Repas d'urgence : Des repas nutritifs pour ceux qui en ont le plus besoin, garantissant que chaque enfant ait accès à une alimentation adéquate.
        - Programmes de formation adaptés : Des formations éducatives et pratiques qui tiennent compte des besoins spécifiques des jeunes et des jeunes adultes, les aidant à développer des compétences qui leur permettront de s'intégrer avec succès dans la société.
  
        En outre, nous avons l'intention de fournir des bourses d'études aux étudiants et chercheurs travaillant sur des projets durables et innovants. Ces initiatives visent à encourager des solutions écologiques et viables, contribuant ainsi à l'amélioration des conditions de vie en Afrique. Nous croyons fermement que l'éducation et la recherche sont des leviers puissants pour le changement et le développement durable.
        
        Programme d'Accompagnement à l'Intégration Éducative pour les Jeunes Migrants
        Ce programme a pour objectif d'accompagner les jeunes migrants, y compris les mineurs non accompagnés, tout au long de leur parcours d'intégration en Suisse. Nos actions incluent :
  
        - Évaluation et validation des compétences académiques : Nous procéderons à une évaluation des connaissances et des compétences des jeunes migrants afin de faciliter leur intégration dans le système éducatif suisse.
        - Partenariats avec des universités : Nous établirons des collaborations avec des établissements d'enseignement supérieur pour créer des passerelles d'accès à l'éducation, permettant aux jeunes de poursuivre des études supérieures et d'atteindre leurs objectifs académiques.
  
        Ce programme représente une réponse systémique aux défis rencontrés par les jeunes migrants, en leur offrant les outils nécessaires pour réussir dans un environnement éducatif et social compétitif.
      `,
      bgColor: "bg-pink-500",
      imgSrc:
        "https://craft.stiftung-mercator.ch/files/Fotos/_previewImage2x/PLN-Kommunikation.jpg",
    },
    {
      id: 4,
      title: "Bienvenue sur le site de l'Association Aphaduc",
      description:
        "Découvrez comment nous soutenons les migrants et les personnes en voie de naturalisation à Genève et au Cameroun.",
      fullContent: `
        Nous sommes ravis de vous accueillir sur le site de l'Association Aphaduc, une organisation à but non lucratif dédiée à l'amélioration de la qualité de vie des migrants et des personnes en voie de naturalisation. 
        Basée à Genève, notre association œuvre avec passion et engagement pour créer un environnement inclusif et solidaire, où chacun peut s'épanouir et trouver sa place dans la société.
        Depuis notre création, nous avons développé une multitude d'initiatives et de programmes qui visent à soutenir les populations vulnérables, tant à Genève qu'au Cameroun. 
        Grâce à nos ateliers, formations, et groupes de parole, nous favorisons l'échange, la connaissance, et le soutien mutuel entre les membres de notre communauté. 
        Notre projet phare, le Centre d'Accueil et de Recherche APHADUC, vise à offrir un refuge aux enfants défavorisés et handicapés, tout en leur fournissant les ressources nécessaires pour accéder à l'éducation et à la formation.
        Parallèlement, notre Programme d'Accompagnement à l'Intégration Éducative pour les Jeunes Migrants aide les jeunes à valider leurs compétences et à s'intégrer dans le système éducatif.
        Nous croyons fermement que chaque individu a un potentiel unique à offrir. C'est pourquoi nous nous engageons à promouvoir l'égalité des chances et à soutenir le développement personnel et professionnel de chaque membre de notre communauté.
        Rejoignez-nous dans notre mission et découvrez comment vous pouvez contribuer à faire une différence. Ensemble, construisons un avenir meilleur, basé sur la solidarité, le respect, et l’inclusion.
      `,
      bgColor: "bg-yellow-500",
      imgSrc: "https://craft.stiftung-mercator.ch/files/Fotos/_previewImage2x/PLN-Kommunikation.jpg", // Tu peux ajouter une image appropriée
    },
    {
      id: 5,
      title: "Update für die Demokratie?",
      description:
        "Das Demokratie Labor Basel testet und erforscht demokratische Prozesse und verschiedene Formen der Bürger:innen-Beteiligung.",
      bgColor: "bg-blue-500",
    },
    {
      id: 6,
      title: "51 Klima-Karten fördern Partizipation auf lokaler Ebene",
      description:
        "Wo stehen Kantone und Gemeinden hinsichtlich der Pariser Klimaziele? Interaktive Klima-Karten geben Antworten.",
      bgColor: "bg-pink-500",
      imgSrc:
        "https://craft.stiftung-mercator.ch/files/Fotos/_previewImage2x/PLN-Kommunikation.jpg",
    },
  ];

  return (
    <>
      <link
        href="https://fonts.cdnfonts.com/css/helvetica-neue-lt-pro-2"
        rel="stylesheet"
      />
      <section className="w-full h-80 flex items-center justify-center flex-col gap-2">
        {/* <Image
          width={500}
          height={500}
          src={LogoMdc}
          alt="Logo La Minute De Code"
          className="object-contain mb-4"
        /> */}
        <h1 className="text-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center py-12">
          <Typewriter
            typeSpeed={50}
            words={["APHADUC", "Bienvenue", "Welcome", "Willkommen"]}
            loop={0}
          />
          <Cursor />
        </h1>
        <p className="my-2">Association à but non lucratif</p>
      </section>

      <div className="container mx-auto px-12">
      <section className="w-full h-screen grid grid-cols-1 md:grid-cols-3 gap-4 px-12 py-12">

      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={`${card.bgColor} text-black p-8 group cursor-pointer`}
          layoutId={`card-${card.id}`}
          onClick={() => setSelectedCard(card)}
          initial={{ opacity: 0, scale: 0.8 }} // Animation initiale des cartes
          animate={{ opacity: 1, scale: 1 }} // Animation des cartes
          exit={{ opacity: 0, scale: 0.8 }} // Animation de sortie des cartes
          transition={{ duration: 0.5 }} // Durée de l'animation
        >
          <div className="overflow-hidden">
            {card.imgSrc && (
              <img
                src={card.imgSrc}
                alt={card.title}
                className="mb-4 w-full h-auto transform transition-transform duration-500 group-hover:scale-105 p-2"
              />
            )}
          </div>
          <h3 className="text-xl font-bold transform transition-transform duration-500 group-hover:scale-105 p-2">
            {card.title}
          </h3>
          <p className="pt-8">{card.description}</p>
        </motion.div>
      ))}

<AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black text-white p-6 z-50 flex flex-col justify-center items-center text-center"
            layoutId={`card-${selectedCard.id}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedCard(null)} // Ferme au clic
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl font-bold mb-4">{selectedCard.title}</h3>
              <p className="text-lg leading-relaxed mb-4">{selectedCard.fullContent}</p>
              <div className="mt-8">
                <a href="#" className="underline text-lg">En savoir plus</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </section>
      </div>







    



      <section className="w-full h-screen flex flex-col justify-center items-center text-gray-900 dark:text-gray-100 py-16">
        <div className="container mx-auto">
          <h3 className="text-lg font-light text-left mb-4">Nos ateliers</h3>
          <div className="space-y-4">
            {offers.map((offer) => (
              <motion.div
                key={offer.id}
                className="flex justify-between items-center border-t border-b border-gray-700 py-4 cursor-pointer"
                layoutId={`offer-${offer.id}`}
                onClick={() => setSelectedOffer(offer)} // Zoom quand on clique
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                {/* <div className="text-5xl font-bold">{offer.date}</div> */}
                <div className="text-xl font-bold">{offer.title}</div>
                <div className="text-right">
                  {/* <span className="block text-sm">{offer.details}</span> */}
                  <a href="#" className="underline text-sm">
                    {offer.link}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
  {selectedOffer && (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black text-white p-6 z-50 flex items-center justify-center"
      layoutId={`offer-${selectedOffer.id}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      onClick={() => setSelectedOffer(null)} // Ferme au clic
    >
      <div className="max-w-3xl text-center mx-auto">
        <h3 className="text-4xl font-bold mb-4">{selectedOffer.title}</h3>
        <p className="text-lg leading-relaxed whitespace-pre-wrap">{selectedOffer.details}</p> {/* Ajoute des sauts de ligne */}
        
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* Footer Section */}
      <footer className="text-dark dark:text-white  py-16">
        <div className="container mx-auto flex justify-between items-start">
          <div>
            <p className="mb-2">Aphaduc</p>
            <p className="mb-2">Gartenstrasse 33</p>
            <p>Postfach, CH–8027 Zürich</p>
          </div>
          <div>
            <p className="mb-2">+41 44 206 55 80</p>
            <p className="mb-2">aphaduc.ch</p>
            <p>
              <a href="#" className="underline hover:text-gray-400">
                Newsletter
              </a>{" "}
              |{" "}
              <a href="#" className="underline hover:text-gray-400">
                LinkedIn
              </a>
            </p>
          </div>
          <div>
            <a href="#" className="underline hover:text-gray-400">Revenir en haut</a>
          </div>
        </div>
      </footer>
    </>
  );
}
