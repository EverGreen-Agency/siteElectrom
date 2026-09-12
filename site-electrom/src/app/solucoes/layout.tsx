import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soluções em Engenharia de Energias & Média Tensão',
  description: 'Projetos e montagem de Cabines Primárias, Usinas Solares Industriais, Migração para Mercado Livre de Energia (ACL), BESS e Eficiência Energética Industrial.',
  alternates: {
    canonical: 'https://electrom.eng.br/solucoes',
  },
  keywords: [
    'cabine primária média tensão',
    'usina solar industrial',
    'mercado livre de energia ACL',
    'baterias BESS indústria',
    'eficiência energética industrial',
    'laudo SPDA NBR 5419',
    'engenharia elétrica São Paulo'
  ],
  openGraph: {
    title: 'Soluções em Engenharia de Energias & Média Tensão | ElectROM Engenharia',
    description: 'Projetos e montagem de Cabines Primárias, Usinas Solares Industriais, Migração para Mercado Livre de Energia (ACL), BESS e Eficiência Energética Industrial.',
    url: 'https://electrom.eng.br/solucoes',
    siteName: 'ElectROM Engenharia',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/obras/engenharia-das-energias.png',
        width: 1200,
        height: 630,
        alt: 'Soluções Técnicas ElectROM Engenharia',
      },
    ],
  },
};

export default function SolucoesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
