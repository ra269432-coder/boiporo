'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1B5E3B] mb-4">
            Stay Curious
          </p>
          <span className="divider mx-auto mb-5" />
          <h2
            className="text-3xl md:text-4xl font-bold text-ink mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Stay Curious
          </h2>
          <p
            className="text-lg text-muted mb-2"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            কৌতূহলী থাকুন।
          </p>
          <p className="text-base text-charcoal leading-relaxed mb-10 max-w-lg mx-auto">
            Book recommendations, author stories, upcoming events and reading ideas in your inbox. No spam — just good reading.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                aria-label="Email address for newsletter"
                className="flex-1 px-5 py-3.5 border border-[#E4DDD3] rounded text-sm text-ink placeholder:text-muted outline-none focus:border-[#1B5E3B] transition-colors bg-[#F8F5EF]"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary flex-shrink-0 py-3.5 gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send size={15} />
                )}
                Subscribe
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-[#EBF5EF] flex items-center justify-center">
                <Check className="text-[#1B5E3B]" size={28} strokeWidth={2.5} />
              </div>
              <p className="font-semibold text-ink">Welcome to the reading movement!</p>
              <p className="text-sm text-muted">We&apos;ll send you our first newsletter soon.</p>
            </motion.div>
          )}

          {!submitted && (
            <p className="mt-4 text-xs text-muted">
              We respect your privacy. Unsubscribe anytime.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
