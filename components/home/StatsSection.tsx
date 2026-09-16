'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const stats = [
  {
    value: 10000, suffix: '+', label: 'Readers', labelBn: 'পাঠক',
    description: 'Active members on PoraBangla',
    color: '#0E9E6E', glow: '#34D399',
    gradient: 'linear-gradient(135deg, rgba(14,158,110,0.2), rgba(14,158,110,0.05))',
    border: 'rgba(14,158,110,0.25)',
    textGrad: 'linear-gradient(135deg, #34D399, #0E9E6E)',
  },
  {
    value: 2000, suffix: '+', label: 'Books', labelBn: 'বই',
    description: 'In our curated library',
    color: '#D4821A', glow: '#FCD34D',
    gradient: 'linear-gradient(135deg, rgba(212,130,26,0.2), rgba(212,130,26,0.05))',
    border: 'rgba(212,130,26,0.25)',
    textGrad: 'linear-gradient(135deg, #FCD34D, #D4821A)',
  },
  {
    value: 500, suffix: '+', label: 'Reading Communities', labelBn: 'পাঠচক্র',
    description: 'Across Bangladesh',
    color: '#6D28D9', glow: '#A78BFA',
    gradient: 'linear-gradient(135deg, rgba(109,40,217,0.2), rgba(109,40,217,0.05))',
    border: 'rgba(109,40,217,0.25)',
    textGrad: 'linear-gradient(135deg, #A78BFA, #6D28D9)',
  },
  {
    value: 200, suffix: '+', label: 'Writers', labelBn: 'লেখক',
    description: 'Featured on the platform',
    color: '#C2183A', glow: '#FB7185',
    gradient: 'linear-gradient(135deg, rgba(194,24,58,0.2), rgba(194,24,58,0.05))',
    border: 'rgba(194,24,58,0.25)',
    textGrad: 'linear-gradient(135deg, #FB7185, #C2183A)',
  },
];

export default function StatsSection() {
  return (
    <section className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060D14 0%, #0B1F16 50%, #0D0A1C 100%)' }}>

      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(14,158,110,0.15) 0%, rgba(109,40,217,0.1) 50%, transparent 70%)' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        {/* Big text watermark */}
        <div className="absolute inset-0 flex items-center justify-center select-none overflow-hidden">
          <span className="text-[20vw] font-bold text-white/[0.018] whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Bangladesh Reads
          </span>
        </div>
      </div>

      <div className="container-site relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(14,158,110,0.12)', border: '1px solid rgba(14,158,110,0.25)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#34D399' }} />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold" style={{ color: '#34D399' }}>
              Platform Statistics
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Bangladesh Reads
          </h2>
          <p className="text-xl font-medium mb-2" style={{ fontFamily: "'Hind Siliguri', sans-serif", color: 'rgba(255,255,255,0.45)' }}>
            বাংলাদেশ পড়ে
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="text-center p-7 rounded-2xl relative overflow-hidden cursor-default"
              style={{ background: stat.gradient, border: `1px solid ${stat.border}` }}
            >
              {/* Glow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full opacity-25 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${stat.glow}, transparent)` }} />

              {/* Number */}
              <div className="text-5xl md:text-6xl font-bold mb-2 relative z-10"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  background: stat.textGrad,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2200} />
              </div>

              <h3 className="text-sm font-bold text-white mb-1">{stat.label}</h3>
              <p className="text-xs font-medium mb-2" style={{ color: stat.glow, fontFamily: "'Hind Siliguri', sans-serif" }}>
                {stat.labelBn}
              </p>
              <p className="text-[11px] text-white/35">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#D4821A' }} />
            <p className="text-xs text-white/35">
              <span className="font-semibold text-white/50">Demo data.</span>{' '}
              Statistics will be updated from verified participation data.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
