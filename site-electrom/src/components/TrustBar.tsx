"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { companyData } from '../data/companyData';

export interface TrustMetricItem {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  sublabel: string;
  colorClass: string;
  glowClass: string;
  icon: React.ReactNode;
}

const metrics: TrustMetricItem[] = [
  { 
    value: companyData.metrics.yearsOfExperience.value, 
    prefix: companyData.metrics.yearsOfExperience.prefix, 
    suffix: companyData.metrics.yearsOfExperience.suffix, 
    label: companyData.metrics.yearsOfExperience.label, 
    sublabel: companyData.metrics.yearsOfExperience.sublabel,
    colorClass: 'text-brand-cyan',
    glowClass: 'group-hover:border-brand-cyan/40 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]',
    icon: (
      <svg className="w-6 h-6 text-brand-cyan transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  { 
    value: companyData.metrics.projectsDelivered.value, 
    prefix: companyData.metrics.projectsDelivered.prefix, 
    suffix: companyData.metrics.projectsDelivered.suffix, 
    label: companyData.metrics.projectsDelivered.label, 
    sublabel: companyData.metrics.projectsDelivered.sublabel,
    colorClass: 'text-brand-blue',
    glowClass: 'group-hover:border-brand-blue/40 group-hover:shadow-[0_0_20px_rgba(122,162,228,0.15)]',
    icon: (
      <svg className="w-6 h-6 text-brand-blue transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    value: companyData.metrics.economyGenerated.value, 
    prefix: companyData.metrics.economyGenerated.prefix, 
    suffix: companyData.metrics.economyGenerated.suffix, 
    label: companyData.metrics.economyGenerated.label, 
    sublabel: companyData.metrics.economyGenerated.sublabel,
    colorClass: 'text-brand-gold',
    glowClass: 'group-hover:border-brand-gold/40 group-hover:shadow-[0_0_20px_rgba(212,163,89,0.15)]',
    icon: (
      <svg className="w-6 h-6 text-brand-gold transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-brand-dark border-y border-white/5 relative overflow-hidden py-12">
      <div className="absolute inset-0 blueprint-bg opacity-35 z-0" />
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent overflow-hidden z-10">
        <div className="absolute top-0 left-0 h-full w-48 bg-gradient-to-r from-transparent via-brand-cyan to-transparent animate-shimmer" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl glass-card border border-white/5 relative group transition-all duration-300 ${item.glowClass}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-5">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {item.icon}
                </div>

                <div>
                  <div className={`text-3xl md:text-4xl font-display font-bold leading-none ${item.colorClass}`}>
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
                  <div className="text-sm font-semibold text-white mt-1 tracking-tight">
                    {item.label}
                  </div>
                  <div className="text-xs text-gray-400 font-normal mt-0.5">
                    {item.sublabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
