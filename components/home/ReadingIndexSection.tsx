'use client';

import { motion } from 'framer-motion';
import { BarChart3, Users, BookOpen, MapPin, Clock, Tablet, UsersRound } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const metrics = [
  { icon: Users, label: 'Reading Participation', description: 'How many Bangladeshis read regularly' },
  { icon: BookOpen, label: 'Popular Genres', description: 'What types of books are most read' },
  { icon: Users, label: 'Age Groups', description: 'Reading habits across generations' },
  { icon: MapPin, label: 'Regional Participation', description: 'Reading across divisions and districts' },
  { icon: Clock, label: 'Reading Frequency', description: 'How often and for how long' },
  { icon: Tablet, label: 'Physical vs Digital', description: 'Print and digital reading patterns' },
  { icon: UsersRound, label: 'Community Participation', description: 'Engagement in reading communities' },
];

export default function ReadingIndexSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionHeader
              eyebrow="Research"
              heading="Understanding How Bangladesh Reads"
              headingBn="বাংলাদেশ কীভাবে পড়ে"
              description="PoraBangla aims to build an evidence-based picture of reading habits across Bangladesh — connecting participation data, community surveys and partner research to create a meaningful national reading index."
            />
            <button className="btn-primary mt-2">
              Explore the Reading Index
            </button>
            <p className="text-xs text-muted mt-3">Data collection begins 2027. Currently in planning phase.</p>
          </div>

          {/* Right: Metrics */}
          <div className="space-y-3">
            {metrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="flex items-center gap-4 p-4 bg-[#F8F5EF] rounded-xl border border-[#E4DDD3] group hover:border-[#1B5E3B]/30 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#EBF5EF] flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-[#1B5E3B]" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-ink">{metric.label}</p>
                    <p className="text-xs text-muted">{metric.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="tag tag-gold text-[10px]">Coming Soon</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Coming Soon banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-8 rounded-xl border-2 border-dashed border-[#B8944A]/40 bg-[#F7F1E6] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <BarChart3 size={36} className="text-[#B8944A]" strokeWidth={1.5} />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-serif text-xl font-bold text-ink"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Bangladesh Reading Index
                </h3>
                <span className="tag tag-gold text-[10px]">Coming 2027</span>
              </div>
              <p className="text-sm text-charcoal">
                An annual evidence-based report on reading participation across Bangladesh.
              </p>
            </div>
          </div>
          <button className="btn-secondary flex-shrink-0">
            Register Interest
          </button>
        </motion.div>
      </div>
    </section>
  );
}
