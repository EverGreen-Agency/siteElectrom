'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSolarPanel, FaBolt, FaLightbulb, FaChartLine, FaArrowRight, FaCheckCircle, FaClipboardList, FaCogs, FaUserTie, FaBalanceScale, FaQuoteLeft } from 'react-icons/fa';
import Link from 'next/link';
import { companyData } from '../../data/companyData';

const solucoes = [
  {
    id: 'energia-solar',
    icone: <FaSolarPanel className="text-4xl text-brand-blue" />,
    titulo: 'Energia Solar Corporativa',
    subtitulo: 'Reduza até 95% do custo com concessionária através de usinas solares sob medida.',
    detalhes: [
      'Usinas em telhado, solo, carport (estacionamento) ou flutuante',
      'Estudo de viabilidade de sombreamento tridimensional em software CAD',
      'Equipamentos homologados pelos líderes de mercado Tier 1',
      'Payback modelado sob tarifas vigentes'
    ]
  },
  {
    id: 'eficiencia',
    icone: <FaLightbulb className="text-4xl text-brand-cyan" />,
    titulo: 'Eficiência Energética',
    subtitulo: 'Otimize seus processos industriais e restrinja perdas térmicas ou reativas.',
    detalhes: [
      'Diagnóstico completo de consumo de energia com termografia avançada',
      'Retrofit de acionamentos, motores de alto rendimento e iluminação',
      'Redução média auditada de 20% a 35% no consumo ativo total',
      'Correção rigorosa de fator de potência e harmônicas'
    ]
  },
  {
    id: 'projetos-eletricos',
    icone: <FaBolt className="text-4xl text-brand-blue" />,
    titulo: 'Média & Baixa Tensão',
    subtitulo: 'Segurança regulatória e máxima confiabilidade em instalações industriais complexas.',
    detalhes: [
      'Projetos, montagem e manutenção de cabines primárias e subestações',
      'Projetos de malhas de aterramento e sistemas de proteção (SPDA)',
      'Laudos de conformidade com as normas regulamentadoras (NR-10, NBR 5410)',
      'Homologações e comissionamentos junto à concessionária de energia'
    ]
  },
  {
    id: 'consultoria',
    icone: <FaChartLine className="text-4xl text-brand-cyan" />,
    titulo: 'Mercado Livre & Gestão',
    subtitulo: 'Estratégia e consultoria tarifária ativa para migração do ambiente de contratação livre.',
    detalhes: [
      'Estudo de viabilidade de migração para o Mercado Livre de Energia (ACL)',
      'Gestão ativa mensal de contratos, sazonalização e modulação de carga',
      'Representação completa do cliente perante a CCEE',
      'Assessoria na compra de energia incentivada de fontes limpas'
    ]
  }
];

export default function SolucoesPage() {
  const [active, setActive] = useState<string | null>(null);

  const steps = [
    {
      icon: <FaClipboardList className="text-3xl text-brand-blue" />,
      title: "Diagnóstico Técnico",
      desc: "Análise inicial detalhada de consumo de energia de faturas recentes."
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
    <div className="bg-brand-dark min-h-screen w-full text-white pb-20 relative overflow-hidden">
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
        <h1 className="text-3xl md:text-5xl font-display font-black leading-tight text-white max-w-4xl mx-auto">
          Soluções Elétricas Disrupitivas de Alta Performance
        </h1>
        <p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          Unimos engenharia civil e elétrica rigorosa, tecnologias de ponta e viabilidade econômica real para garantir a autonomia da sua planta industrial ou comercial.
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
          {solucoes.map((solucao) => (
            <motion.div
              key={solucao.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group glass-card glass-card-hover rounded-2xl p-8 flex flex-col items-start cursor-pointer border-white/5"
              onClick={() => setActive(active === solucao.id ? null : solucao.id)}
            >
              <div className="mb-5 p-3 bg-white/5 rounded-xl border border-white/10 transition-colors group-hover:border-brand-blue/30">{solucao.icone}</div>
              <h3 className="text-xl font-display font-bold mb-2 text-white group-hover:text-brand-blue transition-colors duration-300">{solucao.titulo}</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-4">{solucao.subtitulo}</p>
              
              <div className="flex items-center text-xs text-brand-blue font-bold font-mono tracking-wider uppercase gap-1.5">
                <span>{active === solucao.id ? 'Ocultar detalhes' : 'Ver detalhes técnicos'}</span>
                <FaArrowRight className={`text-[10px] transition-transform duration-300 ${active === solucao.id ? 'rotate-90' : ''}`} />
              </div>

              <AnimatePresence>
                {active === solucao.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full mt-6 pt-6 border-t border-white/5 space-y-4 overflow-hidden"
                  >
                    <ul className="space-y-3">
                      {solucao.detalhes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-light leading-relaxed">
                          <FaCheckCircle className="text-brand-cyan mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2">
                      <Link
                        href={`/contato?assunto=${solucao.id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-brand-petrol font-bold rounded-lg shadow-md hover:shadow-brand-blue/20 hover:scale-105 active:scale-95 text-[10px] font-mono tracking-wider uppercase transition-all"
                      >
                        Iniciar Diagnóstico
                        <FaArrowRight className="text-[10px]" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparativo com o mercado */}
      <section className="max-w-4xl mx-auto px-6 py-12 relative z-10 border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-display font-black text-center mb-8 text-white">Por que a ElectROM?</h2>
        <div className="overflow-x-auto glass-card rounded-2xl border-white/5 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-xs font-mono font-bold uppercase tracking-widest text-brand-blue">
                <th className="py-4 px-6">Diferenciais Técnicos</th>
                <th className="py-4 px-6 text-center">ElectROM</th>
                <th className="py-4 px-6 text-center text-gray-500">Concorrência comum</th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-gray-300">
              <tr className="border-b border-white/5">
                <td className="py-4 px-6 font-medium text-white">Engenharia Própria de Responsabilidade</td>
                <td className="py-4 px-6 text-center"><FaCheckCircle className="inline text-brand-blue text-lg" /></td>
                <td className="py-4 px-6 text-center text-gray-600">—</td>
              </tr>
              <tr className="border-b border-white/5 bg-white/[0.01]">
                <td className="py-4 px-6 font-medium text-white">Laudo e Estudos de Seletividade com ART</td>
                <td className="py-4 px-6 text-center"><FaCheckCircle className="inline text-brand-cyan text-lg" /></td>
                <td className="py-4 px-6 text-center text-gray-600">—</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-6 font-medium text-white">Dimensionamentos 100% sob medida</td>
                <td className="py-4 px-6 text-center"><FaCheckCircle className="inline text-brand-blue text-lg" /></td>
                <td className="py-4 px-6 text-center text-brand-cyan/60">Limitado</td>
              </tr>
              <tr className="bg-white/[0.01]">
                <td className="py-4 px-6 font-medium text-white">Manutenção Preditiva & Suporte IoT</td>
                <td className="py-4 px-6 text-center"><FaCheckCircle className="inline text-brand-cyan text-lg" /></td>
                <td className="py-4 px-6 text-center text-brand-cyan/60">Parcial</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Mini Jornada */}
      <section className="max-w-5xl mx-auto px-6 py-12 relative z-10 border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-display font-black text-center mb-10 text-white">Fluxo de Implantação</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border-white/5 space-y-3 hover:border-white/10 transition-all flex flex-col justify-between">
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
      <section className="w-full py-20 bg-brand-blue/5 border-t border-white/5 text-center relative z-10 mt-12">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-black text-white">
            Qual a economia viável para sua operação hoje?
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Nossos engenheiros desenvolvem estudos preliminares com mapeamento tarifário sob custos zero.
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