'use client';

import { motion } from 'framer-motion';
import { Target, Smartphone, Moon, Heart, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { wellbeingTopics } from '@/lib/mockData';

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
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
            return (
              <motion.article
                key={topic.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group p-7 rounded-xl border border-[#E4DDD3] hover:border-transparent hover:shadow-md transition-all duration-300 bg-white cursor-pointer"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${topic.color}15` }}
                >
                  <Icon size={20} strokeWidth={1.8} style={{ color: topic.color }} />
                </div>

                {/* Title */}
                <h3
                  className="text-[1.05rem] font-bold text-ink mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {topic.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-charcoal leading-relaxed mb-4">
                  {topic.description}
                </p>

                {/* Read more link */}
                <span
                  className="text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                  style={{ color: topic.color }}
                >
                  Read more <ArrowRight size={11} />
                </span>

                {/* Bottom accent */}
                <div
                  className="h-0.5 mt-5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: topic.color }}
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
          className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#F8F5EF] rounded-xl border border-[#E4DDD3]"
        >
          <p className="text-sm text-muted max-w-2xl">
            <span className="font-semibold text-charcoal">A note:</span>{' '}
            PoraBangla does not make medical claims about reading. Our wellbeing content focuses on reading as a meaningful everyday practice — not as a medical treatment or therapy.
          </p>
          <button className="btn-secondary flex-shrink-0">
            Explore Reading & Wellbeing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
