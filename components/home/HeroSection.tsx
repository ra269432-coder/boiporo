'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Visual mosaic grid items
const gridItems = [
  { bg: '#1B5E3B', label: '২০০+', sub: 'বাংলাদেশি লেখক', col: 'col-span-1 row-span-2' },
  { bg: '#2C2C2C', label: '১০,০০০+', sub: 'পাঠক', col: 'col-span-2 row-span-1' },
  { bg: '#8B2335', label: '৫০০+', sub: 'পাঠ চক্র', col: 'col-span-1 row-span-1' },
  { bg: '#B8944A', label: '২,০০০+', sub: 'বই', col: 'col-span-1 row-span-1' },
  { bg: '#1B3A5E', label: '১০০+', sub: 'অনুষ্ঠান', col: 'col-span-2 row-span-1' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F5EF]">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-site w-full pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-[1.5px] bg-[#1B5E3B]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1B5E3B]">
                Bangladesh&apos;s Reading Movement
              </span>
            </motion.div>

            {/* Bangla headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-ink leading-[1.15] mb-6"
              style={{
                fontFamily: "'Hind Siliguri', 'Playfair Display', Georgia, serif",
                letterSpacing: '-0.01em',
              }}
            >
              বাংলাদেশকে আবার
              <span className="block text-[#1B5E3B]">বই পড়ার দেশ</span>
              বানাই।
            </motion.h1>

            {/* English tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl md:text-2xl font-serif text-charcoal mb-5 font-medium"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Let&apos;s build a nation that reads.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base md:text-lg text-muted leading-relaxed max-w-lg mb-10"
            >
              Discover books, meet Bangladeshi writers, join reading communities, and make reading part of everyday life.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/books" className="btn-primary gap-2">
                Explore Books
                <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn-secondary">
                Join the Movement
              </Link>
            </motion.div>

            {/* Divider + tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-12 pt-8 border-t border-[#E4DDD3] flex items-center gap-6"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-0.5">Our tagline</p>
                <p
                  className="text-[#1B5E3B] font-medium"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  পড়ি, ভাবি, বদলাই।
                </p>
              </div>
              <span className="text-[#E4DDD3]">|</span>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-0.5">In English</p>
                <p className="text-charcoal font-medium italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Read. Think. Grow.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual grid mosaic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main grid */}
            <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[480px]">
              {/* Large block — top left */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="col-span-1 row-span-2 rounded-xl overflow-hidden flex flex-col justify-end p-5"
                style={{ backgroundColor: '#1B5E3B' }}
              >
                <div className="text-white/20 text-6xl font-serif mb-auto pt-3" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                  বই
                </div>
                <p className="text-3xl font-bold text-white font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>200+</p>
                <p className="text-white/65 text-sm mt-1" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>বাংলাদেশি লেখক</p>
              </motion.div>

              {/* Wide block — top right */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="col-span-2 row-span-1 rounded-xl overflow-hidden flex items-center justify-between px-6 py-5"
                style={{ backgroundColor: '#2C2C2C' }}
              >
                <div>
                  <p className="text-4xl font-bold text-white font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>10,000+</p>
                  <p className="text-white/55 text-sm mt-1">Active Readers</p>
                </div>
                <div className="text-right">
                  <p className="text-white/20 text-5xl font-serif" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>পাঠক</p>
                </div>
              </motion.div>

              {/* Mid right blocks */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="col-span-1 row-span-1 rounded-xl flex flex-col justify-end p-4"
                style={{ backgroundColor: '#8B2335' }}
              >
                <p className="text-2xl font-bold text-white font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>500+</p>
                <p className="text-white/65 text-xs mt-0.5">Reading Clubs</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="col-span-1 row-span-1 rounded-xl flex flex-col justify-end p-4"
                style={{ backgroundColor: '#B8944A' }}
              >
                <p className="text-2xl font-bold text-white font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>2,000+</p>
                <p className="text-white/65 text-xs mt-0.5" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>বই</p>
              </motion.div>

              {/* Bottom wide */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="col-span-2 row-span-1 rounded-xl flex items-center justify-between px-6 py-4"
                style={{ backgroundColor: '#1B3A5E' }}
              >
                <div>
                  <p className="text-3xl font-bold text-white font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>100+</p>
                  <p className="text-white/55 text-sm">Events Yearly</p>
                </div>
                <div
                  className="text-white/15 text-4xl font-bold"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  অনুষ্ঠান
                </div>
              </motion.div>

              {/* Small corner */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="col-span-1 row-span-1 rounded-xl flex flex-col justify-end p-4 border-2 border-dashed border-[#E4DDD3]"
                style={{ backgroundColor: '#F8F5EF' }}
              >
                <p className="text-lg font-bold text-ink font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                  +You
                </p>
                <p className="text-muted text-xs mt-0.5">Join us</p>
              </motion.div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-[#E4DDD3] opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-[#B8944A]/10" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} className="text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
