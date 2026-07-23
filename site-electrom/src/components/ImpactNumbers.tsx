'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import Image from 'next/image';
import { companyData } from '../data/companyData';

export interface ImpactMetricItem {
  id: number;
  value: number;
  label: string;
  sublabel: string;
  prefix: string;
  suffix: string;
  color: string;
  borderColor: string;
  badge: string;
  icon: React.ReactNode;
}

const impacts: ImpactMetricItem[] = [
  { 
    id: 1,
    value: companyData.metrics.yearsOfExperience.value, 
    label: companyData.metrics.yearsOfExperience.label, 
    sublabel: companyData.metrics.yearsOfExperience.sublabel,
    prefix: companyData.metrics.yearsOfExperience.prefix, 
    suffix: companyData.metrics.yearsOfExperience.suffix,
    color: 'text-brand-blue',
    borderColor: 'group-hover:border-brand-blue/30',
    badge: 'Legado',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    id: 2,
    value: companyData.totalProjects, 
    label: 'Projetos Entregues', 
    sublabel: 'Projetos elétricos, civis, mecânicos e fotovoltaicos concluídos',
    prefix: '', 
    suffix: '+',
    color: 'text-brand-blue',
    borderColor: 'group-hover:border-brand-blue/30',
    badge: 'Portfólio',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    id: 3,
    value: companyData.metrics.clientsServed.value, 
    label: companyData.metrics.clientsServed.label, 
    sublabel: companyData.metrics.clientsServed.sublabel,
    prefix: companyData.metrics.clientsServed.prefix, 
    suffix: companyData.metrics.clientsServed.suffix,
    color: 'text-brand-blue',
    borderColor: 'group-hover:border-brand-blue/30',
    badge: 'Confiança',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  { 
    id: 4,
    value: companyData.metrics.economyGenerated.value, 
    label: companyData.metrics.economyGenerated.label, 
    sublabel: companyData.metrics.economyGenerated.sublabel,
    prefix: companyData.metrics.economyGenerated.prefix, 
    suffix: companyData.metrics.economyGenerated.suffix,
    color: 'text-brand-gold',
    borderColor: 'group-hover:border-brand-gold/30',
    badge: 'Financeiro',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    id: 5,
    value: companyData.metrics.fuelSaved.value, 
    label: companyData.metrics.fuelSaved.label, 
    sublabel: companyData.metrics.fuelSaved.sublabel,
    prefix: companyData.metrics.fuelSaved.prefix, 
    suffix: companyData.metrics.fuelSaved.suffix,
    color: 'text-[#10B981]',
    borderColor: 'group-hover:border-[#10B981]/30',
    badge: 'Eficiência',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  { 
    id: 6,
    value: companyData.metrics.co2Avoided.value, 
    label: companyData.metrics.co2Avoided.label, 
    sublabel: companyData.metrics.co2Avoided.sublabel,
    prefix: companyData.metrics.co2Avoided.prefix, 
    suffix: companyData.metrics.co2Avoided.suffix,
    color: 'text-brand-cyan',
    borderColor: 'group-hover:border-brand-cyan/30',
    badge: 'ESG',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  { 
    id: 7,
    value: companyData.metrics.treesSaved.value, 
    label: companyData.metrics.treesSaved.label, 
    sublabel: companyData.metrics.treesSaved.sublabel,
    prefix: companyData.metrics.treesSaved.prefix, 
    suffix: companyData.metrics.treesSaved.suffix,
    color: 'text-[#10B981]',
    borderColor: 'group-hover:border-[#10B981]/30',
    badge: 'Sustentabilidade',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  { 
    id: 8,
    value: companyData.metrics.renewableEnergy.value, 
    label: companyData.metrics.renewableEnergy.label, 
    sublabel: companyData.metrics.renewableEnergy.sublabel,
    prefix: companyData.metrics.renewableEnergy.prefix, 
    suffix: companyData.metrics.renewableEnergy.suffix,
    color: 'text-brand-cyan',
    borderColor: 'group-hover:border-brand-cyan/30',
    badge: 'Solar',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
      </svg>
    )
  }
];

export default function ImpactNumbers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="relative py-24 bg-[#030706] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full opacity-[0.15]"
          style={{ y: bgY, height: "130%", top: "-15%", willChange: "transform" }}
        >
          <Image 
            src="/obras/UsinaCipoGuacu/IMG_20190713_162528919_HDR.jpg"
            alt="Usina Solar Fotovoltaica Cipó Guaçu - ElectROM"
            fill
            className="object-cover object-center grayscale mix-blend-luminosity"
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-brand-petrol/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030706] via-transparent to-[#030706]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#00F0FF]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-cyan font-semibold">
              Métricas de Impacto
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight text-white">
            Nosso Impacto em Números
          </h2>
          <p className="text-gray-400 font-normal text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-balance">
            Mais do que executar projetos de engenharia, construímos ativos sustentáveis sólidos e geramos eficiência financeira e operacional para grandes empresas em todo o território nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, idx) => (
            <motion.div 
              key={item.id}
              className={`glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between h-56 group transition-all duration-300 hover:bg-brand-dark/80 ${item.borderColor}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4, boxShadow: '0 10px 35px -10px rgba(0, 0, 0, 0.9)' }}
            >
              <div className="flex justify-between items-start">
                <span className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-md border ${item.color} bg-white/5 border-white/10 font-medium`}>
                  {item.badge}
                </span>
                <div className="text-gray-500 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>

              <div className="space-y-1.5 mt-4">
                <div className={`text-3xl md:text-4xl font-display font-bold leading-none ${item.color}`}>
                  <CountUp 
                    end={item.value} 
                    duration={2.5} 
                    separator="." 
                    prefix={item.prefix} 
                    suffix={item.suffix} 
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <h4 className="text-sm font-semibold text-white tracking-tight">{item.label}</h4>
                <p className="text-[11px] text-gray-400 font-normal leading-snug">{item.sublabel}</p>
              </div>

              <div className="w-full bg-white/5 h-[1px] mt-4 relative overflow-hidden">
                <motion.div 
                  className={`absolute left-0 top-0 h-full bg-gradient-to-r from-transparent via-current to-transparent ${item.color}`}
                  style={{ width: '100%' }}
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeInOut', delay: idx * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
