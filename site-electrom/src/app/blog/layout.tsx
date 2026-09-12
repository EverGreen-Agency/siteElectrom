import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Artigos Técnicos',
  description: 'Análises técnicas de engenharia elétrica, regulação ANEEL, transição para o Mercado Livre de Energia, sistemas BESS e projetos solares industriais.',
  alternates: {
    canonical: 'https://electrom.eng.br/blog',
  },
  openGraph: {
    title: 'Blog & Artigos Técnicos | ElectROM Engenharia',
    description: 'Análises técnicas de engenharia elétrica, regulação ANEEL, transição para o Mercado Livre de Energia, sistemas BESS e projetos solares industriais.',
    url: 'https://electrom.eng.br/blog',
    siteName: 'ElectROM Engenharia',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
