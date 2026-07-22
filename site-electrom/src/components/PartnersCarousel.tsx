'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import usePartners, { Partner } from '../hooks/usePartners'

interface PartnerCardProps {
  partner: Partner
  onPartnerClick: (partner: Partner) => void
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner, onPartnerClick }) => {
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
      className={`flex-shrink-0 w-32 md:w-40 h-20 md:h-24 mx-4 md:mx-8 flex items-center justify-center p-2 group transition-all duration-300 ${
        isClickable ? 'cursor-pointer' : 'cursor-default'
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

interface PartnerModalProps {
  partner: Partner | null
  isOpen: boolean
  onClose: () => void
}

const PartnerModal: React.FC<PartnerModalProps> = ({ partner, isOpen, onClose }) => {
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
          className="glass-card max-w-lg w-full rounded-2xl p-6 md:p-8 border-white/10 relative overflow-hidden bg-brand-dark/95 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 transition-colors rounded-full hover:bg-white/10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="relative w-16 h-16 flex-shrink-0 bg-white/5 rounded-xl p-2 border border-white/10">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{partner.name}</h3>
              <span className="text-xs font-mono text-brand-cyan tracking-wider uppercase font-semibold">
                PARCEIRO ESTRATÉGICO
              </span>
            </div>
          </div>

          <p className="text-gray-300 text-sm font-normal leading-relaxed mb-6">
            {partner.description}
          </p>

          {partner.link && partner.link !== '#' && (
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg bg-brand-blue hover:bg-brand-blue/90 text-brand-petrol font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              Visitar Website Oficial
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function PartnersCarousel() {
  const { partners, loading } = usePartners()
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handlePartnerClick = (partner: Partner) => {
    setSelectedPartner(partner)
    setIsModalOpen(true)
  }

  const duplicatedPartners = [...partners, ...partners]

  if (loading) {
    return (
      <section className="py-16 bg-brand-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block animate-pulse text-xs font-mono text-gray-500">Carregando parceiros...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7AA2E4]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-semibold">
              Ecossistema de Tecnologia
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight text-white mb-3">
            Empresas Parceiras &amp; Conexões
          </h2>
          <p className="text-gray-400 font-normal text-base max-w-2xl mx-auto">
            Garantia de conformidade técnica e homologações nas principais distribuidoras brasileiras, somada a equipamentos de qualidade global.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden flex">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 35
          }}
        >
          {duplicatedPartners.map((partner, idx) => (
            <PartnerCard
              key={`${partner.id}-${idx}`}
              partner={partner}
              onPartnerClick={handlePartnerClick}
            />
          ))}
        </motion.div>
      </div>

      <PartnerModal
        partner={selectedPartner}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
