'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { readerStories } from '@/lib/mockData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const AVATAR_PALETTES = [
  { solid: '#34D399', gradient: 'linear-gradient(135deg, #059669, #34D399)', shadow: 'rgba(5,150,105,0.35)' },
  { solid: '#10B981', gradient: 'linear-gradient(135deg, #047857, #10B981)', shadow: 'rgba(4,120,87,0.35)' },
  { solid: '#2DD4BF', gradient: 'linear-gradient(135deg, #0F766E, #2DD4BF)', shadow: 'rgba(15,118,110,0.35)' },
  { solid: '#FCD34D', gradient: 'linear-gradient(135deg, #D4821A, #FCD34D)', shadow: 'rgba(212,130,26,0.35)' },
  { solid: '#059669', gradient: 'linear-gradient(135deg, #065F46, #059669)', shadow: 'rgba(6,95,70,0.35)' },
];

function getAvatarConfig(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
  return AVATAR_PALETTES[hash % AVATAR_PALETTES.length];
}

export default function WhyIReadSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#FAFAFA]">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0E9E6E] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4821A] opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="container-site relative z-10">
        <SectionHeader
          eyebrow="Community Stories"
          heading="Why I Read"
          headingBn="আমি কেন পড়ি"
          description="Readers across Bangladesh share what books mean to them."
          align="center"
          accent="green"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {readerStories.map((story, i) => {
            const colorConfig = getAvatarConfig(story.name);
            return (
              <motion.article
                key={story.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl p-7 flex flex-col relative overflow-hidden group bg-white shadow-sm hover:shadow-md transition-shadow"
                style={{
                  border: '1px solid #E5E5F0',
                }}
              >
                {/* Subtle border glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ border: `1px solid ${colorConfig.solid}40` }} />

                {/* Quote icon */}
                <Quote className="mb-5 flex-shrink-0 opacity-80" size={26} strokeWidth={1.5} style={{ color: colorConfig.solid }} />

                {/* Quote */}
                <blockquote className="text-[15px] leading-relaxed mb-8 flex-1 italic relative z-10"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#4B4B5A' }}>
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-[#E5E5F0]">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 relative overflow-hidden"
                    style={{ background: colorConfig.gradient, boxShadow: `0 4px 12px ${colorConfig.shadow}` }}
                  >
                    {/* Shine */}
                    <div className="absolute inset-0 opacity-30" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)' }} />
                    <span className="relative z-10">{story.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-[#0D0D12] font-semibold text-sm">{story.name}</p>
                    <p className="text-[11px] uppercase tracking-wide font-bold mt-1" style={{ color: '#6B6878' }}>
                      {story.category}
                      {story.age ? `, ${story.age}` : ''} · {story.location}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Share story CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-sm mb-5 font-medium" style={{ color: '#6B6878' }}>
            Have a reading story to share?
          </p>
          <button className="px-6 py-3 rounded-xl font-bold text-sm text-[#4B4B5A] transition-all duration-300 bg-white hover:bg-[#F8F9FA] hover:text-[#0D0D12]"
            style={{ border: '1px solid #E5E5F0' }}>
            Share Your Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
