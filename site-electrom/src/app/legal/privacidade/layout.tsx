import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade & Proteção de Dados (LGPD)',
  description: 'Diretrizes de privacidade, conformidade com a LGPD e tratamento seguro de dados pessoais e corporativos pela ElectROM Engenharia.',
  alternates: {
    canonical: 'https://electrom.eng.br/legal/privacidade',
  },
};

export default function PrivacidadeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
