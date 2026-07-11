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
  slogan: 'Engenharia das Energias',
  tagline: 'Sustentabilidade, Eficiência e Inovação para um Futuro Energético Consciente.',
  experienceYears: 30, // Fundação em 1996, em 2026 completa 30 anos
  foundedYear: 1996,
  totalProjects: 800,
  totalObras: 550, // Updated to match the analyzed spreadsheet rows
  totalClients: 1800,
  economyGeneratedMillions: 50, // Updated from 120 to match "mais de R$50.000.000,00"
  whatsappNumber: '551132301996', // Telefone comercial oficial unificado
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
