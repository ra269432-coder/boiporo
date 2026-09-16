'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, MapPin, Phone, Send, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="pt-24 pb-20 bg-[#F8F5EF] min-h-screen">
      <div className="container-site">
        <nav className="flex items-center gap-2 text-xs text-muted mb-8">
          <Link href="/" className="hover:text-green transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal font-medium">Contact</span>
        </nav>

        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Get in Touch
          </h1>
          <p className="text-charcoal text-lg">
            Have a question, suggestion, or want to partner with us? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="font-bold text-ink mb-4">Contact Information</h3>
              <div className="space-y-4 text-sm text-charcoal">
                <div className="flex items-start gap-3">
                  <Mail className="text-[#1B5E3B] flex-shrink-0 mt-0.5" size={18} />
                  <span>hello@porabangla.com.bd</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-[#1B5E3B] flex-shrink-0 mt-0.5" size={18} />
                  <span>+880 1234 567890</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#1B5E3B] flex-shrink-0 mt-0.5" size={18} />
                  <span>123 Literary Avenue, Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E4DDD3]">
              <h4 className="font-semibold text-ink text-sm mb-2">Publishers & Authors</h4>
              <p className="text-xs text-muted mb-4">
                Interested in having your books featured or updating your profile?
              </p>
              <a href="mailto:content@porabangla.com.bd" className="text-sm font-semibold text-[#1B5E3B] hover:underline">
                content@porabangla.com.bd
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-[#E4DDD3] shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">First Name</label>
                    <input required type="text" className="w-full px-4 py-2.5 bg-[#F8F5EF] border border-[#E4DDD3] rounded-md focus:outline-none focus:border-[#1B5E3B] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">Last Name</label>
                    <input required type="text" className="w-full px-4 py-2.5 bg-[#F8F5EF] border border-[#E4DDD3] rounded-md focus:outline-none focus:border-[#1B5E3B] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Email Address</label>
                  <input required type="email" className="w-full px-4 py-2.5 bg-[#F8F5EF] border border-[#E4DDD3] rounded-md focus:outline-none focus:border-[#1B5E3B] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Subject</label>
                  <select className="w-full px-4 py-2.5 bg-[#F8F5EF] border border-[#E4DDD3] rounded-md focus:outline-none focus:border-[#1B5E3B] transition-colors text-ink">
                    <option>General Inquiry</option>
                    <option>Partner with Us</option>
                    <option>Start a Reading Club</option>
                    <option>Content Update</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Message</label>
                  <textarea required rows={5} className="w-full px-4 py-2.5 bg-[#F8F5EF] border border-[#E4DDD3] rounded-md focus:outline-none focus:border-[#1B5E3B] transition-colors resize-none"></textarea>
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3">
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-[#EBF5EF] flex items-center justify-center mb-6">
                  <Check className="text-[#1B5E3B]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-ink mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Message Sent
                </h3>
                <p className="text-charcoal mb-6">
                  Thank you for reaching out. We will get back to you as soon as possible.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary text-sm">
                  Send another message
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
