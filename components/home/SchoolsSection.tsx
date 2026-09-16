'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, School, Library, BookUser, Users2, Award } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const audiences = [
  { icon: School, label: 'Schools', labelBn: 'স্কুল', color: '#1B5E3B' },
  { icon: GraduationCap, label: 'Universities', labelBn: 'বিশ্ববিদ্যালয়', color: '#8B2335' },
  { icon: Library, label: 'Libraries', labelBn: 'পাঠাগার', color: '#1B3A5E' },
  { icon: BookUser, label: 'Teachers', labelBn: 'শিক্ষকগণ', color: '#5B3A1A' },
  { icon: Users2, label: 'Student Clubs', labelBn: 'ছাত্র সংগঠন', color: '#4A1942' },
  { icon: Award, label: 'Literary Events', labelBn: 'সাহিত্য অনুষ্ঠান', color: '#7A5C00' },
];

const features = [
  'School & University Reading Clubs',
  'Annual Book Challenges',
  'Literary Events & Fairs',
  'Reading Resources for Educators',
  'Student Writing Programs',
  'Inter-School & Inter-University Activities',
];

export default function SchoolsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            {audiences.map((aud, i) => {
              const Icon = aud.icon;
              return (
                <motion.div
                  key={aud.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center gap-3 p-5 bg-[#F8F5EF] rounded-xl border border-[#E4DDD3] text-center cursor-default"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${aud.color}15` }}
                  >
                    <Icon size={22} style={{ color: aud.color }} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-ink">{aud.label}</p>
                    <p className="text-xs text-muted" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                      {aud.labelBn}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: Content */}
          <div>
            <SectionHeader
              eyebrow="Education & Institutions"
              heading="Bring Reading Back Into Everyday Education"
              headingBn="শিক্ষায় পাঠের সংস্কৃতি ফিরিয়ে আনি"
              description="PoraBangla works with schools, universities and libraries to create meaningful reading experiences for students, teachers and young readers across Bangladesh."
            />

            <ul className="space-y-3 mb-10">
              {features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B5E3B] flex-shrink-0" />
                  <span className="text-charcoal text-sm">{f}</span>
                </motion.li>
              ))}
            </ul>

            <Link href="/contact" className="btn-primary">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
