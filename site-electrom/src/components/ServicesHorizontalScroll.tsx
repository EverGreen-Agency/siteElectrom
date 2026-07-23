'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'

export interface FeatureItem {
  text: string
  tooltip?: string
}

export interface ServiceItem {
  id: number
  title: string
  description: string
  features: (string | FeatureItem)[]
  testimonial: string
  glowColor: string
  image: string
  imagePosition?: string
  imageLabel?: string
  cta: string
  icon: React.ReactNode
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Energias Renováveis',
    description: 'Sistemas completos de energia limpa e sustentável para autonomia energética e redução de custos e impacto ambiental.',
    features: [
      { text: 'Sistemas Fotovoltaicos', tooltip: 'Projetos dimensionados para máxima geração e integração com a estrutura predial ou em solo.' },
      { text: 'Estações de Recarga (VE)', tooltip: 'Infraestrutura corporativa e comercial para carregamento de veículos elétricos de alta performance.' },
      'Eólica',
      'Biomassa',
      'Aquecimento Solar'
    ],
    testimonial: 'A ElectROM implantou nossa usina solar com agilidade e acabamento impecável. Tivemos retorno do investimento em tempo recorde.',
    glowColor: 'bg-yellow-500',
    image: '/obras/Paineis.jpeg',
    cta: 'Simular Economia Solar',
    icon: (
      <svg className="w-7 h-7 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Engenharia de Energias',
    description: 'Soluções especializadas em conservação e eficiência energética para otimizar o consumo e reduzir impactos ambientais.',
    features: [
      { text: 'Conservação energética', tooltip: 'Diagnóstico e otimização para reduzir o desperdício elétrico sem afetar a produção.' },
      { text: 'Eficiência energética', tooltip: 'Implementação de tecnologias avançadas para maximizar o rendimento com o menor consumo possível.' },
      { text: 'Controle de emissões', tooltip: 'Estratégias de monitoramento e redução da pegada de carbono, alinhadas às diretrizes ESG.' },
      'Auditorias energéticas industriais',
      'Análise termográfica preventiva',
      'Projetos de conservação térmica'
    ],
    testimonial: 'Os estudos de eficiência energética e termografia nas plantas reduziram drasticamente nossas perdas térmicas e elétricas.',
    glowColor: 'bg-emerald-500',
    image: '/obras/Obras/Imagem6.png',
    imageLabel: 'Subestação de Eficiência Energética da Duratex - Botucatu',
    cta: 'Solicitar Estudo de Eficiência',
    icon: (
      <svg className="w-7 h-7 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Consultoria de Energia',
    description: 'Diagnósticos energéticos e estratégias personalizadas para otimização de consumo e redução de custos.',
    features: [
      'Auditoria de faturas e identificação de anomalias',
      { text: 'Migração para o Mercado Livre de Energia', tooltip: 'Transição estratégica da concessionária padrão para compra de energia no mercado livre (ACL) com tarifas reduzidas.' },
      { text: 'Geração Distribuída (GD)', tooltip: 'Modelagem financeira para abatimento de contas em múltiplas unidades consumidores.' },
      { text: 'Gestão de Créditos de Carbono', tooltip: 'Monetização e certificação de compensação de carbono gerado pelas suas matrizes limpas.' },
      'Redução de perdas reativas indesejadas'
    ],
    testimonial: 'A consultoria nos guiou com maestria rumo ao mercado livre de energia, gerando uma redução mensal imediata de 32%.',
    glowColor: 'bg-orange-500',
    image: '/obras/Obras/Imagem10.png',
    cta: 'Agendar Análise Gratuita',
    icon: (
      <svg className="w-7 h-7 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Média e Baixa Tensão',
    description: 'Sistemas elétricos complexos e subestações industriais. Garantia de confiabilidade energética e proteção de ativos.',
    features: [
      { text: 'Subestações (Cabine Primária)', tooltip: 'Entrada de energia em alta/média tensão que reduz o custo por kWh pago à concessionária.' },
      'Painéis elétricos inteligentes e de comando central',
      { text: 'Sistemas SPDA & Proteção de Surtos', tooltip: 'Proteção contra descargas atmosféricas e transientes para blindar equipamentos sensíveis.' },
      { text: 'Laudos de conformidade NBR 5410/14039', tooltip: 'Documentação jurídica e técnica para conformidade com normas regulamentadoras e seguradoras.' }
    ],
    testimonial: 'A transição para nossa nova subestação de média tensão foi executada sem nenhuma interrupção em nossa linha de montagem.',
    glowColor: 'bg-cyan-500',
    image: '/obras/QuadroDistribuicao.png',
    cta: 'Solicitar Projeto Elétrico',
    icon: (
      <svg className="w-7 h-7 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Gerenciamento de Obras',
    description: 'Gestão técnica ponta a ponta de instalações elétricas, civis e utilidades industriais. Garantimos rigor operacional e conformidade.',
    features: [
      'Planejamento e coordenação de execução de utilidades',
      'Fiscalização de montagens civis, elétricas e estruturas',
      'Engenheiros residentes especializados no local',
      { text: 'Documentação As-Built e termos de entrega', tooltip: 'Mapeamento fiel de toda a infraestrutura executada para fácil manutenção futura.' },
      'Gestão de contrato, equipe e materiais',
      'Segurança patrimonial e pessoal'
    ],
    testimonial: 'O rigor metodológico e a fiscalização da ElectROM superaram nossas expectativas. Os projetos rodaram sob total controle.',
    glowColor: 'bg-blue-500',
    image: '/obras/Estrutura.jpeg',
    cta: 'Consultar Nossos Projetos',
    icon: (
      <svg className="w-7 h-7 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  }
]

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
}

const staggerItem = {
  hidden: { opacity: 0, x: -15 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.4, ease: 'easeOut' } 
  }
}

interface SlideProps {
  service: ServiceItem
  idx: number
  totalSections: number
  scrollYProgress: MotionValue<number>
}

const ServiceSlideDesktop: React.FC<SlideProps> = ({ service, idx, totalSections, scrollYProgress }) => {
  const imageX = useTransform(
    scrollYProgress,
    [
      (idx - 1) / (totalSections - 1),
      idx / (totalSections - 1),
      (idx + 1) / (totalSections - 1)
    ],
    ['20%', '0%', '-20%']
  )

  return (
    <div className="flex-shrink-0 w-[100vw] h-full bg-[#040807] flex items-center relative overflow-hidden">
      <div className={`absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[140px] opacity-15 ${service.glowColor} pointer-events-none`} />
      <div className={`absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10 ${service.glowColor} pointer-events-none`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#040807]/80 to-[#040807] pointer-events-none" />
      <div className="absolute inset-0 blueprint-bg opacity-10 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full relative z-10 pt-8 lg:pt-0">
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit shadow-md flex-shrink-0 text-brand-cyan">
              {service.icon}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_#00F0FF]" />
                <span className="text-xs font-mono tracking-widest text-brand-blue uppercase font-semibold">
                  SERVIÇO ESPECIALIZADO // 0{service.id}
                </span>
              </div>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-display font-bold leading-tight text-white flex items-center gap-4 flex-wrap">
            <span className="text-transparent font-mono text-3xl md:text-5xl select-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
              0{service.id}
            </span>
            <span>{service.title}</span>
          </h3>

          <p className="text-base font-normal text-gray-300 leading-relaxed max-w-xl">
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
            {service.features.map((feature, featureIdx) => {
              const isObj = typeof feature === 'object' && feature !== null
              const text = isObj ? feature.text : feature
              const tooltip = isObj ? feature.tooltip : null

              return (
                <motion.li
                  key={featureIdx}
                  variants={staggerItem}
                  className="flex items-start text-gray-300 text-sm gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_#00F0FF]"></span>
                  {tooltip ? (
                    <div className="relative group flex items-center gap-1.5 cursor-help">
                      <span className="border-b border-dashed border-gray-400 hover:text-white transition-colors">
                        {text}
                      </span>
                      <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-cyan transition-colors mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {/* Tooltip Popup */}
                      <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-gray-900 border border-brand-cyan/30 rounded-lg shadow-xl text-xs text-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none transform translate-y-2 group-hover:translate-y-0 leading-normal">
                        {tooltip}
                        <div className="absolute top-full left-4 w-2 h-2 bg-gray-900 border-b border-r border-brand-cyan/30 transform rotate-45 -translate-y-1"></div>
                      </div>
                    </div>
                  ) : (
                    <span>{text}</span>
                  )}
                </motion.li>
              )
            })}
          </motion.ul>

          <button className="px-6 py-3 rounded-lg text-sm font-semibold tracking-wide text-brand-petrol bg-brand-blue hover:bg-brand-blue/95 hover:shadow-lg hover:shadow-brand-blue/20 transition-all active:scale-95 inline-flex items-center gap-2">
            {service.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Right Column: Image with Parallax & Testimonial */}
        <div className="space-y-6 lg:col-span-6 flex flex-col justify-center">
          <div className="relative aspect-[16/10] w-full rounded-2xl border border-white/10 overflow-hidden shadow-2xl group electric-border">
            <motion.div 
              className="absolute top-0 bottom-0 -left-[20%] -right-[20%] w-[140%]"
              style={{ x: imageX, willChange: "transform" }}
            >
              <Image 
                src={service.image} 
                alt={service.title}
                fill
                className={`object-cover group-hover:scale-105 transition-transform duration-700 ${service.imagePosition || 'object-center'}`}
              />
            </motion.div>
            
            <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded text-[10px] uppercase font-mono tracking-widest border-white/10">
              {service.imageLabel || 'REGISTRO REAL DE PROJETO'}
            </div>
          </div>

          {/* Testimonial Quote */}
          {service.testimonial && (
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative overflow-hidden">
              <div className="flex items-start gap-3">
                <span className="text-2xl text-brand-cyan/40 font-serif leading-none">“</span>
                <p className="text-xs md:text-sm text-gray-300 font-normal italic leading-relaxed">
                  {service.testimonial}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ServicesHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)

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
  const xTranslate = useTransform(x, value => `${value}vw`)

  return (
    <section ref={containerRef} className="h-auto lg:h-[500vh] relative bg-[#040807]" id="servicos">
      {/* Desktop Version */}
      <div className="hidden lg:block sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full"
          style={{
            x: xTranslate,
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

      {/* Mobile Version */}
      <div className="lg:hidden py-16 px-4 space-y-16">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase font-semibold">
            Nossos Serviços Especializados
          </span>
          <h2 className="text-3xl font-display font-bold text-white mt-2">
            Soluções Integradas de Energia
          </h2>
        </div>

        {services.map((service) => (
          <div key={service.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6 relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-brand-cyan">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
            </div>

            <p className="text-sm text-gray-300 font-normal leading-relaxed">{service.description}</p>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10">
              <Image src={service.image} alt={service.title} fill className="object-cover" />
            </div>

            <ul className="space-y-2.5">
              {service.features.map((feature, featureIdx) => {
                const isObj = typeof feature === 'object' && feature !== null
                const text = isObj ? feature.text : feature
                return (
                  <li key={featureIdx} className="flex items-start text-xs text-gray-300 gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1 flex-shrink-0"></span>
                    <span>{text}</span>
                  </li>
                )
              })}
            </ul>

            <button className="w-full py-3 rounded-lg text-xs font-semibold tracking-wide text-brand-petrol bg-brand-blue">
              {service.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
