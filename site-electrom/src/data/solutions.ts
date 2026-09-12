export interface SolutionData {
  id: string;
  slug: string;
  title: string;
  headline: string;
  description: string;
  subtitulo: string;
  detalhes: string[];
  bullets: string[];
  iconName: 'FaSolarPanel' | 'FaLightbulb' | 'FaChartLine' | 'FaBolt' | 'FaWrench';
  badge: string;
  normas?: string[];
  beneficioChave: string;
}

export const solutionsData: SolutionData[] = [
  {
    id: 'energias-renovaveis',
    slug: 'energias-renovaveis',
    title: 'Energias Renováveis',
    headline: 'Geração própria e independência tarifária',
    description: 'Engenharia completa de usinas fotovoltaicas industriais e comerciais em solo e telhado, infraestrutura para recarga de veículos elétricos e autonomia energética.',
    subtitulo: 'Reduza até 95% do custo com concessionária através de usinas solares sob medida e sistemas de recarga veicular corporativa.',
    detalhes: [
      'Usinas fotovoltaicas em telhado, solo, carport (estacionamento) ou flutuante',
      'Estações de recarga corporativa para veículos elétricos (e-mobility)',
      'Estudo de viabilidade de sombreamento tridimensional em software CAD e simulação PVSyst',
      'Equipamentos homologados pelos líderes de mercado Tier 1 (garantia de 25 anos)'
    ],
    bullets: [
      'Usinas fotovoltaicas (telhado e solo)',
      'Estações de recarga veicular (VE)',
      'Estudos de viabilidade e geração',
      'Projetos Turnkey (EPC) integrados'
    ],
    iconName: 'FaSolarPanel',
    badge: 'Solar & E-Mobility',
    normas: ['Lei 14.300/2022', 'REN 1.000 ANEEL', 'ABNT NBR 16690'],
    beneficioChave: 'Economia de até 95% na conta de energia com payback médio entre 2,8 e 4,2 anos.'
  },
  {
    id: 'engenharia-de-energias',
    slug: 'engenharia-de-energias',
    title: 'Engenharia de Energias',
    headline: 'Redução de perdas e eficiência de processos',
    description: 'Diagnósticos completos de consumo, conservação de energia e mitigação de perdas elétricas e térmicas em indústrias e grandes instalações.',
    subtitulo: 'Otimize seus processos industriais e restrinja perdas térmicas ou reativas com foco em descarbonização e competitividade.',
    detalhes: [
      'Diagnóstico completo de consumo de energia com termografia avançada e telemetria',
      'Retrofit de acionamentos, motores de alto rendimento (IE4/IE5) e iluminação LED',
      'Redução média auditada de 20% a 35% no consumo ativo total de plantas fabris',
      'Projetos de conservação térmica, reaproveitamento de calor e controle de emissões ESG'
    ],
    bullets: [
      'Auditorias energéticas industriais',
      'Análise termográfica preventiva',
      'Retrofit de motores IE4/IE5 e iluminação',
      'Projetos de conservação térmica'
    ],
    iconName: 'FaLightbulb',
    badge: 'Eficiência & Descarbonização',
    normas: ['ISO 50001', 'Procel Indústria', 'Protocolo GHG'],
    beneficioChave: 'Redução de 20% a 35% no consumo ativo total com blindagem operacional.'
  },
  {
    id: 'consultoria-de-energia',
    slug: 'consultoria-de-energia',
    title: 'Consultoria de Energia',
    headline: 'Inteligência tarifária e Mercado Livre (ACL)',
    description: 'Estratégias completas de portabilidade para o Mercado Livre de Energia (ACL), auditoria de faturas, baterias BESS e gestão regulatória.',
    subtitulo: 'Livre-se das bandeiras tarifárias e dos aumentos compulsórios da distribuidora comprando energia sob medida.',
    detalhes: [
      'Estudo gratuito de viabilidade técnico-econômica com dados históricos da distribuidora',
      'Gestão completa do processo de migração (CCEE, distribuidora e comercializadoras)',
      'Sistemas de armazenamento por baterias BESS para corte de ponta (peak shaving)',
      'Auditoria mensal contínua de faturas e acompanhamento de créditos tributários de ICMS'
    ],
    bullets: [
      'Migração ao Mercado Livre (ACL)',
      'Auditoria contínua de faturas e tarifas',
      'Sistemas BESS e Peak Shaving',
      'Gestão de Créditos de Carbono'
    ],
    iconName: 'FaChartLine',
    badge: 'Mercado Livre & BESS',
    normas: ['Portaria MME 50/2022', 'Lei 15.269/2025 (BESS)', 'Regras CCEE'],
    beneficioChave: 'Redução imediata de até 40% nas tarifas energéticas sem investimento inicial.'
  },
  {
    id: 'media-e-baixa-tensao',
    slug: 'media-e-baixa-tensao',
    title: 'Média e Baixa Tensão',
    headline: 'Infraestrutura de potência e blindagem técnica',
    description: 'Projetos elétricos industriais complexos, cabines primárias, transformadores, painéis TTA e adequação integral a normas de segurança.',
    subtitulo: 'Mantenha sua planta em operação contínua com subestações homologadas, laudos SPDA NBR 5419 e conformidade NR-10.',
    detalhes: [
      'Projetos executivos e homologação de cabines primárias simplificadas e blindadas',
      'Laudos de conformidade com ART: SPDA (NBR 5419:2015), NR-10 e Prontuário Elétrico',
      'Manutenção preventiva e ensaios dielétricos em transformadores a óleo e seco',
      'Montagem de painéis elétricos inteligentes, quadros de transferência e no-breaks industriais'
    ],
    bullets: [
      'Cabines primárias e subestações',
      'Painéis elétricos inteligentes e TTA',
      'Sistemas SPDA e proteção contra surtos',
      'Laudos de conformidade NBR 5410/14039/NR-10'
    ],
    iconName: 'FaBolt',
    badge: 'Cabines & Subestações',
    normas: ['ABNT NBR 14039', 'ABNT NBR 5410', 'ABNT NBR 5419:2015', 'NR-10'],
    beneficioChave: 'Conformidade securitária plena com eliminação de riscos de sinistros e paradas não programadas.'
  },
  {
    id: 'gerenciamento-de-obras',
    slug: 'gerenciamento-de-obras',
    title: 'Gerenciamento de Obras',
    headline: 'Engenharia Turnkey (EPC) e fiscalização rigorosa',
    description: 'Coordenação integral de cronograma físico-financeiro, montagem eletromecânica, utilidades industriais e infraestrutura civil especializada.',
    subtitulo: 'Entrega rigorosa no prazo e no orçamento com ART do CREA-SP e garantia de conformidade contratual.',
    detalhes: [
      'Fiscalização técnica de utilidades industriais, redes de ar comprimido e exaustão',
      'Engenharia civil de fundações para usinas em solo e reservatórios industriais elevados',
      'Comissionamento de instalações complexas com testes de carga e ensaios normatizados',
      'Relatórios semanais de avanço físico-financeiro e gestão integrada de fornecedores'
    ],
    bullets: [
      'Projetos Turnkey (EPC) completos',
      'Fiscalização civil e eletromecânica',
      'Utilidades industriais e saneamento',
      'Relatórios de avanço físico-financeiro'
    ],
    iconName: 'FaWrench',
    badge: 'Turnkey EPC',
    normas: ['PMBOK', 'Normas Regulamentadoras MTE', 'CREA-SP'],
    beneficioChave: 'Mitigação total de desvios de custo com garantia de conformidade técnica e civil.'
  }
];

export function getAllSolutions(): SolutionData[] {
  return solutionsData;
}

export function getSolutionById(id: string): SolutionData | undefined {
  return solutionsData.find(s => s.id === id || s.slug === id);
}
