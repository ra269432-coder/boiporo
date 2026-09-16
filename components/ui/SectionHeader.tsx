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
  accent?: 'green' | 'gold' | 'violet' | 'aurora';
  children?: ReactNode;
}

const accentGradients: Record<string, string> = {
  green:  'linear-gradient(135deg, #0E9E6E, #34D399)',
  gold:   'linear-gradient(135deg, #D4821A, #FCD34D)',
  violet: 'linear-gradient(135deg, #6D28D9, #A78BFA)',
  aurora: 'linear-gradient(135deg, #34D399, #A78BFA, #FB7185)',
};

export default function SectionHeader({
  eyebrow,
  heading,
  headingBn,
  description,
  align = 'left',
  light = false,
  accent = 'green',
  children,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65 }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2.5 mb-5 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="block"
            style={{
              width: '1.5rem',
              height: '2px',
              borderRadius: '99px',
              background: light ? 'rgba(255,255,255,0.4)' : accentGradients[accent],
            }}
          />
          <p className={`text-[11px] uppercase tracking-[0.2em] font-bold ${light ? 'text-white/50' : ''}`}
            style={light ? undefined : {
              background: accentGradients[accent],
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.18] mb-3 ${light ? 'text-white' : 'text-[#0D0D12]'}`}
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {heading}
      </h2>

      {headingBn && (
        <p
          className={`text-lg md:text-xl mt-1 mb-3 font-medium ${light ? 'text-white/60' : 'text-[#6B6878]'}`}
          style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
        >
          {headingBn}
        </p>
      )}

      {/* Underline accent bar */}
      <div
        className={`h-0.5 w-14 rounded-full mt-4 mb-6 ${isCenter ? 'mx-auto' : ''}`}
        style={{ background: light ? 'rgba(255,255,255,0.25)' : accentGradients[accent] }}
      />

      {description && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''} ${light ? 'text-white/60' : 'text-[#4B4B5A]'}`}
        >
          {description}
        </p>
      )}

      {children && <div className="mt-6">{children}</div>}
    </motion.div>
  );
}
