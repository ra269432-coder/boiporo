'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, MapPin } from 'lucide-react';
import type { Author } from '@/types';

interface AuthorCardProps {
  author: Author;
}

// Generate a deterministic avatar color from name
function getAvatarColor(name: string): string {
  const colors = [
    '#1B5E3B', '#8B2335', '#1B3A5E', '#5B3A1A',
    '#4A1942', '#7A5C00', '#2C5F2E', '#3A3A6E',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
  return colors[hash % colors.length];
}

// Get initials from name
function getInitials(name: string): string {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const color = getAvatarColor(author.name);

  return (
    <Link href={`/authors/${author.slug}`} className="block group">
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.22 }}
        className="card p-6 h-full flex flex-col"
      >
        {/* Avatar + Badge */}
        <div className="flex items-start gap-4 mb-4">
          {/* Avatar */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 font-serif transition-transform group-hover:scale-105 duration-200"
            style={{
              backgroundColor: color,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
            aria-label={`Portrait of ${author.name}`}
          >
            {getInitials(author.name)}
          </div>

          <div className="flex-1 min-w-0 pt-1">
            <h3
              className="font-serif text-base font-bold text-ink group-hover:text-[#1B5E3B] transition-colors line-clamp-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {author.name}
            </h3>
            {author.nameBn && (
              <p
                className="text-sm text-muted mt-0.5"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                {author.nameBn}
              </p>
            )}
            <div className="flex items-center gap-1.5 mt-1.5">
              <MapPin className="w-3 h-3 text-muted flex-shrink-0" />
              <span className="text-xs text-muted">{author.location}</span>
            </div>
          </div>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {author.genres.slice(0, 2).map((genre) => (
            <span key={genre} className="tag text-[10px]">{genre}</span>
          ))}
          {author.isNewVoice && <span className="tag tag-gold text-[10px]">New Voice</span>}
          {author.isEmerging && <span className="tag tag-red text-[10px]">Emerging</span>}
        </div>

        {/* Bio */}
        <p className="text-sm text-charcoal leading-relaxed line-clamp-3 flex-1 mb-4">
          {author.shortBio}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E4DDD3]">
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <BookOpen size={12} />
            <span>{author.bookCount}+ books</span>
          </div>
          <span className="btn-ghost text-xs py-0">View Profile →</span>
        </div>
      </motion.article>
    </Link>
  );
}
