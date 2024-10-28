"use client";

import { ThemeToggle } from "./ThemeToggle";
import Whitelogo from "../../../public/darkfav.png"; // Importer le logo blanc
import Darklogo from "../../../public/whitefav.png"; // Importer le logo sombre
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes"; // Importer le hook useTheme
import { motion } from "framer-motion"; // Importer motion depuis framer-motion

export default function Nav() {
  const { theme } = useTheme(); // Récupérer le thème actuel

  // Déterminer quel logo utiliser selon le thème
  const logoSrc = theme === "dark" || theme === "system" ? Whitelogo : Darklogo;

  return (
    <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center justify-between p-5 border-b border-gray-300">
      <div>
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              width={150}
              height={50}
              src={logoSrc} // Utiliser le logo déterminé
              className="w-24 h-12"
              alt="Aphaduc"
            />
          </motion.div>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  );
}
