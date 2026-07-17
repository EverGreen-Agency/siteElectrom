import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/carousel.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Electrom Engenharia | Engenharia Elétrica, Subestações & Energia Solar",
  description: "Soluções de alta performance em engenharia elétrica industrial, subestações, eficiência energética e energia solar. Mais de 25 anos de experiência transformando inovação em economia sustentável.",
  alternates: {
    canonical: "https://electrom.eng.br",
  },
  keywords: [
    "engenharia elétrica",
    "subestação de energia",
    "energia solar industrial",
    "eficiência energética",
    "projetos elétricos",
    "São Paulo",
    "SP",
    "Electrom Engenharia"
  ],
  authors: [{ name: "Electrom Engenharia" }],
  openGraph: {
    title: "Electrom Engenharia | Engenharia de Energia",
    description: "Mais de 25 anos de solidez e inovação. Projetos elétricos industriais e usinas solares de alta performance.",
    url: "https://electrom.eng.br",
    siteName: "Electrom Engenharia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/ElectROM - Horizontal.png",
        width: 1200,
        height: 630,
        alt: "Electrom Engenharia - Soluções Energéticas",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Electrom Engenharia",
  "image": "https://electrom.eng.br/ElectROM%20-%20Horizontal.png",
  "@id": "https://electrom.eng.br/#localbusiness",
  "url": "https://electrom.eng.br",
  "telephone": "+551132301996",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Paulista, 1000 - Bela Vista",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01310-100",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.5615,
    "longitude": -46.6560
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://linkedin.com/company/electrom-engenharia",
    "https://www.instagram.com/electromeng/"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body className="font-sans antialiased text-brand-white bg-brand-petrol" suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
