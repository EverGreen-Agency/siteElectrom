import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sustentabilidade Corporativa, ESG & Descarbonização',
  description: 'Descarbonização industrial, alinhamento aos ODS 7, 9 e 12 da ONU, mais de 38.000 toneladas de CO₂ neutralizadas e transição energética com retorno econômico comprovado.',
  alternates: {
    canonical: 'https://electrom.eng.br/sustentabilidade',
  },
  keywords: [
    'sustentabilidade industrial ESG',
    'descarbonização empresas',
    'créditos de carbono energia renovável',
    'ODS 7 energia limpa acessível',
    'relatório sustentabilidade ElectROM'
  ],
  openGraph: {
    title: 'Sustentabilidade Corporativa, ESG & Descarbonização | ElectROM Engenharia',
    description: 'Descarbonização industrial, alinhamento aos ODS 7, 9 e 12 da ONU, mais de 38.000 toneladas de CO₂ neutralizadas e transição energética com retorno econômico comprovado.',
    url: 'https://electrom.eng.br/sustentabilidade',
    siteName: 'ElectROM Engenharia',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/obras/Paineis-recortada.png',
        width: 1200,
        height: 630,
        alt: 'Sustentabilidade e ESG ElectROM Engenharia',
      },
    ],
  },
};

export default function SustentabilidadeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
