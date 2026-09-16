'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const ecosystemNodes = [
  { id: 'readers', label: 'Readers', labelBn: 'পাঠক', color: '#1B5E3B', x: 50, y: 5 },
  { id: 'writers', label: 'Writers', labelBn: 'লেখক', color: '#8B2335', x: 85, y: 30 },
  { id: 'publishers', label: 'Publishers', labelBn: 'প্রকাশক', color: '#1B3A5E', x: 75, y: 70 },
  { id: 'libraries', label: 'Libraries', labelBn: 'পাঠাগার', color: '#5B3A1A', x: 50, y: 90 },
  { id: 'schools', label: 'Schools', labelBn: 'স্কুল', color: '#4A1942', x: 15, y: 70 },
  { id: 'universities', label: 'Universities', labelBn: 'বিশ্ববিদ্যালয়', color: '#7A5C00', x: 5, y: 30 },
  { id: 'cultural', label: 'Cultural Orgs', labelBn: 'সাংস্কৃতিক সংগঠন', color: '#B8944A', x: 25, y: 5 },
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
            {connections.map(([fromId, toId]) => {
              const from = nodeMap[fromId];
              const to = nodeMap[toId];
              if (!from || !to) return null;
              return (
                <line
                  key={`${fromId}-${toId}`}
                  x1={`${from.x}%`}
                  y1={`${from.y}%`}
                  x2={`${to.x}%`}
                  y2={`${to.y}%`}
                  stroke="#E4DDD3"
                  strokeWidth="0.5"
                />
              );
            })}

            {/* Nodes */}
            {ecosystemNodes.map((node) => (
              <g key={node.id}>
                <circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r="6"
                  fill={node.color}
                  opacity="0.15"
                />
                <circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r="4"
                  fill={node.color}
                />
              </g>
            ))}
          </svg>

          {/* Labels (HTML overlay for better text) */}
          <div className="absolute inset-0" aria-hidden="true">
            {ecosystemNodes.map((node) => (
              <div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <div className="mt-7 text-center">
                  <span
                    className="inline-block bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap border border-[#E4DDD3]"
                    style={{ color: node.color }}
                  >
                    {node.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Node cards (responsive fallback) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {ecosystemNodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="p-4 bg-white rounded-xl border border-[#E4DDD3] text-center"
            >
              <div
                className="w-8 h-8 rounded-full mx-auto mb-2"
                style={{ backgroundColor: node.color }}
              />
              <p className="font-semibold text-ink text-sm">{node.label}</p>
              <p className="text-muted text-xs" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                {node.labelBn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
