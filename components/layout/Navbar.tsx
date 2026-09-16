'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, BookOpen } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Authors', href: '/authors' },
  { label: 'Reading', href: '/reading' },
  { label: 'Communities', href: '/communities' },
  { label: 'Events', href: '/events' },
  { label: 'For Writers', href: '/writers' },
  { label: 'Resources', href: '/resources' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E4DDD3]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="PoraBangla Home">
              <div className="w-8 h-8 rounded-full bg-green flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
                <BookOpen className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <div className="leading-none">
                <div
                  className="text-[15px] font-bold text-[#1B5E3B] bangla-text leading-tight"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  পড়ো বাংলা
                </div>
                <div className="text-[10px] uppercase tracking-[0.12em] text-[#6B6560] font-sans font-semibold">
                  PoraBangla
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.85rem] font-medium text-charcoal hover:text-green transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-green transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-charcoal hover:text-green transition-colors rounded-full hover:bg-[#EBF5EF]"
                aria-label="Search"
              >
                <Search className="w-4.5 h-4.5" size={18} />
              </button>

              {/* CTA */}
              <Link
                href="/about"
                className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
              >
                Join the Movement
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-charcoal hover:text-green transition-colors"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-white shadow-2xl flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#E4DDD3]">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <div
                    className="text-[17px] font-bold text-[#1B5E3B] bangla-text"
                    style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  >
                    পড়ো বাংলা
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-[#6B6560] font-sans">
                    PoraBangla
                  </div>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-muted hover:text-ink transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 px-4 text-base font-medium text-charcoal hover:text-green hover:bg-[#EBF5EF] rounded-lg transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-[#E4DDD3]">
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Join the Movement
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 left-0 right-0 z-50 bg-white p-6 shadow-2xl"
            >
              <div className="container-site">
                <div className="flex items-center gap-4">
                  <Search className="text-muted flex-shrink-0" size={20} />
                  <input
                    type="search"
                    placeholder="Search books, authors, events…"
                    autoFocus
                    className="flex-1 text-lg font-sans text-ink placeholder:text-muted bg-transparent border-none outline-none"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="p-2 text-muted hover:text-ink transition-colors"
                  >
                    <X size={22} />
                  </button>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E4DDD3]">
                  <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-3">Popular searches</p>
                  <div className="flex flex-wrap gap-2">
                    {['Humayun Ahmed', 'পথের পাঁচালী', '1971', 'Poetry', 'Dhaka Readers', 'Book Launch'].map((term) => (
                      <button
                        key={term}
                        className="px-3 py-1.5 text-sm bg-[#F0EBE1] text-charcoal rounded-full hover:bg-[#EBF5EF] hover:text-green transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
