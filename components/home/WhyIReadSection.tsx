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
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

function getAvatarColor(name: string): string {
  const colors = ['#1B5E3B', '#8B2335', '#1B3A5E', '#5B3A1A', '#4A1942', '#7A5C00'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
  return colors[hash % colors.length];
}

export default function WhyIReadSection() {
  return (
    <section className="section-padding bg-[#0F2D1C]">
      <div className="container-site">
        <SectionHeader
          eyebrow="Community Stories"
          heading="Why I Read"
          headingBn="আমি কেন পড়ি"
          description="Readers across Bangladesh share what books mean to them."
          align="center"
          light
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {readerStories.map((story) => {
            const color = getAvatarColor(story.name);
            return (
              <motion.article
                key={story.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300 flex flex-col"
              >
                {/* Quote icon */}
                <Quote className="text-[#B8944A] mb-4 flex-shrink-0" size={24} strokeWidth={1.5} />

                {/* Quote */}
                <blockquote className="text-white/80 text-sm leading-relaxed mb-6 flex-1 italic"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: color }}
                  >
                    {story.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{story.name}</p>
                    <p className="text-white/45 text-xs">
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
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm mb-4">
            Have a reading story to share?
          </p>
          <button className="btn-secondary border-white/20 text-white hover:bg-white/10 hover:border-white/40">
            Share Your Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
