import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso & Políticas de Privacidade | Electrom Engenharia',
  description: 'Conformidade legal e conformidade de LGPD. Conheça as políticas de tratamento de dados e proteção à privacidade da Electrom Engenharia.',
  alternates: {
    canonical: 'https://electrom.eng.br/legal',
  },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
