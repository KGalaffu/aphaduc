import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/lib/SessionWrapper";
import { ThemeProvider } from "@/app/components/theme-provider";
import Nav from "./components/Nav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Police Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aphaduc",
  description: "Swiss Association",
};

// RootLayout est un Server Component (par défaut dans l'app directory)
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Calcul de l'heure actuelle côté serveur
  const now = new Date();
  const hour = now.getUTCHours() + 2; // Heure française (UTC+2)
  const localHour = hour >= 24 ? hour - 24 : hour;

  const theme = localHour >= 20 || localHour < 6 ? "light" : "system";

  return (
    <html lang="en">
      <body className={`${inter.className} theme-violet`}>
        <SessionWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme={theme} // Utilise le thème défini selon l'heure serveur
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            {children}
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
