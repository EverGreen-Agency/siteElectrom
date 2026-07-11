'use client';
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Componente reutilizável para o efeito "Fade Up" no Scroll (Scroll Reveal).
 * Utiliza o Intersection Observer internamente através do Framer Motion.
 * 
 * Como usar:
 * <FadeUp delay={0.2}>
 *    <h2>Meu Título que vai surgir</h2>
 * </FadeUp>
 */
export default function FadeUp({ 
  children, 
  delay = 0, 
  duration = 0.8,
  yOffset = 30, // Equivalente ao seu translateY(30px)
  className = "" 
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} // equivalent ao threshold: 0.1
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
}
