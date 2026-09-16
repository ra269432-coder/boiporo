'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, MapPin, ArrowUpRight, Feather } from 'lucide-react';
import type { Author } from '@/types';

const AVATAR_CONFIGS = [
  { gradient: 'linear-gradient(135deg, #059669, #34D399)', shadow: 'rgba(5,150,105,0.45)' },
  { gradient: 'linear-gradient(135deg, #047857, #10B981)', shadow: 'rgba(4,120,87,0.4)' },
  { gradient: 'linear-gradient(135deg, #0F766E, #2DD4BF)', shadow: 'rgba(15,118,110,0.4)' },
  { gradient: 'linear-gradient(135deg, #065F46, #059669)', shadow: 'rgba(6,95,70,0.4)' },
  { gradient: 'linear-gradient(135deg, #064E3B, #047857)', shadow: 'rgba(6,78,59,0.4)' },
  { gradient: 'linear-gradient(135deg, #D4821A, #FCD34D)', shadow: 'rgba(212,130,26,0.4)' },
];

const TAG_COLORS = [
  { bg: 'rgba(16,185,129,0.1)', color: '#059669', border: 'rgba(16,185,129,0.2)' },
  { bg: 'rgba(20,184,166,0.1)', color: '#0F766E', border: 'rgba(20,184,166,0.2)' },
  { bg: 'rgba(5,150,105,0.1)', color: '#047857', border: 'rgba(5,150,105,0.2)' },
  { bg: 'rgba(212,130,26,0.1)', color: '#D4821A', border: 'rgba(212,130,26,0.2)' },
];

function getAvatarConfig(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
  return AVATAR_CONFIGS[hash % AVATAR_CONFIGS.length];
}

function getTagColor(idx: number) {
  return TAG_COLORS[idx % TAG_COLORS.length];
}

function getInitials(name: string): string {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
}

export default function AuthorCard({ author }: { author: Author }) {
  const avatar = getAvatarConfig(author.name);

  return (
    <Link href={`/authors/${author.slug}`} className="block group">
      <motion.article
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="h-full flex flex-col rounded-2xl overflow-hidden border border-[#E5E5F0] bg-white shadow-[0_4px_20px_rgba(13,13,18,0.05)] hover:shadow-[0_16px_40px_rgba(13,13,18,0.12)] transition-all duration-300"
      >
        {/* Gradient top strip */}
        <div className="h-1.5 w-full" style={{ background: avatar.gradient }} />

        <div className="p-6 flex flex-col flex-1">
          {/* Avatar + Info */}
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.4 }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 relative"
              style={{
                background: avatar.gradient,
                boxShadow: `0 6px 20px ${avatar.shadow}`,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
              aria-label={`Portrait of ${author.name}`}
            >
              {getInitials(author.name)}
              {/* Shine overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-30"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)' }} />
            </motion.div>

            <div className="flex-1 min-w-0 pt-1">
              <h3
                className="font-serif text-base font-bold text-[#0D0D12] transition-colors line-clamp-1"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  background: 'transparent',
                  transition: 'background 0.2s',
                }}
              >
                {author.name}
              </h3>
              {author.nameBn && (
                <p className="text-sm font-medium mt-0.5" style={{ fontFamily: "'Hind Siliguri', sans-serif", color: '#6B6878' }}>
                  {author.nameBn}
                </p>
              )}
              <div className="flex items-center gap-1.5 mt-1.5">
                <MapPin className="w-3 h-3 flex-shrink-0" style={{ color: '#6B6878' }} />
                <span className="text-xs" style={{ color: '#6B6878' }}>{author.location}</span>
              </div>
            </div>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {author.genres.slice(0, 2).map((genre, idx) => {
              const tc = getTagColor(idx);
              return (
                <span key={genre}
                  className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                  style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}>
                  {genre}
                </span>
              );
            })}
            {author.isNewVoice && (
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                style={{ background: 'rgba(212,130,26,0.1)', color: '#D4821A', border: '1px solid rgba(212,130,26,0.2)' }}>
                ✦ New Voice
              </span>
            )}
            {author.isEmerging && (
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                style={{ background: 'rgba(194,24,58,0.1)', color: '#C2183A', border: '1px solid rgba(194,24,58,0.2)' }}>
                Rising
              </span>
            )}
          </div>

          {/* Bio */}
          <p className="text-sm leading-relaxed line-clamp-3 flex-1 mb-4" style={{ color: '#4B4B5A' }}>
            {author.shortBio}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[#F0F0F8]">
            <div className="flex items-center gap-1.5 text-xs" style={{ color: '#6B6878' }}>
              <BookOpen size={12} />
              <span className="font-semibold">{author.bookCount}+ books</span>
            </div>
            <motion.span
              className="inline-flex items-center gap-1 text-xs font-bold"
              style={{ color: '#0E9E6E' }}
              whileHover={{ x: 2 }}
            >
              View Profile <ArrowUpRight size={12} />
            </motion.span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
