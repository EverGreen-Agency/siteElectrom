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
  name: 'ElectROM Engenharia',
  slogan: 'Engenharia de Energias',
  tagline: 'Sustentabilidade, Eficiência e Inovação para um Futuro Energético\u00A0Consciente.',
  experienceYears: 30, // Fundação em 1996, em 2026 completa 30 anos
  foundedYear: 1996,
  totalProjects: 550, // Conforme histórico analisado
  totalClients: 1800,
  economyGeneratedMillions: 50, // Mais de R$ 50.000.000,00 economizados
  whatsappNumber: '5511999620930', // Telefone comercial oficial unificado
  whatsappMessage: 'Olá! Gostaria de falar com a equipe de engenharia da ElectROM.',
  phone: '(11) 99962-0930',
  email: 'comercial@ElectROM.eng.br',
  address: {
    street: 'São Paulo',
    neighborhood: '',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '',
  },
  social: {
    linkedin: 'https://linkedin.com/company/ElectROM-engenharia',
    instagram: 'https://www.instagram.com/ElectROMeng/',
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
      value: 550,
      prefix: '',
      suffix: '+',
      label: 'Projetos Entregues',
      sublabel: 'Projetos homologados e ativos no país',
    },
    economyGenerated: {
      value: 50,
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
      sublabel: 'Empresas industriais, comerciais, condomínios, residências e instituições públicas e privadas',
    },
    fuelSaved: {
      value: 96000,
      prefix: '',
      suffix: ' toneladas',
      label: 'Combustível Economizado',
      sublabel: 'Preservação de recursos ambientais',
    },
    co2Avoided: {
      value: 38000,
      prefix: '',
      suffix: ' toneladas',
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
