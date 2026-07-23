"use client";

import React from 'react';
import { motion } from 'framer-motion';

export interface SolutionItem {
  title: string;
  headline: string;
  description: string;
  bullets: string[];
  color: string;
  icon: React.ReactNode;
}

const solutions: SolutionItem[] = [
  {
    title: 'Energias Renováveis',
    headline: 'Geração própria e energia limpa',
    description: 'Engenharia completa de usinas fotovoltaicas industriais e comerciais, estações de carregamento veicular (VE) e autonomia energética.',
    bullets: ['Usinas fotovoltaicas (telhado e solo)', 'Estações de recarga veicular (VE)', 'Estudos de viabilidade e geração', 'Projetos Turnkey (EPC) integrados'],
    color: 'from-brand-gold to-brand-amber',
    icon: (
      <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    )
  },
  {
    title: 'Engenharia de Energias',
    headline: 'Redução de perdas e eficiência',
    description: 'Diagnósticos completos de consumo, conservação de energia e mitigação de perdas elétricas e térmicas industriais.',
    bullets: ['Auditorias energéticas industriais', 'Análise termográfica preventiva', 'Retrofit de motores IE4/IE5 e iluminação', 'Projetos de conservação térmica'],
    color: 'from-brand-blue to-[#4f80cf]',
    icon: (
      <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Consultoria de Energia',
    headline: 'Inteligência tarifária e mercado livre',
    description: 'Estratégias de portabilidade para o Mercado Livre de Energia (ACL), gestão de contratos e redução drástica de custos.',
    bullets: ['Migração ao Mercado Livre (ACL)', 'Auditoria contínua de faturas e tarifas', 'Gestão de Créditos de Carbono', 'Viabilidade para Geração Distribuída'],
    color: 'from-brand-blue to-brand-cyan',
    icon: (
      <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
  {
    title: 'Média e Baixa Tensão',
    headline: 'Infraestrutura e conformidade',
    description: 'Projetos elétricos complexos, montagem de subestações de entrada, cabines primárias e laudos normativos.',
    bullets: ['Subestações e cabines primárias', 'Painéis elétricos inteligentes', 'Sistemas SPDA e proteção de surtos', 'Laudos de conformidade NBR 5410/14039'],
    color: 'from-brand-cyan to-[#00c8ff]',
    icon: (
      <svg className="w-6 h-6 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Gerenciamento de Obras',
    headline: 'Gestão integrada de engenharia',
    description: 'Coordenação técnica ponta a ponta de instalações elétricas, civis e utilidades com engenheiros residentes no local.',
    bullets: ['Fiscalização civil, elétrica e estruturas', 'Planejamento e coordenação de utilidades', 'Engenheiros residentes no local', 'Documentação As-Built e termos de entrega'],
    color: 'from-brand-blue to-brand-amber',
    icon: (
      <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  }
];

export default function SolutionsGrid() {
  return (
    <section id="solucoes" className="w-full py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#00F0FF]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-cyan font-semibold">
              Inteligência e Engenharia
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight text-white mb-4">
            Nossas Soluções de Energia
          </h2>
          <p className="text-gray-400 font-normal text-base md:text-lg">
            Combinamos engenharia de ponta e planejamento financeiro para reduzir custos, mitigar riscos e descarbonizar sua empresa de ponta a ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border-white/5 flex flex-col justify-between relative group hover:-translate-y-1.5"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 electric-border pointer-events-none" />
              
              <div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0" />
                  {sol.icon}
                </div>

                <span className="text-xs font-mono font-semibold tracking-wider text-brand-blue uppercase">
                  {sol.title}
                </span>
                
                <h3 className="text-lg font-bold text-white mt-1 mb-3 leading-snug">
                  {sol.headline}
                </h3>
                
                <p className="text-gray-400 text-xs font-normal leading-relaxed mb-6">
                  {sol.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {sol.bullets.map((b, i) => (
                    <li key={i} className="flex items-start text-xs text-gray-300 font-normal gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-cyan flex-shrink-0 mt-1" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="#contato" 
                className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-brand-blue hover:text-brand-petrol text-xs font-semibold text-white tracking-wider uppercase transition-all flex items-center justify-center gap-2 group-hover:border-brand-blue/30"
              >
                Saiba Mais
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
