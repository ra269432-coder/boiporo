'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Focus, Sparkles, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const principles = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Knowledge',
    titleBn: 'জ্ঞান',
    description: 'Discover ideas beyond your everyday world. Books connect you to thoughts, histories and perspectives that broaden how you understand life.',
    color: '#1B5E3B',
    bg: '#EBF5EF',
  },
  {
    number: '02',
    icon: Focus,
    title: 'Focus',
    titleBn: 'মনোযোগ',
    description: 'Make space for deep attention in a distracted world. Reading is one of the few practices that demands — and rewards — sustained concentration.',
    color: '#8B2335',
    bg: '#F5EBEC',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Creativity',
    titleBn: 'সৃজনশীলতা',
    description: 'Stories and ideas inspire new ways of thinking. The books we read become the raw material of how we imagine, design and create.',
    color: '#1B3A5E',
    bg: '#EBF0F5',
  },
  {
    number: '04',
    icon: Users,
    title: 'Community',
    titleBn: 'সমাজ',
    description: 'Connect with people through books and conversations. Reading is not just a solitary act — it is a shared language between people.',
    color: '#B8944A',
    bg: '#F7F1E6',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function MovementSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <SectionHeader
          eyebrow="Why Reading Matters"
          heading="A Reading Movement for Bangladesh"
          description="Reading is more than finishing a book. It is a way to discover ideas, understand people, strengthen curiosity and create meaningful communities."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.number}
                variants={cardVariants}
                className="group relative p-8 border border-[#E4DDD3] rounded-lg hover:border-transparent hover:shadow-lg transition-all duration-300 bg-white"
              >
                {/* Number */}
                <div className="absolute top-5 right-6 text-[3rem] font-bold opacity-[0.06] font-serif select-none"
                  style={{ fontFamily: "'Playfair Display', serif", color: p.color }}>
                  {p.number}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                  style={{ backgroundColor: p.bg }}
                >
                  <Icon size={22} style={{ color: p.color }} strokeWidth={1.8} />
                </div>

                {/* Number label */}
                <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-2" style={{ color: p.color }}>
                  {p.number}
                </p>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-ink mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm text-muted mb-3"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  {p.titleBn}
                </p>

                {/* Description */}
                <p className="text-sm text-charcoal leading-relaxed">
                  {p.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: p.color }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
