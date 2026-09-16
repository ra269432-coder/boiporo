import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import CommunityCard from '@/components/ui/CommunityCard';
import { communities } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'Reading Communities',
  description: 'Join a reading community near you. Connect with readers across Bangladesh.',
};

export default function CommunitiesPage() {
  return (
    <div className="pt-24 pb-20 bg-[#F8F5EF] min-h-screen">
      <div className="container-site">
        <nav className="flex items-center gap-2 text-xs text-muted mb-8">
          <Link href="/" className="hover:text-green transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal font-medium">Communities</span>
        </nav>

        <div className="mb-10">
          <span className="divider mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Reading Communities
          </h1>
          <p className="text-charcoal text-lg max-w-xl">
            Books become more meaningful when we have people to talk about them with. Find a reading club near you or start your own.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>

        {/* Start a club CTA */}
        <div className="mt-16 p-8 md:p-12 rounded-xl bg-white border border-[#E4DDD3] text-center">
          <h2 className="font-serif text-2xl font-bold text-ink mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Start a Reading Club
          </h2>
          <p className="text-charcoal max-w-md mx-auto mb-6">
            Don&apos;t see a community near you? We can help you start one. Get resources, book recommendations, and platform support.
          </p>
          <Link href="/contact" className="btn-primary">
            Register Your Club
          </Link>
        </div>
      </div>
    </div>
  );
}
