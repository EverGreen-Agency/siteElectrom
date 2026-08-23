'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaCamera } from 'react-icons/fa';

interface Milestone {
  year: string;
  title: string;
  desc: string;
  photo?: string;
  photoCaption?: string;
}

const milestones: Milestone[] = [
  {
    year: '1996',
    title: 'Fundação da ElectROM',
    desc: 'Nascimento da ElectROM em São Paulo, focada em gestão de obras projetadas e laudos técnicos de engenharia elétrica e mecânica.'
  },
  {
    year: 'Fev/2000',
    title: 'Consultoria & Eficiência Energética',
    desc: 'Início das atividades de consultoria em conservação de energia e eficiência energética.'
  },
  {
    year: 'Dez/2001',
    title: '275 Obras Entregues',
    desc: 'Totalizadas 275 obras entregues pelo país.'
  },
  {
    year: 'Set/2005',
    title: 'Especialidades Químicas',
    desc: 'Início da distribuição de especialidades químicas, atendendo à indústria eletroeletrônica, eletromecânica e automobilística.'
  },
  {
    year: 'Dez/2009',
    title: 'Obra nº 359',
    desc: 'Entrega da obra nº 359, em São Joaquim da Barra (SP).'
  },
  {
    year: 'Set/2015',
    title: '1.800 Clientes Atendidos',
    desc: 'Totalizado atendimento de 1.800 clientes para especificação e fornecimento de especialidades químicas.'
  },
  {
    year: 'Dez/2016',
    title: 'Início em Energia Solar',
    desc: 'Início das atividades e dos primeiros projetos para energia solar.'
  },
  {
    year: 'Out/2017',
    title: 'Primeira Obra Solar Homologada',
    desc: 'Primeira obra homologada na Escola Patelli, em Campo Limpo Paulista (SP).',
    photo: '/obras/EscolaPatelliFotovoltaica/WP_20180203_11_56_04_Pro.jpg',
    photoCaption: 'Escola Patelli — Campo Limpo Paulista, SP (Out/2017)'
  },
  {
    year: 'Dez/2020',
    title: 'Obra nº 430',
    desc: 'Entrega da obra de número 430.'
  },
  {
    year: 'Jul/2021',
    title: 'Carregadores Veiculares',
    desc: 'Instalação dos primeiros carregadores veiculares.'
  },
  {
    year: 'Fev/2025',
    title: 'Smart Fit Embu-Guaçu',
    desc: 'Homologação da instalação fotovoltaica da academia Smart Fit, em Embu-Guaçu (SP).',
    photo: '/obras/SmartFitSolar.png',
    photoCaption: 'Usina Solar Smart Fit — Embu-Guaçu, SP (Fev/2025)'
  }
];

export default function Timeline() {
  const [openPhoto, setOpenPhoto] = useState<{ src: string; caption: string } | null>(null);

  return (
    <>
      <div className="relative border-l-2 border-white/10 pl-6 ml-4 space-y-12">
        {milestones.map((m, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-brand-blue border-2 border-brand-dark shadow-[0_0_8px_#7AA2E4] z-10" />
            <div className="glass-card rounded-2xl p-6 border-white/5 space-y-2">
              <span className="text-brand-cyan font-mono font-bold text-sm">{m.year}</span>
              <h4 className="font-display font-bold text-lg text-white">{m.title}</h4>
              <p className="text-gray-300 text-xs font-light leading-relaxed">{m.desc}</p>
              {m.photo && (
                <button
                  onClick={() => setOpenPhoto({ src: m.photo!, caption: m.photoCaption || m.title })}
                  className="mt-3 inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-blue border border-brand-blue/30 px-3 py-1.5 rounded-lg hover:bg-brand-blue/10 transition-all duration-200 cursor-pointer"
                >
                  <FaCamera className="text-xs" />
                  Ver Foto da Obra
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {openPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setOpenPhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenPhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              aria-label="Fechar"
            >
              <FaTimes className="text-sm" />
            </button>
            <div className="relative w-full aspect-video bg-brand-dark">
              <Image
                src={openPhoto.src}
                alt={openPhoto.caption}
                fill
                className="object-cover"
                sizes="(max-width: 672px) 100vw, 672px"
              />
            </div>
            <div className="px-6 py-4 border-t border-white/5">
              <p className="text-gray-300 text-xs font-mono">{openPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
