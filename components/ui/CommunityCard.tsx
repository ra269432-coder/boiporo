'use client';

import { motion } from 'framer-motion';
import { Users, MapPin, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import type { Community } from '@/types';

interface CommunityCardProps {
  community: Community;
}

export default function CommunityCard({ community }: CommunityCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="card p-6 flex flex-col h-full"
    >
      {/* Color accent bar */}
      <div
        className="h-1.5 w-12 rounded-full mb-5"
        style={{ backgroundColor: community.coverColor }}
      />

      {/* Name */}
      <h3
        className="font-serif text-lg font-bold text-ink mb-1"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {community.name}
      </h3>
      {community.nameBn && (
        <p
          className="text-sm text-muted mb-3"
          style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
        >
          {community.nameBn}
        </p>
      )}

      {/* Description */}
      <p className="text-sm text-charcoal leading-relaxed line-clamp-2 mb-5 flex-1">
        {community.description}
      </p>

      {/* Meta grid */}
      <div className="space-y-2.5 mb-5">
        <div className="flex items-start gap-2 text-sm">
          <MapPin size={13} className="text-muted flex-shrink-0 mt-0.5" />
          <span className="text-charcoal">{community.location}</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <Users size={13} className="text-muted flex-shrink-0 mt-0.5" />
          <span className="text-charcoal font-medium">{community.members.toLocaleString()} members</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <BookOpen size={13} className="text-muted flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] text-muted uppercase tracking-wide font-semibold block">Reading now</span>
            <span className="text-charcoal font-medium">{community.currentBook}</span>
            <span className="text-muted text-xs"> — {community.currentBookAuthor}</span>
          </div>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <Calendar size={13} className="text-muted flex-shrink-0 mt-0.5" />
          <span className="text-charcoal text-xs leading-relaxed">{community.nextMeeting}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {community.tags.map((tag) => (
          <span key={tag} className="tag text-[10px]">{tag}</span>
        ))}
      </div>

      {/* CTA */}
      <button
        className="btn-primary w-full justify-center text-sm py-2.5"
        style={{ backgroundColor: community.coverColor }}
      >
        Join Community
      </button>
    </motion.article>
  );
}
