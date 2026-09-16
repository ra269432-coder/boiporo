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
              <p className="text-xs uppercase tracking-widest text-muted font-semibold mb-4">
                One theme per month
              </p>
              {readingChallengeMonths.map((month, i) => (
                <motion.div
                  key={month.month}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                    i < DEMO_PROGRESS
                      ? 'bg-[#EBF5EF]'
                      : 'bg-white border border-[#E4DDD3]'
                  }`}
                >
                  {i < DEMO_PROGRESS ? (
                    <CheckCircle2 size={16} className="text-[#1B5E3B] flex-shrink-0" />
                  ) : (
                    <Circle size={16} className="text-[#C8BFB4] flex-shrink-0" />
                  )}
                  <div className="flex items-center justify-between flex-1 gap-4 min-w-0">
                    <span className={`text-sm font-medium ${i < DEMO_PROGRESS ? 'text-[#1B5E3B]' : 'text-charcoal'}`}>
                      {month.monthName}
                    </span>
                    <span
                      className={`text-sm flex-1 ${i < DEMO_PROGRESS ? 'text-[#2D7A52]' : 'text-muted'}`}
                      style={{ fontFamily: i % 2 === 0 ? "'Playfair Display', serif" : undefined }}
                    >
                      {month.theme}
                    </span>
                    <span
                      className="text-xs text-muted hidden sm:block"
                      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
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
              className="bg-white border border-[#E4DDD3] rounded-2xl p-8 shadow-sm"
            >
              {/* Demo badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F7F1E6] rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8944A]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B8944A]">
                  Demo — Example Reading Profile
                </span>
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#1B5E3B] flex items-center justify-center text-white font-bold font-serif text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  F
                </div>
                <div>
                  <p className="font-semibold text-ink">Farhan Hossain</p>
                  <p className="text-xs text-muted">Dhaka · Reading since 2026</p>
                </div>
              </div>

              {/* Progress ring visual */}
              <div className="text-center mb-8">
                <div className="relative inline-flex items-center justify-center w-40 h-40 mb-4">
                  <svg className="w-40 h-40 -rotate-90" viewBox="0 0 144 144">
                    <circle
                      cx="72" cy="72" r="60"
                      fill="none"
                      stroke="#E4DDD3"
                      strokeWidth="10"
                    />
                    <circle
                      cx="72" cy="72" r="60"
                      fill="none"
                      stroke="#1B5E3B"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 60}`}
                      strokeDashoffset={`${2 * Math.PI * 60 * (1 - DEMO_PROGRESS / 12)}`}
                      style={{ transition: 'stroke-dashoffset 1.5s ease' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-ink font-serif"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                      {DEMO_PROGRESS}
                    </span>
                    <span className="text-muted text-sm">/ 12 Books</span>
                  </div>
                </div>

                <h3
                  className="text-xl font-bold text-ink mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  One Reading Journey
                </h3>
                <p className="text-sm text-muted">7 books completed · 5 remaining</p>
              </div>

              {/* Streak */}
              <div className="flex items-center justify-between p-4 bg-[#FFF8F0] rounded-xl border border-[#F0DFC4] mb-6">
                <div className="flex items-center gap-2">
                  <Flame size={20} className="text-orange-500" />
                  <div>
                    <p className="text-sm font-bold text-ink">Reading Streak</p>
                    <p className="text-xs text-muted">Keep it going!</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-ink font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                    18
                  </p>
                  <p className="text-xs text-muted">days</p>
                </div>
              </div>

              {/* Monthly dots */}
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-3">
                  Your 2026 Reading Year
                </p>
                <div className="grid grid-cols-12 gap-1">
                  {readingChallengeMonths.map((m, i) => (
                    <div
                      key={m.month}
                      title={m.monthName}
                      className={`h-6 rounded-sm ${i < DEMO_PROGRESS ? 'bg-[#1B5E3B]' : 'bg-[#E4DDD3]'}`}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-muted">Jan</span>
                  <span className="text-[10px] text-muted">Dec</span>
                </div>
              </div>

              <button className="btn-primary w-full justify-center mt-6">
                Start the Challenge
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
