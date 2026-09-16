import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, PenLine, UploadCloud, Users, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Writers',
  description: 'Join PoraBangla as a writer. Reach readers, showcase your books, and connect with the literary community.',
};

export default function WritersPage() {
  return (
    <div className="pt-24 pb-20 bg-[#F8F5EF] min-h-screen">
      <div className="container-site">
        <nav className="flex items-center gap-2 text-xs text-muted mb-8">
          <Link href="/" className="hover:text-green transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal font-medium">For Writers</span>
        </nav>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-16 h-16 rounded-full bg-[#EBF5EF] flex items-center justify-center mx-auto mb-6">
            <PenLine className="text-[#1B5E3B]" size={28} />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Your Story Deserves to Be Read
          </h1>
          <p className="text-charcoal text-lg max-w-2xl mx-auto mb-10">
            PoraBangla is the digital home for Bangladesh&apos;s literary community. Build your author profile, connect with readers, and join a nationwide movement.
          </p>
          <button className="btn-primary">
            Create Author Profile
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {[
            { icon: UploadCloud, title: 'Showcase Your Books', text: 'Add your published works to the PoraBangla directory so readers can discover them.' },
            { icon: Users, title: 'Connect With Readers', text: 'Build a following, respond to reviews, and engage directly with your audience.' },
            { icon: PenLine, title: 'Publish Articles', text: 'Share essays, reading recommendations, and creative writing directly on the platform.' },
            { icon: Calendar, title: 'Promote Events', text: 'List your book launches, author meets, and workshops on our national calendar.' },
          ].map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-white p-8 rounded-xl border border-[#E4DDD3]">
                <div className="w-10 h-10 rounded-lg bg-[#F8F5EF] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#1B5E3B]" />
                </div>
                <h3 className="font-bold text-ink mb-2">{feature.title}</h3>
                <p className="text-charcoal text-sm">{feature.text}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto bg-[#0F2D1C] rounded-2xl p-10 text-center text-white">
          <h2 className="font-serif text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to join?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            It takes only a few minutes to set up your profile and start connecting with readers across Bangladesh.
          </p>
          <button className="bg-[#B8944A] text-white font-bold py-3 px-8 rounded hover:bg-[#a18141] transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
