import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, School, Library, Building2, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Institutional Resources',
  description: 'Resources and partnership opportunities for schools, universities, and libraries in Bangladesh.',
};

export default function ResourcesPage() {
  return (
    <div className="pt-24 pb-20 bg-[#F8F5EF] min-h-screen">
      <div className="container-site">
        <nav className="flex items-center gap-2 text-xs text-muted mb-8">
          <Link href="/" className="hover:text-green transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal font-medium">Resources</span>
        </nav>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Institutional Resources
          </h1>
          <p className="text-charcoal text-lg">
            Partnership programs and resources for educational and cultural institutions across Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {[
            { icon: School, title: 'For Schools', desc: 'Curriculum-aligned reading challenges, reading circle guides, and author visit programs for students.' },
            { icon: Building2, title: 'For Universities', desc: 'Establish campus reading clubs, access the Reading Index data, and host literary festivals.' },
            { icon: Library, title: 'For Libraries', desc: 'Connect your catalog with our platform, host community events, and attract new readers.' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white p-8 rounded-xl border border-[#E4DDD3] text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#EBF5EF] flex items-center justify-center mb-5">
                  <Icon size={24} className="text-[#1B5E3B]" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-charcoal text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
                <button className="text-sm font-semibold text-[#1B5E3B] inline-flex items-center gap-1.5 hover:underline">
                  Download Guide <ExternalLink size={14} />
                </button>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-[#E4DDD3] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-2xl font-bold text-ink mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Become an Institutional Partner
          </h2>
          <p className="text-charcoal mb-8 max-w-lg mx-auto">
            Join our network of schools, universities, and libraries working together to build a reading culture in Bangladesh.
          </p>
          <Link href="/contact" className="btn-primary">
            Apply for Partnership
          </Link>
        </div>
      </div>
    </div>
  );
}
