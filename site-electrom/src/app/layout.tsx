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
  title: "ElectROM Engenharia | Subestações, Mercado Livre & Energia Solar",
  description: "Engenharia de Energias para indústrias e grandes empresas: Média e Baixa Tensão, Subestações, Mercado Livre de Energia (ACL), Eficiência Energética e Usinas Fotovoltaicas. Mais de 30 anos de excelência.",
  metadataBase: new URL("https://electrom.eng.br"),
  alternates: {
    canonical: "https://electrom.eng.br",
  },
  keywords: [
    "engenharia elétrica",
    "subestação de média tensão",
    "mercado livre de energia",
    "gerenciamento de obras elétricas",
    "energia solar industrial",
    "eficiência energética industrial",
    "projetos elétricos industriais",
    "laudo NBR 5410",
    "São Paulo",
    "ElectROM Engenharia"
  ],
  authors: [{ name: "ElectROM Engenharia" }],
  openGraph: {
    title: "ElectROM Engenharia | Inteligência & Engenharia de Energias",
    description: "Mais de 30 anos de solidez e inovação. Projetos elétricos industriais, subestações e transição para o Mercado Livre de Energia.",
    url: "https://electrom.eng.br",
    siteName: "ElectROM Engenharia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/ElectROM - Horizontal.png",
        width: 1200,
        height: 630,
        alt: "ElectROM Engenharia - Soluções Energéticas Corporativas",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://electrom.eng.br/#organization",
      "name": "ElectROM Engenharia",
      "legalName": "ElectROM Engenharia EIRELI",
      "url": "https://electrom.eng.br",
      "logo": "https://electrom.eng.br/ElectROM%20-%20Horizontal.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+5511999620930",
        "contactType": "commercial",
        "email": "comercial@electrom.eng.br",
        "areaServed": "BR",
        "availableLanguage": "Portuguese"
      },
      "sameAs": [
        "https://linkedin.com/company/electrom-engenharia",
        "https://www.instagram.com/electromeng/"
      ]
    },
    {
      "@type": ["LocalBusiness", "ElectricalContractor"],
      "@id": "https://electrom.eng.br/#localbusiness",
      "name": "ElectROM Engenharia",
      "image": "https://electrom.eng.br/ElectROM%20-%20Horizontal.png",
      "url": "https://electrom.eng.br",
      "telephone": "+55-11-99962-0930",
      "email": "comercial@electrom.eng.br",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      "knowsAbout": [
        "Média e Baixa Tensão",
        "Subestações e Cabines Primárias",
        "Mercado Livre de Energia (ACL)",
        "Energias Renováveis e Usinas Fotovoltaicas",
        "Eficiência Energética Industrial",
        "Gerenciamento de Obras e Utilidades"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Soluções em Engenharia de Energias",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Energias Renováveis",
              "description": "Engenharia completa de usinas fotovoltaicas industriais e comerciais, estações de carregamento veicular (VE) e autonomia energética."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Engenharia de Energias",
              "description": "Diagnósticos completos de consumo, conservação de energia e mitigação de perdas elétricas e térmicas industriais."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Consultoria de Energia",
              "description": "Estratégias de portabilidade para o Mercado Livre de Energia (ACL), gestão de contratos e redução drástica de custos."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Média e Baixa Tensão",
              "description": "Projetos elétricos complexos, montagem de subestações de entrada, cabines primárias e laudos normativos NBR 5410/14039."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gerenciamento de Obras",
              "description": "Coordenação técnica ponta a ponta de instalações elétricas, civis e utilidades com engenheiros residentes no local."
            }
          }
        ]
      }
    }
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
