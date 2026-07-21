import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compromisso de Sustentabilidade & ESG | ElectROM Engenharia',
  description: 'Projetos desenhados sob a ótica ESG. Conheça as métricas ambientais que norteiam nossas obras industriais e sistemas fotovoltaicos.',
  alternates: {
    canonical: 'https://ElectROM.eng.br/sustentabilidade',
  },
};

export default function SustentabilidadeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
