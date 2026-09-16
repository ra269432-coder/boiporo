import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reading',
  description: 'Reading guides, challenges, and wellbeing articles to make reading part of your everyday life.',
};

export default function ReadingPage() {
  return (
    <div className="pt-24 pb-20 bg-[#F8F5EF] min-h-screen flex flex-col">
      <div className="container-site flex-1">
        <nav className="flex items-center gap-2 text-xs text-muted mb-8">
          <Link href="/" className="hover:text-green transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal font-medium">Reading</span>
        </nav>

        <div className="mb-10">
          <span className="divider mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            The Reading Life
          </h1>
          <p className="text-charcoal text-lg max-w-xl">
            Guides, articles, and challenges to help you build a sustainable and meaningful reading habit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl border border-[#E4DDD3]">
            <h2 className="font-serif text-2xl font-bold text-ink mb-3">Reading & Wellbeing</h2>
            <p className="text-charcoal mb-6">Explore how reading impacts focus, digital balance, and personal growth.</p>
            <div className="space-y-4">
              <Link href="/reading" className="block p-4 bg-[#F8F5EF] rounded-lg hover:bg-[#EBF5EF] transition-colors">
                <h3 className="font-semibold text-ink">How to Build a Reading Habit</h3>
                <p className="text-sm text-muted mt-1">Practical steps for busy people.</p>
              </Link>
              <Link href="/reading" className="block p-4 bg-[#F8F5EF] rounded-lg hover:bg-[#EBF5EF] transition-colors">
                <h3 className="font-semibold text-ink">Reading Before Sleep</h3>
                <p className="text-sm text-muted mt-1">Replacing screens with stories.</p>
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-[#E4DDD3]">
            <h2 className="font-serif text-2xl font-bold text-ink mb-3">For Students & Parents</h2>
            <p className="text-charcoal mb-6">Resources for raising readers and integrating books into education.</p>
            <div className="space-y-4">
              <Link href="/reading" className="block p-4 bg-[#F8F5EF] rounded-lg hover:bg-[#EBF5EF] transition-colors">
                <h3 className="font-semibold text-ink">Reading With Children</h3>
                <p className="text-sm text-muted mt-1">A guide for parents and educators.</p>
              </Link>
              <Link href="/reading" className="block p-4 bg-[#F8F5EF] rounded-lg hover:bg-[#EBF5EF] transition-colors">
                <h3 className="font-semibold text-ink">Reading for Students</h3>
                <p className="text-sm text-muted mt-1">Balancing textbooks with literature.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
