'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const stats = [
  { value: 10000, suffix: '+', label: 'Readers', labelBn: 'পাঠক', description: 'Active members on PoraBangla' },
  { value: 2000, suffix: '+', label: 'Books', labelBn: 'বই', description: 'In our curated library' },
  { value: 500, suffix: '+', label: 'Reading Communities', labelBn: 'পাঠচক্র', description: 'Across Bangladesh' },
  { value: 200, suffix: '+', label: 'Bangladeshi Writers', labelBn: 'লেখক', description: 'Featured on the platform' },
];

export default function StatsSection() {
  return (
    <section className="section-padding bg-[#0F2D1C] relative overflow-hidden">
      {/* Decorative text */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[20vw] font-bold text-white/[0.025] whitespace-nowrap"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Bangladesh Reads
        </span>
      </div>

      <div className="container-site relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B8944A] mb-4">
            Platform Statistics
          </p>
          <span className="divider mx-auto mb-5 bg-[#B8944A]" />
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Bangladesh Reads
          </h2>
          <p
            className="text-xl text-white/60"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            বাংলাদেশ পড়ে
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-white font-serif mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2200} />
              </div>
              <h3 className="text-base font-semibold text-white mb-0.5">{stat.label}</h3>
              <p
                className="text-sm text-[#B8944A] mb-2"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                {stat.labelBn}
              </p>
              <p className="text-xs text-white/40">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8944A] animate-pulse" />
            <p className="text-xs text-white/40">
              <span className="font-semibold text-white/60">Demo data.</span>{' '}
              Platform statistics will be updated from verified participation data.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
