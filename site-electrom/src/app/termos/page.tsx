'use client';

import { Suspense } from 'react';
import { LegalContent } from '../../components/LegalContent';

export default function TopTermosPage() {
  return (
    <Suspense fallback={<div className="bg-brand-petrol min-h-screen" />}>
      <LegalContent defaultTab="termos" />
    </Suspense>
  );
}