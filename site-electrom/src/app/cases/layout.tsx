import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estudos de Caso e Obras | ElectROM Engenharia',
  description: 'Confira os resultados reais de economia e eficiência operacional gerados por nossos projetos elétricos e usinas solares homologadas.',
  alternates: {
    canonical: 'https://ElectROM.eng.br/cases',
  },
};

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
