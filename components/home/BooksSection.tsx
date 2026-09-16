'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import BookCard from '@/components/ui/BookCard';
import { books, featuredBooks, trendingBooks, newReleases, bookCategories } from '@/lib/mockData';

const tabs = [
  { id: 'featured', label: 'Featured', books: featuredBooks },
  { id: 'trending', label: 'Trending This Month', books: trendingBooks },
  { id: 'new', label: 'New Releases', books: newReleases },
];

export default function BooksSection() {
  const [activeTab, setActiveTab] = useState('featured');
  const [activeCategory, setActiveCategory] = useState('All');

  const currentBooks = tabs.find((t) => t.id === activeTab)?.books ?? featuredBooks;

  const filteredBooks =
    activeCategory === 'All'
      ? currentBooks
      : currentBooks.filter((b) =>
          b.genres.some((g) => g.toLowerCase().includes(activeCategory.toLowerCase())) ||
          b.genre.toLowerCase().includes(activeCategory.toLowerCase())
        );

  const displayBooks = filteredBooks.length > 0 ? filteredBooks : currentBooks.slice(0, 4);

  return (
    <section className="section-padding bg-[#F8F5EF]">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeader
            eyebrow="Curated Library"
            heading="Find Your Next Book"
            headingBn="আপনার পরের বই খুঁজুন"
          />
          <Link href="/books" className="btn-ghost flex-shrink-0 mb-4">
            View all books <ChevronRight size={14} />
          </Link>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-1 p-1 bg-[#F0EBE1] rounded-lg w-fit mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white text-ink shadow-sm'
                  : 'text-muted hover:text-charcoal'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
          {bookCategories.map((cat) => (
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

        {/* Books grid */}
        <motion.div
          key={`${activeTab}-${activeCategory}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {displayBooks.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination hint */}
        <div className="mt-12 text-center">
          <Link
            href="/books"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Browse all {books.length}+ books
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
