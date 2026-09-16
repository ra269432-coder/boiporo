'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Event } from '@/types';

interface EventCardProps {
  event: Event;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Author Meet': '#1B5E3B',
  'Book Launch': '#8B2335',
  'Reading Circle': '#1B3A5E',
  'Writing Workshop': '#4A1942',
  'Literary Discussion': '#5B3A1A',
  'School Event': '#D4580A',
  'University Event': '#7A5C00',
};

export default function EventCard({ event }: EventCardProps) {
  const color = CATEGORY_COLORS[event.category] || '#1B5E3B';
  const dateObj = new Date(event.date);
  const day = dateObj.toLocaleDateString('en-GB', { day: '2-digit' });
  const month = dateObj.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase();

  return (
    <Link href={`/events/${event.slug}`} className="block group">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="card flex gap-0 overflow-hidden h-full"
      >
        {/* Date sidebar */}
        <div
          className="w-16 md:w-20 flex-shrink-0 flex flex-col items-center justify-center py-6 gap-1"
          style={{ backgroundColor: color }}
        >
          <span className="text-2xl md:text-3xl font-bold text-white font-serif leading-none"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {day}
          </span>
          <span className="text-[10px] font-bold text-white/70 tracking-widest">{month}</span>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col">
          {/* Category */}
          <div className="flex items-center gap-2 mb-2">
            <Tag size={10} style={{ color }} />
            <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color }}>
              {event.category}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-serif text-base font-bold text-ink group-hover:text-[#1B5E3B] transition-colors line-clamp-2 mb-2 flex-1"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {event.titleBn || event.title}
          </h3>

          {/* Speaker */}
          {event.speaker && (
            <p className="text-xs text-muted mb-2 font-medium">
              with {event.speaker}
            </p>
          )}

          {/* Meta */}
          <div className="space-y-1 mt-auto">
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <Calendar size={11} className="flex-shrink-0" />
              <span>{event.time} — {dateObj.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <MapPin size={11} className="flex-shrink-0" />
              <span>{event.venue}</span>
            </div>
          </div>

          {/* Register */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#E4DDD3]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B5E3B]">
              {event.location}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-[#1B5E3B] group-hover:gap-2 transition-all duration-200">
              Register <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
