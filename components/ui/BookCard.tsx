'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, BookOpen, ArrowUpRight } from 'lucide-react';
import type { Book } from '@/types';

interface BookCardProps {
  book: Book;
  variant?: 'default' | 'compact';
}

const LANGUAGE_LABEL: Record<string, string> = {
  bangla: 'বাংলা',
  english: 'English',
  both: 'Bilingual',
};

export default function BookCard({ book, variant = 'default' }: BookCardProps) {
  if (variant === 'compact') {
    return (
      <Link href={`/books/${book.slug}`} className="block group">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="flex gap-4 p-3 rounded-xl hover:bg-[rgba(14,158,110,0.05)] transition-colors"
        >
          <div
            className="w-14 h-20 rounded-lg flex-shrink-0 flex items-end p-1.5 relative overflow-hidden"
            style={{ backgroundColor: book.coverColor }}
          >
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 6px)',
              }}
            />
            <span className="text-white/60 text-[8px] font-bold uppercase tracking-wide leading-none relative z-10">
              {LANGUAGE_LABEL[book.language]}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-serif text-sm text-[#0D0D12] font-bold line-clamp-2 group-hover:text-[#0E9E6E] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
              {book.titleBn || book.title}
            </h4>
            <p className="text-xs text-[#6B6878] mt-1">{book.author}</p>
            <div className="flex items-center gap-1 mt-1.5">
              <Star className="w-3 h-3 fill-[#D4821A] text-[#D4821A]" />
              <span className="text-xs font-semibold text-[#D4821A]">{book.rating}</span>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link href={`/books/${book.slug}`} className="block group">
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="h-full rounded-2xl overflow-hidden border border-[#E5E5F0] bg-white shadow-[0_4px_24px_rgba(13,13,18,0.06)] hover:shadow-[0_16px_48px_rgba(13,13,18,0.12)] transition-all duration-300 hover:border-[rgba(14,158,110,0.25)]"
      >
        {/* Book Cover */}
        <div
          className="relative h-52 flex flex-col justify-between p-5 overflow-hidden"
          style={{ backgroundColor: book.coverColor }}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255,255,255,0.05) 12px, rgba(255,255,255,0.05) 13px),
                repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(0,0,0,0.03) 12px, rgba(0,0,0,0.03) 13px)
              `,
            }}
          />

          {/* Bottom light sweep on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 relative z-10">
            {book.featured && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide"
                style={{ background: 'rgba(14,158,110,0.85)', color: 'white', backdropFilter: 'blur(8px)' }}>
                ✦ Featured
              </span>
            )}
            {book.isNewRelease && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide"
                style={{ background: 'rgba(212,130,26,0.85)', color: 'white', backdropFilter: 'blur(8px)' }}>
                New
              </span>
            )}
            {book.trending && !book.featured && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide"
                style={{ background: 'rgba(109,40,217,0.85)', color: 'white', backdropFilter: 'blur(8px)' }}>
                Trending
              </span>
            )}
          </div>

          {/* Title on cover */}
          <div className="relative z-10">
            <h3
              className="text-white font-bold text-lg leading-snug line-clamp-3 drop-shadow-sm"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {book.titleBn || book.title}
            </h3>
            <p className="text-white/70 text-xs mt-1.5 font-medium">{book.author}</p>
          </div>
        </div>

        {/* Card body */}
        <div className="p-5">
          {/* Genre & Language */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide"
              style={{ background: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)', color: '#065F46' }}>
              {book.genre}
            </span>
            <span className="text-[10px] text-[#6B6878]">{book.year}</span>
            <span className="text-[10px] text-[#6B6878] ml-auto">{LANGUAGE_LABEL[book.language]}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-[#1E1E2C] leading-relaxed line-clamp-2 mb-4">
            {book.shortDescription}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[#F0F0F8]">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(book.rating) ? 'fill-[#D4821A] text-[#D4821A]' : 'text-[#E5E5F0]'}`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-[#D4821A]">{book.rating}</span>
              <span className="text-xs text-[#6B6878]">({book.reviewCount.toLocaleString()})</span>
            </div>
            <motion.span
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0E9E6E] group-hover:gap-1.5 transition-all"
              whileHover={{ x: 2 }}
            >
              View <ArrowUpRight size={12} />
            </motion.span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
