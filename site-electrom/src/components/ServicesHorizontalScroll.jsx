'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Sistemas Fotovoltaicos',
    description:
      'Geração de energia limpa sob medida. Planejamento, engenharia e instalação de usinas solares industriais de alto rendimento.',
    features: [
      'Dimensionamento técnico de alta precisão',
      'Análise de payback e viabilidade regulatória',
      'Estruturas de solo, telhados e carports',
      'Homologação completa junto à concessionária'
    ],
    testimonial:
      'A Electrom implantou nossa usina solar com agilidade impecável. Tivemos retorno do investimento em tempo recorde.',
    glowColor: 'bg-yellow-500',
    image: '/obras/Paineis.jpeg',
    cta: 'Simular Economia Solar',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Gerenciamento de Obras',
    description:
      'Gestão técnica ponta a ponta. Garantimos rigor operacional, cumprimento de cronograma e conformidade normativa.',
    features: [
      'Planejamento de suprimentos e execução',
      'Engenheiros residentes especializados no local',
      'Rígidos protocolos de segurança e qualidade',
      'As-Built detalhado e documentação de entrega'
    ],
    testimonial:
      'O rigor metodológico da Electrom superou nossas expectativas. O projeto correu perfeitamente dentro do cronograma.',
    glowColor: 'bg-blue-500',
    image: '/obras/Estrutura.jpeg',
    cta: 'Consultar Nossas Obras',
    icon: (
      <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Instalações Hidráulicas',
    description:
      'Infraestrutura hidráulica industrial robusta. Otimização de sistemas de bombeamento e combate a incêndios.',
    features: [
      'Projetos de captação e recalque industrial',
      'Redes de incêndio sob rígidas normas (corpo de bombeiros)',
      'Dimensionamento de fluídos sob pressão',
      'Estações de tratamento e reuso de água'
    ],
    testimonial:
      'Redesenhamos toda a hidráulica da nossa planta de processamento com a Electrom. Consumo estabilizado e zero vazamentos.',
    glowColor: 'bg-emerald-500',
    image: '/obras/Obras/Imagem6.png',
    cta: 'Falar com Hidráulicos',
    icon: (
      <svg className="w-8 h-8 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Média e Baixa Tensão',
    description:
      'Sistemas elétricos complexos e subestações industriais. Garantia de confiabilidade energética e proteção de ativos.',
    features: [
      'Subestações de entrada de energia (cabine primária)',
      'Painéis elétricos inteligentes e de comando central',
      'Sistemas de proteção contra surtos e SPDA',
      'Laudos de conformidade técnica NBR 5410/14039'
    ],
    testimonial:
      'A transição para nossa nova subestação de média tensão foi executada sem nenhuma interrupção em nossa linha de montagem.',
    glowColor: 'bg-cyan-500',
    image: '/obras/EstruturaTensao.jpeg',
    cta: 'Solicitar Projeto Elétrico',
    icon: (
      <svg className="w-8 h-8 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Autossuficiência Energética',
    description:
      'Estruturas híbridas and armazenamento inteligente para independência total da rede pública de energia.',
    features: [
      'Sistemas solares com baterias (off-grid / hybrid)',
      'Gerenciamento automático de pico de consumo',
      'Fontes complementares acopladas de biomassa',
      'Monitoramento dinâmico IoT 24 horas por dia'
    ],
    testimonial:
      'Garantimos 100% de estabilidade de produção com a implementação da autonomia elétrica híbrida da Electrom Engenharia.',
    glowColor: 'bg-green-600',
    image: '/obras/ObraRecantoFotovoltaica/IMG_20181205_173826509_HDR.jpg',
    cta: 'Conhecer Projetos Híbridos',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Consultoria Tarifária',
    description:
      'Diagnósticos e estratégias inteligentes para otimização extrema do consumo e migração para o Mercado Livre.',
    features: [
      'Auditoria de faturas e identificação de anomalias',
      'Migração segura para o Mercado Livre de Energia',
      'Redução de perdas elétricas reativas indesejadas',
      'Análise de viabilidade para geração distribuída'
    ],
    testimonial:
      'A consultoria nos guiou com maestria rumo ao mercado livre de energia, gerando uma redução mensal imediata de 32%.',
    glowColor: 'bg-orange-500',
    image: '/obras/Obras/Imagem10.png',
    cta: 'Agendar Análise Gratuita',
    icon: (
      <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
  {
    id: 7,
    title: 'Estações de Recarga (VE)',
    description:
      'Infraestrutura completa e de alta performance para mobilidade elétrica. Instalação e homologação de carregadores rápidos (Wallbox) inteligentes para empresas, frotas corporativas, condomínios e residências.',
    features: [
      'Dimensionamento de carga e demanda predial',
      'Instalação de carregadores rápidos e inteligentes',
      'Sistemas integrados de controle de acesso e rateio',
      'Laudos de conformidade técnica e proteção SPDA'
    ],
    testimonial:
      'Estruturamos os postos de recarga de nossa frota e do condomínio com a Electrom. Projeto impecável, seguro e totalmente homologado.',
    glowColor: 'bg-teal-500',
    image: '/obras/CarregadorEletrico/CarregadorEletrico.jpeg',
    cta: 'Orçar Posto de Recarga',
    icon: (
      <svg className="w-8 h-8 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21" />
      </svg>
    )
  }
]

// Variáveis de animação para o Stagger Reveal das Features
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const staggerItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  }
}

// Subcomponente isolado para suportar Hooks do Framer Motion por slide
const ServiceSlideDesktop = ({ service, idx, totalSections, scrollYProgress }) => {
  // Cálculo do Parallax: a imagem se move na direção oposta ao scroll
  const imageX = useTransform(
    scrollYProgress,
    [
      (idx - 1) / (totalSections - 1), // slide entrando pela direita
      idx / (totalSections - 1),       // slide centralizado
      (idx + 1) / (totalSections - 1)  // slide saindo pela esquerda
    ],
    ['25%', '0%', '-25%']
  )

  return (
    <div className="flex-shrink-0 w-[100vw] h-full bg-[#040807] flex items-center relative overflow-hidden">
      
      {/* Aurora Glow Dinâmico - Traz a cor de volta, mas de forma extremamente borrada e imersiva */}
      <div className={`absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[130px] opacity-20 ${service.glowColor} pointer-events-none`} />
      <div className={`absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10 ${service.glowColor} pointer-events-none`} />

      {/* Elegant radial lighting behind the content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#040807]/80 to-[#040807] pointer-events-none" />

      {/* Technical blueprints grid background */}
      <div className="absolute inset-0 blueprint-bg opacity-10 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full relative z-10 pt-8 lg:pt-0">
        
        {/* Left Column: Descriptions & Details */}
        <div className="space-y-6 lg:col-span-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 w-fit shadow-md flex-shrink-0 text-brand-cyan">
              {service.icon}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_#00F0FF]" />
                <span className="text-xs font-mono tracking-widest text-brand-blue uppercase">
                  SERVIÇO ESPECIALIZADO // SYS_0{service.id}
                </span>
              </div>
              <span className="text-[10px] font-mono text-gray-500 tracking-wider">
                SP_COORD: 23.5505° S, 46.6333° W
              </span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-extrabold leading-tight text-white flex items-center gap-4 flex-wrap">
            <span className="text-transparent font-mono text-4xl md:text-6xl select-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
              0{service.id}
            </span>
            <span>{service.title}</span>
          </h2>

          <p className="text-base md:text-lg font-light text-gray-300 leading-relaxed max-w-xl">
            {service.description}
          </p>

          {/* Staggered Features List */}
          <motion.ul 
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl pt-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {service.features.map((feature, featureIdx) => (
              <motion.li
                key={featureIdx}
                variants={staggerItem}
                className="flex items-start text-gray-300 text-sm gap-2"
              >
                <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_#00F0FF]"></span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          <button className="px-6 py-3.5 rounded-lg text-sm font-bold tracking-wide text-brand-petrol bg-brand-blue hover:bg-brand-blue/95 hover:shadow-lg hover:shadow-brand-blue/20 transition-all active:scale-95 inline-flex items-center gap-2">
            {service.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Right Column: Premium Image with Parallax & Customer quote */}
        <div className="space-y-6 lg:col-span-6 flex flex-col justify-center">
          
          {/* Photo Display Card with Electric glow and Parallax */}
          <div className="relative aspect-[16/10] w-full rounded-2xl border border-white/10 overflow-hidden shadow-2xl group electric-border">
            {/* Wrapper extra largo para o parallax funcionar sem mostrar as bordas brancas */}
            <motion.div 
              className="absolute top-0 bottom-0 -left-[25%] -right-[25%] w-[150%]"
              style={{ x: imageX, willChange: "transform" }}
            >
              <Image 
                src={service.image} 
                alt={service.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            {/* Technical details overlay on image */}
            <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded text-[10px] uppercase font-mono tracking-widest border-white/10">
              REGISTRO REAL DE OBRA
            </div>
            
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-gray-300 px-3 py-1.5 rounded-md text-[11px] font-mono tracking-wider">
              © ELECTROM ENGENHARIA
            </div>
          </div>

          {/* Testimonial Quote panel */}
          <motion.div 
            className="glass-card p-5 rounded-2xl border-white/5 relative overflow-hidden max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="absolute top-4 right-4 text-white/5 font-display text-7xl select-none leading-none">“</div>
            <blockquote className="text-gray-300 italic text-sm leading-relaxed relative z-10">
              "{service.testimonial}"
            </blockquote>
            <div className="mt-3 text-xs font-semibold text-brand-blue tracking-wide uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Cliente Industrial Homologado
            </div>
          </motion.div>

        </div>
      </div>

      {/* Ticker Bottom Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {Array.from({ length: totalSections }).map((_, dotIdx) => (
          <div
            key={dotIdx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              dotIdx === idx ? 'bg-brand-blue scale-150 shadow-[0_0_8px_#7AA2E4]' : 'bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function ServicesHorizontalScroll() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const totalSections = services.length
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(totalSections - 1) * 100]
  )

  return (
    <>
      {/* Desktop Horizontal Scroll Layout */}
      <section ref={containerRef} className="hidden lg:block h-[700vh] relative z-20">
        
        {/* Sticky full-viewport frame */}
        <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
          
          {/* Top Horizontal Scroll Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-white/5 z-50">
            <motion.div 
              className="h-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-gold shadow-[0_0_10px_#7AA2E4]"
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
            />
          </div>

          <motion.div
            className="flex h-full"
            style={{
              x: useTransform(x, value => `${value}vw`),
              width: `${totalSections * 100}vw`
            }}
          >
            {services.map((service, idx) => (
              <ServiceSlideDesktop 
                key={service.id} 
                service={service} 
                idx={idx} 
                totalSections={totalSections} 
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile Stacked Layout (Clean, readable, responsive vertical cards) */}
      <div className="block lg:hidden bg-brand-petrol px-6 py-16 space-y-16">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-mono tracking-widest text-brand-blue uppercase">
            Nossos Serviços
          </span>
          <h2 className="text-3xl font-display font-extrabold text-white">
            Soluções em Engenharia
          </h2>
          <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Alta performance, robustez e conformidade técnica onde a demanda exigir.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-[#040807] p-6 border border-white/5 relative overflow-hidden space-y-6 shadow-2xl"
            >
              {/* Aurora Glow Mobile */}
              <div className={`absolute top-0 right-0 w-[80%] h-[80%] rounded-full mix-blend-screen filter blur-[80px] opacity-15 ${service.glowColor} pointer-events-none`} />

              {/* Subtle top light overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-petrol/30 to-transparent pointer-events-none" />

              {/* Technical blueprints grid background inside the service panel */}
              <div className="absolute inset-0 blueprint-bg opacity-[0.03] pointer-events-none mix-blend-overlay" />

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-brand-cyan flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_#00F0FF]" />
                    <span className="text-[10px] font-mono tracking-widest text-brand-blue uppercase">
                      SERVIÇO // SYS_0{service.id}
                    </span>
                  </div>
                  <span className="text-[8px] font-mono text-gray-500 tracking-wider">
                    SP_COORD: 23.5505° S, 46.6333° W
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                <span className="text-transparent font-mono text-3xl select-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.35)' }}>
                  0{service.id}
                </span>
                <span>{service.title}</span>
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {service.description}
              </p>

              <motion.ul 
                className="space-y-3 pt-4 border-t border-white/5"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {service.features.map((feature, featureIdx) => (
                  <motion.li
                    key={featureIdx}
                    variants={staggerItem}
                    className="flex items-start text-gray-300 text-xs gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_#00F0FF]"></span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Photo Display Card */}
              <div className="relative aspect-[16/10] w-full rounded-xl border border-white/10 overflow-hidden shadow-lg">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-gray-300 px-2 py-0.5 rounded text-[8px] uppercase font-mono tracking-widest border border-white/5">
                  REGISTRO REAL
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="glass-card p-4 rounded-xl border-white/5 relative overflow-hidden">
                <blockquote className="text-gray-300 italic text-xs leading-relaxed">
                  "{service.testimonial}"
                </blockquote>
                <div className="mt-2 text-[10px] font-semibold text-brand-blue tracking-wide uppercase">
                  Cliente Homologado
                </div>
              </div>

              <button className="w-full py-3.5 rounded-lg text-xs font-bold tracking-wide text-brand-petrol bg-brand-blue hover:bg-brand-blue/95 transition-all flex items-center justify-center gap-2">
                {service.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

