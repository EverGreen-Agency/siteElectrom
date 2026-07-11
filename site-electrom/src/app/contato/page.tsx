'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaUserTie, FaClock, FaShieldAlt } from 'react-icons/fa';
import { companyData } from '../../data/companyData';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
      }
    } catch (err) {
      console.error('Erro ao enviar contato:', err);
      alert('Erro de conexão. Verifique sua rede e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField(null);

  const whatsappLink = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(companyData.whatsappMessage)}`;

  return (
    <div className="min-h-screen w-full bg-brand-dark text-white relative overflow-hidden pb-20">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />

      {/* Decorative Aurora glow */}
      <div className="absolute top-[15%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10 bg-brand-blue pointer-events-none" />

      <section className="max-w-6xl mx-auto px-6 pt-20 relative z-10 space-y-12">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7AA2E4]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">
              Central de Atendimento
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-black leading-tight text-white">
            Fale com Especialistas em Engenharia
          </h1>
          <p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Mais de {companyData.experienceYears} anos de know-how e projetos entregues. Receba uma avaliação técnica gratuita e otimize seus custos de energia.
          </p>
        </header>

        {/* Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl flex items-center gap-4 px-6 py-5 border-white/5">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-blue flex-shrink-0">
              <FaClock className="text-xl" />
            </div>
            <div>
              <span className="block font-semibold text-white text-sm">Resposta em até 24h úteis</span>
              <span className="block text-gray-400 text-xs mt-0.5">Retorno rápido e documentado</span>
            </div>
          </div>
          <div className="glass-card rounded-2xl flex items-center gap-4 px-6 py-5 border-white/5">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-cyan flex-shrink-0">
              <FaUserTie className="text-xl" />
            </div>
            <div>
              <span className="block font-semibold text-white text-sm">Diretoria de Engenharia</span>
              <span className="block text-gray-400 text-xs mt-0.5">Atendimento liderado por técnicos</span>
            </div>
          </div>
          <div className="glass-card rounded-2xl flex items-center gap-4 px-6 py-5 border-white/5">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#10B981] flex-shrink-0">
              <FaShieldAlt className="text-xl" />
            </div>
            <div>
              <span className="block font-semibold text-white text-sm">Garantia Regulatória ART</span>
              <span className="block text-gray-400 text-xs mt-0.5">Segurança jurídica e técnica</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contatos */}
          <div className="lg:col-span-5 glass-card rounded-2xl border-white/5 p-8 flex flex-col justify-between h-full space-y-8">
            <div className="space-y-6">
              <h3 className="text-lg font-display font-bold text-white border-b border-white/5 pb-4">Canais Diretos</h3>
              
              <a href={`tel:${companyData.whatsappNumber}`} className="flex items-center gap-4 group transition">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-blue group-hover:scale-105 transition-all">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-gray-400 uppercase">Telefone Geral SP</span>
                  <span className="block text-white font-medium group-hover:text-brand-blue transition-colors text-sm mt-0.5">{companyData.phone}</span>
                </div>
              </a>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group transition">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#25D366] group-hover:scale-105 transition-all">
                  <FaWhatsapp className="text-lg" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-gray-400 uppercase">WhatsApp Comercial</span>
                  <span className="block text-white font-medium group-hover:text-[#25D366] transition-colors text-sm mt-0.5">{companyData.phone}</span>
                </div>
              </a>

              <a href={`mailto:${companyData.email}`} className="flex items-center gap-4 group transition">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-cyan group-hover:scale-105 transition-all">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-gray-400 uppercase">E-mail Institucional</span>
                  <span className="block text-white font-medium group-hover:text-brand-cyan transition-colors text-sm mt-0.5">{companyData.email}</span>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#10B981]">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-gray-400 uppercase">Sede Corporativa</span>
                  <span className="block text-white text-xs leading-normal mt-0.5">
                    {companyData.address.street}<br />{companyData.address.city} - {companyData.address.state}, {companyData.address.zipCode}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-2 text-xs text-gray-400">
              <span className="block font-semibold text-white">Horário de Atendimento Comercial</span>
              <span className="block font-light">Segunda a Sexta: 08h às 18h</span>
              <span className="block font-light">Sábados: 09h às 13h</span>
              <span className="block text-brand-blue font-mono text-[10px] mt-2 uppercase">Canal de Atendimento Humano e Direto</span>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-7 glass-card rounded-2xl border-white/5 p-8 relative overflow-hidden">
            <div className="absolute inset-0 rounded-2xl electric-border opacity-30 pointer-events-none" />
            <h2 className="text-lg font-display font-bold text-white mb-6 border-b border-white/5 pb-4">
              Solicite um Diagnóstico Gratuito
              {focusedField && (
                <span className="text-brand-cyan font-mono text-xs ml-3 animate-pulse">
                  {"// "}{focusedField.toUpperCase()}
                </span>
              )}
            </h2>
            
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl text-center space-y-4 my-4"
                >
                  <div className="w-10 h-10 bg-[#10B981]/20 border border-[#10B981]/40 rounded-full flex items-center justify-center mx-auto text-[#10B981]">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <h4 className="text-base font-bold text-white">Mensagem Enviada!</h4>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-xs mx-auto">
                    Seus dados foram enviados. Um engenheiro de soluções entrará em contato comercial em até 24 horas úteis.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1.5">Nome Completo *</label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        onFocus={() => handleFocus('nome')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/60 transition-all outline-none placeholder-gray-600"
                        placeholder="Nome Sobrenome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1.5">E-mail *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/60 transition-all outline-none placeholder-gray-600"
                        placeholder="seuemail@corporativo.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telefone" className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1.5">Telefone / WhatsApp *</label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        required
                        value={formData.telefone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('telefone')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/60 transition-all outline-none placeholder-gray-600"
                        placeholder="(DDD) 99999-9999"
                      />
                    </div>
                    <div>
                      <label htmlFor="assunto" className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1.5">Assunto *</label>
                      <select
                        id="assunto"
                        name="assunto"
                        required
                        value={formData.assunto}
                        onChange={handleChange}
                        onFocus={() => handleFocus('assunto')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/60 transition-all outline-none cursor-pointer"
                      >
                        <option value="" className="bg-brand-petrol">Selecione o escopo</option>
                        <option value="Solar" className="bg-brand-petrol">Energia Solar Fotovoltaica</option>
                        <option value="Eletrica" className="bg-brand-petrol">Projetos de Instalações &amp; Subestações</option>
                        <option value="Eficiencia" className="bg-brand-petrol">Eficiência Energética</option>
                        <option value="Consultoria" className="bg-brand-petrol">Consultoria Tarifária &amp; Mercado Livre</option>
                        <option value="Outro" className="bg-brand-petrol">Outro assunto</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1.5">Descrição Técnica *</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={4}
                      value={formData.mensagem}
                      onChange={handleChange}
                      onFocus={() => handleFocus('mensagem')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/60 transition-all outline-none resize-none placeholder-gray-600"
                      placeholder="Descreva brevemente as necessidades industriais ou comerciais do seu negócio (ex: demanda contratada instável, retrofit elétrico, faturas elevadas)..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-blue text-brand-petrol font-bold py-3.5 px-4 rounded-lg shadow-lg hover:shadow-brand-blue/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-xs uppercase tracking-wider mt-2 border border-brand-blue cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isSubmitting ? 'Transmitindo Requisição...' : 'Transmitir Requisição de Diagnóstico'}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;