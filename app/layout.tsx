import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "BEL-KHSIRY Yassine | Data Analyst & Data Scientist",
  description:
    "Portfolio premium de BEL-KHSIRY Yassine, étudiant en Master Data Science à Aix-Marseille Université, spécialisé en analytics industriel, IA, BI et maintenance prédictive.",
  keywords: [
    "Data Scientist Marseille",
    "Data Analyst",
    "Business Intelligence",
    "Maintenance prédictive",
    "NASA CMAPSS",
    "Machine Learning",
    "Power BI",
    "Aix-Marseille Université"
  ],
  authors: [{ name: "BEL-KHSIRY YASSINE" }],
  creator: "BEL-KHSIRY YASSINE",
  openGraph: {
    title: "BEL-KHSIRY Yassine | Portfolio Data Science",
    description:
      "Analytics industriel, IA appliquée, dashboards métier et machine learning orienté impact.",
    type: "website",
    locale: "fr_FR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${space.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
