import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AuthorCard from '@/components/ui/AuthorCard';
import { authors } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'Authors',
  description: 'Discover established and emerging Bangladeshi writers on PoraBangla.',
};

export default function AuthorsPage() {
  return (
    <div className="pt-24 pb-20 bg-[#F8F5EF] min-h-screen">
      <div className="container-site">
        <nav className="flex items-center gap-2 text-xs text-muted mb-8">
          <Link href="/" className="hover:text-green transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal font-medium">Authors</span>
        </nav>

        <div className="mb-10">
          <span className="divider mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Bangladesh&apos;s Writers
          </h1>
          <p className="text-charcoal text-lg max-w-xl">
            From literary giants to emerging voices — discover the writers shaping Bangladesh&apos;s literary landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>

        {/* Join as writer CTA */}
        <div className="mt-16 p-8 rounded-xl bg-[#0F2D1C] text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Are you a writer?
          </h2>
          <p className="text-white/60 max-w-md mx-auto mb-6">
            Join PoraBangla and share your work with readers across Bangladesh.
          </p>
          <Link href="/writers" className="btn-primary">
            Join as a Writer
          </Link>
        </div>
      </div>
    </div>
  );
}
