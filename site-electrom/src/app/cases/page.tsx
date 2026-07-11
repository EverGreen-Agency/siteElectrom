'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaIndustry, FaStore, FaHome, FaHospital, FaSchool, FaBuilding, FaArrowRight, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const CasesPage = () => {
  const [activeSegment, setActiveSegment] = useState<string>('todos');

  const segmentos = [
    { id: 'todos', icone: <FaBuilding className="text-sm" />, nome: 'Todos' },
    { id: 'industrial', icone: <FaIndustry className="text-sm" />, nome: 'Industrial' },
    { id: 'comercial', icone: <FaStore className="text-sm" />, nome: 'Comercial' },
    { id: 'residencial', icone: <FaHome className="text-sm" />, nome: 'Residencial' },
    { id: 'saude', icone: <FaHospital className="text-sm" />, nome: 'Saúde' },
    { id: 'educacao', icone: <FaSchool className="text-sm" />, nome: 'Educação' }
  ];

  const cases = [
    {
      id: 1,
      titulo: 'Usina Solar Cipó Guaçu (Carlos Augusto)',
      segmento: 'industrial',
      descricao: 'Engenharia completa, homologação e instalação de usina de minigeração distribuída em solo (32,16 kWp) para autoconsumo remoto com sistema de rastreamento tracker.',
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
      ],
      imagem: '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg'
    },
    {
      id: 2,
      titulo: 'Smart Fit Embu Guaçu - Usina Solar Comercial',
      segmento: 'comercial',
      descricao: 'Dimensionamento, homologação e comissionamento de usina comercial fotovoltaica sobre telhado (145,2 kWp) com inversores PHB e módulos DMEGC de alta performance.',
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
      ],
      imagem: '/obras/Paineis.jpeg'
    },
    {
      id: 3,
      titulo: 'Escola Patelli - Transição Fotovoltaica',
      segmento: 'educacao',
      descricao: 'Dimensionamento e instalação de gerador fotovoltaico em telhado (6,5 kWp) integrado à subestação distribuidora escolar e sistema de monitoramento pedagógico.',
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
      ],
      imagem: '/obras/EscolaPatelliFotovoltaica/IMG-20180202-WA0028.jpg'
    },
    {
      id: 4,
      titulo: 'Residencial Recanto - Soluções Energéticas Integradas',
      segmento: 'residencial',
      descricao: 'Modernização completa integrada: gerador fotovoltaico em laje (17,68 kWp), quadros elétricos de distribuição, automação e infraestrutura para carregadores veiculares.',
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
      ],
      imagem: '/obras/ObraRecantoFotovoltaica/IMG_20181205_173826509_HDR.jpg'
    }
  ];

  const casesFiltrados = activeSegment === 'todos' 
    ? cases 
    : cases.filter(case_ => case_.segmento === activeSegment);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="bg-brand-dark min-h-screen w-full text-white pb-20 relative overflow-hidden">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />

      {/* Decorative Aurora glow */}
      <div className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10 bg-brand-cyan pointer-events-none" />

      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 space-y-12">
        {/* Header */}
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7AA2E4]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">
              Portfólio de Obras
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-black leading-tight text-white">
            Cases de Sucesso &amp; ROI
          </h1>
          <p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Resultados corporativos reais, documentados e quantificados sob auditorias de redução de custos de energia.
          </p>
        </header>

        {/* Filtro de Segmentos */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2.5 mb-12 border-b border-white/5 pb-8"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {segmentos.map((segmento) => (
            <motion.button
              key={segmento.id}
              onClick={() => setActiveSegment(segmento.id)}
              variants={item}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer
                ${activeSegment === segmento.id
                  ? 'bg-brand-blue border-brand-blue text-brand-petrol shadow-lg shadow-brand-blue/20 scale-105'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/20 hover:text-white'}
              `}
            >
              {segmento.icone}
              <span>{segmento.nome}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Cases */}
        <motion.div
          className="flex flex-col gap-12"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <AnimatePresence mode="popLayout">
            {casesFiltrados.map((case_) => (
              <motion.div
                key={case_.id}
                variants={item}
                layout
                className="glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row border-white/5 transition-all duration-500 hover:border-white/10"
              >
                {/* Imagem */}
                <div className="relative lg:w-1/2 h-64 lg:min-h-[440px] bg-brand-dark/50 border-b lg:border-b-0 lg:border-r border-white/5">
                  <Image
                    src={case_.imagem}
                    alt={case_.titulo}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-brand-blue text-brand-petrol text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-widest">
                    {segmentos.find(s => s.id === case_.segmento)?.nome}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 leading-tight">{case_.titulo}</h3>
                      <p className="text-gray-400 font-light text-xs md:text-sm leading-relaxed">{case_.descricao}</p>
                    </div>

                    {/* Comparação Antes/Depois */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-black/30 border border-white/5 p-4 rounded-xl flex flex-col gap-2">
                        <span className="font-mono text-[10px] font-bold text-brand-cyan uppercase tracking-widest flex items-center gap-1.5">
                          <FaArrowUp className="text-brand-cyan" /> Antes do Projeto
                        </span>
                        <ul className="space-y-1.5 text-gray-300 text-xs font-light">
                          <li><b className="font-semibold text-white">Consumo:</b> {case_.antes.consumo}</li>
                          <li><b className="font-semibold text-white">Custo:</b> {case_.antes.custo}</li>
                          <li className="line-clamp-2"><b className="font-semibold text-white">Gargalo:</b> {case_.antes.impacto}</li>
                        </ul>
                      </div>
                      <div className="bg-brand-blue/5 border border-brand-blue/10 p-4 rounded-xl flex flex-col gap-2">
                        <span className="font-mono text-[10px] font-bold text-brand-blue uppercase tracking-widest flex items-center gap-1.5">
                          <FaArrowDown className="text-brand-blue" /> Após Projeto
                        </span>
                        <ul className="space-y-1.5 text-gray-300 text-xs font-light">
                          <li><b className="font-semibold text-white">Consumo:</b> {case_.depois.consumo}</li>
                          <li><b className="font-semibold text-white">Custo:</b> {case_.depois.custo}</li>
                          <li className="line-clamp-2"><b className="font-semibold text-white">Impacto:</b> {case_.depois.impacto}</li>
                        </ul>
                      </div>
                    </div>

                    {/* Resultados */}
                    <div className="space-y-2.5">
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white border-b border-white/5 pb-2">Ganhos &amp; Viabilidade</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {case_.resultados.map((resultado, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-300 bg-white/5 border border-white/5 rounded-lg px-3 py-2 font-mono text-[10px]">
                            <FaArrowRight className="text-brand-blue flex-shrink-0 text-xs" />
                            <span>{resultado}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Link
                      href="/contato"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-brand-blue text-brand-petrol font-bold rounded-lg shadow-md hover:shadow-brand-blue/20 hover:scale-105 active:scale-95 text-xs font-mono tracking-wider uppercase transition-all"
                    >
                      Solicitar Diagnóstico
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-3xl p-8 lg:p-12 text-center border-white/5 relative overflow-hidden"
        >
          <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white">Quer resultados similares na sua empresa?</h2>
            <p className="text-gray-400 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Nossa equipe está qualificada para dimensionar e homologar soluções personalizadas de economia adequadas à sua infraestrutura de carga.
            </p>
            <div className="pt-2">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-blue text-brand-petrol font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-brand-blue/20 hover:scale-105 active:scale-95 transition-all"
              >
                Solicite uma Proposta
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CasesPage;