'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

const stats = [
  { num: '200+', label: 'Writers', labelBn: 'লেখক', color: '#0E9E6E', glow: 'rgba(14,158,110,0.4)' },
  { num: '10K+', label: 'Readers', labelBn: 'পাঠক', color: '#34D399', glow: 'rgba(52,211,153,0.4)' },
  { num: '500+', label: 'Clubs', labelBn: 'পাঠ চক্র', color: '#059669', glow: 'rgba(5,150,105,0.4)' },
  { num: '2K+', label: 'Books', labelBn: 'বই', color: '#10B981', glow: 'rgba(16,185,129,0.4)' },
  { num: '100+', label: 'Events', labelBn: 'অনুষ্ঠান', color: '#FCD34D', glow: 'rgba(252,211,77,0.4)' },
];

const orbs = [
  { w: 600, h: 600, x: -15, y: -20, color: 'radial-gradient(circle, rgba(14,158,110,0.18) 0%, transparent 70%)' },
  { w: 500, h: 500, x: 65, y: 10, color: 'radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)' },
  { w: 400, h: 400, x: 30, y: 55, color: 'radial-gradient(circle, rgba(5,150,105,0.12) 0%, transparent 70%)' },
  { w: 350, h: 350, x: 80, y: 60, color: 'radial-gradient(circle, rgba(252,211,77,0.1) 0%, transparent 70%)' },
];

function FloatingOrb({ orb, i }: { orb: typeof orbs[0]; i: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: orb.w,
        height: orb.h,
        left: `${orb.x}%`,
        top: `${orb.y}%`,
        background: orb.color,
        filter: 'blur(40px)',
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -25, 15, 0],
        scale: [1, 1.08, 0.95, 1],
      }}
      transition={{
        duration: 10 + i * 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: i * 1.5,
      }}
    />
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero_bg.jpg')" }}
      />

      {/* Full Green Overlay to let photo show through */}
      <div className="absolute inset-0 z-0 bg-[#064E3B]/30" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#047857]/95 via-[#059669]/70 to-transparent" />

      {/* Background orbs (reduced opacity) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {orbs.map((orb, i) => (
          <FloatingOrb key={i} orb={{...orb, color: orb.color.replace('0.15', '0.1').replace('0.18', '0.1')}} i={i} />
        ))}

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(14,158,110,0.2) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(14,158,110,0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Scanline top gradient */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(14,158,110,0.3)] to-transparent" />
      </div>

      <div className="container-site w-full pt-32 pb-20 md:pt-40 md:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* ── LEFT: Text ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-[#0E9E6E] bg-white shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0E9E6E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]" />
              </span>
              <Sparkles size={12} className="text-[#059669]" />
              <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#059669]">
                Bangladesh's Reading Movement
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold leading-[1.1] mb-6 drop-shadow-md"
              style={{ fontFamily: "'Hind Siliguri', Georgia, serif" }}
            >
              <span className="text-white drop-shadow-sm">বাংলাদেশকে </span>
              <span className="text-white drop-shadow-sm">আবার </span>
              <br />
              <span
                className="inline-block"
                style={{
                  background: 'linear-gradient(135deg, #0E9E6E, #047857)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                বই পড়ার দেশ
              </span>
              <br />
              <span className="text-white drop-shadow-sm">বানাই।</span>
            </motion.h1>

            {/* English tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-xl md:text-2xl font-medium text-white/90 mb-4 italic drop-shadow-sm"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Let&apos;s build a nation that reads.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg mb-10 drop-shadow-sm font-medium"
            >
              Discover books, meet Bangladeshi writers, join reading communities, and make reading part of everyday life.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Link
                href="/books"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white text-sm"
                style={{
                  background: 'linear-gradient(135deg, #0E9E6E, #065F46)',
                  boxShadow: '0 4px 20px rgba(14,158,110,0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
                }}
              >
                Explore Books <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-[#4B4B5A] text-sm border border-[#E5E5F0] bg-white hover:border-[#C5C5D8] hover:text-[#0D0D12] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Join the Movement
              </Link>
            </motion.div>

            {/* Tagline pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <div className="px-4 py-2 rounded-lg bg-white border border-[#E5E5F0] shadow-sm">
                <span className="text-[#0E9E6E] font-medium text-sm" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                  পড়ি, ভাবি, বদলাই।
                </span>
              </div>
              <div className="h-5 w-px bg-[#E5E5F0] hidden sm:block" />
              <div className="px-4 py-2 rounded-lg bg-white border border-[#E5E5F0] shadow-sm">
                <span className="text-[#6B6878] italic text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Read. Think. Grow.
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Visual mosaic ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Stats mosaic */}
            <div className="grid grid-cols-3 gap-3 h-[500px]">
              {/* Big card — writers */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.25 }}
                className="col-span-1 row-span-2 rounded-2xl flex flex-col justify-between p-6 overflow-hidden relative cursor-default"
                style={{
                  background: 'white',
                  border: '1px solid #E5E5F0',
                  boxShadow: '0 4px 24px rgba(14,158,110,0.06)'
                }}
              >
                <div
                  className="text-6xl font-bold text-[rgba(14,158,110,0.06)]"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  বই
                </div>
                <div className="relative z-10">
                  <p
                    className="text-4xl font-bold mb-1"
                    style={{
                      background: 'linear-gradient(135deg, #0E9E6E, #047857)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    200+
                  </p>
                  <p className="text-[#4B4B5A] font-medium text-sm" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                    বাংলাদেশি লেখক
                  </p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #34D399, transparent)' }} />
              </motion.div>

              {/* Wide top — readers */}
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.25 }}
                className="col-span-2 rounded-2xl flex items-center justify-between px-7 py-5 relative overflow-hidden cursor-default"
                style={{
                  background: 'white',
                  border: '1px solid #E5E5F0',
                  boxShadow: '0 4px 24px rgba(212,130,26,0.06)'
                }}
              >
                <div className="relative z-10">
                  <p
                    className="text-4xl font-bold"
                    style={{
                      color: '#D4821A',
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    10,000+
                  </p>
                  <p className="text-[#4B4B5A] font-medium text-sm mt-1">Active Readers</p>
                </div>
                <div className="text-6xl font-bold text-[rgba(212,130,26,0.06)]" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                  পাঠক
                </div>
              </motion.div>

              {/* Mid — clubs */}
              <motion.div
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.25 }}
                className="col-span-1 rounded-2xl flex flex-col justify-end p-4 relative overflow-hidden cursor-default"
                style={{
                  background: 'white',
                  border: '1px solid #E5E5F0',
                  boxShadow: '0 4px 24px rgba(15,118,110,0.06)'
                }}
              >
                <p className="text-2xl font-bold" style={{ color: '#0F766E' }}>
                  500+
                </p>
                <p className="text-[#4B4B5A] font-medium text-xs mt-0.5">Reading Clubs</p>
              </motion.div>

              {/* Mid — books */}
              <motion.div
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.25 }}
                className="col-span-1 rounded-2xl flex flex-col justify-end p-4 relative overflow-hidden cursor-default"
                style={{
                  background: 'white',
                  border: '1px solid #E5E5F0',
                  boxShadow: '0 4px 24px rgba(5,150,105,0.06)'
                }}
              >
                <p className="text-2xl font-bold" style={{ color: '#059669' }}>
                  2,000+
                </p>
                <p className="text-[#4B4B5A] font-medium text-xs mt-0.5" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>বই</p>
              </motion.div>

              {/* Bottom wide — events */}
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.25 }}
                className="col-span-2 rounded-2xl flex items-center justify-between px-7 py-4 relative overflow-hidden cursor-default"
                style={{
                  background: 'white',
                  border: '1px solid #E5E5F0',
                  boxShadow: '0 4px 24px rgba(6,78,59,0.06)'
                }}
              >
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#064E3B', fontFamily: "'Playfair Display', serif" }}>
                    100+
                  </p>
                  <p className="text-[#4B4B5A] text-sm">Events Yearly</p>
                </div>
                <div className="text-[rgba(6,78,59,0.06)] text-4xl font-bold" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                  অনুষ্ঠান
                </div>
              </motion.div>

              {/* Join card */}
              <Link href="/about" className="block w-full h-full">
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full rounded-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden cursor-pointer group"
                  style={{
                    background: '#F8F9FA',
                    border: '1.5px dashed #C5C5D8',
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-2 border border-[#E5E5F0] group-hover:bg-[#0E9E6E] transition-colors">
                    <span className="text-[#6B6878] group-hover:text-white text-lg font-bold">+</span>
                  </div>
                  <p className="text-[#6B6878] group-hover:text-[#0E9E6E] transition-colors text-xs font-semibold">Join Us</p>
                </motion.div>
              </Link>
            </div>

            {/* Decorative rings */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-[rgba(14,158,110,0.15)] pointer-events-none" />
            <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border border-[rgba(14,158,110,0.1)] pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(212,130,26,0.08), transparent)' }} />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-[#34D399]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
