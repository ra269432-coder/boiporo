'use client';

import { motion } from 'framer-motion';
import { FileText, TrendingUp, Calendar } from 'lucide-react';

export default function AnnualReportSection() {
  return (
    <section className="section-padding bg-[#F8F5EF]">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-[#0F2D1C] rounded-2xl overflow-hidden">
            {/* Header band */}
            <div className="px-8 py-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="text-[#B8944A]" size={20} strokeWidth={1.8} />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B8944A]">
                  Annual Publication
                </span>
              </div>
              <span className="tag tag-gold text-[10px]">Coming 2027</span>
            </div>

            {/* Main content */}
            <div className="px-8 py-10 flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Left: Details */}
              <div className="flex-1">
                <p className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-3">
                  PoraBangla Research
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Bangladesh Reading Report
                </h2>
                <p className="text-5xl font-bold text-[#B8944A] mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  2027
                </p>
                <p className="text-white/60 text-sm leading-relaxed max-w-md mb-8">
                  "An annual look at how Bangladesh reads, what we read and how reading communities are growing. Based on verified platform data, partner research and community surveys."
                </p>

                {/* Preview metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { icon: TrendingUp, label: 'Reading Trends' },
                    { icon: Calendar, label: 'Annual Review' },
                    { icon: FileText, label: 'Full Data Report' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10">
                      <Icon size={18} className="text-[#B8944A]" strokeWidth={1.5} />
                      <p className="text-[11px] text-white/50 text-center font-medium">{label}</p>
                    </div>
                  ))}
                </div>

                <button
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#B8944A]/20 hover:bg-[#B8944A]/30 text-[#B8944A] border border-[#B8944A]/30 rounded font-semibold text-sm transition-colors"
                >
                  Register for Early Access
                </button>
              </div>

              {/* Right: Visual cover */}
              <div className="flex-shrink-0">
                <div className="w-36 h-52 rounded-lg bg-gradient-to-b from-[#B8944A]/20 to-[#B8944A]/5 border border-[#B8944A]/20 flex flex-col items-center justify-center gap-3 p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#B8944A]/20 flex items-center justify-center">
                    <FileText className="text-[#B8944A]" size={18} />
                  </div>
                  <div>
                    <p className="text-white/60 text-[10px] uppercase tracking-wider font-bold">Annual Report</p>
                    <p className="text-[#B8944A] text-2xl font-bold mt-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                      2027
                    </p>
                    <p className="text-white/30 text-[10px] mt-1">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
