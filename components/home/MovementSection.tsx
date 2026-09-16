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
    color: '#0E9E6E',
    bg: 'linear-gradient(135deg, rgba(14,158,110,0.1), rgba(14,158,110,0.04))',
    border: 'rgba(14,158,110,0.2)',
    textGrad: 'linear-gradient(135deg, #0E9E6E, #34D399)',
  },
  {
    number: '02',
    icon: Focus,
    title: 'Focus',
    titleBn: 'মনোযোগ',
    description: 'Make space for deep attention in a distracted world. Reading is one of the few practices that demands — and rewards — sustained concentration.',
    color: '#C2183A',
    bg: 'linear-gradient(135deg, rgba(194,24,58,0.1), rgba(194,24,58,0.04))',
    border: 'rgba(194,24,58,0.2)',
    textGrad: 'linear-gradient(135deg, #C2183A, #FB7185)',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Creativity',
    titleBn: 'সৃজনশীলতা',
    description: 'Stories and ideas inspire new ways of thinking. The books we read become the raw material of how we imagine, design and create.',
    color: '#6D28D9',
    bg: 'linear-gradient(135deg, rgba(109,40,217,0.1), rgba(109,40,217,0.04))',
    border: 'rgba(109,40,217,0.2)',
    textGrad: 'linear-gradient(135deg, #6D28D9, #A78BFA)',
  },
  {
    number: '04',
    icon: Users,
    title: 'Community',
    titleBn: 'সমাজ',
    description: 'Connect with people through books and conversations. Reading is not just a solitary act — it is a shared language between people.',
    color: '#D4821A',
    bg: 'linear-gradient(135deg, rgba(212,130,26,0.1), rgba(212,130,26,0.04))',
    border: 'rgba(212,130,26,0.2)',
    textGrad: 'linear-gradient(135deg, #D4821A, #FCD34D)',
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-2xl transition-all duration-300 cursor-default"
                style={{ background: p.bg, border: `1px solid ${p.border}` }}
              >
                {/* Big watermark number */}
                <div className="absolute top-5 right-6 text-[3.5rem] font-bold select-none pointer-events-none"
                  style={{ fontFamily: "'Playfair Display', serif", background: p.textGrad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', opacity: 0.18 }}>
                  {p.number}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                  style={{ background: p.textGrad, boxShadow: `0 4px 16px ${p.color}40` }}
                >
                  <Icon size={20} color="white" strokeWidth={1.8} />
                </div>

                {/* Number label */}
                <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-2"
                  style={{ background: p.textGrad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {p.number}
                </p>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-1 text-[#0D0D12]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif", color: p.color }}
                >
                  {p.titleBn}
                </p>

                {/* Description */}
                <p className="text-sm text-[#4B4B5A] leading-relaxed">
                  {p.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: p.textGrad }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
