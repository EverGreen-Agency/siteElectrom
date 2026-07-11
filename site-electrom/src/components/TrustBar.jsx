"use client";
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { companyData } from '../data/companyData';

const metrics = [
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
      {/* Blueprint grid background inside TrustBar */}
      <div className="absolute inset-0 blueprint-bg opacity-35 z-0" />
      
      {/* Electric current dividing line at the top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent overflow-hidden z-10">
        <div className="absolute top-0 left-0 h-full w-48 bg-gradient-to-r from-transparent via-brand-cyan to-transparent animate-shimmer" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 md:divide-x md:divide-white/10">
          
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center md:items-start md:px-8 first:pl-0 last:pr-0 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              
              {/* Header: Icon + Value in Tactical split-flap frame */}
              <div className="flex items-center gap-4 mb-4 select-none">
                <div className={`p-2.5 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0)] ${item.glowClass}`}>
                  <div className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                
                {/* Tactical Terminal Display block */}
                <div className={`flex items-center bg-black/50 border border-white/10 px-4 py-1.5 rounded-lg font-mono text-2xl md:text-3xl font-black shadow-inner transition-all duration-300 relative overflow-hidden ${item.glowClass}`}>
                  
                  {/* Tech scanline CRT grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] opacity-15 pointer-events-none z-0" />
                  
                  {/* Micro sweep shimmer hover reflection */}
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out z-10 pointer-events-none" />

                  <span className={`${item.colorClass} tracking-tight select-none relative z-10`}>
                    <CountUp 
                      end={item.value} 
                      duration={2.5} 
                      prefix={item.prefix} 
                      suffix={item.suffix} 
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </span>
                  
                  {/* Digital blinking cursor */}
                  <span className={`w-2 h-4 ml-1.5 bg-current ${item.colorClass} animate-[pulse_1s_infinite] opacity-60 rounded-[1px] relative z-10`} />
                </div>
              </div>

              {/* Labels with pristine typographies */}
              <div className="text-center md:text-left">
                <h4 className="text-base font-display font-semibold text-white tracking-wide uppercase transition-colors duration-300 group-hover:text-white">
                  {item.label}
                </h4>
                <p className="text-xs text-gray-400 mt-1 font-light max-w-[250px] transition-colors duration-300 group-hover:text-gray-300">
                  {item.sublabel}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>

      {/* Electric current dividing line at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent overflow-hidden z-10">
        <div className="absolute bottom-0 left-0 h-full w-48 bg-gradient-to-r from-transparent via-brand-cyan to-transparent animate-shimmer [animation-delay:2s]" />
      </div>

    </section>
  );
}

 