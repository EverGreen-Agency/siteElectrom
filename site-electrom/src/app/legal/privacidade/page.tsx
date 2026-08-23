'use client';

import { Suspense } from 'react';
import { LegalContent } from '../../../components/LegalContent';

export default function PrivacidadeSubPage() {
  return (
    <Suspense fallback={<div className="bg-brand-petrol min-h-screen" />}>
      <LegalContent defaultTab="privacidade" />
    </Suspense>
  );
}