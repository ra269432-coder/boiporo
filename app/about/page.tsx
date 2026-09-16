import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'About PoraBangla — building a culture of reading across Bangladesh.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container-site">
        <nav className="flex items-center gap-2 text-xs text-muted mb-8">
          <Link href="/" className="hover:text-green transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal font-medium">About</span>
        </nav>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-[#1B5E3B] flex items-center justify-center mx-auto mb-6">
              <BookOpen className="text-white" size={28} />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Our Mission
            </h1>
            <p className="text-2xl text-charcoal font-serif mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Let&apos;s build a nation that reads.
            </p>
            <p className="text-xl text-[#1B5E3B]" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
              বাংলাদেশকে আবার বই পড়ার দেশ বানাই।
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-charcoal leading-relaxed">
            <p>
              PoraBangla was founded on a simple belief: reading matters. In a world of increasing distraction and digital noise, the ability to read deeply—to immerse oneself in a story, to engage with a complex idea, to understand a different perspective—is more vital than ever.
            </p>

            <h2 className="font-serif text-2xl font-bold text-ink mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              More Than a Platform
            </h2>
            <p>
              We are not just a digital platform; we are a cultural movement. Our goal is to connect the entire literary ecosystem of Bangladesh. We want to make it easier for readers to find great books, for writers to connect with their audience, and for communities to gather around shared reading experiences.
            </p>

            <h2 className="font-serif text-2xl font-bold text-ink mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Reading Index (Coming 2027)
            </h2>
            <p>
              We believe in evidence-based cultural development. That is why we are developing the Bangladesh Reading Index—an annual report that will track how Bangladesh reads, what genres are growing, and how reading habits differ across regions and age groups.
            </p>

            <div className="bg-[#F8F5EF] p-8 rounded-xl border border-[#E4DDD3] mt-12 text-center">
              <h3 className="font-bold text-ink mb-2">Join the Movement</h3>
              <p className="text-sm mb-6">Whether you are a reader, writer, publisher, or educator, there is a place for you here.</p>
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
