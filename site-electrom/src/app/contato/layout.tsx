import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fale com a Engenharia | Orçamentos Técnicos',
  description: 'Solicite um diagnóstico técnico ou proposta personalizada com nossos engenheiros especialistas em Cabines Primárias, Usinas Solares, BESS e Mercado Livre de Energia.',
  alternates: {
    canonical: 'https://electrom.eng.br/contato',
  },
  keywords: [
    'contato engenharia elétrica',
    'orçamento cabine primária',
    'orçamento usina solar industrial',
    'consultoria mercado livre energia contato',
    'telefone ElectROM engenharia'
  ],
  openGraph: {
    title: 'Fale com a Engenharia | Orçamentos e Consultoria Técnica',
    description: 'Solicite um diagnóstico técnico ou proposta personalizada com nossos engenheiros especialistas em Cabines Primárias, Usinas Solares, BESS e Mercado Livre de Energia.',
    url: 'https://electrom.eng.br/contato',
    siteName: 'ElectROM Engenharia',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/ElectROM - Horizontal.png',
        width: 1200,
        height: 630,
        alt: 'Contato ElectROM Engenharia',
      },
    ],
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://electrom.eng.br/contato#contactpage',
  url: 'https://electrom.eng.br/contato',
  name: 'Fale com a Engenharia | ElectROM Engenharia',
  description: 'Canal oficial para orçamentos técnicos, projetos elétricos industriais e consultoria energética com engenheiros credenciados pelo CREA.',
  mainEntity: {
    '@type': ['LocalBusiness', 'ElectricalContractor'],
    '@id': 'https://electrom.eng.br/#localbusiness',
    name: 'ElectROM Engenharia',
    telephone: '+55-11-99962-0930',
    email: 'comercial@electrom.eng.br',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Paulista, 1000 - Bela Vista',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01310-100',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.5657,
      longitude: -46.6514
    },
    hasMap: 'https://maps.google.com/?q=ElectROM+Engenharia+Av+Paulista+1000',
    areaServed: [
      { '@type': 'Country', 'name': 'Brasil' },
      { '@type': 'AdministrativeArea', 'name': 'Região Sudeste' },
      { '@type': 'AdministrativeArea', 'name': 'Região Sul' },
      { '@type': 'AdministrativeArea', 'name': 'Região Centro-Oeste' },
      { '@type': 'AdministrativeArea', 'name': 'Região Nordeste' },
      { '@type': 'State', 'name': 'São Paulo' },
      { '@type': 'State', 'name': 'Minas Gerais' },
      { '@type': 'State', 'name': 'Rio de Janeiro' },
      { '@type': 'State', 'name': 'Paraná' },
      { '@type': 'State', 'name': 'Santa Catarina' },
      { '@type': 'State', 'name': 'Rio Grande do Sul' },
      { '@type': 'State', 'name': 'Goiás' },
      { '@type': 'State', 'name': 'Mato Grosso' },
      { '@type': 'State', 'name': 'Bahia' }
    ]
  }
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
