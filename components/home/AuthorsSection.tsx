'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, PenLine } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import AuthorCard from '@/components/ui/AuthorCard';
import { featuredAuthors, newVoices, emergingWriters } from '@/lib/mockData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

interface AuthorRowProps {
  title: string;
  authors: typeof featuredAuthors;
  delay?: number;
}

function AuthorRow({ title, authors, delay = 0 }: AuthorRowProps) {
  return (
    <div className="mb-14">
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex items-center gap-4 mb-6"
      >
        <h3
          className="text-xl font-bold text-ink"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {title}
        </h3>
        <span className="flex-1 h-px bg-[#E4DDD3]" />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        {authors.map((author) => (
          <motion.div key={author.id} variants={itemVariants}>
            <AuthorCard author={author} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function AuthorsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Bangladesh's Writers"
            heading="Meet Bangladesh's Writers"
            description="Discover established voices and emerging writers shaping Bangladesh's literary landscape."
          />
          <Link href="/authors" className="btn-ghost flex-shrink-0 mb-4">
            All authors <ChevronRight size={14} />
          </Link>
        </div>

        {/* Author rows */}
        <AuthorRow title="Featured Authors" authors={featuredAuthors} />
        {newVoices.length > 0 && (
          <AuthorRow title="New Voices" authors={newVoices} delay={0.1} />
        )}
        {emergingWriters.length > 0 && (
          <AuthorRow title="Emerging Writers" authors={emergingWriters} delay={0.15} />
        )}

        {/* Writer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 p-8 md:p-12 rounded-xl border-2 border-dashed border-[#E4DDD3] flex flex-col md:flex-row items-center justify-between gap-6 bg-[#F8F5EF]"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-[#1B5E3B]/10 flex items-center justify-center flex-shrink-0">
              <PenLine className="text-[#1B5E3B]" size={22} strokeWidth={1.8} />
            </div>
            <div>
              <h3
                className="text-xl font-bold text-ink mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Are you a writer?
              </h3>
              <p className="text-charcoal max-w-md">
                Share your work with Bangladesh. Create your author profile, showcase your books and connect with readers across the country.
              </p>
            </div>
          </div>
          <Link href="/writers" className="btn-primary flex-shrink-0">
            For Writers
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
