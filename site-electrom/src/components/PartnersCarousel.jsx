'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import usePartners from '../hooks/usePartners'

const PartnerCard = ({ partner, onPartnerClick }) => {
  const handleClick = () => {
    switch (partner.linkType) {
      case 'external':
        window.open(partner.link, '_blank', 'noopener,noreferrer')
        break
      case 'internal':
        window.location.href = partner.link
        break
      case 'modal':
        onPartnerClick(partner)
        break
      case 'none':
      default:
        break
    }
  }

  const isClickable = partner.linkType !== 'none'

  return (
    <motion.div
      className={`flex-shrink-0 w-32 md:w-40 h-20 md:h-24 mx-4 md:mx-8 flex items-center justify-center p-2 group transition-all duration-300 ${isClickable
          ? 'cursor-pointer'
          : 'cursor-default'
        }`}
      whileHover={isClickable ? { y: -2, scale: 1.05 } : {}}
      onClick={isClickable ? handleClick : undefined}
    >
      <div className="relative w-full h-full">
        <Image
          src={partner.logo}
          alt={`Logo ${partner.name}`}
          fill
          className="object-contain opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
          sizes="(max-width: 768px) 128px, 160px"
        />
      </div>
    </motion.div>
  )
}

const PartnerModal = ({ partner, isOpen, onClose }) => {
  if (!isOpen || !partner) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="glass-card rounded-2xl p-8 max-w-md w-full border border-white/10 relative"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center mb-6">
            <div className="relative w-20 h-10 bg-white/5 border border-white/10 p-2 rounded-lg mr-4">
              <Image
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-display font-bold text-white">
              {partner.name}
            </h3>
          </div>
          <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
            {partner.description}
          </p>
          <div className="flex gap-3">
            {partner.link && partner.linkType === 'external' && (
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg text-xs font-bold font-mono tracking-wider uppercase text-brand-petrol bg-brand-blue hover:bg-brand-blue/90 transition-all inline-block"
              >
                Visitar Site
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg text-xs font-bold font-mono tracking-wider uppercase bg-white/5 hover:bg-white/10 border border-white/10 text-white cursor-pointer transition-colors"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function PartnersCarousel() {
  const [selectedPartner, setSelectedPartner] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { partners, loading } = usePartners({
    useCMS: process.env.NEXT_PUBLIC_ENABLE_CMS === 'true',
    sortByPriority: true
  })

  // Separação de parceiros por categoria
  // Unifica e duplica dinamicamente para garantir rolagem infinita contínua
  const allPartnersDouble = partners.length > 0 ? Array(6).fill(partners).flat() : []

  const handlePartnerClick = partner => {
    setSelectedPartner(partner)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPartner(null)
  }

  return (
    <section
      id="parceiros"
      className="w-full py-24 border-y border-white/5 overflow-hidden relative"
      style={{
        backgroundImage: 'url("/partners/EmpresasParceiras.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-[#020504]/90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7AA2E4]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">
              Homologações & Tecnologia
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black leading-tight text-white mb-4">
            Empresas Parceiras & Conexões
          </h2>
          <p className="text-gray-400 font-light text-base max-w-2xl mx-auto">
            Garantia de conformidade técnica e homologações nas principais distribuidoras brasileiras, somada a equipamentos de liderança global.
          </p>
        </motion.div>
      </div>

      {/* --- ESTEIRA ÚNICA --- */}
      <div className="mb-12 relative z-10">
        <div
          className="w-full relative h-24 md:h-28 overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
          }}
        >
          {loading && partners.length === 0 ? (
            <div className="flex justify-center items-center h-full space-x-4">
              <div className="w-32 h-20 bg-white/5 border border-white/10 rounded-xl animate-pulse" />
              <div className="w-32 h-20 bg-white/5 border border-white/10 rounded-xl animate-pulse" />
              <div className="w-32 h-20 bg-white/5 border border-white/10 rounded-xl animate-pulse" />
              <div className="w-32 h-20 bg-white/5 border border-white/10 rounded-xl animate-pulse" />
            </div>
          ) : (
            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
            >
              {allPartnersDouble.map((partner, index) => (
                <PartnerCard
                  key={`partner-${partner.id}-${index}`}
                  partner={partner}
                  onPartnerClick={handlePartnerClick}
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Ajuda / Guia */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mt-12">
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            Clique nos logotipos para detalhes técnicos das homologações e soluções
          </p>
        </div>
      </div>

      {/* Modal de detalhes */}
      <PartnerModal
        partner={selectedPartner}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

