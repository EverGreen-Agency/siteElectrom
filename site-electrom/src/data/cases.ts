export interface CaseMetric {
  label: string;
  value: string;
}

export interface ProjectCase {
  id: number;
  title: string;
  category: string;
  segmento: string;
  location: string;
  metrics: CaseMetric[];
  description: string;
  featured: boolean;
  coverImage: string;
  coverOrientation?: 'vertical' | 'horizontal';
  images: string[];
  video?: string;
  antes: {
    consumo: string;
    custo: string;
    impacto: string;
  };
  depois: {
    consumo: string;
    custo: string;
    impacto: string;
  };
  resultados: string[];
}

export const casesData: ProjectCase[] = [
  {
    id: 1,
    title: 'Usina Solar - Recanto São Luiz',
    category: 'Energias Renováveis',
    segmento: 'industrial',
    location: 'Cipó Guaçu, SP',
    metrics: [
      { label: 'Potência', value: '32.16 kWp' },
      { label: 'Economia', value: 'R$ 36.000 / ano' },
      { label: 'Status', value: 'Ativo' }
    ],
    description: 'Engenharia completa, homologação e instalação de usina de microgeração distribuída em solo (32,16 kWp), com inversor PHB e módulos Jinko.',
    featured: false,
    coverImage: '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg',
    images: [
      '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg',
      '/obras/UsinaCipoGuacu/IMG_20190713_162528919_HDR.jpg',
      '/obras/UsinaCipoGuacu/IMG_20190713_162554101_HDR.jpg',
      '/obras/UsinaCipoGuacu/IMG_20190714_113242711_HDR.jpg'
    ],
    antes: {
      consumo: '4.500 kWh/mês',
      custo: 'R$ 3.600/mês',
      impacto: 'Custo tarifário residencial elevado em unidades integradas.'
    },
    depois: {
      consumo: '150 kWh/mês',
      custo: 'R$ 120/mês',
      impacto: '96% de redução de custo com compensação ativa e estabilidade.'
    },
    resultados: [
      'Economia anual: R$ 41.760',
      'Redução: 32 toneladas de CO2/ano',
      'Payback real: 4,0 anos',
      'ROI técnico: 25% ao ano'
    ]
  },
  {
    id: 2,
    title: 'Usina José Simões - Smart Fit Embu Guaçu',
    category: 'Energias Renováveis',
    segmento: 'comercial',
    location: 'Embu Guaçu, SP',
    metrics: [
      { label: 'Potência', value: '145.2 kWp' },
      { label: 'Economia', value: 'R$ 130.000 / ano' },
      { label: 'Status', value: 'Ativo' }
    ],
    description: 'Dimensionamento, homologação e comissionamento de usina comercial fotovoltaica sobre telhado (145,2 kWp) com inversores PHB e módulos DMEGC de alta performance. Elevada produção e recuperação do investimento de acordo com o projeto.',
    featured: true,
    coverImage: '/obras/SmartFitSolar.png',
    images: [
      '/obras/SmartFitSolar.png',
      '/obras/SmartFitSolar_lateral.png',
      '/obras/SmartFitSolar_inversores.png',
    ],
    antes: {
      consumo: '22.000 kWh/mês',
      custo: 'R$ 17.600/mês',
      impacto: 'Altas despesas com climatização e iluminação contínuas.'
    },
    depois: {
      consumo: '3.000 kWh/mês',
      custo: 'R$ 2.400/mês',
      impacto: 'Autonomia energética ativa e drástica redução da tarifa de ponta.'
    },
    resultados: [
      'Economia anual: R$ 182.400',
      'Redução: 145 toneladas de CO2/ano',
      'Payback real: 3,2 anos',
      'Selo ESG & Reconhecimento de Marca'
    ]
  },
  {
    id: 5,
    title: 'Cabine de Pintura EMBRAER',
    category: 'Gerenciamento de Obras',
    segmento: 'industrial',
    location: 'São José dos Campos, SP',
    metrics: [
      { label: 'Escopo', value: 'Ventilação/Exaustão' },
      { label: 'Garantia', value: 'Zero Partículas' },
      { label: 'Status', value: 'Concluído' }
    ],
    description: 'Obra do sistema de exaustão da cabine de pintura de aeronaves da EMBRAER.',
    featured: true,
    coverImage: '/obras/gerenciamento-de-obras.png',
    images: [
      '/obras/gerenciamento-de-obras.png',
      '/obras/Obras/Imagem11.jpg'
    ],
    antes: {
      consumo: 'N/A',
      custo: 'Risco Operacional',
      impacto: 'Falta de controle de fluxo de ar e deposição de poeira nas fuselagens.'
    },
    depois: {
      consumo: 'N/A',
      custo: 'Conformidade Estrita',
      impacto: 'Estabilidade do fluxo de ar, filtragem absoluta e eliminação de retrabalho de pintura.'
    },
    resultados: [
      'Controle absoluto de partículas',
      'Rigor técnico aeronáutico',
      'Obra entregue sem incidentes',
      'Conformidade com normas de segurança'
    ]
  },
  {
    id: 7,
    title: 'Reservatórios de Grande Porte - Riviera São Lourenço',
    category: 'Gerenciamento de Obras',
    segmento: 'industrial',
    location: 'Bertioga, SP',
    metrics: [
      { label: 'Escopo', value: 'Fiscalização Civil' },
      { label: 'Volume', value: '56.000 L' },
      { label: 'Status', value: 'Ativo' }
    ],
    description: 'Gerenciamento, fiscalização e execução civil de reservatórios elevados industriais de grande porte e sistemas de saneamento para a Riviera de São Lourenço (56.000 L).',
    featured: false,
    coverImage: '/obras/Obras/RivieraSaoLourenco.jpg',
    coverOrientation: 'vertical',
    images: [
      '/obras/Obras/RivieraSaoLourenco.jpg'
    ],
    antes: {
      consumo: 'N/A',
      custo: 'Risco de reservação',
      impacto: 'Ausência de sistema de reservação confiável e saneamento defasado.'
    },
    depois: {
      consumo: 'N/A',
      custo: 'Segurança física garantida',
      impacto: 'Reservação estável de água e saneamento em conformidade civil.'
    },
    resultados: [
      'Capacidade: 105.000 Litros',
      'Gerenciamento de obra completo',
      'Estruturas elevadas estáveis',
      'Conformidade com normas de saneamento'
    ]
  },
  {
    id: 9,
    title: 'Cargill Agrícola',
    category: 'Engenharia de Energias',
    segmento: 'industrial',
    location: 'Mairinque, SP',
    metrics: [
      { label: 'Escopo', value: 'Eficiência Energética' },
      { label: 'Economia', value: '1.600 t de combustível' },
      { label: 'Status', value: 'Concluído' }
    ],
    description: 'Projeto de Eficiência Energética com foco na redução no consumo de combustível e das emissões atmosféricas na unidade da Cargill.',
    featured: false,
    coverImage: '/obras/CargillAgricola.png',
    images: [
      '/obras/CargillAgricola.png'
    ],
    antes: {
      consumo: '-',
      custo: '-',
      impacto: 'Alto consumo de combustíveis fósseis/biomassa e emissões atmosféricas proporcionais ao processo.'
    },
    depois: {
      consumo: 'Otimizado',
      custo: 'Reduzido',
      impacto: 'Redução drástica no consumo de combustível e mitigação das emissões.'
    },
    resultados: [
      '1.600 toneladas de combustível economizado',
      'Redução significativa das emissões atmosféricas',
      'Eficiência Energética industrial aprimorada'
    ]
  }
];

// Funções auxiliares tipadas
export function getAllCases(): ProjectCase[] {
  return casesData;
}

export function getFeaturedCases(): ProjectCase[] {
  return casesData.filter(c => c.featured);
}

export function getCaseById(id: number): ProjectCase | undefined {
  return casesData.find(c => c.id === id);
}

export function getCasesByCategory(category: string): ProjectCase[] {
  if (!category || category === 'Todos') return casesData;
  return casesData.filter(c => c.category.toLowerCase() === category.toLowerCase());
}
