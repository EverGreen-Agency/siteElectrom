import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nossas Soluções | ElectROM Engenharia',
  description: 'Projetos e soluções sob medida: subestações de média tensão, usinas de energia solar fotovoltaica, laudos técnicos e eficiência energética industrial.',
  alternates: {
    canonical: 'https://ElectROM.eng.br/solucoes',
  },
};

export default function SolucoesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
