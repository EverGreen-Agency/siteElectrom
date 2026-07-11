import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog e Opinião | Electrom Engenharia',
  description: 'Acompanhe as últimas novidades, análises técnicas, dicas regulatórias da ANEEL e tendências de eficiência energética para indústrias e comércio.',
  alternates: {
    canonical: 'https://electrom.eng.br/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
