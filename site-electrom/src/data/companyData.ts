/**
 * Backward-compatible barrel wrapper.
 * Re-exports modularized data structures from specialized domain files:
 * - company.ts: Informações institucionais e métricas auditadas
 * - cases.ts: Casos de sucesso, obras e métricas de desempenho
 * - solutions.ts: Catálogo de soluções em engenharia
 * - testimonials.ts: Depoimentos e validações corporativas
 */

export * from './company';
export * from './cases';
export * from './solutions';
export * from './testimonials';
