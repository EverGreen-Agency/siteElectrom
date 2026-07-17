'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { companyData } from '../data/companyData';

const milestones = [
  {
    year: '1996',
    title: 'Fundação da Electrom',
    description: 'Nascimento da Electrom em São Paulo, inicialmente focada em gestão de obras e laudos técnicos em engenharia elétrica e mecânica de saneamento, além de representação comercial.',
    image: '/obras/Obras/1996-016-04-3.jpg',
    tag: 'Fundação'
  },
  {
    year: '2003',
    title: 'Expansão Nacional',
    description: 'A empresa atinge a expressiva marca histórica de 317 obras de infraestrutura elétrica e gerenciamento de obras civis/industriais entregues em todo o território nacional.',
    image: '/obras/Obras/WP_20180404_12_32_22_Pro.jpg',
    tag: 'Crescimento'
  },
  {
    year: '2005',
    title: 'Gestão e Conservação de Energia',
    description: 'Início dos serviços de eficiência e conservação energética industrial, incluindo contratos com multinacionais como Duratex, Avon e Votorantim Celulose.',
    image: '/obras/Obras/Imagem13.png',
    tag: 'Eficiência Energética'
  },
  {
    year: '2012',
    title: 'Infraestrutura Urbana de Grande Porte',
    description: 'Marca de 384 obras concluídas, destacando-se o gerenciamento de obras de reservatórios elevados e infraestrutura urbana para o Hospital do Mandaqui e a Cinemateca de SP.',
    image: '/obras/Obras/1996-004-03-3.jpg',
    tag: 'Infraestrutura'
  },
  {
    year: '2016',
    title: 'Certificação e Transição Solar',
    description: 'Obtenção das certificações oficiais LGL Solar e PHB Eletrônica, iniciando oficialmente a divisão de projetos e instalação de Usinas Fotovoltaicas comerciais.',
    image: '/obras/EscolaPatelliFotovoltaica/WP_20180203_11_56_04_Pro.jpg',
    tag: 'Transição Energética'
  },
  {
    year: '2019',
    title: 'Usinas Fotovoltaicas de Minigeração',
    description: 'Homologação e comissionamento de usinas solares de autoconsumo remoto e comerciais de alta tensão, como o gerador de 52 kWp para BLOG7 - Villa Botânica em Itu/SP.',
    image: '/obras/ObraRecantoFotovoltaica/IMG_20190308_091007933.jpg',
    tag: 'Usinas Solares'
  },
  {
    year: '2021',
    title: 'Mobilidade Elétrica e Redes Escolares',
    description: 'Instalação dos primeiros carregadores veiculares de alta potência (e-mobility) e a modernização de padrões de entrada elétrica em grandes colégios estaduais.',
    image: '/obras/CarregadorEletrico/CarregadorEletrico.jpeg',
    tag: 'Inovação & Smart Cities'
  },
  {
    year: '2025',
    title: 'Pioneirismo das Energias',
    description: 'Homologação da usina solar comercial de 145,2 kWp para a academia SmartFit Embu Guaçu/SP, consolidando o legado com mais de 500 obras de engenharia entregues.',
    image: '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg',
    tag: 'Liderança de Mercado'
  }
];

export default function AboutStrip() {
  const [activeIdx, setActiveIdx] = useState(milestones.length - 1);

  return (
    <section className="py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-bg opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Quote Section (Founder's Vision) */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7AA2E4]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">
              Nossa Visão e Legado
            </span>
          </div>
          <blockquote className="text-2xl md:text-3xl font-display font-extrabold text-white leading-relaxed mb-6">
            “Engenharia de Energia é nosso compromisso definitivo em combinar <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">sustentabilidade, alta performance e inovação</span> para viabilizar o amanhã.”
          </blockquote>
          <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            A Electrom Engenharia desenvolve soluções de alta engenharia para empresas brasileiras que demandam redução drástica de perdas, eficiência absoluta e conformidade regulatória sólida.
          </p>
        </div>

        {/* Interactive Timeline Core Container */}
        <div className="border border-white/5 bg-brand-petrol/60 backdrop-blur-md rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          
          <div className="mb-10 flex justify-between items-center flex-wrap gap-4 border-b border-white/5 pb-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase font-bold">HISTÓRIA INTERATIVA</span>
              <h3 className="text-2xl font-display font-bold text-white mt-1">{companyData.experienceYears}+ Anos de Evolução</h3>
            </div>
            <span className="text-xs font-mono text-gray-400">CLIQUE NOS ANOS PARA VER NOSSO HISTÓRICO</span>
          </div>

          {/* Timeline track bar */}
          <div className="relative mb-16 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            <div className="flex items-center justify-between min-w-[640px] md:min-w-0 relative py-4 px-6">
              {/* The horizontal connection line */}
              <div className="absolute left-6 right-6 h-[2px] bg-white/10 top-1/2 -translate-y-1/2 z-0" />
              
              {/* Glowing progress line connecting up to the active index */}
              <div 
                className="absolute left-6 h-[2px] bg-brand-blue top-1/2 -translate-y-1/2 z-0 transition-all duration-500 shadow-[0_0_8px_#7AA2E4]"
                style={{ width: `calc(${(activeIdx / (milestones.length - 1)) * 100}% - ${(activeIdx / (milestones.length - 1)) * 48}px)` }}
              />

              {milestones.map((item, idx) => {
                const isActive = idx === activeIdx;
                const isPassed = idx <= activeIdx;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className="relative z-10 flex flex-col items-center group cursor-pointer flex-shrink-0"
                  >
                    {/* Glowing Node Button */}
                    <div 
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center font-mono text-xs md:text-sm font-bold shadow-lg ${
                        isActive 
                          ? 'bg-brand-blue border-brand-blue text-brand-petrol scale-110 shadow-brand-blue/30' 
                          : isPassed 
                            ? 'bg-brand-petrol border-brand-blue text-brand-blue hover:scale-105' 
                            : 'bg-[#060c0a] border-white/10 text-gray-500 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {item.year.slice(-2)}
                    </div>

                    {/* Desktop Year Label */}
                    <span 
                      className={`absolute -bottom-8 font-mono text-xs font-bold transition-colors duration-300 ${
                        isActive ? 'text-brand-blue' : 'text-gray-400 group-hover:text-white'
                      }`}
                    >
                      {item.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Milestone Details Card */}
          <div className="pt-4 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                
                {/* Details Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-brand-cyan uppercase font-bold">
                    {milestones[activeIdx].tag}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-display font-black text-white leading-tight">
                    {milestones[activeIdx].title} <span className="text-brand-blue font-mono font-normal">({milestones[activeIdx].year})</span>
                  </h4>
                  <p className="text-gray-300 font-light text-base leading-relaxed max-w-xl">
                    {milestones[activeIdx].description}
                  </p>
                </div>

                {/* Cover Photo Column */}
                <div className="lg:col-span-5 relative aspect-[16/10] w-full rounded-2xl border border-white/10 overflow-hidden shadow-2xl electric-border">
                  <Image
                    src={milestones[activeIdx].image}
                    alt={milestones[activeIdx].title}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/45 via-transparent to-transparent" />
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-gray-400 bg-black/60 px-2 py-1 rounded">
                    © ACERVO ELECTROM
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

    </section>
  );
}
 