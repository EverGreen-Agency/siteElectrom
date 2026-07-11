import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diagnóstico Técnico & Contato | Electrom Engenharia',
  description: 'Fale com nossa equipe técnica de engenharia. Solicite uma avaliação gratuita de consumo de energia e viabilidade de usinas fotovoltaicas.',
  alternates: {
    canonical: 'https://electrom.eng.br/contato',
  },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
