import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso & Políticas de Privacidade | ElectROM Engenharia',
  description: 'Conformidade legal e conformidade de LGPD. Conheça as políticas de tratamento de dados e proteção à privacidade da ElectROM Engenharia.',
  alternates: {
    canonical: 'https://ElectROM.eng.br/legal',
  },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
