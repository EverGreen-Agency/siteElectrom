export interface CompanyMetric {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface CompanyInfo {
  name: string;
  slogan: string;
  tagline: string;
  experienceYears: number;
  foundedYear: number;
  totalProjects: number;
  totalObras: number;
  totalClients: number;
  economyGeneratedMillions: number;
  whatsappNumber: string;
  whatsappMessage: string;
  phone: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  social: {
    linkedin: string;
    instagram: string;
  };
  metrics: {
    yearsOfExperience: CompanyMetric;
    projectsDelivered: CompanyMetric;
    economyGenerated: CompanyMetric;
    clientsServed: CompanyMetric;
    fuelSaved: CompanyMetric;
    co2Avoided: CompanyMetric;
    treesSaved: CompanyMetric;
    renewableEnergy: CompanyMetric;
  };
}

export const companyData: CompanyInfo = {
  name: 'Electrom Engenharia',
  slogan: 'Engenharia de Energia',
  tagline: 'Sustentabilidade, Eficiência e Inovação para um Futuro Energético Consciente.',
  experienceYears: 30, // Fundação em 1996, em 2026 completa 30 anos
  foundedYear: 1996,
  totalProjects: 800,
  totalObras: 550, // Updated to match the analyzed spreadsheet rows
  totalClients: 1800,
  economyGeneratedMillions: 50, // Updated from 120 to match "mais de R$50.000.000,00"
  whatsappNumber: '5511999620930', // Telefone comercial oficial unificado
  whatsappMessage: 'Olá! Gostaria de falar com a equipe de engenharia da Electrom.',
  phone: '(11) 3230-1996',
  email: 'contato@electrom.eng.br',
  address: {
    street: 'Av. Paulista, 1000 - Bela Vista',
    neighborhood: 'Bela Vista',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01310-100',
  },
  social: {
    linkedin: 'https://linkedin.com/company/electrom-engenharia',
    instagram: 'https://www.instagram.com/electromeng/',
  },
  metrics: {
    yearsOfExperience: {
      value: 30,
      prefix: '',
      suffix: '+',
      label: 'Anos de Engenharia',
      sublabel: 'Legado e experiência sólida no mercado',
    },
    projectsDelivered: {
      value: 550, // Updated to match the spreadsheet
      prefix: '',
      suffix: '+',
      label: 'Projetos Entregues',
      sublabel: 'Obras homologadas e ativas no país',
    },
    economyGenerated: {
      value: 50, // Updated to match the spreadsheet
      prefix: 'R$ ',
      suffix: ' Mi',
      label: 'Economia Gerada',
      sublabel: 'Redução direta de custos aos clientes',
    },
    clientsServed: {
      value: 1800,
      prefix: '',
      suffix: '+',
      label: 'Clientes Atendidos',
      sublabel: 'Empresas industriais, comerciais e públicas',
    },
    fuelSaved: {
      value: 96000,
      prefix: '',
      suffix: ' t',
      label: 'Combustível Economizado',
      sublabel: 'Preservação de recursos térmicos industriais',
    },
    co2Avoided: {
      value: 38000,
      prefix: '',
      suffix: ' t',
      label: 'CO₂ Evitado',
      sublabel: 'Toneladas de carbono neutralizadas no meio ambiente',
    },
    treesSaved: {
      value: 20000,
      prefix: '',
      suffix: '+',
      label: 'Árvores Salvas',
      sublabel: 'Equivalência ecológica dos projetos',
    },
    renewableEnergy: {
      value: 1000,
      prefix: 'Mais de ',
      suffix: ' MWh',
      label: 'Energia Renovável Gerada',
      sublabel: 'Volume de energia sustentável produzida por ano',
    }
  }
};

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
    category: 'Solar',
    segmento: 'industrial',
    location: 'Cipó Guaçu, SP',
    metrics: [
      { label: 'Potência', value: '32.16 kWp' },
      { label: 'Economia', value: 'R$ 22.000 / ano' },
      { label: 'Status', value: 'Ativo' }
    ],
    description: 'Engenharia completa, homologação e instalação de usina de minigeração distribuída em solo (32,16 kWp), com inversor PHB e módulos Jinko.',
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
    title: 'Smart Fit Embu Guaçu - Usina Solar Comercial',
    category: 'Solar',
    segmento: 'comercial',
    location: 'Embu Guaçu, SP',
    metrics: [
      { label: 'Potência', value: '145.2 kWp' },
      { label: 'Economia', value: 'R$ 180.000 / ano' },
      { label: 'Status', value: 'Ativo' }
    ],
    description: 'Dimensionamento, homologação e comissionamento de usina comercial fotovoltaica sobre telhado (145,2 kWp) com inversores PHB e módulos DMEGC de alta performance.',
    featured: true,
    coverImage: '/obras/SmartFitSolar.png',
    images: [
      '/obras/SmartFitSolar.png'
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
    id: 3,
    title: 'Escola Patelli - Transição Fotovoltaica',
    category: 'Solar',
    segmento: 'educacao',
    location: 'Campo Limpo Paulista, SP',
    metrics: [
      { label: 'Potência', value: '6.5 kWp' },
      { label: 'Economia', value: 'R$ 6.000 / ano' },
      { label: 'Status', value: 'Ativo' }
    ],
    description: 'Dimensionamento e instalação de gerador fotovoltaico em telhado (6,5 kWp) integrado à subestação distribuidora escolar e sistema de monitoramento pedagógico.',
    featured: false,
    coverImage: '/obras/EscolaPatelliFotovoltaica/WP_20180203_11_56_04_Pro.jpg',
    images: [
      '/obras/EscolaPatelliFotovoltaica/WP_20180203_11_56_04_Pro.jpg',
      '/obras/EscolaPatelliFotovoltaica/IMG-20180202-WA0028.jpg',
      '/obras/EscolaPatelliFotovoltaica/IMG-20180418-WA0017.jpg',
      '/obras/EscolaPatelliFotovoltaica/WP_20180203_11_57_01_Pro.jpg',
      '/obras/EscolaPatelliFotovoltaica/WP_20180203_15_00_08_Pro.jpg'
    ],
    antes: {
      consumo: '1.200 kWh/mês',
      custo: 'R$ 960/mês',
      impacto: 'Demanda de energia flutuante durante o horário letivo diurno.'
    },
    depois: {
      consumo: '400 kWh/mês',
      custo: 'R$ 320/mês',
      impacto: 'Autossuficiência diurna e redução de 66% na conta escolar.'
    },
    resultados: [
      'Economia anual: R$ 7.680',
      'Redução: 6,5 toneladas de CO2/ano',
      'Payback real: 4,5 anos',
      'Integração pedagógica e sustentável'
    ]
  },
  {
    id: 4,
    title: 'Residencial Recanto - Soluções Energéticas Integradas',
    category: 'Autossuficiência',
    segmento: 'residencial',
    location: 'São Paulo, SP',
    metrics: [
      { label: 'Potência', value: '17.68 kWp' },
      { label: 'Economia', value: 'R$ 15.000 / ano' },
      { label: 'Status', value: 'Ativo' }
    ],
    description: 'Modernização completa integrada: gerador fotovoltaico em laje (17,68 kWp), quadros elétricos de distribuição, automação e infraestrutura para carregadores veiculares.',
    featured: false,
    coverImage: '/obras/ObraRecantoFotovoltaica/IMG_20181205_173826509_HDR.jpg',
    images: [
      '/obras/ObraRecantoFotovoltaica/IMG_20181205_173826509_HDR.jpg',
      '/obras/ObraRecantoFotovoltaica/Ala Oeste baixo.jpg',
      '/obras/ObraRecantoFotovoltaica/IMG_20181205_173843383_HDR.jpg',
      '/obras/ObraRecantoFotovoltaica/IMG_20190308_091007933.jpg'
    ],
    antes: {
      consumo: '3.500 kWh/mês',
      custo: 'R$ 2.800/mês',
      impacto: 'Risco técnico por quadros antigos e elevado consumo em bombas/lazer.'
    },
    depois: {
      consumo: '1.100 kWh/mês',
      custo: 'R$ 880/mês',
      impacto: 'Conformidade e segurança técnica com autossuficiência parcial.'
    },
    resultados: [
      'Economia anual: R$ 23.040',
      'Redução: 17,6 toneladas de CO2/ano',
      'Payback real: 4,1 anos',
      'Segurança elétrica e infraestrutura EV'
    ]
  },
  {
    id: 5,
    title: 'Cabine de Pintura EMBRAER - Gestão de Obra',
    category: 'Gerenciamento de Obras',
    segmento: 'industrial',
    location: 'São José dos Campos, SP',
    metrics: [
      { label: 'Escopo', value: 'Ventilação/Exaustão' },
      { label: 'Garantia', value: 'Zero Partículas' },
      { label: 'Status', value: 'Concluído' }
    ],
    description: 'Gestão e fiscalização de obra elétrica e civil especializada no sistema de ventilação e exaustão da cabine de pintura de aeronaves da EMBRAER, garantindo estabilidade do fluxo de ar e filtragem absoluta de poeira nas fuselagens.',
    featured: true,
    coverImage: '/obras/Obras/Imagem1.png',
    images: [
      '/obras/Obras/Imagem1.png',
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
    id: 6,
    title: 'Eficiência Energética - Grupo Duratex',
    category: 'Eficiência Energética',
    segmento: 'industrial',
    location: 'Itapetininga e Botucatu, SP',
    metrics: [
      { label: 'Projeto', value: 'Conservação Térmica' },
      { label: 'Economia', value: 'R$ 120.000 / ano' },
      { label: 'Status', value: 'Concluído' }
    ],
    description: 'Estudos de conservação de energia, termografia preventiva, adequação de quadros de potência industrial e otimização de motores nas plantas da Duratex, integrando a usina de eficiência de Botucatu.',
    featured: false,
    coverImage: '/obras/Obras/Imagem8.png',
    images: [
      '/obras/Obras/Imagem8.png',
      '/obras/Obras/Imagem9.png',
      '/obras/Obras/Imagem10.png',
      '/obras/Obras/Imagem6.png'
    ],
    antes: {
      consumo: 'Elevado desperdício térmico',
      custo: 'Perdas mecânicas reativas',
      impacto: 'Quadros gerais sobreaquecidos e motores antigos com alta dissipação.'
    },
    depois: {
      consumo: 'Reduzido em 12%',
      custo: 'Fator de potência adequado',
      impacto: 'Termografia preventiva e estabilidade elétrica dos quadros de potência.'
    },
    resultados: [
      'Economia anual: R$ 120.000',
      'Correção de fator de potência',
      'Eliminação de paradas na linha',
      'Laudo técnico de conformidade'
    ]
  },
  {
    id: 7,
    title: 'Reservatórios de Grande Porte - Gerenciamento de Obras',
    category: 'Gerenciamento de Obras',
    segmento: 'industrial',
    location: 'Bertioga e São Paulo, SP',
    metrics: [
      { label: 'Volume', value: '105.000 L' },
      { label: 'Escopo', value: 'Fiscalização Civil' },
      { label: 'Status', value: 'Ativo' }
    ],
    description: 'Gerenciamento, fiscalização e execução civil de reservatórios elevados industriais de grande porte e sistemas de saneamento para a Cinemateca de SP (40.000 L) e a Riviera de São Lourenço (65.000 L).',
    featured: false,
    coverImage: '/obras/Obras/WP_20180404_12_32_22_Pro.jpg',
    images: [
      '/obras/Obras/WP_20180404_12_32_22_Pro.jpg',
      '/obras/Obras/1996-016-04-3.jpg',
      '/obras/Obras/1996-004-03-3.jpg'
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
    id: 8,
    title: 'Eletroposto Residencial Inteligente',
    category: 'Mobilidade',
    segmento: 'residencial',
    location: 'São Paulo, SP',
    metrics: [
      { label: 'Carregadores', value: '2 EV Wallbox' },
      { label: 'Infraestrutura', value: 'Dedicada' },
      { label: 'Status', value: 'Ativo' }
    ],
    description: 'Implantação completa de infraestrutura elétrica dedicada e tomadas de carregamento inteligente para veículos elétricos (EV) com disjuntores de proteção no Condomínio Recanto.',
    featured: false,
    coverImage: '/obras/CarregadorEletrico/CarregadorEletrico.jpeg',
    video: '/obras/CarregadorEletrico/Eletroposto.mp4',
    images: [
      '/obras/CarregadorEletrico/CarregadorEletrico.jpeg',
      '/obras/CarregadorEletrico/CarregadorEletrico2.jpeg',
      '/obras/CarregadorEletrico/CarregadorEletrico3.jpeg'
    ],
    antes: {
      consumo: 'Sem infraestrutura EV',
      custo: 'Impossibilidade de recarga',
      impacto: 'Risco de sobrecarga na rede elétrica do condomínio com carregamento improvisado.'
    },
    depois: {
      consumo: 'Medido individualmente',
      custo: 'Seguro e protegido',
      impacto: 'Alimentação dedicada com disjuntores de proteção e rateio de consumo.'
    },
    resultados: [
      '2 estações inteligentes ativas',
      'Infraestrutura blindada SPDA',
      'Medição individualizada de carga',
      'Rateio seguro entre usuários'
    ]
  }
];
