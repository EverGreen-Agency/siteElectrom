import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nós | ElectROM Engenharia',
  description: 'Conheça o legado de 30 anos da ElectROM Engenharia. Nossa jornada em engenharia de energia elétrica, subestações e transição solar sustentável.',
  alternates: {
    canonical: 'https://ElectROM.eng.br/sobre',
  },
};

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
