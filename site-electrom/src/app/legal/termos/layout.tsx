import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso & Condições Gerais',
  description: 'Termos e condições de navegação, propriedade intelectual e uso dos serviços e canais digitais da ElectROM Engenharia.',
  alternates: {
    canonical: 'https://electrom.eng.br/legal/termos',
  },
};

export default function TermosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
