import Link from 'next/link';
import type { Metadata } from 'next';
import { Clock, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LESSON_ITEMS, EDUCATION_DISCLAIMER, DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'Lessons | The Wallet Hero',
  description: DEFAULT_DESCRIPTION,
};

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />

      <section className="py-20 bg-panel border-b border-hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4 text-cream">Lesson Library</h1>
          <p className="text-lg text-cream/70">5-minute money lessons you can work through at your own pace.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LESSON_ITEMS.map((lesson) => (
            <div key={lesson.title} className="p-8 rounded-lg shadow-md border border-hairline bg-panel flex flex-col">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
                  <BookOpen className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-center mb-2 text-cream">{lesson.title}</h3>
              <div className="flex items-center justify-center gap-4 mb-6 text-sm text-cream/70">
                <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min</span>
                <span className="inline-block px-3 py-1 rounded-full bg-midnight border border-gold/40 text-gold text-xs font-semibold">{lesson.topic}</span>
              </div>
              <Link
                href="/my-wallet"
                className="mt-auto inline-block text-center px-4 py-3 rounded-lg font-heading font-semibold bg-gold text-midnight hover:bg-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
              >
                Start lesson
              </Link>
            </div>
          ))}
        </div>
        <p className="text-sm text-cream/70 mt-16 max-w-2xl mx-auto text-center">{EDUCATION_DISCLAIMER}</p>
      </section>

      <Footer />
    </div>
  );
}
