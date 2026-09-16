'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import CommunityCard from '@/components/ui/CommunityCard';
import { communities } from '@/lib/mockData';

export default function CommunitiesSection() {
  return (
    <section className="section-padding bg-[#F8F5EF]">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Reading Communities"
            heading="Read Together"
            headingBn="একসাথে পড়ি"
            description="Books become more meaningful when we have people to talk about them with. Join a reading community near you."
          />
          <Link href="/communities" className="btn-ghost flex-shrink-0 mb-4">
            All communities →
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {communities.map((community, i) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <CommunityCard community={community} />
            </motion.div>
          ))}
        </motion.div>

        {/* Start a club CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-xl border border-[#E4DDD3] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#1B5E3B]/10 flex items-center justify-center">
              <Plus className="text-[#1B5E3B]" size={20} />
            </div>
            <p className="text-charcoal text-sm">
              Don&apos;t see a community near you?{' '}
              <span className="font-semibold text-ink">Start your own reading club.</span>
            </p>
            <Link href="/communities" className="btn-primary text-sm py-2 px-5 flex-shrink-0">
              Start a Reading Club
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
