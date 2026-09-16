import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'PoraBangla — পড়ো বাংলা | Bangladesh Reading Platform',
    template: '%s | PoraBangla',
  },
  description:
    'PoraBangla is Bangladesh\'s national reading and literature platform — connecting readers, writers, publishers, schools and literary communities. Discover Bangladeshi books, authors and reading communities.',
  keywords: [
    'PoraBangla',
    'Bangladesh reading platform',
    'Bangladeshi books',
    'Bangladesh authors',
    'reading community Bangladesh',
    'book events Bangladesh',
    'Bangladesh literature',
    'Bangla books',
    'পড়ো বাংলা',
    'বাংলাদেশের সাহিত্য',
  ],
  authors: [{ name: 'PoraBangla' }],
  creator: 'PoraBangla',
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    alternateLocale: 'en_US',
    url: 'https://porabangla.com.bd',
    siteName: 'PoraBangla',
    title: 'PoraBangla — Bangladesh\'s National Reading Platform',
    description:
      'Discover books, meet Bangladeshi writers, join reading communities, and make reading part of everyday life.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PoraBangla — পড়ো বাংলা',
    description: 'Bangladesh\'s national reading and literature platform.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-paper text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
