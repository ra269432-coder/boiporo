import Link from 'next/link';
import { BookOpen, Globe, Link as LinkIcon, MessageCircle } from 'lucide-react';

const footerLinks = {
  explore: [
    { label: 'Books', href: '/books' },
    { label: 'Authors', href: '/authors' },
    { label: 'Reading', href: '/reading' },
    { label: 'Communities', href: '/communities' },
    { label: 'Events', href: '/events' },
  ],
  creators: [
    { label: 'For Writers', href: '/writers' },
    { label: 'Publishers', href: '/resources' },
    { label: 'Libraries', href: '/resources' },
    { label: 'Schools', href: '/resources' },
    { label: 'Universities', href: '/resources' },
  ],
  about: [
    { label: 'Our Mission', href: '/about' },
    { label: 'Reading Index', href: '/about' },
    { label: 'Annual Report', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F2D1C] text-white">
      {/* Main footer */}
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <BookOpen className="w-4.5 h-4.5 text-white" size={18} />
              </div>
              <div>
                <div
                  className="text-[16px] font-bold text-white leading-tight"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  পড়ো বাংলা
                </div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-white/50 font-sans">
                  PoraBangla
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Building a culture of reading across Bangladesh — connecting readers, writers, publishers, schools and communities.
            </p>
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-3">
                Read. Think. Grow.
              </p>
              <p
                className="text-[#B8944A] text-sm"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                পড়ি, ভাবি, বদলাই।
              </p>
            </div>

            {/* Newsletter mini */}
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wider font-semibold mb-3">
                Stay curious
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Subscribe to newsletter"
                  className="flex-1 min-w-0 px-3.5 py-2.5 bg-white/10 border border-white/15 rounded text-sm text-white placeholder:text-white/35 outline-none focus:border-white/40 transition-colors"
                />
                <button className="px-4 py-2.5 bg-[#1B5E3B] hover:bg-[#2D7A52] text-white text-sm font-semibold rounded transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Globe, label: 'Facebook', href: '#' },
                { Icon: LinkIcon, label: 'Instagram', href: '#' },
                { Icon: MessageCircle, label: 'YouTube', href: '#' },
                { Icon: Globe, label: 'LinkedIn', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-white/40 font-bold mb-5 font-sans">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-white/40 font-bold mb-5 font-sans">
              For Creators
            </h3>
            <ul className="space-y-3">
              {footerLinks.creators.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-white/40 font-bold mb-5 font-sans">
              About
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2027 PoraBangla. Building a culture of reading in Bangladesh.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
