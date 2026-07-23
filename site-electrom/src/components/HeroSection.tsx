'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'

const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
}

const maskItem = {
  hidden: { y: '100%' },
  visible: { 
    y: '0%', 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 })

  const bgY = useTransform(scrollY, [0, 1000], [0, 300])
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.1])
  const bgOpacity = useTransform(smoothProgress, [0, 0.8, 1], [1, 0.6, 0.2])

  return (
    <section 
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 md:px-16 bg-brand-petrol text-white overflow-hidden blueprint-bg"
    >
      {/* Background Media (Higgsfield Video / Image Fallback) */}
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
          alt="ElectROM Engenharia - Engenharia de Energia"
          fill
          className="object-cover md:object-contain object-right"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-petrol via-brand-petrol/35 to-transparent opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-petrol via-brand-petrol/25 to-transparent opacity-75" />
      </motion.div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Blueprint Specification Tag */}
          <motion.div variants={fadeItem} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-brand-blue/20 w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_#00F0FF] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-brand-blue font-semibold">
              ESPECIFICAÇÃO: MÉDIA TENSÃO &amp; SOLAR
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight uppercase mb-6 leading-[0.95] text-white">
            <div className="overflow-hidden pb-1">
              <motion.div variants={maskItem}>
                ENGENHARIA
              </motion.div>
            </div>
            <div className="overflow-hidden pt-1 pb-2">
              <motion.div variants={maskItem} className="bg-gradient-to-r from-brand-blue via-brand-cyan to-white bg-clip-text text-transparent">
                DE ENERGIA
              </motion.div>
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p variants={fadeItem} className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl font-normal leading-relaxed border-l-2 border-brand-blue/30 pl-4">
            Há 30 anos transformando demandas complexas de energia, segurança e economia de escala para indústrias de alta performance.
          </motion.p>

          <motion.div variants={fadeItem} className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-brand-petrol font-semibold text-sm tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
            >
              Falar com Engenheiro
            </motion.a>
            <motion.a
              href="#solucoes"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 text-white font-semibold text-sm tracking-wider uppercase transition-all backdrop-blur-sm"
            >
              Nossas Soluções
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
