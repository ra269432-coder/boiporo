'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Event } from '@/types';

interface EventCardProps {
  event: Event;
}

const CATEGORY_PALETTES: Record<string, { gradient: string, shadow: string, light: string, text: string }> = {
  'Author Meet': { gradient: 'linear-gradient(135deg, #059669, #34D399)', shadow: 'rgba(5,150,105,0.35)', light: 'rgba(16,185,129,0.08)', text: '#059669' },
  'Book Launch': { gradient: 'linear-gradient(135deg, #047857, #10B981)', shadow: 'rgba(4,120,87,0.35)', light: 'rgba(5,150,105,0.08)', text: '#047857' },
  'Reading Circle': { gradient: 'linear-gradient(135deg, #0F766E, #2DD4BF)', shadow: 'rgba(15,118,110,0.35)', light: 'rgba(20,184,166,0.08)', text: '#0F766E' },
  'Writing Workshop': { gradient: 'linear-gradient(135deg, #065F46, #059669)', shadow: 'rgba(6,95,70,0.35)', light: 'rgba(6,95,70,0.08)', text: '#065F46' },
  'Literary Discussion': { gradient: 'linear-gradient(135deg, #064E3B, #047857)', shadow: 'rgba(6,78,59,0.35)', light: 'rgba(6,78,59,0.08)', text: '#064E3B' },
  'School Event': { gradient: 'linear-gradient(135deg, #059669, #10B981)', shadow: 'rgba(5,150,105,0.35)', light: 'rgba(16,185,129,0.08)', text: '#059669' },
  'University Event': { gradient: 'linear-gradient(135deg, #D4821A, #FCD34D)', shadow: 'rgba(212,130,26,0.35)', light: 'rgba(212,130,26,0.08)', text: '#D4821A' },
};

const defaultPalette = { gradient: 'linear-gradient(135deg, #059669, #34D399)', shadow: 'rgba(5,150,105,0.35)', light: 'rgba(16,185,129,0.08)', text: '#059669' };

export default function EventCard({ event }: EventCardProps) {
  const palette = CATEGORY_PALETTES[event.category] || defaultPalette;
  const dateObj = new Date(event.date);
  const day = dateObj.toLocaleDateString('en-GB', { day: '2-digit' });
  const month = dateObj.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase();

  return (
    <Link href={`/events/${event.slug}`} className="block group">
      <motion.article
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="flex gap-0 overflow-hidden h-full rounded-2xl border border-[#E5E5F0] bg-white shadow-[0_4px_20px_rgba(13,13,18,0.05)] hover:shadow-[0_16px_40px_rgba(13,13,18,0.1)] transition-all duration-300"
      >
        {/* Date sidebar */}
        <div
          className="w-20 md:w-24 flex-shrink-0 flex flex-col items-center justify-center py-6 gap-1 relative overflow-hidden"
          style={{ background: palette.gradient }}
        >
          {/* Subtle shine */}
          <div className="absolute inset-0 opacity-20"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)' }} />
          
          <span className="text-3xl md:text-4xl font-bold text-white leading-none relative z-10 drop-shadow-sm"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {day}
          </span>
          <span className="text-[11px] font-bold text-white/80 tracking-widest relative z-10">{month}</span>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 md:p-6 flex flex-col relative overflow-hidden">
          {/* subtle background pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: palette.light }} />

          {/* Category */}
          <div className="flex items-center gap-2 mb-3 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#E5E5F0] shadow-sm">
              <Tag size={10} style={{ color: palette.text }} />
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: palette.text }}>
                {event.category}
              </span>
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-lg font-bold text-[#0D0D12] group-hover:text-opacity-80 transition-colors line-clamp-2 mb-2 flex-1 relative z-10"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {event.titleBn || event.title}
          </h3>

          {/* Speaker */}
          {event.speaker && (
            <p className="text-sm text-[#4B4B5A] mb-3 font-medium relative z-10">
              with <span className="font-semibold text-[#1E1E2C]">{event.speaker}</span>
            </p>
          )}

          {/* Meta */}
          <div className="space-y-1.5 mt-auto relative z-10">
            <div className="flex items-center gap-2 text-xs text-[#6B6878]">
              <Calendar size={13} className="flex-shrink-0" style={{ color: palette.text }} />
              <span className="font-medium">{event.time} — {dateObj.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#6B6878]">
              <MapPin size={13} className="flex-shrink-0" style={{ color: palette.text }} />
              <span className="font-medium">{event.venue}</span>
            </div>
          </div>

          {/* Register */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#E5E5F0] relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: palette.text }}>
              {event.location}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-bold transition-all duration-200 group-hover:gap-2" style={{ color: palette.text }}>
              Register <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
