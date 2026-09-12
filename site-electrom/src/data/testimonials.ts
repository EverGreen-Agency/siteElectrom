export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  segment: string;
  rating?: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'metalurgica-sp',
    quote: 'Além do retorno financeiro imediato da usina fotovoltaica, conseguimos lastrear os dados da ElectROM em nosso Balanço de Sustentabilidade anual de forma 100% auditável.',
    author: 'Diretoria de ESG',
    role: 'Diretoria de ESG & Sustentabilidade',
    company: 'Grupo Metalúrgico SP',
    segment: 'Indústria Metalúrgica',
    rating: 5
  },
  {
    id: 'hub-logistico',
    quote: 'A modernização da cabine primária e o diagnóstico de energia reativa reduziram perdas físicas de rede e foram decisivos na obtenção de certificação verde com fundos de investimento.',
    author: 'Gerência de Operações',
    role: 'Gerência de Operações Industriais',
    company: 'Hub Logístico B2B',
    segment: 'Logística & Armazenagem',
    rating: 5
  },
  {
    id: 'smart-fit-embu',
    quote: 'A usina solar de 145 kWp dimensionada pela ElectROM superou a estimativa inicial de geração. A redução na fatura mensal possibilitou reinvestir diretamente na modernização da nossa unidade.',
    author: 'Gestão Predial',
    role: 'Gestor Predial & Utilidades',
    company: 'Smart Fit Embu Guaçu',
    segment: 'Rede Comercial & Serviços',
    rating: 5
  },
  {
    id: 'agro-paulista',
    quote: 'A consultoria da ElectROM na migração para o Mercado Livre de Energia nos deu total previsibilidade orçamentária contra as oscilações de bandeiras tarifárias.',
    author: 'Controladoria Geral',
    role: 'Diretor Financeiro',
    company: 'Agroindústria Paulista',
    segment: 'Agronegócio',
    rating: 5
  }
];

export function getAllTestimonials(): TestimonialItem[] {
  return testimonialsData;
}
