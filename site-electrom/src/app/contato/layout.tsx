import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fale com a Engenharia | Orçamentos e Consultoria Técnica',
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

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
