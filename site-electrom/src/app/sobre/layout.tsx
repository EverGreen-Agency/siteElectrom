import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre a ElectROM | 30 Anos de Engenharia de Energias',
  description: 'Conheça o legado de 30 anos da ElectROM Engenharia (fundada em 1996), equipe técnica credenciada pelo CREA-SP, rigor normativo e mais de 550 projetos entregues.',
  alternates: {
    canonical: 'https://electrom.eng.br/sobre',
  },
  keywords: [
    'sobre ElectROM engenharia',
    'história ElectROM',
    'empresa de engenharia elétrica São Paulo',
    'engenheiro eletricista CREA SP',
    '30 anos engenharia de energias'
  ],
  openGraph: {
    title: 'Sobre a ElectROM | 30 Anos de Engenharia de Energias',
    description: 'Conheça o legado de 30 anos da ElectROM Engenharia (fundada em 1996), equipe técnica credenciada pelo CREA-SP, rigor normativo e mais de 550 projetos entregues.',
    url: 'https://electrom.eng.br/sobre',
    siteName: 'ElectROM Engenharia',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/ElectROM - Horizontal.png',
        width: 1200,
        height: 630,
        alt: 'Sobre a ElectROM Engenharia',
      },
    ],
  },
};

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
