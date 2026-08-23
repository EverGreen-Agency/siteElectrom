'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaBookOpen, FaBolt, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-petrol text-white relative overflow-hidden flex items-center justify-center py-20 px-6">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-bg opacity-20 pointer-events-none" />

      {/* Decorative Aurora glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl w-full mx-auto relative z-10 text-center">
        {/* Engineering Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_#00F0FF] animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-brand-cyan font-bold">
            Código 404 // Circuito Não Localizado
          </span>
        </motion.div>

        {/* Large 404 Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-6"
        >
          <h1 className="text-8xl sm:text-9xl md:text-[11rem] font-display font-black tracking-tight select-none bg-gradient-to-b from-white via-gray-300 to-white/10 bg-clip-text text-transparent leading-none">
            404
          </h1>
          <div className="absolute inset-x-0 bottom-2 flex justify-center">
            <span className="px-4 py-1 rounded bg-brand-dark/80 border border-brand-cyan/30 text-brand-cyan font-mono text-xs tracking-widest uppercase shadow-lg shadow-brand-cyan/10">
              Página Não Encontrada
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
            O recurso ou artigo solicitado não foi encontrado
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            A página que você tentou acessar pode ter sido movida, renomeada ou não está mais disponível na malha técnica do portal ElectROM.
          </p>
        </motion.div>

        {/* Main Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            href="/"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 text-brand-petrol font-bold font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-lg shadow-brand-blue/20 hover:brightness-110 active:scale-95 transition-all"
          >
            <FaHome className="text-sm" />
            Voltar ao Início
          </Link>

          <Link
            href="/blog"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-blue/40 text-white font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all"
          >
            <FaBookOpen className="text-brand-blue text-sm" />
            Explorar o Blog
          </Link>

          <Link
            href="/solucoes"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/40 text-white font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all"
          >
            <FaBolt className="text-brand-cyan text-sm" />
            Nossas Soluções
          </Link>
        </motion.div>

        {/* Quick Links Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card rounded-2xl p-6 border-white/5 max-w-2xl mx-auto text-left"
        >
          <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">
              Atalhos Rápidos de Engenharia
            </span>
            <Link
              href="/contato"
              className="text-xs font-mono text-brand-blue hover:text-brand-cyan flex items-center gap-1.5 transition-colors font-medium"
            >
              <FaPhoneAlt className="text-[10px]" />
              Falar com Engenheiro
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: 'Energia Solar Industrial', href: '/solucoes', desc: 'Usinas fotovoltaicas de alta potência' },
              { title: 'Mercado Livre de Energia', href: '/solucoes', desc: 'Migração ACL e redução tarifária' },
              { title: 'Cabines Primárias & MT', href: '/solucoes', desc: 'Projetos e montagem em média tensão' },
              { title: 'Cases de Sucesso', href: '/cases', desc: 'Mais de 1.000 obras entregues' }
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-white/15 transition-all group flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-gray-400 font-light">
                    {item.desc}
                  </div>
                </div>
                <FaArrowRight className="text-xs text-gray-500 group-hover:text-brand-cyan group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
