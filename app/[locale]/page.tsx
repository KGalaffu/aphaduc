"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Whitelogo from "../../public/whitelogo.png";
import Darklogo from "../../public/darklogo.png";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { useTheme } from "next-themes";
import cards, { CardType } from './data/cardsType';
import Footer from "./components/Footer";
import { useI18n } from '../locales/client';

export default function Home() {
  const t = useI18n();
  const { data: session } = useSession();
  const { theme } = useTheme();
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);

  // const [selectedOffer, setSelectedOffer] = useState<{
  //   id: number;
  //   date: string;
  //   title: string;
  //   details: string;
  //   link: string;
  // } | null>(null);

  if (session) {
    redirect("/dashboard/notes");
  }

  const logoSrc = theme === "dark" || theme === "system" ? Whitelogo : Darklogo;

  return (
    <>
      <link
        href="https://fonts.cdnfonts.com/css/helvetica-neue-lt-pro-2"
        rel="stylesheet"
      />
      <section className="w-full h-screen flex items-center justify-center flex-col gap-2">
        <Image
          width={500}
          height={500}
          src={logoSrc}
          alt="Logo Aphaduc"
          className="object-contain mb-4"
        />
        <h1 className="text-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center py-12">
          <Typewriter
            typeSpeed={50}
            words={["Bienvenue", "Welcome", "Willkommen"]}
            loop={0}
          />
          <Cursor />
        </h1>
        <p className="my-2 text-xl md:text italic">{t('subtitle')}</p>
      </section>

      <div className={`${selectedCard ? '' : 'container'}`}>
  <section className="w-full h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4 md:px-8 py-8 md:py-12">
    {cards.map((card) => (
      <motion.div
        key={card.id}
        className={`${card.bgColor} text-black p-6 sm:p-8 group cursor-pointer flex flex-col justify-center items-center rounded-lg shadow-lg`}
        layoutId={`card-${card.id}`}
        onClick={() => setSelectedCard(card)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg sm:text-xl font-bold transform transition-transform duration-500 group-hover:scale-105 text-center p-2">
          {t(card.titleKey)}
        </h3>
        <p className="pt-4 sm:pt-8 text-center">{t(card.descriptionKey)}</p>
      </motion.div>
    ))}
    <AnimatePresence>
      {selectedCard && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black text-white z-50 flex flex-col justify-center items-center text-center p-4 md:p-8 overflow-y-auto"
          style={{ maxHeight: '100vh' }}
          layoutId={`card-${selectedCard.id}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setSelectedCard(null)}
            className="absolute top-4 right-4 text-xl sm:text-2xl md:text-3xl font-bold"
          >
            ✕
          </button>
          <div className="mx-auto px-4 md:px-8 py-4 md:py-8 w-full lg:max-w-none overflow-y-auto max-h-full">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-center lg:text-left">
              {t(selectedCard.titleKey)}
            </h3>
            {selectedCard.fullContentKey && (
              <p className="text-sm sm:text-base md:text-lg leading-relaxed lg:leading-loose text-center lg:text-left w-full">
                {t(selectedCard.fullContentKey)}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </section>
</div>


{/* 
      <section className="w-full h-screen flex flex-col justify-center items-center text-gray-900 dark:text-gray-100 py-16">
        <div className="container mx-auto">
          <h3 className="text-lg font-light text-left mb-4">Nos ateliers</h3>
          <div className="space-y-4">
            {offers.map((offer) => (
              <motion.div
                key={offer.id}
                className="flex justify-between items-center border-t border-b border-gray-700 py-4 cursor-pointer"
                layoutId={`offer-${offer.id}`}
                onClick={() => setSelectedOffer(offer)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-xl font-bold">{offer.title}</div>
                <div className="text-right">
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
            className="fixed top-0 left-0 w-full h-full bg-black text-white z-50 flex flex-col justify-center items-center text-center p-4 md:p-8 overflow-y-auto"
            style={{ maxHeight: '100vh' }}
            layoutId={`card-${selectedOffer.id}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setSelectedOffer(null)}
              className="absolute top-4 right-4 text-xl sm:text-2xl md:text-3xl font-bold"
            >
              ✕
            </button>
            <div className="mx-auto px-4 md:px-8 py-4 md:py-8 max-w-lg sm:max-w-2xl overflow-y-auto max-h-full">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">{selectedOffer.title}</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                {selectedOffer.details}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      <Footer />
    </>
  );
}
