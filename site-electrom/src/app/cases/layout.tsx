import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cases de Sucesso & Obras Realizadas',
  description: 'Portfólio de projetos executados pela ElectROM: Usina Solar Smart Fit (145 kWp), Cabine de Pintura EMBRAER, Eficiência Térmica Cargill e obras em média tensão.',
  alternates: {
    canonical: 'https://electrom.eng.br/cases',
  },
  keywords: [
    'cases usina solar comercial',
    'obras cabine primária',
    'projeto elétrico industrial case',
    'Smart Fit solar Embu Guaçu',
    'cabine de pintura EMBRAER',
    'Cargill eficiência energética'
  ],
  openGraph: {
    title: 'Cases de Sucesso & Obras Realizadas | ElectROM Engenharia',
    description: 'Portfólio de projetos executados pela ElectROM: Usina Solar Smart Fit (145 kWp), Cabine de Pintura EMBRAER, Eficiência Térmica Cargill e obras em média tensão.',
    url: 'https://electrom.eng.br/cases',
    siteName: 'ElectROM Engenharia',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/obras/SmartFitSolar.png',
        width: 1200,
        height: 630,
        alt: 'Cases de Engenharia ElectROM',
      },
    ],
  },
};

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
