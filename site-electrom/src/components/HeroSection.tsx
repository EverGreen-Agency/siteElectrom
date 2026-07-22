'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
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
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasVideo, setHasVideo] = useState(false)

  // Scroll Progress Hooks
  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 })

  // Transformações visuais de fundo impulsionadas pelo Scroll (Apple Style Parallax)
  const bgY = useTransform(scrollY, [0, 1000], [0, 320])
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.18])
  const bgOpacity = useTransform(smoothProgress, [0, 0.8, 1], [1, 0.6, 0.1])
  const energyGlow = useTransform(smoothProgress, [0, 0.5, 1], ['rgba(0, 240, 255, 0.15)', 'rgba(0, 240, 255, 0.5)', 'rgba(0, 240, 255, 0.05)'])
  const rotateX = useTransform(smoothProgress, [0, 1], [0, 8])

  // Canvas Interactive Electric Circuit Animation driven by Scroll Position
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Definição das vias de energia elétrica
    const nodes: { x: number; y: number; targetX: number; targetY: number; progress: number; speed: number }[] = []
    const numLines = 18

    for (let i = 0; i < numLines; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.5,
        targetX: Math.random() * width,
        targetY: height * (0.5 + Math.random() * 0.5),
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.005
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Pega o valor atual do scroll (0 a 1)
      const scrollVal = smoothProgress.get()

      nodes.forEach((node, index) => {
        // Velocidade da partícula de energia acelerada pelo scroll do usuário
        node.progress += node.speed + scrollVal * 0.015
        if (node.progress > 1) {
          node.progress = 0
          node.x = Math.random() * width
          node.targetX = Math.random() * width
        }

        const currentX = node.x + (node.targetX - node.x) * node.progress
        const currentY = node.y + (node.targetY - node.y) * node.progress

        // Linha guia de energia sutil
        ctx.beginPath()
        ctx.moveTo(node.x, node.y)
        ctx.lineTo(node.targetX, node.targetY)
        ctx.strokeStyle = `rgba(0, 240, 255, ${0.04 + scrollVal * 0.1})`
        ctx.lineWidth = 1
        ctx.stroke()

        // Pulso elétrico brilhante (Energia percorrendo)
        const pulseGradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 12 + scrollVal * 10)
        pulseGradient.addColorStop(0, 'rgba(0, 240, 255, 0.9)')
        pulseGradient.addColorStop(0.4, 'rgba(122, 162, 228, 0.5)')
        pulseGradient.addColorStop(1, 'rgba(0, 240, 255, 0)')

        ctx.fillStyle = pulseGradient
        ctx.beginPath()
        ctx.arc(currentX, currentY, 12 + scrollVal * 10, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [smoothProgress])

  return (
    <section 
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 md:px-16 bg-brand-petrol text-white overflow-hidden blueprint-bg"
    >
      {/* Background Media Overlay (Vídeo com Fallback de Imagem + Scroll Parallax 3D) */}
      <motion.div
        className="absolute inset-0 z-0 origin-top"
        style={{ 
          y: bgY, 
          scale: bgScale, 
          opacity: bgOpacity,
          rotateX: rotateX,
          willChange: "transform, opacity" 
        }}
      >
        <Image
          src="/HeroO1.png"
          alt="ElectROM Engenharia - Engenharia de Energia"
          fill
          className="object-cover md:object-contain object-right opacity-80"
          priority
        />

        {/* Gradientes de Fusão e Contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-petrol via-brand-petrol/40 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-petrol via-brand-petrol/30 to-transparent opacity-85" />
      </motion.div>

      {/* Canvas Interativo de Circuitos e Pulsos Elétricos acionados pelo Scroll */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen"
      />

      {/* Glow de Energia Solar/Elétrica Dinâmico com Scroll */}
      <motion.div 
        className="absolute z-[2] inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 75% 35%, ${energyGlow.get()} 0%, transparent 60%)`
        }}
      />

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

          {/* Headline com tipografia elegante */}
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
