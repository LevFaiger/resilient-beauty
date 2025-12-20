import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/sections/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Resilient Beauty | Jewish Artists of the Post-War Era',
  description: 'An exhibition celebrating the artistic legacy of Holocaust survivors who transformed their trauma into timeless beauty. Featuring 11 remarkable artists who rebuilt their lives and art in Israel.',
  keywords: [
    'Holocaust survivors',
    'Jewish artists',
    'Israeli art',
    'Post-war art',
    'Resilient Beauty',
    'Art exhibition',
    'Holocaust remembrance',
    'Jewish heritage',
  ],
  authors: [{ name: 'Resilient Beauty Exhibition' }],
  openGraph: {
    title: 'Resilient Beauty | Jewish Artists of the Post-War Era',
    description: 'An exhibition celebrating the artistic legacy of Holocaust survivors who transformed their trauma into timeless beauty.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'he_IL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resilient Beauty | Jewish Artists of the Post-War Era',
    description: 'An exhibition celebrating the artistic legacy of Holocaust survivors.',
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
