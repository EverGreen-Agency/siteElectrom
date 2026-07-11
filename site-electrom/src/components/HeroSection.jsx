'use client'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

// Variantes de Animação para o Stagger Reveal
const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
}

// O famoso "Mask Reveal" - Texto surgindo de dentro de uma caixa invisível
const maskItem = {
  hidden: { y: "100%" },
  visible: { 
    y: 0, 
    transition: { 
      duration: 0.9, 
      ease: [0.16, 1, 0.3, 1] // Easing arquitetônico/premium (Cubic Bezier)
    } 
  }
}

// Fade padrão para elementos secundários
const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
}

export default function HeroSection() {
  // Substituímos o eventListener manual pela API de alta performance do Framer Motion
  const { scrollY } = useScroll()

  // Efeitos Dinâmicos atrelados ao Scroll (Parallax, Scale, Fade)
  const bgY = useTransform(scrollY, [0, 1000], [0, 300])
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.1])
  const bgOpacity = useTransform(scrollY, [0, 800], [1, 0.3])

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 md:px-16 bg-brand-petrol text-white overflow-hidden blueprint-bg">

      {/* Background dinâmico e otimizado */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        style={{ 
          y: bgY, 
          scale: bgScale, 
          opacity: bgOpacity,
          willChange: "transform, opacity" 
        }}
      >
        <Image
          src="/HeroO1.png"
          alt="Electrom Engenharia - Engenharia das Energias"
          fill
          className="object-cover md:object-contain object-right"
          priority
        />
        {/* Layered overlays for dramatic lighting and maximum text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-petrol via-brand-petrol/35 to-transparent opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-petrol via-brand-petrol/25 to-transparent opacity-75" />
      </motion.div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">

        {/* Left Side: Headline & CTAs com Stagger */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Tag com Estilo Blueprint/Técnico */}
          <motion.div variants={fadeItem} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white/5 border border-brand-blue/20 w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_#00F0FF] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-brand-blue font-bold">
              ESPECIFICAÇÃO: ALTA TENSÃO &amp; SOLAR
            </span>
          </motion.div>

          {/* Headline com Mask Reveal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black tracking-tighter uppercase mb-6 leading-[0.9] text-white">
            {/* Primeira linha isolada na máscara */}
            <div className="overflow-hidden pb-1">
              <motion.div variants={maskItem}>
                ENGENHARIA
              </motion.div>
            </div>
            
            {/* Segunda linha isolada na máscara */}
            <div className="overflow-hidden pt-1 pb-2">
              <motion.div variants={maskItem} className="bg-gradient-to-r from-brand-blue via-brand-cyan to-white bg-clip-text text-transparent">
                DAS ENERGIAS
              </motion.div>
            </div>
          </h1>

          {/* Subtitle refinado de Storytelling Técnico */}
          <motion.p variants={fadeItem} className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl font-light leading-relaxed border-l-2 border-brand-blue/30 pl-4">
            Há mais de <span className="font-mono text-brand-cyan font-bold">30 ANOS</span> transformando demandas complexas de <span className="text-white font-medium">subestações, alta tensão e usinas solares</span> em autonomia energética, segurança normativa e economia de escala para indústrias de alta performance.
          </motion.p>

          <motion.div variants={fadeItem} className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(122, 162, 228, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              href="#contato"
              className="px-8 py-4 rounded-lg bg-brand-blue text-brand-petrol font-bold text-center tracking-wide shadow-lg transition-all"
            >
              Solicitar Diagnóstico Energético
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.98 }}
              href="#cases"
              className="px-8 py-4 rounded-lg border border-white/10 hover:border-brand-blue/30 text-white font-semibold text-center transition-all glass-card"
            >
              Ver Obras e Cases
            </motion.a>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer transition-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1 }}
        whileHover={{ opacity: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">Deslize para explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  )
}
