'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { User, PenTool, BookOpen, Library, GraduationCap, School, Theater } from 'lucide-react';

const ecosystemNodes = [
  { id: 'readers', label: 'Readers', labelBn: 'পাঠক', color: '#0E9E6E', icon: User, x: 50, y: 5 },
  { id: 'writers', label: 'Writers', labelBn: 'লেখক', color: '#059669', icon: PenTool, x: 85, y: 30 },
  { id: 'publishers', label: 'Publishers', labelBn: 'প্রকাশক', color: '#1B5E3B', icon: BookOpen, x: 75, y: 70 },
  { id: 'libraries', label: 'Libraries', labelBn: 'পাঠাগার', color: '#064E3B', icon: Library, x: 50, y: 90 },
  { id: 'schools', label: 'Schools', labelBn: 'স্কুল', color: '#047857', icon: School, x: 15, y: 70 },
  { id: 'universities', label: 'Universities', labelBn: 'বিশ্ববিদ্যালয়', color: '#10B981', icon: GraduationCap, x: 5, y: 30 },
  { id: 'cultural', label: 'Cultural Orgs', labelBn: 'সাংস্কৃতিক সংগঠন', color: '#34D399', icon: Theater, x: 25, y: 5 },
];

// Connections (pairs of ids)
const connections = [
  ['readers', 'writers'],
  ['readers', 'publishers'],
  ['readers', 'libraries'],
  ['writers', 'publishers'],
  ['publishers', 'libraries'],
  ['libraries', 'schools'],
  ['schools', 'universities'],
  ['universities', 'cultural'],
  ['cultural', 'readers'],
  ['writers', 'cultural'],
];

export default function EcosystemSection() {
  const nodeMap = Object.fromEntries(ecosystemNodes.map((n) => [n.id, n]));

  return (
    <section className="section-padding bg-[#F8F5EF]">
      <div className="container-site">
        <SectionHeader
          eyebrow="The Literary Ecosystem"
          heading="Connecting Bangladesh's Literary Ecosystem"
          headingBn="বাংলাদেশের সাহিত্য জগতকে যুক্ত করি"
          description="PoraBangla connects every part of Bangladesh's reading and literary world — from individual readers to publishers, libraries, schools, universities and cultural organizations."
          align="center"
        />

        {/* Ecosystem diagram */}
        <div className="relative max-w-2xl mx-auto my-10">
          <svg
            viewBox="0 0 100 100"
            className="w-full"
            style={{ aspectRatio: '1', overflow: 'visible' }}
            aria-label="Ecosystem diagram showing connections between stakeholders"
          >
            {/* Connection lines */}
            {connections.map(([fromId, toId], i) => {
              const from = nodeMap[fromId];
              const to = nodeMap[toId];
              if (!from || !to) return null;
              return (
                <motion.line
                  key={`${fromId}-${toId}`}
                  x1={`${from.x}%`}
                  y1={`${from.y}%`}
                  x2={`${to.x}%`}
                  y2={`${to.y}%`}
                  stroke="#C5C5D8"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 1.5, delay: i * 0.1, ease: 'easeInOut' }}
                />
              );
            })}
          </svg>

          {/* Labels and Animated HTML Nodes */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {ecosystemNodes.map((node, i) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  {/* Animated Node Circle */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.15 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: i * 0.1 }}
                    className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full cursor-pointer shadow-lg group"
                    style={{ backgroundColor: 'white', border: `2px solid ${node.color}` }}
                  >
                    {/* Pulsing glow behind */}
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: node.color }} />
                    
                    {/* Icon */}
                    <Icon size={22} className="relative z-10 transition-colors duration-300" style={{ color: node.color }} />
                  </motion.div>

                  {/* Label */}
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="mt-3 text-center"
                  >
                    <span
                      className="inline-block bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold whitespace-nowrap shadow-sm border border-[#E5E5F0] transition-colors"
                      style={{ color: node.color }}
                    >
                      {node.label}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Node cards (responsive fallback) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {ecosystemNodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="p-5 bg-white rounded-xl border border-[#E5E5F0] text-center shadow-sm hover:shadow-md transition-shadow group cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                  style={{ backgroundColor: `${node.color}15`, color: node.color }}
                >
                  <Icon size={20} />
                </div>
                <p className="font-bold text-[#1E1E2C] text-sm mb-0.5">{node.label}</p>
                <p className="text-[#6B6878] text-xs font-medium" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                  {node.labelBn}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
