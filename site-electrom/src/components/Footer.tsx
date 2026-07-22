"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { companyData } from '../data/companyData';
import dynamic from 'next/dynamic';

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
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72zm0 0" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: companyData.social.instagram,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.86-.7-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.87.312 4.1.54c-.77.23-1.42.54-2.07 1.19-.65.65-.96 1.3-1.19 2.07-.23.77-.412 1.67-.47 2.95C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.24 2.18.47 2.95.23.77.54 1.42 1.19 2.07.65.65 1.3.96 2.07 1.19.77.23 1.67.412 2.95.47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.18-.24 2.95-.47.77-.23 1.42-.54 2.07-1.19.65-.65.96-1.3 1.19-2.07.23-.77.412-1.67.47-2.95.058-1.28.07-1.684.07-4.948 0-3.264-.012-3.668-.07-4.948-.058-1.28-.24-2.18-.47-2.95-.23-.77-.54-1.42-1.19-2.07-.65-.65-1.3-.96-2.07-1.19-.77-.23-1.67-.412-2.95-.47C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 0 0 2.88 1.44 0 0 0 0-2.88z" />
        </svg>
      )
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
