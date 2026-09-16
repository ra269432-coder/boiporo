import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Star, BookOpen, ArrowLeft } from 'lucide-react';
import { books } from '@/lib/mockData';
import BookCard from '@/components/ui/BookCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) return { title: 'Book Not Found' };
  return {
    title: book.title,
    description: book.shortDescription,
  };
}

export async function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export default async function BookDetailPage({ params }: Props) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) notFound();

  const related = books.filter(
    (b) => b.id !== book.id && b.genres.some((g) => book.genres.includes(g))
  ).slice(0, 4);

  return (
    <div className="pt-24 pb-20 bg-[#F8F5EF] min-h-screen">
      <div className="container-site">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-8">
          <Link href="/" className="hover:text-green transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/books" className="hover:text-green transition-colors">Books</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal font-medium line-clamp-1">{book.title}</span>
        </nav>

        <Link href="/books" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-green mb-8 transition-colors">
          <ArrowLeft size={14} />
          Back to Books
        </Link>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Cover + meta */}
          <div className="lg:col-span-1">
            {/* Book cover */}
            <div
              className="w-full max-w-xs mx-auto lg:mx-0 aspect-[2/3] rounded-xl flex flex-col justify-between p-8 mb-6 shadow-lg"
              style={{ backgroundColor: book.coverColor }}
            >
              <div className="flex gap-1.5">
                {book.featured && (
                  <span className="px-2 py-0.5 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wide rounded">
                    Featured
                  </span>
                )}
              </div>
              <div>
                <h1 className="text-white text-2xl font-bold leading-snug mb-2 font-serif"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {book.titleBn || book.title}
                </h1>
                <p className="text-white/65 text-sm">{book.author}</p>
              </div>
            </div>

            {/* Meta card */}
            <div className="bg-white rounded-xl border border-[#E4DDD3] p-5 space-y-3">
              {[
                { label: 'Author', value: book.author },
                { label: 'Genre', value: book.genre },
                { label: 'Year', value: String(book.year) },
                { label: 'Pages', value: `${book.pages} pages` },
                { label: 'Language', value: book.language === 'bangla' ? 'বাংলা' : book.language === 'english' ? 'English' : 'Bilingual' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm">
                  <span className="text-muted">{label}</span>
                  <span className="text-charcoal font-medium text-right">{value}</span>
                </div>
              ))}

              {/* Rating */}
              <div className="pt-3 border-t border-[#E4DDD3]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'fill-[#B8944A] text-[#B8944A]' : 'text-[#E4DDD3]'}`} />
                    ))}
                  </div>
                  <span className="font-bold text-[#B8944A]">{book.rating}</span>
                  <span className="text-xs text-muted">({book.reviewCount.toLocaleString()} reviews)</span>
                </div>
              </div>
            </div>

            {/* Find the book */}
            <div className="mt-4 p-5 bg-[#EBF5EF] rounded-xl border border-[#1B5E3B]/20">
              <p className="text-xs font-bold uppercase tracking-wider text-[#1B5E3B] mb-2">
                Where to Find This Book
              </p>
              <p className="text-sm text-charcoal mb-4">
                Look for this book at your local bookshop, public library or online retailers.
              </p>
              <div className="space-y-2">
                {['Rokomari.com', 'Wafilife.com', 'Your Local Library'].map((store) => (
                  <div key={store} className="flex items-center gap-2 text-sm">
                    <BookOpen size={13} className="text-[#1B5E3B]" />
                    <span className="text-charcoal">{store}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2 mb-4">
              {book.genres.map((g) => (
                <span key={g} className="tag">{g}</span>
              ))}
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {book.title}
            </h1>
            {book.titleBn && book.titleBn !== book.title && (
              <p className="text-xl text-muted mb-4" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                {book.titleBn}
              </p>
            )}
            <p className="text-lg text-charcoal mb-8">by {book.author}</p>

            {/* Description */}
            <div className="prose prose-sm max-w-none mb-10">
              <h2 className="font-serif text-xl font-bold text-ink mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                About This Book
              </h2>
              <p className="text-charcoal leading-relaxed text-base">{book.description}</p>
            </div>

            {/* Why read */}
            {book.whyRead && (
              <div className="bg-[#F7F1E6] border-l-4 border-[#B8944A] rounded-r-xl p-6 mb-10">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B8944A] mb-2">Why Read This</p>
                <p className="text-charcoal italic leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  &ldquo;{book.whyRead}&rdquo;
                </p>
              </div>
            )}

            {/* Tags */}
            {book.tags.length > 0 && (
              <div className="mb-10">
                <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">Topics</p>
                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white border border-[#E4DDD3] rounded-full text-xs text-charcoal">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Reader reviews placeholder */}
            <div className="mb-10">
              <h2 className="font-serif text-xl font-bold text-ink mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Reader Reviews
              </h2>
              <div className="space-y-4">
                {[
                  { name: 'Farhan H.', text: 'One of the most important books I have ever read. Essential for any Bangladeshi reader.', rating: 5 },
                  { name: 'Nusrat J.', text: 'Beautiful writing. I finished it in two days and immediately started again.', rating: 5 },
                ].map((review, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-[#E4DDD3]">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#1B5E3B] flex items-center justify-center text-white text-sm font-bold">
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-ink">{review.name}</p>
                        <div className="flex gap-0.5">
                          {[...Array(review.rating)].map((_, j) => (
                            <Star key={j} className="w-3 h-3 fill-[#B8944A] text-[#B8944A]" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-charcoal leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related books */}
        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-[#E4DDD3]">
            <h2 className="font-serif text-2xl font-bold text-ink mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              You Might Also Enjoy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((b) => <BookCard key={b.id} book={b} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
