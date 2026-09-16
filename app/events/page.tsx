import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import EventCard from '@/components/ui/EventCard';
import { events, eventCategories } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Literary events, author meets, and reading circles across Bangladesh.',
};

export default function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  return (
    <div className="pt-24 pb-20 bg-[#F8F5EF] min-h-screen">
      <div className="container-site">
        <nav className="flex items-center gap-2 text-xs text-muted mb-8">
          <Link href="/" className="hover:text-green transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal font-medium">Events</span>
        </nav>

        <div className="mb-10">
          <span className="divider mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Upcoming Events
          </h1>
          <p className="text-charcoal text-lg max-w-xl">
            Where readers meet. Join author talks, book launches, reading circles, and literary discussions.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-hide">
          {eventCategories.map((cat) => (
            <Link
              key={cat}
              href={cat === 'All' ? '/events' : `/events?category=${encodeURIComponent(cat)}`}
              className="flex-shrink-0 px-4 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 text-muted border-[#E4DDD3] hover:border-[#1B5E3B] hover:text-[#1B5E3B] bg-white"
            >
              {cat}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
