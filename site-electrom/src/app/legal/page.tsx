'use client';

import { useState } from 'react';
import { FaShieldAlt, FaFileContract } from 'react-icons/fa';

const LegalPage = () => {
  const [activeTab, setActiveTab] = useState<'termos' | 'privacidade'>('termos');

  return (
    <div className="bg-brand-petrol min-h-screen text-white relative overflow-hidden py-16 px-6">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />

      {/* Decorative Aurora glow */}
      <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[160px] opacity-10 bg-brand-blue pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7AA2E4]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">
              Conformidade &amp; Governança
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white">
            Informações Legais &amp; Privacidade
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-light max-w-xl mx-auto">
            Transparência jurídica, termos de utilização e diretrizes de proteção de dados (LGPD) da ElectROM Engenharia.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center border-b border-white/10 pb-4 gap-4">
          <button
            onClick={() => setActiveTab('termos')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'termos'
                ? 'bg-brand-blue text-brand-petrol shadow-lg shadow-brand-blue/20'
                : 'bg-white/5 text-gray-400 border border-white/5 hover:border-white/20 hover:text-white'
            }`}
          >
            <FaFileContract className="text-sm" />
            Termos de Uso
          </button>
          <button
            onClick={() => setActiveTab('privacidade')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'privacidade'
                ? 'bg-brand-blue text-brand-petrol shadow-lg shadow-brand-blue/20'
                : 'bg-white/5 text-gray-400 border border-white/5 hover:border-white/20 hover:text-white'
            }`}
          >
            <FaShieldAlt className="text-sm" />
            Política de Privacidade (LGPD)
          </button>
        </div>

        {/* Content Card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border-white/5 space-y-8 leading-relaxed text-gray-300 font-light text-sm md:text-base">
          {activeTab === 'termos' ? (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4">
                <h2 className="text-2xl font-display font-bold text-white mb-2">Termos de Uso do Portal</h2>
                <span className="text-xs font-mono text-brand-cyan">Última atualização: 2025 // Versão 1.2</span>
              </div>
              <p>
                Bem-vindo ao portal institucional da <strong className="text-white">ElectROM Engenharia</strong>. Ao navegar e utilizar este site, você concorda expressamente com os termos e condições descritos a seguir:
              </p>

              <div className="space-y-3">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <span className="text-brand-blue text-xs font-mono">01.</span> Uso Informativo e de Diagnóstico
                </h3>
                <p className="text-gray-400 text-sm">
                  O conteúdo deste site destina-se a fins informativos e à solicitação de diagnósticos de engenharia energética. A ElectROM reserva-se o direito de atualizar dados técnicos, portfólios e serviços sem aviso prévio.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <span className="text-brand-blue text-xs font-mono">02.</span> Propriedade Intelectual
                </h3>
                <p className="text-gray-400 text-sm">
                  Textos, fotografias de obras, marcas, logotipos, diagramas conceituais e a identidade visual são de titularidade exclusiva da ElectROM Engenharia e estão protegidos pela legislação de direitos autorais e propriedade industrial.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <span className="text-brand-blue text-xs font-mono">03.</span> Limitação de Responsabilidade
                </h3>
                <p className="text-gray-400 text-sm">
                  Estimativas financeiras e simulações preliminares de payback exibidas no site possuem caráter indicativo e dependem de vistoria técnica e aprovação de concessionária local para formalização contratual.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4">
                <h2 className="text-2xl font-display font-bold text-white mb-2">Política de Privacidade &amp; LGPD</h2>
                <span className="text-xs font-mono text-brand-cyan">Conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</span>
              </div>
              <p>
                A ElectROM Engenharia tem o compromisso de resguardar a privacidade e a segurança dos dados fornecidos por clientes, parceiros e visitantes corporativos.
              </p>

              <div className="space-y-3">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <span className="text-brand-cyan text-xs font-mono">01.</span> Coleta Mínima e Finalidade
                </h3>
                <p className="text-gray-400 text-sm">
                  Coletamos apenas os dados necessários para o atendimento técnico e comercial (como nome, telefone, e-mail corporativo e histórico sumário de consumo de energia) mediante o preenchimento voluntário dos formulários de contato.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <span className="text-brand-cyan text-xs font-mono">02.</span> Não Compartilhamento
                </h3>
                <p className="text-gray-400 text-sm">
                  Nenhum dado pessoal ou de fatura é comercializado ou compartilhado com terceiros para fins de marketing sem autorização expressa. O uso é restrito ao dimensionamento de soluções de engenharia pela equipe própria da ElectROM.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <span className="text-brand-cyan text-xs font-mono">03.</span> Direitos do Titular
                </h3>
                <p className="text-gray-400 text-sm">
                  O titular poderá a qualquer momento solicitar a confirmação, correção ou exclusão dos seus dados de nossos registros entrando em contato diretamente com <strong className="text-white">comercial@electrom.eng.br</strong>.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalPage; 