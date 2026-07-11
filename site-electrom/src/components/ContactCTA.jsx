'use client';

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { companyData } from '../data/companyData'

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Solar',
    message: ''
  })
  
  // Estados do Simulador de Viabilidade Expandido (Residencial + Solar + Mercado Livre)
  const [profile, setProfile] = useState('corporativo') // 'residencial' | 'corporativo'
  const [solution, setSolution] = useState('solar') // 'solar' | 'mercado_livre'
  const [monthlyBill, setMonthlyBill] = useState(25000)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Ajusta o valor inicial do slider baseado no perfil selecionado
  useEffect(() => {
    if (profile === 'residencial') {
      setMonthlyBill(1200)
      setFormData(prev => ({ ...prev, projectType: 'Solar' }))
    } else {
      setMonthlyBill(25000)
      setFormData(prev => ({ ...prev, projectType: solution === 'solar' ? 'Solar' : 'Consultoria' }))
    }
  }, [profile, solution])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Append simulation metadata to the secure transmission
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
          nome: formData.name,
          email: formData.email,
          telefone: formData.phone,
          assunto: formData.projectType,
          mensagem: finalMessage,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', projectType: 'Solar', message: '' })
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        console.error('Erro ao enviar dados do lead.')
        alert('Ocorreu um erro ao processar sua requisição. Por favor, tente novamente.')
      }
    } catch (err) {
      console.error('Erro na requisição:', err)
      alert('Erro de conexão. Verifique sua internet e tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Fórmulas dinâmicas baseadas em dados do mercado energético real brasileiro
  const getEconomiaAnual = () => {
    if (profile === 'residencial') {
      return solution === 'solar' 
        ? monthlyBill * 0.95 * 12 
        : monthlyBill * 0.15 * 12 // MLE Residencial (Assinatura digital ~15% de redução real)
    }
    if (solution === 'solar') {
      return monthlyBill * 0.95 * 12
    }
    return monthlyBill * 0.30 * 12 // Mercado Livre Corporativo (~30% de redução tarifária média)
  }

  const getPaybackLabel = () => {
    if (solution === 'mercado_livre') return 'Imediato (0m)' // Sem investimentos para ambas as assinaturas
    if (profile === 'residencial') return '~4,2 Anos'
    return '~3,6 Anos'
  }

  const getRoiLabel = () => {
    if (solution === 'mercado_livre') return 'Taxa Zero*'
    if (profile === 'residencial') return '~23,8% /ano'
    return '~28,5% /ano'
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
      description: 'Envie projetos e memorais técnicos',
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
      
      {/* Visual blueprint background & Circuit patterns details */}
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none z-0" />
      
      {/* Animated SVG circuit flow representation (ambient) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M -100 200 L 500 200 L 600 300 L 1200 300" fill="none" stroke="#7AA2E4" strokeWidth="1" strokeDasharray="10, 15" />
          <path d="M 800 100 L 950 250 L 1500 250" fill="none" stroke="#00F0FF" strokeWidth="1" strokeDasharray="8, 12" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Brand Trust (col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7AA2E4]" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">
                Estudo de Viabilidade
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-black leading-tight text-white">
              Pronto para iniciar <br />
              seu projeto <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">do papel?</span>
            </h2>

            <p className="text-gray-300 font-light text-base leading-relaxed max-w-lg">
              Preencha o terminal de diagnóstico ao lado. Nossos engenheiros de soluções analisarão suas demandas elétricas e de consumo para formatar um estudo preliminar personalizado.
            </p>

            {/* Brand Manifesto Quote */}
            <div className="p-5 bg-brand-blue/5 border-l-2 border-brand-blue rounded-r-xl max-w-lg">
              <p className="text-xs text-brand-blue font-semibold tracking-wide italic leading-relaxed">
                &quot;Electrom Engenharia: Engenharia das Energias — Sustentabilidade, Eficiência e Inovação para um Futuro Energético Consciente.&quot;
              </p>
            </div>

            {/* Certifications and credentials grid */}
            <div className="border-t border-white/5 pt-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/3 rounded-xl border border-white/5">
                  <div className="text-[10px] font-mono text-gray-500 uppercase">Qualidade e Credenciais</div>
                  <div className="text-sm font-bold text-white mt-1">CREA Registrado</div>
                  <div className="text-xs text-gray-400 mt-0.5">Responsabilidade técnica sólida</div>
                </div>
                <div className="p-4 bg-white/3 rounded-xl border border-white/5">
                  <div className="text-[10px] font-mono text-gray-500 uppercase">Segurança Normativa</div>
                  <div className="text-sm font-bold text-white mt-1">NR-10 &amp; NBR 5410</div>
                  <div className="text-xs text-gray-400 mt-0.5">Cumprimento estrito de diretrizes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inline Diagnostic Form (col-span-7) */}
          <div className="lg:col-span-7">
            <motion.div 
              className="glass-card rounded-3xl p-8 border-white/5 relative overflow-hidden"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Electric border pulse effect */}
              <div className="absolute inset-0 rounded-3xl electric-border opacity-50 pointer-events-none" />

              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Terminal de Diagnóstico Energético
              </h3>

              {/* Calculadora de Viabilidade Financeira Inteligente Multi-Perfil */}
              <div className="mb-6 p-5 bg-white/3 border border-white/5 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-2xl group-hover:bg-brand-cyan/10 transition-all duration-500" />
                
                {/* Seleção do Perfil: Residencial ou Corporativo */}
                <div className="flex gap-2 mb-4 p-1 bg-black/40 rounded-xl border border-white/5">
                  <button
                    type="button"
                    onClick={() => setProfile('residencial')}
                    className={`flex-1 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
                      profile === 'residencial'
                        ? 'bg-brand-blue text-brand-petrol shadow-md'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Residencial
                  </button>
                  <button
                    type="button"
                    onClick={() => setProfile('corporativo')}
                    className={`flex-1 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
                      profile === 'corporativo'
                        ? 'bg-brand-blue text-brand-petrol shadow-md'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Corporativo
                  </button>
                </div>

                {/* Seleção da Solução: Energia Solar ou Mercado Livre */}
                <div className="flex gap-2 mb-4 p-1 bg-black/25 rounded-xl border border-white/5">
                  <button
                    type="button"
                    onClick={() => setSolution('solar')}
                    className={`flex-1 py-1.5 rounded-lg text-[9px] font-mono font-bold uppercase transition-all ${
                      solution === 'solar'
                        ? 'bg-brand-cyan text-brand-petrol shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Energia Solar Fotovoltaica
                  </button>
                  <button
                    type="button"
                    onClick={() => setSolution('mercado_livre')}
                    className={`flex-1 py-1.5 rounded-lg text-[9px] font-mono font-bold uppercase transition-all ${
                      solution === 'mercado_livre'
                        ? 'bg-brand-cyan text-brand-petrol shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {profile === 'residencial' ? 'Energia por Assinatura (MLE)' : 'Mercado Livre de Energia'}
                  </button>
                </div>

                {/* Controle do Gasto Mensal com energia */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-gray-400 font-mono">SEU GASTO MENSAL DE ENERGIA</span>
                      <span className="text-brand-cyan font-display font-black text-sm">
                        R$ {Number(monthlyBill).toLocaleString('pt-BR')}
                      </span>
                    </div>
                    
                    <input 
                      type="range" 
                      min={profile === 'residencial' ? 300 : 5000} 
                      max={profile === 'residencial' ? 5000 : 150000} 
                      step={profile === 'residencial' ? 100 : 5000}
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Number(e.target.value))}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan focus:outline-none"
                    />
                    
                    <div className="flex justify-between text-[8px] text-gray-500 font-mono">
                      <span>R$ {profile === 'residencial' ? '300' : '5.000'}</span>
                      <span>R$ {profile === 'residencial' ? '2.500' : '75.000'}</span>
                      <span>R$ {profile === 'residencial' ? '5.000+' : '150.000+'}</span>
                    </div>
                  </div>

                  {/* Resultados Dinâmicos e Reativos */}
                  <div className="grid grid-cols-3 gap-2.5 pt-3.5 border-t border-white/5 text-center">
                    <div className="p-2 bg-black/30 border border-white/5 rounded-xl flex flex-col justify-between min-h-[50px]">
                      <div className="text-[8px] font-mono text-gray-400 uppercase leading-none">ECONOMIA ANUAL</div>
                      <div className="text-xs font-bold text-[#10B981] mt-1">
                        R$ {Math.round(getEconomiaAnual()).toLocaleString('pt-BR')}
                      </div>
                    </div>
                    <div className="p-2 bg-black/30 border border-white/5 rounded-xl flex flex-col justify-between min-h-[50px]">
                      <div className="text-[8px] font-mono text-gray-400 uppercase leading-none">RETORNO (PAYBACK)</div>
                      <div className="text-xs font-bold text-brand-gold mt-1">
                        {getPaybackLabel()}
                      </div>
                    </div>
                    <div className="p-2 bg-black/30 border border-white/5 rounded-xl flex flex-col justify-between min-h-[50px]">
                      <div className="text-[8px] font-mono text-gray-400 uppercase leading-none">RETORNO (ROI)</div>
                      <div className="text-xs font-bold text-brand-cyan mt-1">
                        {getRoiLabel()}
                      </div>
                    </div>
                  </div>

                  {/* Legenda explicativa leve e transparente para MLE */}
                  {solution === 'mercado_livre' && (
                    <p className="text-[8px] font-mono text-gray-500 italic mt-2 text-center leading-relaxed">
                      * O Mercado Livre de Energia {profile === 'residencial' ? 'Residencial (Assinatura Digital)' : 'Corporativo'} entrega redução tarifária instantânea por meio de {profile === 'residencial' ? 'adesão digital simplificada (geração compartilhada)' : 'migração de contrato'}, com investimento físico em infraestrutura e payback inicial imediatos.
                    </p>
                  )}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 bg-[#10B981]/10 border border-[#10B981]/20 rounded-2xl text-center space-y-4 my-8"
                  >
                    <div className="w-12 h-12 bg-[#10B981]/20 border border-[#10B981]/40 rounded-full flex items-center justify-center mx-auto text-[#10B981]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white">Transmissão Concluída!</h4>
                    <p className="text-sm text-gray-300 font-light max-w-sm mx-auto leading-relaxed">
                      Seus dados foram criptografados e enviados com sucesso à nossa divisão técnica de soluções comerciais. Retornaremos em até 24 horas úteis.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">Nome Completo</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Digite seu nome..."
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/60 transition-all outline-none"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">E-mail Corporativo / Pessoal</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="seuemail@provedor.com"
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/60 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone input */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">Telefone / WhatsApp</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="(00) 00000-0000"
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/60 transition-all outline-none"
                        />
                      </div>

                      {/* Project Type select */}
                      <div className="space-y-1.5">
                        <label htmlFor="projectType" className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">Escopo do Projeto</label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/60 transition-all outline-none cursor-pointer"
                        >
                          <option value="Solar" className="bg-[#0C1713]">Usinas Solar Fotovoltaica</option>
                          <option value="Eletrica" className="bg-[#0C1713]">Instalações &amp; Subestações</option>
                          <option value="Consultoria" className="bg-[#0C1713]">Auditoria &amp; Gestão de Tarifas</option>
                          <option value="MercadoLivre" className="bg-[#0C1713]">{profile === 'residencial' ? 'Assinatura de Energia (MLE)' : 'Migração para Mercado Livre (ACL)'}</option>
                        </select>
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">Resumo das Necessidades (Opcional)</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={profile === 'residencial' ? (solution === 'solar' ? "Ex: Gostaria de orçar painéis para casa de praia, telhado cerâmico..." : "Ex: Tenho interesse no desconto digital de energia, sem instalação física...") : "Ex: Demanda contratada instável, retrofit elétrico, migração ACL..."}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/60 transition-all outline-none resize-none"
                      />
                    </div>

                    {/* LGPD Consent Checkbox */}
                    <div className="flex items-start gap-2.5 pt-2">
                      <input
                        type="checkbox"
                        id="lgpd"
                        required
                        className="mt-1 h-3.5 w-3.5 rounded border-white/10 bg-black/40 text-brand-blue focus:ring-brand-blue/60 focus:ring-offset-brand-dark cursor-pointer"
                      />
                      <label htmlFor="lgpd" className="text-[9px] text-gray-400 font-light leading-relaxed">
                        Autorizo a Electrom a processar meus dados sob criptografia segura para fins de formatação do estudo de viabilidade energética técnica e comercial em conformidade estrita com a <a href="/legal" className="text-brand-blue hover:underline font-normal">Política de Privacidade (LGPD)</a>.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-lg bg-brand-blue text-brand-petrol font-bold uppercase tracking-wider text-xs shadow-lg hover:shadow-brand-blue/20 transition-all flex items-center justify-center gap-2 cursor-pointer border border-brand-blue disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? 'Transmitindo...' : 'Transmitir Requisição de Diagnóstico'}</span>
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

        {/* Tactical Fast Options list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 border-t border-white/5 pt-12">
          {contactOptions.map((option, idx) => (
            <a
              key={idx}
              href={option.href}
              target={option.href.startsWith('http') ? '_blank' : '_self'}
              rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`glass-card p-5 rounded-2xl border-white/5 flex gap-4 items-center group cursor-pointer transition-all duration-300 ${
                option.highlight ? 'bg-brand-blue/5 border-brand-blue/15 hover:border-brand-blue/40' : 'hover:border-white/15'
              }`}
            >
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:scale-105 transition-transform duration-300">
                {option.icon}
              </div>
              <div>
                <h4 className="text-sm font-display font-bold text-white group-hover:text-brand-blue transition-colors">{option.title}</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">{option.description}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ContactCTA
