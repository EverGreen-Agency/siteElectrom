'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaExclamationTriangle, FaRedo, FaHome } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Router Boundary Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-petrol text-white relative overflow-hidden flex items-center justify-center py-20 px-6">
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />
      <div className="max-w-md mx-auto text-center relative z-10 space-y-6 glass-card p-8 rounded-3xl border-white/5">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto text-2xl">
          <FaExclamationTriangle />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-display font-bold text-white">Ops, algo deu errado!</h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Ocorreu uma instabilidade temporária ao carregar esta página.
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-blue text-brand-petrol font-bold font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20 hover:brightness-110 transition-all cursor-pointer"
          >
            <FaRedo className="text-xs" />
            Tentar Novamente
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs tracking-wider uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <FaHome className="text-xs" />
            Página Inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
