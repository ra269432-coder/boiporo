'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star } from 'lucide-react';
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
          className="flex gap-4"
        >
          {/* Mini cover */}
          <div
            className="w-14 h-20 rounded flex-shrink-0 flex items-end p-1.5"
            style={{ backgroundColor: book.coverColor }}
          >
            <span className="text-white/50 text-[8px] font-bold uppercase tracking-wide leading-none">
              {LANGUAGE_LABEL[book.language]}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-serif text-sm text-ink font-bold line-clamp-2 group-hover:text-[#1B5E3B] transition-colors">
              {book.titleBn || book.title}
            </h4>
            <p className="text-xs text-muted mt-1">{book.author}</p>
            <div className="flex items-center gap-1 mt-1.5">
              <Star className="w-3 h-3 fill-[#B8944A] text-[#B8944A]" />
              <span className="text-xs font-semibold text-[#B8944A]">{book.rating}</span>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link href={`/books/${book.slug}`} className="block group">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="card h-full"
      >
        {/* Book Cover */}
        <div
          className="relative h-52 flex flex-col justify-between p-5 overflow-hidden"
          style={{ backgroundColor: book.coverColor }}
        >
          {/* Decorative texture */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 3px,
                rgba(255,255,255,0.1) 3px,
                rgba(255,255,255,0.1) 4px
              )`,
            }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 relative">
            {book.featured && (
              <span className="px-2 py-0.5 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wide rounded">
                Featured
              </span>
            )}
            {book.isNewRelease && (
              <span className="px-2 py-0.5 bg-[#B8944A]/80 text-white text-[10px] font-bold uppercase tracking-wide rounded">
                New
              </span>
            )}
            {book.trending && !book.featured && (
              <span className="px-2 py-0.5 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wide rounded">
                Trending
              </span>
            )}
          </div>

          {/* Book spine effect */}
          <div className="relative">
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
            <span className="tag text-[10px]">{book.genre}</span>
            <span className="text-[10px] text-muted">{book.year}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-charcoal leading-relaxed line-clamp-3 mb-4">
            {book.shortDescription}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E4DDD3]">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(book.rating) ? 'fill-[#B8944A] text-[#B8944A]' : 'text-[#E4DDD3]'}`}
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#B8944A]">{book.rating}</span>
              <span className="text-xs text-muted">({book.reviewCount.toLocaleString()})</span>
            </div>
            <span className="btn-ghost text-xs py-0">View Book →</span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
