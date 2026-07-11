'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Real documented projects derived from public/obras directories
const casesData = [
  {
    id: 1,
    title: 'Usina Solar Cipó Guaçu (Carlos Augusto)',
    category: 'Solar',
    location: 'Cipó Guaçu, SP',
    metrics: { power: '32.16 kWp', economy: 'R$ 22.000 / ano', status: 'Ativo' },
    description: 'Engenharia completa, homologação e instalação de usina de minigeração distribuída em solo (32,16 kWp), com inversor PHB e módulos Jinko.',
    featured: false,
    coverImage: '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg',
    images: [
      '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg',
      '/obras/UsinaCipoGuacu/IMG_20190713_162528919_HDR.jpg',
      '/obras/UsinaCipoGuacu/IMG_20190713_162554101_HDR.jpg',
      '/obras/UsinaCipoGuacu/IMG_20190714_113242711_HDR.jpg'
    ]
  },
  {
    id: 2,
    title: 'Smart Fit Embu Guaçu - Usina Solar Comercial',
    category: 'Solar',
    location: 'Embu Guaçu, SP',
    metrics: { power: '145.2 kWp', economy: 'R$ 180.000 / ano', status: 'Ativo' },
    description: 'Dimensionamento, homologação e comissionamento de usina comercial fotovoltaica sobre telhado (145,2 kWp) com inversores PHB e módulos DMEGC de alta performance.',
    featured: true,
    coverImage: '/obras/Paineis.jpeg',
    images: [
      '/obras/Paineis.jpeg',
      '/obras/Obras/Imagem6.png'
    ]
  },
  {
    id: 3,
    title: 'Instalação Solar Escola Patelli',
    category: 'Solar',
    location: 'Campo Limpo Paulista, SP',
    metrics: { power: '6.5 kWp', economy: 'R$ 6.000 / ano', status: 'Ativo' },
    description: 'Instalação fotovoltaica sobre telhado para instituição de ensino, utilizando inversor PHB de 5 kW e módulos Jinko.',
    featured: false,
    coverImage: '/obras/EscolaPatelliFotovoltaica/WP_20180203_11_56_04_Pro.jpg',
    images: [
      '/obras/EscolaPatelliFotovoltaica/WP_20180203_11_56_04_Pro.jpg',
      '/obras/EscolaPatelliFotovoltaica/IMG-20180202-WA0028.jpg',
      '/obras/EscolaPatelliFotovoltaica/IMG-20180418-WA0017.jpg',
      '/obras/EscolaPatelliFotovoltaica/WP_20180203_11_57_01_Pro.jpg',
      '/obras/EscolaPatelliFotovoltaica/WP_20180203_15_00_08_Pro.jpg'
    ]
  },
  {
    id: 4,
    title: 'Residencial Recanto - Soluções Integradas',
    category: 'Solar',
    location: 'São Paulo, SP',
    metrics: { power: '17.68 kWp', economy: 'R$ 15.000 / ano', status: 'Ativo' },
    description: 'Implantação de gerador solar fotovoltaico de 17,68 kWp em laje para a residência de Rodolfo Henrique Fischer, integrada à modernização completa de quadros de distribuição geral, bombas de hidro e iluminação de jardim.',
    featured: false,
    coverImage: '/obras/ObraRecantoFotovoltaica/IMG_20181205_173826509_HDR.jpg',
    images: [
      '/obras/ObraRecantoFotovoltaica/IMG_20181205_173826509_HDR.jpg',
      '/obras/ObraRecantoFotovoltaica/Ala Oeste baixo.jpg',
      '/obras/ObraRecantoFotovoltaica/IMG_20181205_173843383_HDR.jpg',
      '/obras/ObraRecantoFotovoltaica/IMG_20190308_091007933.jpg'
    ]
  },
  {
    id: 5,
    title: 'Cabine de Pintura EMBRAER - Gestão de Obra',
    category: 'Subestações',
    location: 'São José dos Campos, SP',
    metrics: { power: '750 kVA', economy: 'Rede Dedicada', status: 'Ativo' },
    description: 'Gestão de obra elétrica especializada para a cabine de pintura de aeronaves da EMBRAER, garantindo conformidade, segurança operacional e robustez técnica.',
    featured: true,
    coverImage: '/obras/Obras/Imagem1.png',
    images: [
      '/obras/Obras/Imagem1.png',
      '/obras/Obras/Imagem11.jpg'
    ]
  },
  {
    id: 6,
    title: 'Eficiência Energética - Grupo Duratex',
    category: 'Consultoria',
    location: 'Itapetininga, SP',
    metrics: { power: 'Diagnóstico', economy: 'R$ 120.000 / ano', status: 'Concluído' },
    description: 'Estudos de conservação de energia, termografia preventiva e adequações de quadros de potência industrial nas plantas da Duratex.',
    featured: false,
    coverImage: '/obras/Obras/Imagem8.png',
    images: [
      '/obras/Obras/Imagem8.png',
      '/obras/Obras/Imagem9.png',
      '/obras/Obras/Imagem10.png'
    ]
  },
  {
    id: 7,
    title: 'Reservatórios de Grande Porte - Legado e Hidráulica',
    category: 'Hidráulica',
    location: 'Bertioga e São Paulo, SP',
    metrics: { power: '105.000 L', economy: 'Reservação Segura', status: 'Ativo' },
    description: 'Projetos civis e hidráulicos de reservatórios elevados industriais de grande porte e sistemas de saneamento para a Cinemateca de SP (40.000 L) e a Riviera de São Lourenço (65.000 L).',
    featured: false,
    coverImage: '/obras/Obras/WP_20180404_12_32_22_Pro.jpg',
    images: [
      '/obras/Obras/WP_20180404_12_32_22_Pro.jpg',
      '/obras/Obras/1996-016-04-3.jpg',
      '/obras/Obras/1996-004-03-3.jpg'
    ]
  },
  {
    id: 8,
    title: 'Eletroposto Residencial Inteligente',
    category: 'Mobilidade',
    location: 'São Paulo, SP',
    metrics: { power: '2 Carregadores EV', economy: 'Mobilidade Elétrica', status: 'Ativo' },
    description: 'Implantação completa de infraestrutura elétrica dedicada e tomadas de carregamento inteligente para veículos elétricos (EV) com dispositivos de proteção no Condomínio Recanto.',
    featured: false,
    coverImage: '/obras/CarregadorEletrico/CarregadorEletrico.jpeg',
    video: '/obras/CarregadorEletrico/Eletroposto.mp4',
    images: [
      '/obras/CarregadorEletrico/CarregadorEletrico.jpeg',
      '/obras/CarregadorEletrico/CarregadorEletrico2.jpeg',
      '/obras/CarregadorEletrico/CarregadorEletrico3.jpeg'
    ]
  }
]

export default function SlotMachineCases() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [activeCase, setActiveCase] = useState(null)
  const [activeImgIdx, setActiveImgIdx] = useState(0)

  const categories = ['Todos', 'Solar', 'Subestações', 'Mobilidade', 'Hidráulica', 'Consultoria']

  const filteredCases = selectedCategory === 'Todos'
    ? casesData
    : casesData.filter(c => c.category === selectedCategory)

  const handleOpenLightbox = (project, imgIdx = 0) => {
    setActiveCase(project)
    setActiveImgIdx(imgIdx)
  }

  const handleNextImg = (e) => {
    e.stopPropagation()
    if (!activeCase) return
    setActiveImgIdx((prev) => (prev + 1) % activeCase.images.length)
  }

  const handlePrevImg = (e) => {
    e.stopPropagation()
    if (!activeCase) return
    setActiveImgIdx((prev) => (prev - 1 + activeCase.images.length) % activeCase.images.length)
  }

  return (
    <section id="cases" className="py-24 bg-brand-dark relative overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7AA2E4]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">
              Portfólio de Obras
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black leading-tight text-white mb-4">
            Nossos Cases de Sucesso
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg">
            Garantia de conformidade, segurança operacional e economia financeira real. Conheça as fotos e as métricas reais dos nossos projetos homologados.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-blue border-brand-blue text-brand-petrol shadow-lg shadow-brand-blue/20'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:border-brand-blue/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`glass-card rounded-2xl overflow-hidden border-white/5 flex flex-col group relative ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                
                {/* Visual Cover Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                  
                  {/* Category tag */}
                  <div className="absolute top-4 left-4 glass-card border-white/10 px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-wider font-bold text-brand-blue">
                    {project.category}
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-brand-gold text-brand-petrol font-mono font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider shadow-lg">
                      Destaque Técnico
                    </div>
                  )}

                  {/* Number of Photos Indicator */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] text-gray-300 font-mono flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {project.images.length} FOTOS
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-gray-400 font-mono mb-2 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Grid metrics details */}
                  <div className="border-t border-white/5 pt-4">
                    <div className="grid grid-cols-3 gap-2 text-center bg-black/35 rounded-xl p-3 border border-white/5">
                      <div>
                        <div className="text-[10px] text-gray-400 font-mono uppercase">Potência</div>
                        <div className="text-xs font-semibold text-white mt-1">{project.metrics.power}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400 font-mono uppercase">Economia</div>
                        <div className="text-xs font-semibold text-brand-cyan mt-1">{project.metrics.economy}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400 font-mono uppercase">Status</div>
                        <div className="text-xs font-semibold text-brand-gold mt-1">{project.metrics.status}</div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleOpenLightbox(project, 0)}
                      className="mt-4 w-full py-2.5 rounded-lg border border-white/10 hover:border-brand-blue/30 text-xs font-bold font-mono tracking-wider uppercase text-gray-300 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2 hover:bg-white/5"
                    >
                      Ver Galeria Técnica
                      <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Advanced Fullscreen Lightbox Slider */}
      <AnimatePresence>
        {activeCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-between p-6 backdrop-blur-md"
            onClick={() => setActiveCase(null)}
          >
            
            {/* Header */}
            <div className="w-full max-w-5xl flex justify-between items-center relative z-10 py-2 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-brand-blue uppercase font-bold">{activeCase.category} — GALERIA TÉCNICA</span>
                <h4 className="text-xl md:text-2xl font-display font-bold text-white mt-1">{activeCase.title}</h4>
              </div>
              <button 
                onClick={() => setActiveCase(null)}
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white cursor-pointer transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Slider Main View */}
            <div className="w-full max-w-5xl flex-grow flex items-center justify-between relative my-6">
              
              {/* Left Arrow */}
              <button 
                onClick={handlePrevImg}
                className="absolute left-2 md:-left-16 z-20 p-3 rounded-full bg-white/5 border border-white/10 text-white cursor-pointer hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Central optimized picture or video */}
              <div className="relative w-full h-[55vh] md:h-[65vh] rounded-xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl flex items-center justify-center">
                {activeCase.video && activeImgIdx === 0 ? (
                  <video
                    src={activeCase.video}
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={activeCase.images[activeImgIdx]}
                    alt={`Imagem ${activeImgIdx + 1} de ${activeCase.title}`}
                    fill
                    className="object-contain"
                    priority
                  />
                )}
                
                {/* Tech specifications details at bottom-left */}
                <div className="absolute bottom-4 left-4 glass-card px-4 py-3 rounded-lg border-white/10 max-w-xs md:max-w-md hidden sm:block z-10">
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <span className="text-gray-400">Potência instalada:</span>
                    <span className="text-white font-bold">{activeCase.metrics.power}</span>
                    <span className="text-gray-400">Economia real:</span>
                    <span className="text-brand-cyan font-bold">{activeCase.metrics.economy}</span>
                    <span className="text-gray-400">Localização:</span>
                    <span className="text-white">{activeCase.location}</span>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <button 
                onClick={handleNextImg}
                className="absolute right-2 md:-right-16 z-20 p-3 rounded-full bg-white/5 border border-white/10 text-white cursor-pointer hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>

            {/* Footer with Thumbnails */}
            <div className="w-full max-w-5xl relative z-10 flex flex-col items-center gap-4">
              <div className="flex gap-2.5 overflow-x-auto py-2">
                {activeCase.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveImgIdx(idx)
                    }}
                    className={`relative w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all flex-shrink-0 ${
                      activeImgIdx === idx ? 'border-brand-blue scale-105 shadow-md shadow-brand-blue/30' : 'border-white/10 opacity-55 hover:opacity-100'
                    }`}
                  >
                    {activeCase.video && idx === 0 ? (
                      <>
                        <div className="absolute inset-0 bg-brand-petrol/60 z-10 flex items-center justify-center">
                          <svg className="w-6 h-6 text-brand-cyan" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                          </svg>
                        </div>
                        <Image
                          src={img}
                          alt="Video thumbnail"
                          fill
                          className="object-cover opacity-40"
                        />
                      </>
                    ) : (
                      <Image
                        src={img}
                        alt={`Miniatura ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
              <span className="text-xs font-mono text-gray-400">FOTO {activeImgIdx + 1} DE {activeCase.images.length}</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

