'use client';

import { motion } from 'framer-motion';
import { Flame, CheckCircle2, Circle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { readingChallengeMonths } from '@/lib/mockData';

const DEMO_PROGRESS = 7; // out of 12 — clearly marked as demo

export default function ReadingChallengeSection() {
  return (
    <section className="section-padding bg-[#F8F5EF]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Description */}
          <div>
            <SectionHeader
              eyebrow="Reading Challenge"
              heading="12 Books. 12 Months."
              headingBn="এক বছর, বারোটি বই।"
              description="Build a sustainable reading habit by discovering one meaningful book every month. Each month explores a different genre — keeping your reading life varied and purposeful."
            />

            <div className="mt-8 space-y-2">
              <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: '#0E9E6E' }}>
                One theme per month
              </p>
              {readingChallengeMonths.map((month, i) => (
                <motion.div
                  key={month.month}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  whileHover={{ scale: 1.01, x: 4 }}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                    i < DEMO_PROGRESS
                      ? 'shadow-[0_4px_16px_rgba(14,158,110,0.12)]'
                      : 'bg-white border border-[#E5E5F0] hover:border-[rgba(14,158,110,0.3)]'
                  }`}
                  style={i < DEMO_PROGRESS ? { background: 'linear-gradient(135deg, rgba(14,158,110,0.15), rgba(14,158,110,0.05))', border: '1px solid rgba(14,158,110,0.2)' } : undefined}
                >
                  {i < DEMO_PROGRESS ? (
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full animate-ping opacity-50" style={{ background: '#34D399' }} />
                      <CheckCircle2 size={18} className="relative z-10" style={{ color: '#0E9E6E' }} />
                    </div>
                  ) : (
                    <Circle size={18} className="flex-shrink-0" style={{ color: '#C5C5D8' }} />
                  )}
                  <div className="flex items-center justify-between flex-1 gap-4 min-w-0">
                    <span className="text-sm font-bold" style={{ color: i < DEMO_PROGRESS ? '#065F46' : '#1E1E2C' }}>
                      {month.monthName}
                    </span>
                    <span
                      className="text-sm flex-1 font-medium"
                      style={{
                        color: i < DEMO_PROGRESS ? '#0E9E6E' : '#6B6878',
                        fontFamily: i % 2 === 0 ? "'Playfair Display', serif" : undefined,
                      }}
                    >
                      {month.theme}
                    </span>
                    <span
                      className="text-xs hidden sm:block font-medium"
                      style={{ color: i < DEMO_PROGRESS ? '#065F46' : '#6B6878', fontFamily: "'Hind Siliguri', sans-serif" }}
                    >
                      {month.themeBn}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Progress demo */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-[#E5E5F0] rounded-3xl p-8 shadow-[0_8px_32px_rgba(13,13,18,0.06)] relative overflow-hidden"
            >
              {/* Background accent glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0E9E6E] opacity-[0.03] rounded-full blur-[60px] pointer-events-none" />

              {/* Demo badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-6" style={{ background: 'rgba(212,130,26,0.1)', border: '1px solid rgba(212,130,26,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#FCD34D' }} />
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#D4821A' }}>
                  Demo — Example Reading Profile
                </span>
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold font-serif text-xl shadow-[0_4px_16px_rgba(14,158,110,0.3)]"
                  style={{ fontFamily: "'Playfair Display', serif", background: 'linear-gradient(135deg, #0E9E6E, #065F46)' }}
                >
                  F
                </div>
                <div>
                  <p className="font-bold text-lg text-[#0D0D12]">Farhan Hossain</p>
                  <p className="text-xs font-medium text-[#6B6878]">Dhaka · Reading since 2026</p>
                </div>
              </div>

              {/* Progress ring visual */}
              <div className="text-center mb-8 relative z-10">
                <div className="relative inline-flex items-center justify-center w-48 h-48 mb-4">
                  <svg className="w-48 h-48 -rotate-90 drop-shadow-[0_0_12px_rgba(14,158,110,0.3)]" viewBox="0 0 144 144">
                    <defs>
                      <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#34D399" />
                        <stop offset="100%" stopColor="#0E9E6E" />
                      </linearGradient>
                    </defs>
                    <circle cx="72" cy="72" r="60" fill="none" stroke="#F0F0F8" strokeWidth="12" />
                    <circle
                      cx="72" cy="72" r="60"
                      fill="none"
                      stroke="url(#progressGrad)"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 60}`}
                      strokeDashoffset={`${2 * Math.PI * 60 * (1 - DEMO_PROGRESS / 12)}`}
                      style={{ transition: 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[2.75rem] font-bold font-serif leading-none"
                      style={{ fontFamily: "'Playfair Display', serif", background: 'linear-gradient(135deg, #0E9E6E, #065F46)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {DEMO_PROGRESS}
                    </span>
                    <span className="text-[#6B6878] text-sm font-semibold mt-1">/ 12 Books</span>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-[#0D0D12] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  One Reading Journey
                </h3>
                <p className="text-sm font-medium text-[#4B4B5A]">7 books completed · 5 remaining</p>
              </div>

              {/* Streak */}
              <div className="flex items-center justify-between p-5 rounded-2xl border mb-6 relative overflow-hidden group"
                style={{ background: 'linear-gradient(135deg, rgba(212,130,26,0.1), rgba(212,130,26,0.02))', borderColor: 'rgba(212,130,26,0.2)' }}>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ background: 'rgba(212,130,26,0.15)' }}>
                    <Flame size={20} style={{ color: '#D4821A' }} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0D0D12]">Reading Streak</p>
                    <p className="text-xs font-medium text-[#D4821A]">Keep it going!</p>
                  </div>
                </div>
                <div className="text-right relative z-10">
                  <p className="text-3xl font-bold font-serif leading-none" style={{ fontFamily: "'Playfair Display', serif", color: '#D4821A' }}>
                    18
                  </p>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-[#D4821A] mt-1">days</p>
                </div>
              </div>

              {/* Monthly dots */}
              <div className="relative z-10">
                <p className="text-xs text-[#6B6878] uppercase tracking-wider font-bold mb-3">
                  Your 2026 Reading Year
                </p>
                <div className="grid grid-cols-12 gap-1.5">
                  {readingChallengeMonths.map((m, i) => (
                    <div
                      key={m.month}
                      title={m.monthName}
                      className="h-8 rounded-md transition-colors"
                      style={{
                        background: i < DEMO_PROGRESS ? 'linear-gradient(180deg, #34D399, #0E9E6E)' : '#E5E5F0',
                        boxShadow: i < DEMO_PROGRESS ? '0 2px 8px rgba(14,158,110,0.3)' : 'none',
                        opacity: i < DEMO_PROGRESS ? 1 : 0.6
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] font-bold text-[#6B6878] uppercase">Jan</span>
                  <span className="text-[10px] font-bold text-[#6B6878] uppercase">Dec</span>
                </div>
              </div>

              <button className="w-full mt-8 py-3.5 rounded-xl font-bold text-white shadow-[0_4px_16px_rgba(14,158,110,0.35)] hover:shadow-[0_8px_24px_rgba(14,158,110,0.5)] transition-all hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #0E9E6E, #065F46)' }}>
                Start the Challenge
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
