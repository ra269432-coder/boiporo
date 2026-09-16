'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  headingBn?: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  children?: ReactNode;
}

export default function SectionHeader({
  eyebrow,
  heading,
  headingBn,
  description,
  align = 'left',
  light = false,
  children,
}: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';
  const dividerAlign = align === 'center' ? 'mx-auto' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${textAlign}`}
    >
      {eyebrow && (
        <p className={`text-xs uppercase tracking-[0.18em] font-bold mb-4 ${light ? 'text-white/50' : 'text-[#1B5E3B]'}`}>
          {eyebrow}
        </p>
      )}
      <span className={`divider mb-5 ${dividerAlign} ${light ? 'bg-white/30' : ''}`} />
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl mb-3 ${light ? 'text-white' : 'text-ink'}`}
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {heading}
      </h2>
      {headingBn && (
        <p
          className={`text-lg md:text-xl mt-1 mb-3 ${light ? 'text-white/70' : 'text-[#6B6560]'}`}
          style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
        >
          {headingBn}
        </p>
      )}
      {description && (
        <p className={`text-base md:text-lg max-w-2xl mt-4 leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-white/65' : 'text-[#6B6560]'}`}>
          {description}
        </p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </motion.div>
  );
}
