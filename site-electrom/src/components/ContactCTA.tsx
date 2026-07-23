'use client';

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { companyData } from '../data/companyData'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
}

const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Solar',
    message: ''
  })
  
  const [profile, setProfile] = useState<'residencial' | 'corporativo'>('corporativo')
  const solution = formData.projectType === 'Solar' ? 'solar' : 'mercado_livre'
  const [monthlyBill, setMonthlyBill] = useState(25000)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (profile === 'residencial') {
      setMonthlyBill(1200)
      setFormData(prev => ({ ...prev, projectType: 'Solar' }))
    } else {
      setMonthlyBill(25000)
      setFormData(prev => ({ ...prev, projectType: 'Solar' }))
    }
  }, [profile])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const getEconomiaAnual = () => {
    if (profile === 'residencial') {
      return solution === 'solar' 
        ? monthlyBill * 0.95 * 12 
        : monthlyBill * 0.15 * 12
    }
    if (solution === 'solar') {
      return monthlyBill * 0.95 * 12
    }
    return monthlyBill * 0.30 * 12
  }

  const getPaybackLabel = () => {
    if (solution === 'mercado_livre') return 'Imediato (0m)'
    if (profile === 'residencial') return '~4,2 Anos'
    return '~3,6 Anos'
  }

  const getRoiLabel = () => {
    if (solution === 'mercado_livre') return 'Taxa Zero*'
    if (profile === 'residencial') return '~23,8% /ano'
    return '~28,5% /ano'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const scopeLabel = profile === 'residencial' ? `Residencial (${solution === 'solar' ? 'Solar' : 'Mercado Livre'})` : `Corporativo (${solution === 'solar' ? 'Solar' : 'Mercado Livre'})`
    const simulationSummary = ` [Simulação: Perfil ${scopeLabel} | Gasto de R$ ${monthlyBill.toLocaleString('pt-BR')}/mês | Economia Est. Anual: R$ ${Math.round(getEconomiaAnual()).toLocaleString('pt-BR')}]`
    const finalMessage = formData.message ? `${formData.message}\n${simulationSummary}` : simulationSummary

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.projectType,
          message: finalMessage,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', projectType: 'Solar', message: '' })
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        alert('Ocorreu um erro ao processar sua requisição. Por favor, tente novamente.')
      }
    } catch (err) {
      console.error('Erro na requisição:', err)
      alert('Erro de conexão. Verifique sua internet e tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactOptions = [
    {
      title: 'WhatsApp Direto',
      subtitle: 'Retorno imediato',
      description: 'Conecte-se com engenheiros técnicos',
      href: `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(companyData.whatsappMessage)}`,
      icon: (
        <svg className="w-5 h-5 text-brand-cyan" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.75" />
        </svg>
      ),
      highlight: true
    },
    {
      title: 'E-mail Corporativo',
      subtitle: 'Atendimento documentado',
      description: 'Envie projetos e memoriais técnicos',
      href: `mailto:${companyData.email}`,
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      highlight: false
    },
    {
      title: 'Contato Telefônico',
      subtitle: 'Ligação direta comercial',
      description: 'Fale por voz com nossa central SP',
      href: `tel:${companyData.whatsappNumber}`,
      icon: (
        <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      highlight: false
    }
  ]

  return (
    <section id="contato" className="w-full py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7AA2E4]" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-semibold">
                Estudo de Viabilidade
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight text-white">
              Pronto para iniciar <br />
              seu projeto <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">do papel?</span>
            </h2>

            <p className="text-gray-300 font-normal text-base leading-relaxed max-w-lg">
              Preencha o formulário ao lado. Nossos engenheiros analisarão suas demandas elétricas e de consumo para formatar um estudo preliminar personalizado.
            </p>

            <div className="p-5 bg-brand-blue/5 border-l-2 border-brand-blue rounded-r-xl max-w-lg">
              <p className="text-xs text-brand-blue font-semibold tracking-wide italic leading-relaxed">
                &quot;ElectROM Engenharia: Engenharia de Energias — Sustentabilidade, Eficiência e Inovação para um Futuro Energético Consciente.&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2">
              {contactOptions.map((opt, idx) => (
                <a
                  key={idx}
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl border flex items-center justify-between transition-all group ${
                    opt.highlight 
                      ? 'bg-brand-cyan/5 border-brand-cyan/30 hover:border-brand-cyan/60' 
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      {opt.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">{opt.title}</div>
                      <div className="text-xs text-gray-400">{opt.subtitle}</div>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Diagnostic Form */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-xl relative">
            <h3 className="text-xl font-bold text-white mb-2">Simulação e Diagnóstico Energético</h3>
            <p className="text-xs text-gray-400 mb-6">Ajuste os parâmetros abaixo para calcular sua estimativa de retorno e nos envie seus dados.</p>

            {/* Profile Selection */}
            <div className="flex gap-3 mb-6">
              <button
                type="button"
                onClick={() => setProfile('corporativo')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase border transition-all ${
                  profile === 'corporativo'
                    ? 'bg-brand-blue text-brand-petrol border-brand-blue'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                Industrial / Corporativo
              </button>
              <button
                type="button"
                onClick={() => setProfile('residencial')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase border transition-all ${
                  profile === 'residencial'
                    ? 'bg-brand-blue text-brand-petrol border-brand-blue'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                Residencial / Comercial Leve
              </button>
            </div>

            {/* Range Slider for Monthly Bill */}
            <div className="space-y-2 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 font-mono">Gasto Médio Mensal com Energia:</span>
                <span className="text-brand-cyan font-bold font-mono text-sm">R$ {monthlyBill.toLocaleString('pt-BR')} /mês</span>
              </div>
              <input
                type="range"
                min={profile === 'residencial' ? 300 : 5000}
                max={profile === 'residencial' ? 10000 : 200000}
                step={profile === 'residencial' ? 100 : 2500}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
            </div>

            {/* Simulation Metrics Display */}
            <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20">
              <div className="text-center">
                <div className="text-[10px] text-gray-400 uppercase font-mono">Economia Est. Anual</div>
                <div className="text-sm md:text-base font-bold text-brand-cyan font-mono mt-0.5">
                  R$ {Math.round(getEconomiaAnual()).toLocaleString('pt-BR')}
                </div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-[10px] text-gray-400 uppercase font-mono">Payback Estimado</div>
                <div className="text-sm md:text-base font-bold text-white font-mono mt-0.5">{getPaybackLabel()}</div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-gray-400 uppercase font-mono">ROI Estimado</div>
                <div className="text-sm md:text-base font-bold text-brand-gold font-mono mt-0.5">{getRoiLabel()}</div>
              </div>
            </div>

            {/* Form Inputs */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-mono font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Eng. Carlos Silva"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] font-mono font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-[10px] font-mono font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    E-mail Corporativo / Pessoal *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="carlos@empresa.com.br"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-[10px] font-mono font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Tipo de Solução
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0C1713] border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                  >
                    <option value="Solar">Energia Solar Fotovoltaica</option>
                    <option value="Mercado Livre">Mercado Livre de Energia</option>
                    <option value="Subestacao">Média & Baixa Tensão / Subestações</option>
                    <option value="Eficiencia">Eficiência Energética Industrial</option>
                    <option value="Obras">Gerenciamento de Obras</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-mono font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Detalhes Adicionais (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-nos brevemente sobre sua operação ou necessidade de carga..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-lg bg-brand-blue text-brand-petrol font-semibold text-sm tracking-wide hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Enviando Dados...</span>
                ) : (
                  <>
                    <span>Enviar Dados para Diagnóstico</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs text-center font-medium"
                  >
                    ✓ Recebemos sua mensagem! Nossa equipe de engenheiros entrará em contato em breve.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
