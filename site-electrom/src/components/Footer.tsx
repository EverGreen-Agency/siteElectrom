"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { companyData } from '../data/companyData';
import dynamic from 'next/dynamic';

import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const InteractiveMap = dynamic(() => import('./InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#030504] z-20 flex flex-col items-center justify-center gap-3">
      <div className="w-8 h-8 border-2 border-brand-cyan/20 border-t-brand-cyan rounded-full animate-spin" />
      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Carregando Mapa Operacional...</span>
    </div>
  )
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Soluções",
      links: [
        { name: "Energia Solar", href: "/solucoes" },
        { name: "Eficiência Energética", href: "/solucoes" },
        { name: "Projetos Elétricos", href: "/solucoes" },
        { name: "Consultoria", href: "/solucoes" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Sustentabilidade", href: "/sustentabilidade" },
        { name: "Blog", href: "/blog" }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: companyData.social.linkedin,
      icon: <FaLinkedin className="w-5 h-5" />
    },
    {
      name: "Instagram",
      href: companyData.social.instagram,
      icon: <FaInstagram className="w-5 h-5" />
    }
  ];

  const certifications = ["CREA Registrado", "ISO 9001 Homologado", "NBR 5410/NR-10"];

  return (
    <footer className="bg-[#030504] text-white relative overflow-hidden border-t border-white/10 pt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-brand-blue/10 blur-[120px] pointer-events-none rounded-full opacity-60" />
      <div className="absolute inset-0 blueprint-bg opacity-[0.08] pointer-events-none mix-blend-overlay" />

      <motion.div 
        className="max-w-7xl mx-auto px-6 md:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          <motion.div 
            className="lg:col-span-4 space-y-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-brand-blue">{companyData.name.split(' ')[0].toUpperCase()}</h3>
              <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase font-semibold">
                {companyData.slogan}
              </span>
            </div>

            <p className="text-xs text-gray-400 font-normal leading-relaxed max-w-sm">
              Mais de {companyData.experienceYears} anos de engenharia disruptiva de alta performance, descarbonizando operações e entregando o máximo rendimento energético aos nossos clientes.
            </p>

            <div className="flex gap-3.5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-brand-blue/30 text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-3 grid grid-cols-2 gap-4 lg:gap-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-xs font-mono font-semibold text-brand-blue uppercase tracking-widest">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="lg:col-span-5 space-y-4"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            <h4 className="text-xs font-mono font-semibold text-brand-blue uppercase tracking-widest">
              Nossa Presença Operacional
            </h4>
            <div className="relative w-full h-[300px] lg:h-[400px] bg-[#060c0a] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
              <InteractiveMap />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } }
          }}
        >
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="text-gray-500 font-mono text-[10px] uppercase">Garantias:</span>
            {certifications.map((c) => (
              <span key={c} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-gray-400 hover:text-white transition-colors cursor-default">
                {c}
              </span>
            ))}
          </div>

          <div className="text-center md:text-right font-mono text-[10px] text-gray-500 space-y-1">
            <div>© {currentYear} ELECTROM ENGENHARIA LTDA. CNPJ ATIVO.</div>
            <div className="flex justify-center md:justify-end gap-3 text-gray-400">
              <a href="/legal/privacidade" className="hover:text-brand-blue">Privacidade</a>
              <span>•</span>
              <a href="/legal/termos" className="hover:text-brand-blue">Termos</a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
