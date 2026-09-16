'use client';

import { motion } from 'framer-motion';
import { Users, MapPin, BookOpen, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import type { Community } from '@/types';

const COMMUNITY_PALETTES = [
  { gradient: 'linear-gradient(135deg, #059669, #34D399)', shadow: 'rgba(5,150,105,0.35)', light: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)' },
  { gradient: 'linear-gradient(135deg, #047857, #10B981)', shadow: 'rgba(4,120,87,0.35)', light: 'rgba(5,150,105,0.08)', border: 'rgba(5,150,105,0.2)' },
  { gradient: 'linear-gradient(135deg, #0F766E, #2DD4BF)', shadow: 'rgba(15,118,110,0.35)', light: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.2)' },
  { gradient: 'linear-gradient(135deg, #D4821A, #FCD34D)', shadow: 'rgba(212,130,26,0.35)', light: 'rgba(212,130,26,0.08)', border: 'rgba(212,130,26,0.2)' },
];

function getPalette(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
  return COMMUNITY_PALETTES[hash % COMMUNITY_PALETTES.length];
}

export default function CommunityCard({ community }: { community: Community }) {
  const palette = getPalette(community.name);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="flex flex-col h-full rounded-2xl overflow-hidden border border-[#E5E5F0] bg-white shadow-[0_4px_20px_rgba(13,13,18,0.05)] hover:shadow-[0_16px_40px_rgba(13,13,18,0.1)] transition-all duration-300"
      style={{ borderColor: palette.border }}
    >
      {/* Header band */}
      <div className="relative p-6 pb-5 overflow-hidden"
        style={{ background: palette.light }}>
        {/* Decorative circle */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
          style={{ background: palette.gradient, opacity: 0.12 }} />

        {/* Members badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-4"
          style={{ background: 'rgba(255,255,255,0.8)', border: `1px solid ${palette.border}` }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: palette.gradient.includes('#34D399') ? '#34D399' : palette.gradient.split(', ')[2]?.replace(')', '') }} />
          <Users size={11} style={{ color: '#6B6878' }} />
          <span className="text-xs font-bold" style={{ color: '#1E1E2C' }}>
            {community.members.toLocaleString()} members
          </span>
        </div>

        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{ background: palette.gradient, boxShadow: `0 6px 16px ${palette.shadow}` }}
        >
          <Sparkles size={22} color="white" strokeWidth={1.8} />
        </motion.div>

        <h3 className="font-serif text-lg font-bold text-[#0D0D12] mb-1"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          {community.name}
        </h3>
        {community.nameBn && (
          <p className="text-sm font-medium" style={{ fontFamily: "'Hind Siliguri', sans-serif", color: '#6B6878' }}>
            {community.nameBn}
          </p>
        )}
      </div>

      {/* Body */}
      <div className="p-6 pt-4 flex flex-col flex-1">
        <p className="text-sm leading-relaxed line-clamp-2 mb-5 flex-1" style={{ color: '#4B4B5A' }}>
          {community.description}
        </p>

        {/* Meta */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-start gap-2 text-sm">
            <MapPin size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#6B6878' }} />
            <span style={{ color: '#1E1E2C' }}>{community.location}</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <BookOpen size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#6B6878' }} />
            <div>
              <span className="text-[10px] text-[#6B6878] uppercase tracking-wide font-bold block">Reading now</span>
              <span className="font-semibold" style={{ color: '#1E1E2C' }}>{community.currentBook}</span>
              <span className="text-xs ml-1" style={{ color: '#6B6878' }}>— {community.currentBookAuthor}</span>
            </div>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <Calendar size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#6B6878' }} />
            <span className="text-xs leading-relaxed" style={{ color: '#4B4B5A' }}>{community.nextMeeting}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {community.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold px-2.5 py-0.5 rounded-full"
              style={{ background: palette.light, color: '#1E1E2C', border: `1px solid ${palette.border}` }}>
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-200"
          style={{ background: palette.gradient, boxShadow: `0 4px 14px ${palette.shadow}` }}
        >
          Join Community <ArrowRight size={14} />
        </motion.button>
      </div>
    </motion.article>
  );
}
