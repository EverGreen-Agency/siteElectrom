'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaBolt, FaShieldAlt, FaBatteryFull, FaFileAlt } from 'react-icons/fa';
import Link from 'next/link';

export interface FAQItem {
  id: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
  tag: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-acl',
    icon: <FaBolt className="text-brand-blue" />,
    tag: 'Mercado Livre (ACL)',
    question: 'Quais os requisitos para uma empresa migrar para o Mercado Livre de Energia (ACL)?',
    answer: 'Qualquer empresa atendida em média ou alta tensão (Grupo A) pode migrar imediatamente para o Mercado Livre de Energia com a ElectROM Engenharia, alcançando economia média de 25% a 40% nos custos de eletricidade. A ElectROM audita faturas, projeta o ganho líquido e cuida de toda a representação técnica e regulatória perante a CCEE e distribuidora local.'
  },
  {
    id: 'faq-bess',
    icon: <FaBatteryFull className="text-brand-cyan" />,
    tag: 'Armazenamento BESS',
    question: 'Como funcionam os sistemas de armazenamento BESS na indústria com a Lei nº 15.269/2025?',
    answer: 'A Lei nº 15.269/2025 regulamentou o armazenamento de energia em baterias no Brasil sem bitributação. Permite o corte de consumo nos horários de pico mais caros (peak shaving), estabilidade instantânea contra apagões e integração direta com usinas solares fotovoltaicas industriais para autoprodução.'
  },
  {
    id: 'faq-spda',
    icon: <FaShieldAlt className="text-[#10B981]" />,
    tag: 'SPDA & NR-10',
    question: 'Por que o laudo de SPDA segundo a NBR 5419 é obrigatório para indústrias e galpões?',
    answer: 'O laudo de SPDA (Sistema de Proteção contra Descargas Atmosféricas) com emissão de ART assinada por engenheiro habilitado é exigência compulsória do Corpo de Bombeiros (para obtenção e renovação do AVCB) e de seguradoras corporativas para cobertura de sinistros e danos elétricos em maquinários.'
  },
  {
    id: 'faq-cabine',
    icon: <FaFileAlt className="text-brand-gold" />,
    tag: 'Média Tensão NBR 14039',
    question: 'Qual é a periodicidade recomendada para manutenção de cabines primárias e subestações?',
    answer: 'A norma ABNT NBR 14039 recomenda inspeção termográfica periódica e manutenção preventiva anual completa com ensaios dielétricos de óleo em transformadores, calibração de relés secundários e reaperto de barramentos para evitar paradas não planejadas de produção.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-24 bg-brand-petrol relative overflow-hidden border-t border-white/5">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10 bg-brand-blue pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mx-auto">
            <span className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_#00F0FF] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-cyan font-bold">
              Esclarecimentos Técnicos &amp; Normativos
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase leading-[1.05]">
            Perguntas Frequentes de{' '}
            <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-white bg-clip-text text-transparent">
              Engenharia
            </span>
          </h2>

          <p className="text-sm md:text-base text-gray-400 font-normal leading-relaxed">
            Respostas diretas da nossa equipe de engenharia elétrica sobre regulamentação ANEEL, normas ABNT e viabilidade técnico-econômica.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={item.id}
                initial={false}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-brand-petrol/90 border-brand-blue/30 shadow-[0_10px_30px_-10px_rgba(122,162,228,0.15)]'
                    : 'glass-card border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-semibold tracking-wider text-brand-cyan uppercase block mb-1">
                        {item.tag}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-white tracking-tight leading-snug">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-xs text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-cyan border-brand-cyan/30' : ''
                    }`}
                  >
                    <FaChevronDown />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 md:px-7 md:pb-7 pt-2 pl-20 border-t border-white/5">
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom prompt for more questions */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400">
            Tem uma dúvida específica sobre a sua planta industrial?{' '}
            <Link
              href="/contato"
              className="text-brand-cyan hover:text-white font-semibold underline underline-offset-4 transition-colors"
            >
              Fale diretamente com nossos engenheiros credenciados pelo CREA
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
