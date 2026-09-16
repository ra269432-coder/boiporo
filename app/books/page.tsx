import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import BookCard from '@/components/ui/BookCard';
import { books, bookCategories } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'Books',
  description: 'Browse the PoraBangla library — Bangladeshi books, Bangla literature, English fiction, poetry, history and more.',
};

export default function BooksPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  return (
    <div className="pt-24 pb-20 bg-[#F8F5EF] min-h-screen">
      <div className="container-site">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal font-medium">Books</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <span className="divider mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Our Library
          </h1>
          <p className="text-charcoal text-lg max-w-xl">
            Curated books for Bangladeshi readers — from classic Bangla literature to contemporary fiction, history, science and personal growth.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-hide">
          {bookCategories.map((cat) => (
            <Link
              key={cat}
              href={cat === 'All' ? '/books' : `/books?category=${encodeURIComponent(cat)}`}
              className="flex-shrink-0 px-4 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 text-muted border-[#E4DDD3] hover:border-[#1B5E3B] hover:text-[#1B5E3B] bg-white"
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Books grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
