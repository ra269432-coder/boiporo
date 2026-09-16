'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import EventCard from '@/components/ui/EventCard';
import { events, eventCategories } from '@/lib/mockData';

export default function EventsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? events
      : events.filter((e) => e.category === activeCategory);

  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeader
            eyebrow="Events & Gatherings"
            heading="Where Readers Meet"
            headingBn="পাঠকদের মিলনস্থল"
            description="Author talks, book launches, reading circles, literary discussions and writing workshops — across Bangladesh."
          />
          <Link href="/events" className="btn-ghost flex-shrink-0 mb-4">
            All events →
          </Link>
        </div>

        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
          {eventCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#1B5E3B] text-white border-[#1B5E3B]'
                  : 'text-muted border-[#E4DDD3] hover:border-[#C8BFB4] hover:text-charcoal bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {filtered.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>

        {/* View all */}
        <div className="mt-10 text-center">
          <Link href="/events" className="btn-secondary">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
