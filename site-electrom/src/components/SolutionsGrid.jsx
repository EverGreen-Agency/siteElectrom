"use client";
import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'Energia Solar',
    headline: 'Geração própria sob medida',
    description: 'Engenharia completa de usinas fotovoltaicas industriais e comerciais, conectando sua empresa diretamente à economia renovável.',
    bullets: ['Usinas sobre telhados e solo', 'Estudos de viabilidade regulatória', 'Garantia de performance homologada', 'Projetos Turnkey (EPC) integrados'],
    color: 'from-brand-gold to-brand-amber',
    icon: (
      <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    )
  },
  {
    title: 'Eficiência Energética',
    headline: 'Redução drástica de desperdícios',
    description: 'Auditorias completas para identificação de gargalos de consumo, otimização de máquinas e mitigação de perdas térmicas.',
    bullets: ['Retrofit de iluminação em LED', 'Substituição por motores IE4/IE5', 'Gestão ativa de energia reativa', 'Adequações e correções térmicas'],
    color: 'from-brand-blue to-[#4f80cf]',
    icon: (
      <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Projetos Elétricos',
    headline: 'Estabilidade e conformidade',
    description: 'Engenharia de alta tensão, montagem de subestações blindadas e elaboração de malhas de aterramento seguras.',
    bullets: ['Subestações aéreas e abrigadas', 'Estudos de curto-circuito (seletividade)', 'Sistemas SPDA de proteção de descargas', 'Laudos técnicos de conformidade NR-10'],
    color: 'from-brand-cyan to-[#00c8ff]',
    icon: (
      <svg className="w-6 h-6 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Consultoria Estratégica',
    headline: 'Energia como ativo financeiro',
    description: 'Gestão tarifária avançada e assessoria jurídica completa para migração segura de indústrias ao Mercado Livre de Energia.',
    bullets: ['Migração ao Mercado Livre (ACL)', 'Gestão ativa de contratos de PPAs', 'Planejamento e inventários de ESG', 'Auditoria contínua de faturas técnicas'],
    color: 'from-brand-blue to-brand-cyan',
    icon: (
      <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
];

export default function SolutionsGrid() {
  return (
    <section id="solucoes" className="w-full py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#00F0FF]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-cyan font-bold">
              Inteligência e Engenharia
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black leading-tight text-white mb-4">
            Nossas Soluções de Energia
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg">
            Combinamos engenharia de ponta e planejamento financeiro para reduzir custos, mitigar riscos regulatórios e descarbonizar sua empresa de ponta a ponta.
          </p>
        </div>

        {/* Asymmetrical / Highly interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border-white/5 flex flex-col justify-between relative group hover:-translate-y-1.5"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              {/* Electric border effect on card hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 electric-border pointer-events-none" />
              
              <div>
                {/* Header card: Icon + Border glow */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0" />
                  {sol.icon}
                </div>

                <span className="text-xs font-mono font-bold tracking-wider text-brand-blue uppercase">
                  {sol.title}
                </span>
                
                <h3 className="text-lg md:text-xl font-display font-bold text-white mt-2 mb-3">
                  {sol.headline}
                </h3>
                
                <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                  {sol.description}
                </p>
              </div>

              {/* Bullet list of deliverables */}
              <div className="border-t border-white/5 pt-4">
                <ul className="space-y-2">
                  {sol.bullets.map((b, i) => (
                    <li key={i} className="text-[11px] text-gray-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic bottom CTA button */}
        <div className="flex justify-center mt-16">
          <motion.a 
            href="/solucoes" 
            className="px-8 py-4 rounded-lg bg-brand-blue text-brand-petrol font-bold text-center tracking-wide shadow-lg hover:shadow-brand-blue/20 transition-all flex items-center gap-2.5 cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(122, 162, 228, 0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            Entenda Como Funcionam Nossas Soluções
            <svg className="w-4 h-4 text-brand-petrol" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

      </div>

    </section>
  );
}
 