export interface BlogPostItem {
  id: number | string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  category: {
    id: string;
    name: string;
  };
  image: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  tableOfContents?: Array<{
    id: string;
    title: string;
  }>;
  keyTakeaways?: string[];
  metrics?: Array<{
    label: string;
    value: string;
    description: string;
  }>;
}

export const blogPostsData: BlogPostItem[] = [
  {
    id: 1,
    slug: 'energia-solar-setor-industrial',
    title: 'Como a Energia Solar está Transformando o Setor Industrial e Reduzindo Custos',
    excerpt: 'Descubra como indústrias e grandes empresas estão reduzindo até 40% dos custos operacionais de eletricidade e mitigando pegada de carbono com sistemas fotovoltaicos de alta potência.',
    date: '15/03/2024',
    readTime: '6 min de leitura',
    author: {
      name: 'Eng. Roberto Moreira',
      role: 'Diretor Técnico de Engenharia | ElectROM',
      avatar: '/ElectROM - Horizontal.png'
    },
    category: {
      id: 'energias-renovaveis',
      name: 'Energias Renováveis'
    },
    image: '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg',
    tags: ['Energia Solar', 'Geração Distribuída', 'Indústria 4.0', 'Sustentabilidade', 'Redução de Custos'],
    featured: true,
    tableOfContents: [
      { id: 'cenario-energetico', title: '1. O Cenário Energético Industrial Atual' },
      { id: 'beneficios-financeiros', title: '2. Impacto Financeiro e Retorno de Investimento (Payback)' },
      { id: 'aspectos-tecnicos', title: '3. Aspectos Técnicos e Integração com Cabines de Média Tensão' },
      { id: 'marco-legal', title: '4. Marco Legal (Lei 14.300) e Segurança Regulatória' },
      { id: 'conclusao', title: '5. Como Iniciar a Transição na Sua Empresa' }
    ],
    keyTakeaways: [
      'Redução média de até 40% a 85% nos custos com energia elétrica fabril.',
      'Payback atrativo variando entre 2,5 e 4 anos com vida útil dos módulos superior a 25 anos.',
      'Valorização do ativo imobiliário e atendimento a metas ESG globais de descarbonização.',
      'Necessidade de projeto elétrico de integração robusto com a cabine primária existente.'
    ],
    metrics: [
      { label: 'Redução na Fatura', value: 'Até 85%', description: 'Economia direta no custo de energia consumida' },
      { label: 'Payback Médio', value: '2.8 Anos', description: 'Retorno do capital investido na planta solar' },
      { label: 'Vida Útil dos Equipamentos', value: '> 25 Anos', description: 'Garantia de geração contínua com inversores industriais' }
    ],
    content: `
      <p class="lead">O setor industrial brasileiro consome cerca de <strong>30% de toda a energia elétrica</strong> produzida no país. Com tarifas em constante ascensão, bandeiras tarifárias sazonais e metas corporativas de sustentabilidade (ESG), a transição para usinas solares fotovoltaicas tornou-se um imperativo estratégico de sobrevivência e competitividade.</p>

      <h2 id="cenario-energetico">1. O Cenário Energético Industrial Atual</h2>
      <p>Nos últimos anos, os custos com energia elétrica representaram entre 15% e até 40% dos custos operacionais em plantas industriais de manufatura, metalurgia, química e alimentos. A dependência exclusiva do fornecimento das distribuidoras tradicionais expõe as operações à volatilidade de bandeiras tarifárias e reajustes anuais frequentemente superiores ao IPCA.</p>
      
      <p>A implementação de usinas fotovoltaicas dedicadas — sejam elas instaladas em telhados de galpões fabris (<em>rooftop</em>), no solo em áreas adjacentes ou em modelos de autoprodução remota — permite travar o custo do megawatt-hora por décadas com previsibilidade total.</p>

      <div class="callout-box">
        <h4>💡 Ponto Crítico de Atenção</h4>
        <p>A instalação fotovoltaica industrial não é um simples projeto de montagem mecânica: envolve dimensionamento elétrico de curto-circuito, coordenação de proteções com a concessionária local e análise estrutural minuciosa das tesouras do telhado.</p>
      </div>

      <h2 id="beneficios-financeiros">2. Impacto Financeiro e Retorno de Investimento (Payback)</h2>
      <p>O modelo econômico da energia solar para indústrias apresenta um dos maiores atrativos do mercado de infraestrutura:</p>
      <ul>
        <li><strong>Redução Imediata de OPEX:</strong> O fluxo de caixa é aliviado já no primeiro mês de operação comercial da usina.</li>
        <li><strong>Payback Acelerado:</strong> Com os custos atuais dos módulos fotovoltaicos de alta eficiência (N-Type TOPCon) e inversores string/centrais, o tempo de amortização situa-se tipicamente entre <strong>2,5 e 4 anos</strong>.</li>
        <li><strong>Blindagem Tarifária:</strong> Previsibilidade orçamentária por mais de 25 anos, sem risco de oscilações tarifárias repentinas.</li>
      </ul>

      <h2 id="aspectos-tecnicos">3. Aspectos Técnicos e Integração com Cabines de Média Tensão</h2>
      <p>Projetos industriais operam normalmente no Grupo A (conectados em média ou alta tensão, como 13.8 kV, 23 kV ou 34.5 kV). Isso exige que a injeção de potência solar seja integrada de forma harmoniosa com os transformadores e quadros gerais de baixa tensão (QGBT) existentes.</p>
      
      <p>Principais cuidados que a <strong>ElectROM Engenharia</strong> avalia em campo:</p>
      <ol>
        <li><strong>Estudo de Seletividade e Proteção:</strong> Ajuste dos relés de proteção (como relés ANSI 50/51, 59N, 81O/U) para evitar desarmes indesejados da cabine primária.</li>
        <li><strong>Fator de Potência e Energia Reativa:</strong> Programação dos inversores inteligentes para fornecer controle de potência reativa (Q(U) e cos phi fixo), mitigando penalidades de consumo reativo excedente junto à concessionária.</li>
        <li><strong>Qualidade da Energia:</strong> Monitoramento de distorção harmônica total (THD) para proteger máquinas sensíveis e PLCs industriais.</li>
      </ol>

      <h2 id="marco-legal">4. Marco Legal (Lei 14.300) e Segurança Regulatória</h2>
      <p>Com a promulgação da Lei nº 14.300/2022, o setor de Geração Distribuída no Brasil ganhou regras estáveis e claras para a compensação de créditos de energia e tarifação do uso do sistema de distribuição (TUSD Fio B). Para indústrias que operam com alta simultaneidade (consumo concomitante com a geração diurna), a rentabilidade da usina solar permanece praticamente inalterada e altamente vantajosa.</p>

      <h2 id="conclusao">5. Como Iniciar a Transição na Sua Empresa</h2>
      <p>O primeiro passo para viabilizar uma usina solar industrial é a realização de um <strong>Diagnóstico de Engenharia de Energias</strong>. Esse estudo contempla a análise do histórico de faturas (demanda contratada e curvas de carga horárias), inspeção física da cabine primária e cálculo preliminar de layout.</p>
      
      <p>Com mais de 30 anos de experiência em engenharia de alta, média e baixa tensão, a <strong>ElectROM</strong> projeta, gerencia e executa usinas solares turn-key com garantia de conformidade e máxima performance.</p>
    `
  },
  {
    id: 2,
    slug: 'tendencias-eficiencia-energetica-2024',
    title: '5 Tendências em Eficiência Energética para a Indústria em 2024/2025',
    excerpt: 'Conheça as principais estratégias de conservação energética, retrofit de motores elétricos IE4/IE5, automação inteligente e mitigação de perdas térmicas.',
    date: '10/03/2024',
    readTime: '7 min de leitura',
    author: {
      name: 'Equipe Técnica ElectROM',
      role: 'Especialistas em Eficiência Energética',
      avatar: '/ElectROM - Horizontal.png'
    },
    category: {
      id: 'engenharia-de-energias',
      name: 'Engenharia de Energias'
    },
    image: '/obras/Obras/Imagem6.png',
    tags: ['Eficiência Energética', 'Motores IE4', 'Automação', 'Retrofit', 'Gestão de Energia'],
    featured: false,
    tableOfContents: [
      { id: 'panorama-eficiencia', title: '1. O Imperativo da Eficiência Energética' },
      { id: 'tendencia-1', title: '2. Motores Elétricos de Super Premium Efficiency (IE4 e IE5)' },
      { id: 'tendencia-2', title: '3. Inversores de Frequência e Controle Adaptativo' },
      { id: 'tendencia-3', title: '4. Monitoramento IoT e Telemetria em Tempo Real' },
      { id: 'tendencia-4', title: '5. Recuperação de Calor Residual e Vapor' },
      { id: 'tendencia-5', title: '6. Gestão Baseada na Norma ISO 50001' },
      { id: 'conclusao-eficiencia', title: '7. Próximos Passos' }
    ],
    keyTakeaways: [
      'Motores elétricos consomem mais de 70% da energia no chão de fábrica brasileiro.',
      'O retrofit para categorias IE4/IE5 reduz o consumo específico de energia em até 14%.',
      'Telemetria e sensores IoT possibilitam a detecção precoce de anomalias e desperdícios térmicos.',
      'Sistemas com ISO 50001 garantem melhoria contínua e reduções sistemáticas de custos.'
    ],
    metrics: [
      { label: 'Consumo por Motores', value: '70%+', description: 'Parcela média de eletricidade gasta em força motriz industrial' },
      { label: 'Economia Potencial', value: '15% a 30%', description: 'Redução típica alcançada com projetos de eficiência integrados' },
      { label: 'Redução de Emissões', value: '-22%', description: 'Queda na intensidade de carbono da planta industrial' }
    ],
    content: `
      <p class="lead">A eficiência energética deixou de ser uma iniciativa isolada de sustentabilidade e tornou-se a ferramenta mais rápida e com menor investimento unitário para elevar a margem de lucro de plantas fabris em cenários de alta competitividade.</p>

      <h2 id="panorama-eficiencia">1. O Imperativo da Eficiência Energética</h2>
      <p>Em plantas industriais, o desperdício invisível de eletricidade ocorre em sistemas de ar comprimido, bombeamento de fluidos, ventilação forçada, transformadores subutilizados e sistemas de refrigeração industrial desbalanceados.</p>

      <h2 id="tendencia-1">2. Motores Elétricos de Super Premium Efficiency (IE4 e IE5)</h2>
      <p>Mais de 70% da energia consumida na indústria é destinada a acionamentos eletromecânicos. A substituição planejada de motores obsoletos (IE1 ou IE2) por unidades de rendimento Super Premium (IE4) ou Ultra Premium (IE5 com ímãs permanentes ou relutância síncrona) resulta em ganhos substanciais de rendimento.</p>

      <h2 id="tendencia-2">3. Inversores de Frequência e Controle Adaptativo</h2>
      <p>Em cargas quadráticas (bombas centrífugas e ventiladores industriais), reduzir a rotação em apenas 20% através de inversores VFD pode reduzir a potência demandada em quase <strong>50%</strong> (leis de afinidade das máquinas de fluxo).</p>

      <h2 id="tendencia-3">4. Monitoramento IoT e Telemetria em Tempo Real</h2>
      <p>A instalação de medidores digitais setorizados com comunicação Modbus/Ethernet permite identificar exatamente qual linha de produção ou turno está gerando picos indesejados de demanda na fatura.</p>

      <h2 id="tendencia-4">5. Recuperação de Calor Residual e Vapor</h2>
      <p>Gases de exaustão de fornos, compressores e caldeiras contêm enorme quantidade de energia térmica. Trocadores de calor regenerativos reaproveitam essa energia para pré-aquecer água de caldeira ou processos químicos.</p>

      <h2 id="tendencia-5">6. Gestão Baseada na Norma ISO 50001</h2>
      <p>A estruturação de um Sistema de Gestão da Energia (SGE) alinhado à ISO 50001 estabelece linhas de base energéticas (EnB) e indicadores de desempenho energético (EnPIs) auditáveis.</p>

      <h2 id="conclusao-eficiencia">7. Próximos Passos</h2>
      <p>A <strong>ElectROM Engenharia</strong> realiza diagnósticos energéticos completos (Grau 1, 2 e 3) com instrumentos calibrados de ponta (analisadores de qualidade de energia classe A, termovisores infravermelhos e medidores de vazão ultrassônicos).</p>
    `
  },
  {
    id: 3,
    slug: 'sustentabilidade-futuro-energia',
    title: 'Migração para o Mercado Livre de Energia: Guia Prático ACL',
    excerpt: 'Análise detalhada sobre como migrar sua empresa para o Ambiente de Contratação Livre (ACL), negociar energia de fontes incentivadas e reduzir em até 35% a conta de luz.',
    date: '05/03/2024',
    readTime: '8 min de leitura',
    author: {
      name: 'Consultoria Regulante ElectROM',
      role: 'Gestão de Energia & Contratos Livres',
      avatar: '/ElectROM - Horizontal.png'
    },
    category: {
      id: 'consultoria-de-energia',
      name: 'Consultoria de Energia'
    },
    image: '/obras/Obras/Imagem10.png',
    tags: ['Mercado Livre', 'ACL', 'Economia de Energia', 'CCEE', 'Regulação ANEEL'],
    featured: false,
    tableOfContents: [
      { id: 'o-que-e-acl', title: '1. O que é o Mercado Livre de Energia (ACL)?' },
      { id: 'abertura-grupo-a', title: '2. Abertura Total do Grupo A (Portaria 50/2022)' },
      { id: 'passo-a-passo', title: '3. Passo a Passo da Migração Segura' },
      { id: 'gestao-e-riscos', title: '4. Gestão Pós-Migração e Mitigação de Riscos' },
      { id: 'consultoria-especializada', title: '5. O Papel da Consultoria ElectROM' }
    ],
    keyTakeaways: [
      'Empresas conectadas em Média e Alta Tensão (Grupo A) agora podem escolher livremente seus fornecedores de energia.',
      'Economia imediata de até 35% em relação às tarifas do mercado cativo (ACR).',
      'Possibilidade de adquirir 100% de energia renovável certificada (I-REC) com desconto na TUSD.',
      'Apoio técnico na adequação do Sistema de Medição para Faturamento (SMF) conforme padrões da CCEE.'
    ],
    metrics: [
      { label: 'Economia Tarifária', value: 'Até 35%', description: 'Redução média nos custos de compra de energia' },
      { label: 'Adesão Aberta', value: 'Grupo A', description: 'Todos os consumidores de média/alta tensão elegíveis' },
      { label: 'Energia Limpa', value: '100%', description: 'Contratos bilaterais lastreados em fontes renováveis' }
    ],
    content: `
      <p class="lead">Com a recente abertura do mercado regulatório de eletricidade no Brasil, qualquer empresa conectada em Média ou Alta Tensão (Grupo A) possui o direito de deixar o mercado cativo das distribuidoras e negociar livremente preço, prazo e fornecedor de energia no Mercado Livre (ACL).</p>

      <h2 id="o-que-e-acl">1. O que é o Mercado Livre de Energia (ACL)?</h2>
      <p>No Ambiente de Contratação Regulada (ACR), a empresa é cativa da concessionária local e paga uma tarifa fixa e compulsória. No <strong>Ambiente de Contratação Livre (ACL)</strong>, o consumidor separa o contrato do serviço físico (transporte de energia via fio, pago à distribuidora) da compra da molécula de energia (comprada livremente de geradoras e comercializadoras).</p>

      <h2 id="abertura-grupo-a">2. Abertura Total do Grupo A (Portaria 50/2022)</h2>
      <p>Desde janeiro de 2024, consumidores de qualquer faixa de demanda (como pequenos comércios, galpões logísticos e médias indústrias) podem migrar para o ACL através do modelo de <strong>Varejista Credenciado na CCEE</strong>. Isso democratizou a economia antes restrita a gigantes industriais.</p>

      <h2 id="passo-a-passo">3. Passo a Passo da Migração Segura</h2>
      <ol>
        <li><strong>Estudo de Viabilidade Econômica:</strong> Simulação financeira comparando tarifas cativas x cotações no mercado livre considerando tributação (ICMS, PIS/COFINS).</li>
        <li><strong>Denúncia do Contrato Atual:</strong> Notificação formal à distribuidora local respeitando os prazos regulatórios (normalmente 180 dias de antecedência).</li>
        <li><strong>Adequação do Sistema de Medição (SMF):</strong> Instalação de medidores bidirecionais classe 0,2s com no-break e modem de telemetria conforme padrões ONS/CCEE.</li>
        <li><strong>Assinatura do Contrato de Compra e Venda de Energia (PPA):</strong> Travamento de preços fixos ou indexados com garantias firmes.</li>
      </ol>

      <h2 id="gestao-e-riscos">4. Gestão Pós-Migração e Mitigação de Riscos</h2>
      <p>Migrar é apenas o primeiro passo. A gestão contínua exige monitoramento do consumo hora a hora, ajuste de montantes sazonais, validação de faturas da CCEE e da distribuidora e liquidações financeiras no mercado de curto prazo (PLD).</p>

      <h2 id="consultoria-especializada">5. O Papel da Consultoria ElectROM</h2>
      <p>A <strong>ElectROM Engenharia</strong> assessora sua empresa desde a modelagem financeira e concorrência com as melhores comercializadoras do Brasil até a execução física das obras de adequação do painel de medição na sua subestação.</p>
    `
  },
  {
    id: 4,
    slug: 'como-reduzir-custos-com-energia-solar',
    title: 'Como Reduzir Custos com Energia Solar na Indústria: Estratégias e Payback',
    excerpt: 'Descubra estratégias práticas para maximizar a economia de energia em grandes plantas fabris com minigeração solar e payback acelerado.',
    date: '10/06/2024',
    readTime: '5 min de leitura',
    author: {
      name: 'Eng. Roberto Moreira',
      role: 'Diretor Técnico de Engenharia | ElectROM',
      avatar: '/ElectROM - Horizontal.png'
    },
    category: {
      id: 'energias-renovaveis',
      name: 'Energias Renováveis'
    },
    image: '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg',
    tags: ['Minigeração', 'Usinas Fotovoltaicas', 'Economia Industrial', 'Payback'],
    featured: false,
    tableOfContents: [
      { id: 'estrategia-solar', title: '1. Estratégia de Minigeração Solar' },
      { id: 'simulacao-custos', title: '2. Simulação de Economia e Payback' },
      { id: 'adequacao-cabine', title: '3. Adequação da Cabine Primária' }
    ],
    content: `
      <p class="lead">Grandes coberturas fabris e galpões logísticos oferecem uma oportunidade ímpar para a implantação de miniusinas solares que transformam áreas ociosas em fontes contínuas de geração de caixa.</p>
      <h2 id="estrategia-solar">1. Estratégia de Minigeração Solar</h2>
      <p>Ao implementar sistemas acima de 75 kW até 3 MW (Minigeração Distribuída), a indústria obtém economia de escala substancial na aquisição de equipamentos e custos de instalação.</p>
      <h2 id="simulacao-custos">2. Simulação de Economia e Payback</h2>
      <p>A taxa interna de retorno (TIR) de projetos solares industriais situa-se frequentemente entre 25% e 40% ao ano, superando com folga aplicações financeiras conservadoras de renda fixa.</p>
      <h2 id="adequacao-cabine">3. Adequação da Cabine Primária</h2>
      <p>A conexão à rede de média tensão exige laudo de viabilidade da concessionária e proteção de paralelismo de acordo com o padrão técnico da distribuidora (Enel, CPFL, EDP, etc.).</p>
    `
  },
  {
    id: 5,
    slug: 'eficiencia-energetica-tendencias',
    title: 'Eficiência Energética: Principais Tendências Industriais',
    excerpt: 'Explore inovações tecnológicas como motores IE4/IE5 e inversores de frequência inteligentes que estão liderando a descarbonização industrial.',
    date: '02/06/2024',
    readTime: '7 min de leitura',
    author: {
      name: 'Equipe Técnica ElectROM',
      role: 'Engenharia de Aplicação',
      avatar: '/ElectROM - Horizontal.png'
    },
    category: {
      id: 'engenharia-de-energias',
      name: 'Engenharia de Energias'
    },
    image: '/obras/Obras/Imagem6.png',
    tags: ['Eficiência', 'Inversores', 'Descarbonização', 'Indústria'],
    featured: false,
    tableOfContents: [
      { id: 'visão-geral', title: '1. Visão Geral das Inovações' },
      { id: 'gestão-termica', title: '2. Gestão Térmica e Elétrica Integrada' }
    ],
    content: `
      <p class="lead">A busca por menores custos operacionais impulsiona a modernização dos ativos elétricos industriais. Compreenda como o retrofit tecnológico transforma plantas fabris tradicionais em operações de alta performance energética.</p>
      <h2 id="visão-geral">1. Visão Geral das Inovações</h2>
      <p>A integração entre acionamentos inteligentes, iluminação industrial LED de alto rendimento luminotécnico e automação predial/fabril permite cortes diretos na fatura de energia.</p>
      <h2 id="gestão-termica">2. Gestão Térmica e Elétrica Integrada</h2>
      <p>A medição contínua da eficiência dos transformadores e cabos elétricos evita perdas por efeito Joule e eleva a confiabilidade operacional.</p>
    `
  },
  {
    id: 6,
    slug: 'mercado-livre-guia-migracao',
    title: 'Mercado Livre de Energia: Guia Prático de Migração',
    excerpt: 'Entenda os requisitos regulatórios obrigatórios e as vantagens financeiras da portabilidade para o Ambiente de Contratação Livre (ACL).',
    date: '28/05/2024',
    readTime: '6 min de leitura',
    author: {
      name: 'Consultoria Regulante ElectROM',
      role: 'Mercado Livre & Regulação',
      avatar: '/ElectROM - Horizontal.png'
    },
    category: {
      id: 'consultoria-de-energia',
      name: 'Consultoria de Energia'
    },
    image: '/obras/Obras/Imagem10.png',
    tags: ['Mercado Livre', 'Migração ACL', 'Economia', 'CCEE'],
    featured: false,
    tableOfContents: [
      { id: 'vantagens-migracao', title: '1. Principais Vantagens' },
      { id: 'cronograma', title: '2. Cronograma de Implantação' }
    ],
    content: `
      <p class="lead">A portabilidade para o Mercado Livre de Energia representa um dos maiores saltos de competitividade para médias e grandes empresas. Saiba como estruturar essa transição sem sobressaltos operacionais.</p>
      <h2 id="vantagens-migracao">1. Principais Vantagens</h2>
      <p>Além da redução direta do preço da energia, o consumidor adquire previsibilidade orçamentária para 2 a 5 anos e pode escolher fontes 100% renováveis.</p>
      <h2 id="cronograma">2. Cronograma de Implantação</h2>
      <p>O processo completo dura normalmente entre 4 e 6 meses, englobando a denúncia do contrato cativo, a contratação no mercado livre e a vistoria do sistema de medição pela concessionária.</p>
    `
  }
];

// Funções auxiliares
export function getAllBlogPosts(): BlogPostItem[] {
  return blogPostsData;
}

export function getBlogPostBySlug(slug: string): BlogPostItem | undefined {
  if (!slug) return undefined;
  
  // Busca exata ou por similaridade de slug
  const normalizedSlug = slug.toLowerCase().trim();
  const directMatch = blogPostsData.find(p => p.slug.toLowerCase() === normalizedSlug);
  if (directMatch) return directMatch;

  // Mapa de aliases para compatibilidade
  const aliasMap: Record<string, string> = {
    'como-reduzir-custos-com-energia-solar': 'energia-solar-setor-industrial',
    'eficiencia-energetica-tendencias': 'tendencias-eficiencia-energetica-2024',
    'mercado-livre-guia-migracao': 'sustentabilidade-futuro-energia'
  };

  const mappedSlug = aliasMap[normalizedSlug];
  if (mappedSlug) {
    return blogPostsData.find(p => p.slug === mappedSlug);
  }

  return undefined;
}

export function getRelatedBlogPosts(currentSlug: string, categoryId?: string, limit = 3): BlogPostItem[] {
  return blogPostsData
    .filter(p => p.slug !== currentSlug)
    .filter(p => !categoryId || p.category.id === categoryId || true)
    .slice(0, limit);
}
