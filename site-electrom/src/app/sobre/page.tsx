'use client';

import { FaBolt, FaLeaf, FaLightbulb, FaHandshake, FaSearch, FaRecycle, FaQuoteLeft, FaGraduationCap, FaCertificate, FaShieldAlt } from 'react-icons/fa';
import { companyData } from '../../data/companyData';

export default function SobrePage() {
  const milestones = [
    {
      year: '1996',
      title: 'Fundação da ElectROM',
      desc: 'Nascimento da ElectROM em São Paulo, focada em gestão de obras e laudos técnicos de engenharia elétrica e mecânica.'
    },
    {
      year: '2005',
      title: 'Eficiência Energética Industrial',
      desc: 'Início dos contratos corporativos de eficiência e conservação de energia com grandes grupos industriais nacionais.'
    },
    {
      year: '2016',
      title: 'Divisão Solar Fotovoltaica',
      desc: 'Homologação e estruturação da divisão de projetos, dimensionamento e instalação de usinas solares de minigeração.'
    },
    {
      year: '2025',
      title: 'Legado e Liderança',
      desc: 'Mais de 500 obras físicas ativas entregues em todo o país e reposicionamento estratégico como "Engenharia de Energias".'
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-white relative overflow-hidden">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />

      {/* Decorative Aurora glow */}
      <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10 bg-brand-cyan pointer-events-none" />

      {/* 1. Hero / Manifesto Visual */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7AA2E4]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">
              Quem Somos & Legado
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black leading-tight drop-shadow-lg text-white">
            {companyData.experienceYears} Anos de Engenharia com Propósito
          </h1>
          <p className="text-xl text-brand-blue font-medium max-w-2xl mx-auto leading-relaxed">
            {companyData.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="/solucoes" className="px-8 py-3.5 rounded-lg bg-brand-blue text-brand-petrol font-bold shadow-lg hover:shadow-brand-blue/20 transition-all hover:scale-105 active:scale-95 text-sm">
              Conheça Nossas Soluções
            </a>
            <a href="/contato" className="px-8 py-3.5 rounded-lg border border-white/10 hover:border-brand-blue/30 text-white font-bold glass-card hover:bg-white/5 transition-all hover:scale-105 active:scale-95 text-sm">
              Fale com um Especialista
            </a>
          </div>
        </div>
      </section>

      {/* 2. Missão, Visão e Propósito */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center border-white/5 shadow-xl hover:border-white/10 transition-all">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-cyan mb-4">
            <FaLightbulb className="text-2xl" />
          </div>
          <h3 className="font-display font-bold text-lg mb-2 text-white">Missão</h3>
          <p className="text-gray-300 text-sm font-light leading-relaxed">Transformar demandas elétricas complexas em inteligência de consumo, entregando soluções sustentáveis com viabilidade financeira.</p>
        </div>
        <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center border-white/5 shadow-xl hover:border-white/10 transition-all">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-blue mb-4">
            <FaBolt className="text-2xl" />
          </div>
          <h3 className="font-display font-bold text-lg mb-2 text-white">Visão</h3>
          <p className="text-gray-300 text-sm font-light leading-relaxed">Ser a referência definitiva como &quot;Engenharia de Energias&quot;, unindo excelência em média e baixa tensão à transição solar corporativa.</p>
        </div>
        <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center border-white/5 shadow-xl hover:border-white/10 transition-all">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#10B981] mb-4">
            <FaLeaf className="text-2xl" />
          </div>
          <h3 className="font-display font-bold text-lg mb-2 text-white">Propósito</h3>
          <p className="text-gray-300 text-sm font-light leading-relaxed">Facilitar a autossuficiência e transição energética de empresas através de parcerias sólidas, seguras e transparentes.</p>
        </div>
      </section>

      {/* 3. Linha do Tempo Unificada */}
      <section className="max-w-5xl mx-auto py-16 px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl font-display font-black text-center mb-12 text-white">Nossa Jornada Histórica</h2>
        
        <div className="relative border-l-2 border-white/10 pl-6 ml-4 space-y-12">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative">
              {/* Dot indicator */}
              <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-brand-blue border-2 border-brand-dark shadow-[0_0_8px_#7AA2E4] z-10" />
              
              <div className="glass-card rounded-2xl p-6 border-white/5 space-y-2">
                <span className="text-brand-cyan font-mono font-bold text-sm">{m.year}</span>
                <h4 className="font-display font-bold text-lg text-white">{m.title}</h4>
                <p className="text-gray-300 text-xs font-light leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Valores que nos movem */}
      <section className="max-w-6xl mx-auto py-16 px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl font-display font-black text-center mb-12 text-white">Valores que nos direcionam</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center border-white/5">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-cyan mb-3">
              <FaSearch className="text-xl" />
            </div>
            <h4 className="font-display font-bold text-sm text-white mb-2">Transparência Técnica</h4>
            <p className="text-gray-400 text-xs font-light leading-relaxed">Dimensionamentos precisos e claros, pautados exclusivamente na regulação vigente e no retorno real.</p>
          </div>
          <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center border-white/5">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#10B981] mb-3">
              <FaRecycle className="text-xl" />
            </div>
            <h4 className="font-display font-bold text-sm text-white mb-2">Impacto Ecológico</h4>
            <p className="text-gray-400 text-xs font-light leading-relaxed">Foco estrito em descarbonização e mitigação de perdas térmicas ou reativas industriais.</p>
          </div>
          <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center border-white/5">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-blue mb-3">
              <FaLightbulb className="text-xl" />
            </div>
            <h4 className="font-display font-bold text-sm text-white mb-2">Inovação e IoT</h4>
            <p className="text-gray-400 text-xs font-light leading-relaxed">Uso de monitoramento IoT para controle de consumo de energia em tempo real de ativos de média tensão.</p>
          </div>
          <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center border-white/5">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-cyan mb-3">
              <FaHandshake className="text-xl" />
            </div>
            <h4 className="font-display font-bold text-sm text-white mb-2">Responsabilidade Civil</h4>
            <p className="text-gray-400 text-xs font-light leading-relaxed">Projetos com emissão rigorosa de ART e conformidade de engenharia sob regulação do CREA.</p>
          </div>
        </div>
      </section>

      {/* 5. Diretoria Técnica Real */}
      <section className="max-w-4xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-10 relative z-10 border-t border-white/5">
        <div className="flex-shrink-0 w-40 h-40 rounded-full overflow-hidden border-4 border-brand-blue shadow-lg relative bg-brand-petrol/60 flex items-center justify-center">
          <FaUserTie className="text-6xl text-brand-blue opacity-85" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-display font-black text-white">Eng. João Mendes</h3>
          <span className="block text-brand-cyan font-mono text-xs uppercase tracking-widest font-bold">Fundador e Diretor Técnico // CREA-SP 5061996120</span>
          
          <div className="relative">
            <FaQuoteLeft className="text-brand-blue/15 text-5xl absolute -top-4 -left-4 pointer-events-none" />
            <blockquote className="italic text-gray-300 font-light text-sm leading-relaxed relative z-10 pl-6 border-l-2 border-brand-blue/30">
              &quot;Desde que fundamos a ElectROM em 1996, operamos sob a premissa de que a engenharia elétrica deve ser tratada como um ativo estratégico financeiro e de descarbonização para nossos clientes. São 30 anos assinando laudos, instalando cabines primárias e usinas solares com total transparência técnica.&quot;
            </blockquote>
          </div>
          
          <div className="flex flex-wrap gap-2 text-xs pt-2">
            <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-gray-400">Especialista em Usinas Fotovoltaicas</span>
            <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-gray-400">Membro da ABSOLAR</span>
            <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-gray-400">Consultor Tarifário Corporativo</span>
          </div>
        </div>
      </section>

      {/* 6. Nossa Estrutura Corporativa (Substituição de Mock Team) */}
      <section className="max-w-6xl mx-auto py-16 px-6 relative z-10 border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-display font-black text-center mb-6 text-white">Nossa Estrutura Corporativa</h2>
        <p className="text-center text-gray-400 font-light text-sm max-w-2xl mx-auto leading-relaxed mb-12">
          Não operamos com mão de obra terceirizada não qualificada. Nosso corpo técnico é composto estritamente por profissionais homologados e integrados.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-6 border-white/5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-brand-blue">
                <FaGraduationCap className="text-lg" />
              </div>
              <h4 className="font-display font-bold text-white text-sm">Corpo de Engenharia</h4>
            </div>
            <p className="text-gray-300 text-xs font-light leading-relaxed">
              Engenheiros eletricistas residentes responsáveis diretos pelos dimensionamentos, estudos de curto-circuito, seletividade e conexões de usinas na rede elétrica das distribuidoras.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6 border-white/5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-brand-cyan">
                <FaCertificate className="text-lg" />
              </div>
              <h4 className="font-display font-bold text-white text-sm">Técnicos Homologados</h4>
            </div>
            <p className="text-gray-300 text-xs font-light leading-relaxed">
              Equipe própria de eletrotécnicos homologados nas certificações NBR 5410, NBR 14039 e com exames e qualificações de campo em dia.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6 border-white/5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-[#10B981]">
                <FaShieldAlt className="text-lg" />
              </div>
              <h4 className="font-display font-bold text-white text-sm">Segurança do Trabalho</h4>
            </div>
            <p className="text-gray-300 text-xs font-light leading-relaxed">
              Profissionais qualificados sob conformidade irrestrita com as normas regulamentadoras de segurança do trabalho do setor elétrico: NR-10 e NR-35.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Métricas de Autoridade Técnica */}
      <section className="max-w-6xl mx-auto py-16 px-6 relative z-10 border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-display font-black text-center mb-12 text-white">Nosso Diferencial Técnico</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          <div className="glass-card rounded-2xl p-6 border-white/5">
            <span className="block text-3xl font-display font-black text-brand-blue">{companyData.metrics.yearsOfExperience.value}</span>
            <span className="block text-gray-400 text-xs font-light mt-1">Anos de experiência técnica</span>
          </div>
          <div className="glass-card rounded-2xl p-6 border-white/5">
            <span className="block text-3xl font-display font-black text-brand-cyan">{companyData.totalProjects}+</span>
            <span className="block text-gray-400 text-xs font-light mt-1">Projetos elétricos entregues</span>
          </div>
          <div className="glass-card rounded-2xl p-6 border-white/5">
            <span className="block text-3xl font-display font-black text-brand-blue">{companyData.totalProjects}+</span>
            <span className="block text-gray-400 text-xs font-light mt-1">Obras físicas homologadas</span>
          </div>
          <div className="glass-card rounded-2xl p-6 border-white/5">
            <span className="block text-3xl font-display font-black text-brand-cyan">{companyData.metrics.clientsServed.value}+</span>
            <span className="block text-gray-400 text-xs font-light mt-1">Clientes corporativos atendidos</span>
          </div>
        </div>
      </section>

      {/* 8. CTA Final */}
      <section className="w-full py-20 bg-brand-blue/5 border-t border-white/5 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-black text-white">
            Vamos transformar a infraestrutura energética da sua empresa?
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg max-w-xl mx-auto">
            Fale diretamente com nossa diretoria técnica e solicite um estudo preliminar sem custos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a href="/contato" className="px-8 py-3.5 rounded-lg bg-brand-blue text-brand-petrol font-bold shadow-lg hover:shadow-brand-blue/20 transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-wider">
              Solicitar Diagnóstico
            </a>
            <a href="/solucoes" className="px-8 py-3.5 rounded-lg border border-white/10 hover:border-brand-blue/30 text-white font-bold glass-card hover:bg-white/5 transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-wider">
              Entenda Nossas Soluções
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Subcomponente de ícone em falta para evitar importações incorretas
const FaUserTie = (props: React.SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.2c-9.5-3.3-19.4-5-29.4-5h-12.8c-16.7 8.3-35.3 13-53.6 13s-37-4.7-53.6-13h-12.8c-10 0-19.9 1.7-29.4 5L3.5 391.2C1.2 392 0 394.1 0 396.4v76.2c0 21.8 17.7 39.5 39.5 39.5h369c21.8 0 39.5-17.7 39.5-39.5v-76.2c0-2.3-1.2-4.4-3.5-5.2l-124.7-103z"></path>
  </svg>
);