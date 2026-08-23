'use client';

import { motion } from 'framer-motion';
import { FaSolarPanel, FaBolt, FaLightbulb, FaChartLine, FaWrench, FaArrowRight, FaCheckCircle, FaClipboardList, FaCogs, FaUserTie, FaBalanceScale, FaQuoteLeft } from 'react-icons/fa';
import Link from 'next/link';
import { companyData } from '../../data/companyData';

const solucoes = [
  {
    id: 'energias-renovaveis',
    icone: <FaSolarPanel className="text-4xl text-brand-gold" />,
    titulo: 'Energias Renováveis',
    subtitulo: 'Reduza até 95% do custo com concessionária através de usinas solares sob medida e sistemas de recarga veicular.',
    detalhes: [
      'Usinas fotovoltaicas em telhado, solo, carport (estacionamento) ou flutuante',
      'Estações de recarga corporativa para veículos elétricos (e-mobility)',
      'Estudo de viabilidade de sombreamento tridimensional em software CAD',
      'Equipamentos homologados pelos líderes de mercado Tier 1'
    ]
  },
  {
    id: 'engenharia-de-energias',
    icone: <FaLightbulb className="text-4xl text-[#10B981]" />,
    titulo: 'Engenharia de Energias',
    subtitulo: 'Otimize seus processos industriais e restrinja perdas térmicas ou reativas com foco em descarbonização.',
    detalhes: [
      'Diagnóstico completo de consumo de energia com termografia avançada',
      'Retrofit de acionamentos, motores de alto rendimento (IE4/IE5) e iluminação',
      'Redução média auditada de 20% a 35% no consumo ativo total',
      'Projetos de conservação térmica e controle de emissões ESG'
    ]
  },
  {
    id: 'consultoria-de-energia',
    icone: <FaChartLine className="text-4xl text-brand-blue" />,
    titulo: 'Consultoria de Energia',
    subtitulo: 'Estratégia e consultoria tarifária ativa para migração ao Mercado Livre de Energia (ACL).',
    detalhes: [
      'Estudo de viabilidade de migração para o Mercado Livre de Energia (ACL)',
      'Gestão ativa mensal de contratos, sazonalização e modulação de carga',
      'Monetização e gestão de Créditos de Carbono',
      'Assessoria na compra de energia incentivada de fontes limpas'
    ]
  },
  {
    id: 'media-e-baixa-tensao',
    icone: <FaBolt className="text-4xl text-brand-cyan" />,
    titulo: 'Média e Baixa Tensão',
    subtitulo: 'Segurança regulatória e máxima confiabilidade em instalações elétricas industriais complexas.',
    detalhes: [
      'Projetos, montagem e manutenção de cabines primárias e quadros de distribuição',
      'Projetos de malhas de aterramento e sistemas de proteção de surtos (SPDA)',
      'Laudos de conformidade com as normas regulamentadoras (NR-10, NBR 5410/14039)',
      'Homologações e comissionamentos junto à concessionária de energia'
    ]
  },
  {
    id: 'gerenciamento-de-obras',
    icone: <FaWrench className="text-4xl text-brand-blue" />,
    titulo: 'Gerenciamento de Obras',
    subtitulo: 'Gestão técnica ponta a ponta de instalações elétricas, civis e utilidades industriais.',
    detalhes: [
      'Planejamento e coordenação de execução de utilidades e estruturas',
      'Fiscalização de montagens com engenheiros residentes no local',
      'Mapeamento rigoroso e emissão de documentação As-Built',
      'Gestão integral de contrato, equipe, materiais e segurança patrimonial'
    ]
  }
];

export default function SolucoesPage() {
  const steps = [
    {
      icon: <FaClipboardList className="text-3xl text-brand-blue" />,
      title: "Diagnóstico Técnico",
      desc: "Análise inicial detalhada do consumo de energia nas faturas recentes."
    },
    {
      icon: <FaCogs className="text-3xl text-brand-cyan" />,
      title: "Dimensionamento",
      desc: "Projeto elétrico customizado desenhado pelo corpo de engenheiros."
    },
    {
      icon: <FaUserTie className="text-3xl text-brand-blue" />,
      title: "Homologação & Obras",
      desc: "Montagem física do sistema e trâmites de liberação regulatória."
    },
    {
      icon: <FaBalanceScale className="text-3xl text-brand-cyan" />,
      title: "Suporte e O&M",
      desc: "Manutenção preventiva constante e monitoramento por telemetria IoT."
    }
  ];

  return (
    <div className="bg-brand-petrol min-h-screen w-full text-white relative overflow-hidden">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />

      {/* Decorative Aurora glow */}
      <div className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10 bg-brand-blue pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7AA2E4]" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">
            Catálogo de Soluções
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight uppercase mb-6 leading-[0.95] text-white max-w-5xl mx-auto text-balance">
          Soluções Elétricas{' '}
          <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-white bg-clip-text text-transparent">
            Disruptivas
          </span>
        </h1>
        <p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed text-balance">
          Unimos engenharia civil e elétrica rigorosa, tecnologias de ponta e viabilidade econômica real para garantir a autonomia da sua planta industrial, comercial ou&nbsp;residencial.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link href="/contato" className="px-8 py-3.5 rounded-lg bg-brand-blue text-brand-petrol font-bold shadow-lg hover:shadow-brand-blue/20 transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-wider">
            Solicitar Diagnóstico Gratuito
          </Link>
          <a href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(companyData.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-lg border border-white/10 hover:border-brand-cyan/30 text-white font-bold glass-card hover:bg-white/5 transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-wider flex items-center justify-center gap-2">
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Grade de Soluções */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solucoes.map((solucao, idx) => (
            <motion.div
              key={solucao.id}
              className={`glass-card rounded-3xl p-8 border-white/5 hover:border-white/10 transition-all flex flex-col justify-between space-y-6 ${idx === solucoes.length - 1 && solucoes.length % 2 !== 0 ? 'md:col-span-2 max-w-3xl mx-auto w-full' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10">{solucao.icone}</div>
                  <span className="text-xs font-mono text-gray-500 font-semibold uppercase tracking-widest">Pilar 0{idx + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{solucao.titulo}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{solucao.subtitulo}</p>
                </div>
                <div className="border-t border-white/5 pt-4 space-y-2.5">
                  {solucao.detalhes.map((detalhe, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300 font-light">
                      <FaCheckCircle className="text-brand-blue mt-0.5 flex-shrink-0 text-sm" />
                      <span>{detalhe}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-white/5 flex justify-end">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-blue hover:text-white uppercase tracking-wider transition-colors"
                >
                  <span>Solicitar Proposta</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fluxo de Implementação */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10 border-t border-white/5">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase font-bold">Metodologia ElectROM</span>
          <h2 className="text-2xl md:text-3xl font-display font-black text-white">Fluxo de Implementação</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border-white/5 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 w-fit">{step.icon}</div>
                <h4 className="font-display font-bold text-white text-sm">{step.title}</h4>
                <p className="text-gray-400 text-xs font-light leading-relaxed">{step.desc}</p>
              </div>
              <span className="text-[10px] font-mono text-brand-blue font-bold">Fase 0{idx + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimento Real */}
      <section className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        <div className="glass-card rounded-3xl p-8 lg:p-10 border-white/5 relative overflow-hidden flex flex-col items-center text-center space-y-4">
          <FaQuoteLeft className="text-brand-blue/15 text-5xl absolute top-6 left-8 pointer-events-none" />
          <p className="text-base md:text-lg text-gray-200 font-light leading-relaxed max-w-2xl relative z-10 italic">
            &quot;A contratação da ElectROM para migração da nossa planta industrial para o Mercado Livre de Energia, acoplada à instalação da usina solar comercial, reduziu nossos custos corporativos globais de forma imediata e definitiva.&quot;
          </p>
          <div className="relative z-10">
            <span className="block text-brand-blue font-bold font-display text-sm">Diretoria de Operações</span>
            <span className="block text-gray-400 text-xs mt-0.5">Indústria Metalúrgica B2B - São Paulo</span>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full pt-16 pb-12 bg-brand-blue/5 border-t border-white/5 text-center relative z-10 mt-8">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-black text-white max-w-2xl mx-auto text-balance">
            Qual a economia viável para sua operação&nbsp;hoje?
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Nossos engenheiros desenvolvem estudos preliminares com mapeamento tarifário sem custo para sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/contato" className="px-8 py-3.5 rounded-lg bg-brand-blue text-brand-petrol font-bold shadow-lg hover:shadow-brand-blue/20 transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-wider">
              Solicitar Diagnóstico
            </Link>
            <a href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(companyData.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-lg border border-white/10 hover:border-brand-blue/30 text-white font-bold glass-card hover:bg-white/5 transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-wider flex items-center justify-center gap-2">
              Fale no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}