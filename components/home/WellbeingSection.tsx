'use client';

import { motion } from 'framer-motion';
import { Target, Smartphone, Moon, Heart, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { wellbeingTopics } from '@/lib/mockData';

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string; color?: string }>> = {
  target: Target,
  smartphone: Smartphone,
  moon: Moon,
  heart: Heart,
  sparkles: Sparkles,
  'trending-up': TrendingUp,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function WellbeingSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <SectionHeader
          eyebrow="Reading & Wellbeing"
          heading="Read for a Better Everyday"
          description="Reading can be a meaningful part of a balanced, thoughtful everyday life — for focus, imagination, rest and connection."
          align="center"
          accent="aurora"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
        >
          {wellbeingTopics.map((topic) => {
            const Icon = ICONS[topic.icon] ?? Target;
            // Define palettes based on topic icon since we can't change mockData here easily
            const palettes: Record<string, { gradient: string, shadow: string, border: string }> = {
              target: { gradient: 'linear-gradient(135deg, #059669, #34D399)', shadow: 'rgba(5,150,105,0.3)', border: '#059669' },
              smartphone: { gradient: 'linear-gradient(135deg, #047857, #10B981)', shadow: 'rgba(4,120,87,0.3)', border: '#047857' },
              moon: { gradient: 'linear-gradient(135deg, #0F766E, #2DD4BF)', shadow: 'rgba(15,118,110,0.3)', border: '#0F766E' },
              heart: { gradient: 'linear-gradient(135deg, #065F46, #059669)', shadow: 'rgba(6,95,70,0.3)', border: '#065F46' },
              sparkles: { gradient: 'linear-gradient(135deg, #064E3B, #047857)', shadow: 'rgba(6,78,59,0.3)', border: '#064E3B' },
              'trending-up': { gradient: 'linear-gradient(135deg, #059669, #10B981)', shadow: 'rgba(5,150,105,0.3)', border: '#059669' },
            };
            const p = palettes[topic.icon] || palettes.target;

            return (
              <motion.article
                key={topic.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group p-7 rounded-2xl border border-[#E5E5F0] bg-white shadow-[0_4px_20px_rgba(13,13,18,0.04)] hover:shadow-[0_16px_40px_rgba(13,13,18,0.08)] transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 group-hover:rotate-3 relative z-10"
                  style={{ background: p.gradient, boxShadow: `0 6px 16px ${p.shadow}` }}
                >
                  <Icon size={20} strokeWidth={2} color="white" />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-[#0D0D12] mb-2 relative z-10"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {topic.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#4B4B5A] leading-relaxed mb-6 relative z-10">
                  {topic.description}
                </p>

                {/* Read more link */}
                <span
                  className="text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all duration-300 relative z-10"
                  style={{ color: p.border }}
                >
                  Read more <ArrowRight size={13} />
                </span>

                {/* Bottom gradient sweep */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: p.gradient }}
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Disclaimer & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:px-8 bg-white rounded-2xl border border-[#E5E5F0] shadow-[0_4px_24px_rgba(13,13,18,0.03)]"
        >
          <p className="text-sm text-[#6B6878] max-w-2xl leading-relaxed">
            <span className="font-semibold text-[#1E1E2C] block mb-1">A gentle note</span>
            PoraBangla does not make medical claims about reading. Our wellbeing content focuses on reading as a meaningful everyday practice — not as a medical treatment or therapy.
          </p>
          <button className="btn-secondary flex-shrink-0 whitespace-nowrap">
            Explore Reading & Wellbeing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
