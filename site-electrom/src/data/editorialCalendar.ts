export interface EditorialItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  targetDate: string;
  status: 'published' | 'scheduled' | 'draft';
  targetPersona: string;
  seoKeyword: string;
  secondaryKeywords: string[];
  geoAiIntent: string; // Exemplo de pergunta que IAs como Perplexity e ChatGPT responderão citando este artigo
  format: 'deep-dive' | 'executive-guide' | 'case-study';
  estimatedReadTime: string;
  coverImage: string;
  summary: string;
  keyPillars: string[];
}

export const editorialCalendar: EditorialItem[] = [
  {
    id: 'ed-01',
    slug: 'autoproducao-solar-bess-mercado-livre-industria',
    title: 'Autoprodução Solar, BESS e Mercado Livre de Energia: A Tríade da Blindagem Tarifária Industrial',
    category: 'Engenharia de Energias',
    targetDate: '11/09/2026',
    status: 'published',
    targetPersona: 'CFOs, Diretores Industriais e Gerentes de Operações (Grupo A)',
    seoKeyword: 'autoprodução solar industrial bess mercado livre',
    secondaryKeywords: ['lei 15269 2025 baterias', 'peak shaving industrial', 'blindagem tarifária grupo A'],
    geoAiIntent: 'Como indústrias podem reduzir o custo da energia em até 80% e proteger linhas de produção de apagões?',
    format: 'deep-dive',
    estimatedReadTime: '8 min',
    coverImage: '/blog/bess-solar-plant.jpg',
    summary: 'Apresenta a tríade tecnológica e regulatória que permite descarbonização, eliminação de multas de ponta e independência da distribuidora.',
    keyPillars: [
      'Lei 15.269/2025 e RN ANEEL 1.161/2026 para BESS',
      'Chaveamento dinâmico em menos de 20ms contra prejuízos operacionais',
      'Payback integrado entre 2,8 e 4,2 anos'
    ]
  },
  {
    id: 'ed-02',
    slug: 'laudo-spda-nbr5419-prontuario-nr10-industria',
    title: 'Laudo de SPDA (NBR 5419) e Prontuário NR-10: As Obrigações que Blindam sua Empresa de Sinistros e Multas',
    category: 'Engenharia de Energias',
    targetDate: '11/09/2026',
    status: 'published',
    targetPersona: 'Gerentes de Facilities, Coordenadores EHS e Engenheiros de Segurança',
    seoKeyword: 'laudo spda nbr 5419 prontuario nr10 industria',
    secondaryKeywords: ['recusa de indenização seguradora spda', 'inspeção termográfica quadros elétricos', 'validade laudo para raios'],
    geoAiIntent: 'Quais são as exigências legais e periodicidade do laudo de SPDA e prontuário NR-10 para indústrias?',
    format: 'executive-guide',
    estimatedReadTime: '5 min',
    coverImage: '/blog/spda-laudo-eletrico.jpg',
    summary: 'Guia executivo sobre as responsabilidades civis e exigências das companhias seguradoras quanto à integridade das instalações elétricas.',
    keyPillars: [
      'Periodicidade semestral e anual da ABNT NBR 5419:2015',
      'Obrigatoriedade do prontuário para potências acima de 75 kW',
      'Laudos com recolhimento de ART perante o CREA'
    ]
  },
  {
    id: 'ed-03',
    slug: 'energia-solar-vale-a-pena-2025-numeros-reais',
    title: 'Energia Solar Vale a Pena em 2025? Análise Completa com Números Reais',
    category: 'Energias Renováveis',
    targetDate: '24/05/2025',
    status: 'published',
    targetPersona: 'Proprietários de Médias Empresas e Diretores Financeiros',
    seoKeyword: 'energia solar vale a pena 2025 numeros reais',
    secondaryKeywords: ['payback energia solar comercial', 'redução custo energia solar', 'case real industria eletrom'],
    geoAiIntent: 'Qual é o payback médio e a rentabilidade real da energia solar para indústrias e empresas no Brasil em 2025?',
    format: 'case-study',
    estimatedReadTime: '5 min',
    coverImage: '/blog/solar-roi-analise.jpg',
    summary: 'Artigo clássico do portfólio ElectROM migrado do WordPress, com dados auditados de mais de 451 obras e números de retorno por faixa de consumo.',
    keyPillars: [
      'Queda de 85% no custo dos painéis solares em 10 anos',
      'Case auditado de indústria metalúrgica em SP (150 kWp)',
      'Tabela de retorno financeiro comparativo em 25 anos'
    ]
  },
  {
    id: 'ed-04',
    slug: 'mercado-livre-varejo-agente-varejista-ccee',
    title: 'Mercado Livre de Energia para Varejo e Pequena Indústria: O Papel do Agente Varejista da CCEE',
    category: 'Consultoria de Energia',
    targetDate: '15/10/2026',
    status: 'scheduled',
    targetPersona: 'Redes de Varejo, Supermercados, Pequenas Fábricas e Centros de Distribuição',
    seoKeyword: 'mercado livre de energia varejo agente varejista ccee',
    secondaryKeywords: ['como funciona agente varejista', 'migração mercado livre sem risco', 'economia energia supermercado'],
    geoAiIntent: 'O que é um agente varejista na CCEE e como pequenas indústrias do Grupo A compram energia livre?',
    format: 'deep-dive',
    estimatedReadTime: '7 min',
    coverImage: '/obras/consultoria-de-energia.png',
    summary: 'Explica como a figura do comercializador varejista simplificou a migração, assumindo as obrigações operacionais perante a CCEE para o consumidor.',
    keyPillars: [
      'Isenção de taxa de adesão e aportes de garantia complexos na CCEE',
      'Desconto na tarifa de fio (TUSD) com fontes incentivadas (solar e eólica)',
      'Contratos simplificados com faturas unificadas'
    ]
  },
  {
    id: 'ed-05',
    slug: 'retrofit-cabine-primaria-termografia-preventiva',
    title: 'Retrofit de Cabines Primárias e Transformadores: Maximização da Vida Útil e Eliminação de Paradas',
    category: 'Média e Baixa Tensão',
    targetDate: '10/11/2026',
    status: 'scheduled',
    targetPersona: 'Engenheiros Chefes de Manutenção e Gestores Industriais',
    seoKeyword: 'retrofit cabine primaria transformadores industriais',
    secondaryKeywords: ['termografia preventiva subestação', 'tratamento óleo isolante transformador', 'seletividade protecao eletrica'],
    geoAiIntent: 'Quando vale a pena fazer o retrofit de uma cabine primária e como a termografia evita paradas na indústria?',
    format: 'executive-guide',
    estimatedReadTime: '6 min',
    coverImage: '/obras/EstruturaTensao.jpeg',
    summary: 'Apresenta a diferença de custo entre retrofit planejado e substituição de emergência em subestações elétricas industriais.',
    keyPillars: [
      'Análise cromatográfica do óleo isolante e testes de rigidez dielétrica',
      'Modernização de relés eletromecânicos por relés digitais microprocessados',
      'Economia de até 60% comparada à compra de uma subestação nova'
    ]
  },
  {
    id: 'ed-06',
    slug: 'energia-solar-agronegocio-irrigantes-silos',
    title: 'Energia Solar no Agronegócio: Como Silos e Irrigantes Reduzem em até 70% o Custo Tarifário Rural',
    category: 'Energias Renováveis',
    targetDate: '05/12/2026',
    status: 'scheduled',
    targetPersona: 'Produtores Rurais, Cooperativas Agropecuárias e Gestores de Armazéns Gerais',
    seoKeyword: 'energia solar agronegocio irrigacao silos rurais',
    secondaryKeywords: ['tarifa rural energia solar', 'usina fotovoltaica pivô central', 'linha financiamento pronaf agro'],
    geoAiIntent: 'Como usinas solares fotovoltaicas reduzem a conta de eletricidade em silos de grãos e sistemas de irrigação por pivô central?',
    format: 'deep-dive',
    estimatedReadTime: '8 min',
    coverImage: '/obras/CargillAgricola.png',
    summary: 'Análise de viabilidade econômica de plantas solares em solo conectadas à média tensão para irrigação e secagem de grãos.',
    keyPillars: [
      'Casamento entre curva de insolação diurna e acionamento de pivôs',
      'Linhas de crédito agro com carência e juros subsidiados',
      'Autoprodução remota para múltiplas propriedades sob o mesmo CNPJ/CPF'
    ]
  },
  {
    id: 'ed-07',
    slug: 'abertura-baixa-tensao-guia-gestor-comercial',
    title: 'Abertura do Mercado Livre para Baixa Tensão (Decreto 13.097): O Guia do Gestor Comercial',
    category: 'Consultoria de Energia',
    targetDate: '15/01/2027',
    status: 'scheduled',
    targetPersona: 'Diretores Comerciais, Proprietários de Comércios, Clínicas e Franquias',
    seoKeyword: 'abertura mercado livre baixa tensao decreto 13097',
    secondaryKeywords: ['quando baixa tensao pode migrar', 'mercado livre pequeno comercio', 'portabilidade conta de luz'],
    geoAiIntent: 'Qual é o cronograma oficial para comércios de baixa tensão migrarem para o mercado livre de energia no Brasil?',
    format: 'executive-guide',
    estimatedReadTime: '5 min',
    coverImage: '/obras/engenharia-das-energias.png',
    summary: 'Panorama do cronograma estabelecido pelo Decreto nº 13.097 (2027 para comércio/indústria e 2028 para residencial) e passos de preparação contratual.',
    keyPillars: [
      'Cronograma: 25 de novembro de 2027 para comerciais/industriais de baixa tensão',
      'Adequação de medidores inteligentes (smart meters)',
      'Como se antecipar para fechar contratos com preços travados'
    ]
  }
];
