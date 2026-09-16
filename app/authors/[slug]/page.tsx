import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowLeft, MapPin, BookOpen, Award } from 'lucide-react';
import { authors, books } from '@/lib/mockData';
import BookCard from '@/components/ui/BookCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) return { title: 'Author Not Found' };
  return {
    title: author.name,
    description: author.shortBio,
  };
}

export async function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

function getAvatarColor(name: string): string {
  const colors = ['#1B5E3B', '#8B2335', '#1B3A5E', '#5B3A1A', '#4A1942', '#7A5C00'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
  return colors[hash % colors.length];
}

function getInitials(name: string): string {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
}

export default async function AuthorDetailPage({ params }: Props) {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) notFound();

  const authorBooks = books.filter((b) => b.authorSlug === author.slug);
  const color = getAvatarColor(author.name);

  return (
    <div className="pt-24 pb-20 bg-[#F8F5EF] min-h-screen">
      <div className="container-site">
        <nav className="flex items-center gap-2 text-xs text-muted mb-6">
          <Link href="/" className="hover:text-green transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/authors" className="hover:text-green transition-colors">Authors</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal font-medium">{author.name}</span>
        </nav>

        <Link href="/authors" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-green mb-8 transition-colors">
          <ArrowLeft size={14} />
          Back to Authors
        </Link>

        {/* Author header */}
        <div className="bg-white rounded-2xl border border-[#E4DDD3] p-8 md:p-12 mb-10">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar */}
            <div
              className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 font-serif"
              style={{ backgroundColor: color, fontFamily: "'Playfair Display', serif" }}
            >
              {getInitials(author.name)}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {author.genres.slice(0, 3).map((g) => (
                  <span key={g} className="tag">{g}</span>
                ))}
                {author.isNewVoice && <span className="tag tag-gold">New Voice</span>}
                {author.isEmerging && <span className="tag tag-red">Emerging</span>}
              </div>

              <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {author.name}
              </h1>
              {author.nameBn && (
                <p className="text-xl text-muted mb-3" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                  {author.nameBn}
                </p>
              )}

              <div className="flex items-center gap-1.5 text-sm text-muted mb-4">
                <MapPin size={14} />
                <span>{author.location}</span>
              </div>

              <p className="text-charcoal leading-relaxed mb-6 max-w-2xl">{author.biography}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-[#1B5E3B]" />
                  <span className="text-sm font-semibold text-ink">{author.bookCount}+ books</span>
                </div>
                {author.specialization && (
                  <div className="text-sm text-muted">{author.specialization}</div>
                )}
              </div>

              {/* Awards */}
              {author.awards && author.awards.length > 0 && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {author.awards.map((award) => (
                      <div key={award} className="flex items-center gap-1.5 text-xs text-[#B8944A] bg-[#F7F1E6] px-3 py-1 rounded-full border border-[#B8944A]/20">
                        <Award size={11} />
                        {award}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Author's books */}
        {authorBooks.length > 0 && (
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-ink mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Books by {author.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {authorBooks.map((book) => <BookCard key={book.id} book={book} />)}
            </div>
          </div>
        )}

        {/* All books from platform with same genre */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-ink mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Related Books You Might Enjoy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {books
              .filter((b) =>
                b.authorSlug !== author.slug &&
                b.genres.some((g) => author.genres.includes(g))
              )
              .slice(0, 4)
              .map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
