'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { UserCircle2, BookMarked, FileText, CalendarDays, Users, Compass, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const features = [
  { icon: UserCircle2, label: 'Create Writer Profile', description: 'Build a professional author page on Bangladesh\'s reading platform.' },
  { icon: BookMarked, label: 'Showcase Your Books', description: 'List your published works and reach readers across Bangladesh.' },
  { icon: FileText, label: 'Publish Articles', description: 'Share essays, excerpts and creative writing with our community.' },
  { icon: CalendarDays, label: 'Join Literary Events', description: 'Participate in author meets, workshops and reading festivals.' },
  { icon: Users, label: 'Connect With Readers', description: 'Build a readership and engage directly with your audience.' },
  { icon: Compass, label: 'Discover Writing Opportunities', description: 'Find publishers, festivals and collaborative opportunities.' },
];

export default function ForWritersSection() {
  return (
    <section className="section-padding bg-[#F8F5EF]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeader
              eyebrow="For Writers"
              heading="Your Story Deserves to Be Read"
              headingBn="আপনার গল্প পড়ার অপেক্ষায়"
              description="Whether you're publishing your first poem or your tenth book, PoraBangla is a place to discover, connect and share."
            />

            <div className="space-y-4 mb-10">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.45 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#EBF5EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={17} className="text-[#1B5E3B]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink text-sm mb-0.5">{feature.label}</h4>
                      <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/writers" className="btn-primary">
                Join as a Writer
              </Link>
              <Link href="/authors" className="btn-secondary">
                Explore Writers
              </Link>
            </div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main card */}
            <div className="bg-white rounded-2xl border border-[#E4DDD3] shadow-sm p-8 relative">
              {/* Profile mock */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#E4DDD3]">
                <div className="w-16 h-16 rounded-full bg-[#1B5E3B] flex items-center justify-center text-white text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  আ
                </div>
                <div>
                  <p className="font-bold text-ink text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>আনিসুল হক</p>
                  <p className="text-muted text-sm">Anisul Haque</p>
                  <div className="flex gap-2 mt-1.5">
                    <span className="tag text-[10px]">Fiction</span>
                    <span className="tag text-[10px]">Drama</span>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-[#E4DDD3]">
                {[
                  { value: '80+', label: 'Books' },
                  { value: '12K', label: 'Followers' },
                  { value: '4.8★', label: 'Avg. Rating' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-xl font-bold text-ink" style={{ fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
                    <p className="text-xs text-muted">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Books */}
              <p className="text-xs uppercase tracking-wider font-bold text-muted mb-3">Latest Books</p>
              <div className="space-y-2">
                {[
                  { title: 'মা', year: '2003', color: '#1B5E3B' },
                  { title: 'কী করে বুঝবো', year: '2019', color: '#8B2335' },
                ].map((book) => (
                  <div key={book.title} className="flex items-center gap-3">
                    <div className="w-8 h-11 rounded flex-shrink-0" style={{ backgroundColor: book.color }} />
                    <div>
                      <p className="text-sm font-semibold text-ink" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>{book.title}</p>
                      <p className="text-xs text-muted">{book.year}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="btn-ghost mt-5 text-xs">View full profile <ArrowRight size={11} /></button>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#B8944A] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              Writer Profile
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
