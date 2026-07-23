'use client';

import { motion } from 'framer-motion';
import { FaLeaf, FaChartLine, FaIndustry, FaSolarPanel, FaUsers, FaShieldAlt, FaCoins, FaCertificate, FaChartPie, FaClipboardCheck, FaFileAlt, FaWhatsapp, FaTree, FaCloudDownloadAlt, FaQuoteLeft } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { companyData } from '../../data/companyData';

export default function SustentabilidadePage() {
  const odsItems = [
    {
      title: "ODS 7 – Energia Limpa e Acessível",
      description: "Implantação de sistemas de minigeração solar e eficiência corporativa em larga escala no mercado nacional.",
      icon: <FaSolarPanel className="text-3xl text-brand-blue" />
    },
    {
      title: "ODS 9 – Indústria, Inovação e Infraestrutura",
      description: "Projetos elétricos com laudo técnico e integração IoT de telemetria, promovendo infraestrutura industrial resiliente.",
      icon: <FaIndustry className="text-3xl text-brand-cyan" />
    },
    {
      title: "ODS 12 – Consumo e Produção Responsáveis",
      description: "Auditoria termoativa de perdas e dimensionamento correto de cargas para mitigar desperdício energético B2B.",
      icon: <FaChartLine className="text-3xl text-brand-blue" />
    },
    {
      title: "ODS 13 – Ação contra a Mudança Global do Clima",
      description: "Neutralização de toneladas de carbono através de matrizes limpas e transição fotovoltaica acelerada.",
      icon: <FaLeaf className="text-3xl text-brand-cyan" />
    }
  ];

  const esgItems = [
    {
      title: "E (Ambiental)",
      description: "Usinas solares integradas, auditoria tarifária de reativos, retrofit elétrico e neutralização de gases com suporte técnico.",
      icon: <FaLeaf className="text-4xl text-[#10B981]" />
    },
    {
      title: "S (Social)",
      description: "Corpo técnico próprio com qualificações constantes, segurança do trabalho NR-10/NR-35 rigorosa e impacto em comunidades locais.",
      icon: <FaUsers className="text-4xl text-brand-blue" />
    },
    {
      title: "G (Governança)",
      description: "Código de conduta profissional rigoroso, emissão obrigatória de ART por engenheiros residentes e conformidade do CREA.",
      icon: <FaShieldAlt className="text-4xl text-brand-cyan" />
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-white relative overflow-hidden pb-20">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />

      {/* Decorative Aurora glow */}
      <div className="absolute top-[12%] right-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10 bg-brand-cyan pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg"
            alt="Painéis Solares - Usina Cipó Guaçu"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020504]/90 via-brand-dark/95 to-brand-dark" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7AA2E4]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">
              Descarbonização & ESG
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black leading-tight text-white max-w-3xl mx-auto">
            Energia com Propósito: Impacto Mensurável e Real
          </h1>
          <p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            A ElectROM combina alta engenharia, inovação de matrizes limpas e compromisso ambiental real para desenhar soluções sustentáveis economicamente viáveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="#impacto" className="px-8 py-3.5 rounded-lg bg-brand-blue text-brand-petrol font-bold shadow-lg hover:shadow-brand-blue/20 transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-wider">
              Conheça nosso impacto
            </Link>
            <Link href="/contato" className="px-8 py-3.5 rounded-lg border border-white/10 hover:border-brand-blue/30 text-white font-bold glass-card hover:bg-white/5 transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-wider">
              Solicitar Diagnóstico ESG
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Impacto Ambiental em Números */}
      <section id="impacto" className="py-20 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase font-bold">Métricas Consolidadas</span>
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mt-1">Impacto Ecológico Auditado</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaSolarPanel className="text-4xl text-brand-blue" />, 
                value: `${companyData.metrics.renewableEnergy.prefix}${companyData.metrics.renewableEnergy.value}${companyData.metrics.renewableEnergy.suffix}`, 
                label: companyData.metrics.renewableEnergy.label 
              },
              { 
                icon: <FaCloudDownloadAlt className="text-4xl text-brand-cyan" />, 
                value: `${companyData.metrics.co2Avoided.value}${companyData.metrics.co2Avoided.suffix}`, 
                label: companyData.metrics.co2Avoided.label 
              },
              { 
                icon: <FaTree className="text-4xl text-[#10B981]" />, 
                value: `${companyData.metrics.treesSaved.value}${companyData.metrics.treesSaved.suffix}`, 
                label: companyData.metrics.treesSaved.label 
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card rounded-2xl p-8 text-center border-white/5 hover:border-white/10 transition-all"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <div className="text-3xl font-display font-black mb-1 text-white">{item.value}</div>
                <div className="text-gray-400 text-xs font-light">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ODS da ONU */}
      <section className="py-20 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[10px] font-mono tracking-widest text-brand-blue uppercase font-bold">Compromisso Global</span>
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mt-1">Alinhamento ODS da ONU</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {odsItems.map((ods, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl p-6 flex items-start gap-4 border-white/5"
              >
                <div className="flex-shrink-0 p-3 bg-white/5 rounded-xl border border-white/10">{ods.icon}</div>
                <div className="space-y-1">
                  <h3 className="text-base font-display font-bold text-white">{ods.title}</h3>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">{ods.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG na Prática */}
      <section className="py-20 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase font-bold">Framework de Sustentabilidade</span>
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mt-1">ESG Aplicado na Alta Engenharia</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esgItems.map((esg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card rounded-2xl p-8 text-center border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">{esg.icon}</div>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-3">{esg.title}</h3>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">{esg.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Créditos de Carbono */}
      <section className="py-20 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-mono tracking-widest text-brand-blue uppercase font-bold">Ativos Verdes</span>
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mt-1">Créditos de Carbono & Monetização</h2>
            <p className="text-gray-400 font-light text-sm mt-2">Mapeamos, certificamos e viabilizamos a conversão de economia energética em ativos negociáveis.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Redução com Lastro Técnico",
                description: "Projetos de minigeração solar reduzem emissões com base nas metodologias oficiais de cálculo do GHG Protocol.",
                icon: <FaChartLine className="text-3xl text-brand-blue" />
              },
              {
                title: "Auditoria & Registro",
                description: "Assessoria no rastreamento e registro de créditos junto a certificadoras nacionais e internacionais voluntárias.",
                icon: <FaCertificate className="text-3xl text-brand-cyan" />
              },
              {
                title: "Monetização B2B",
                description: "Monetização de excedentes energéticos e créditos gerados para negociação em mercados ou compensação interna.",
                icon: <FaCoins className="text-3xl text-[#10B981]" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card rounded-2xl p-6 border-white/5 space-y-3"
              >
                <div className="mb-4 p-3 bg-white/5 rounded-xl border border-white/10 w-fit">{item.icon}</div>
                <h3 className="text-base font-display font-bold text-white">{item.title}</h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-8 text-center max-w-3xl mx-auto border-white/5 relative overflow-hidden">
            <FaQuoteLeft className="text-brand-blue/15 text-5xl absolute top-6 left-6 pointer-events-none" />
            <p className="text-base italic text-gray-200 font-light leading-relaxed max-w-xl mx-auto relative z-10">
              &quot;Geramos 410 créditos de carbono em 18 meses com auditoria e dimensionamento sustentável fornecidos pela ElectROM.&quot;
            </p>
            <span className="block text-brand-blue font-bold font-mono text-xs mt-3 uppercase tracking-wider">— Gestão de ESG, Agro SP</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contato" className="px-8 py-3.5 rounded-lg bg-brand-blue text-brand-petrol font-bold shadow-lg hover:shadow-brand-blue/20 transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-wider">
              Avaliar Meu Projeto
            </Link>
            <a href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(companyData.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-lg border border-white/10 hover:border-brand-blue/30 text-white font-bold glass-card hover:bg-white/5 transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-wider flex items-center justify-center gap-2">
              Falar com Especialista ESG
            </a>
          </div>
        </div>
      </section>

      {/* Sustentabilidade Incorporada */}
      <section className="py-20 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase font-bold">Engenharia Nativa</span>
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mt-1">Integração do Ciclo de Sustentabilidade</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Dimensionamento",
                description: "Mapeamento rigoroso de emissões evitadas nas faturas.",
                icon: <FaClipboardCheck className="text-3xl text-brand-blue" />
              },
              {
                title: "Estudo de Viabilidade",
                description: "Equilíbrio entre retorno financeiro e mitigação de reativos.",
                icon: <FaChartPie className="text-3xl text-brand-cyan" />
              },
              {
                title: "Laudo & Emissões",
                description: "Emissão de relatórios estruturados de impacto para uso em balanços ESG.",
                icon: <FaFileAlt className="text-3xl text-brand-blue" />
              },
              {
                title: "Certificados Verdes",
                description: "Homologação para obtenção de I-RECs ou créditos de carbono voluntários.",
                icon: <FaCertificate className="text-3xl text-brand-cyan" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card rounded-2xl p-6 text-center border-white/5 space-y-3"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3.5 bg-white/5 rounded-xl border border-white/10">{step.icon}</div>
                </div>
                <h3 className="text-sm font-display font-bold text-white">{step.title}</h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[10px] font-mono tracking-widest text-brand-blue uppercase font-bold">Validação de Mercado</span>
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mt-1">Reconhecimento Corporativo</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Além do retorno financeiro imediato da usina fotovoltaica, conseguimos lastrear os dados da ElectROM em nosso Balanço de Sustentabilidade anual de forma auditável.",
                author: "Diretoria de ESG, Grupo Metalúrgico SP"
              },
              {
                quote: "A modernização da cabine primária e o diagnóstico de reativos reduziram perdas físicas de rede e ajudaram na obtenção de certificação verde com investidores.",
                author: "Gerência de Operações, Hub Logístico B2B"
              }
            ].map((depoimento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl p-8 border-white/5 flex flex-col justify-between"
              >
                <p className="text-sm italic text-gray-300 font-light leading-relaxed">&quot;{depoimento.quote}&quot;</p>
                <p className="text-brand-blue font-bold font-mono text-xs mt-4 uppercase tracking-wider">— {depoimento.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full py-20 bg-brand-blue/5 border-t border-white/5 text-center relative z-10 mt-12">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-black text-white">
            Faça sua energia valer valor ambiental real
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Sustentabilidade industrial não é custo. É eficiência mensurável com retorno econômico direto. Fale com nossos engenheiros de descarbonização.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/contato" className="px-8 py-3.5 rounded-lg bg-brand-blue text-brand-petrol font-bold shadow-lg hover:shadow-brand-blue/20 transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-wider">
              Solicitar Diagnóstico Sustentável
            </Link>
            <a href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(companyData.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-lg border border-white/10 hover:border-brand-blue/30 text-white font-bold glass-card hover:bg-white/5 transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-wider flex items-center justify-center gap-2">
              <FaWhatsapp className="text-lg" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}