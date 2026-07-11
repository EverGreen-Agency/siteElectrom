import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nossas Soluções | Electrom Engenharia',
  description: 'Projetos e soluções sob medida: subestações de alta tensão, usinas de energia solar fotovoltaica, laudos técnicos e eficiência energética industrial.',
  alternates: {
    canonical: 'https://electrom.eng.br/solucoes',
  },
};

export default function SolucoesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
