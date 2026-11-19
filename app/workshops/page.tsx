import Link from 'next/link';
import type { Metadata } from 'next';
import { CalendarDays } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { WORKSHOP_EXAMPLES, DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'Workshops | The Wallet Hero',
  description: DEFAULT_DESCRIPTION,
};

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />

      <section className="py-20 bg-panel border-b border-hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4 text-cream">Live Workshops</h1>
          <p className="text-lg text-cream/70">Join live workshops on everyday money topics, offered by your employer.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {WORKSHOP_EXAMPLES.map((workshop) => (
            <div key={workshop.title} className="rounded-2xl p-8 border border-hairline bg-panel shadow-md flex flex-col">
              <span className="inline-block mb-4 w-fit px-3 py-1 rounded-full text-xs font-heading font-bold bg-gold/20 text-gold-light">
                Example
              </span>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
                  <CalendarDays className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-center mb-2 text-cream">{workshop.title}</h3>
              <p className="text-center text-cream/70 mb-6">{workshop.date}</p>
              <Link
                href="/join"
                className="mt-auto inline-block text-center px-4 py-3 rounded-lg font-heading font-semibold bg-gold text-midnight hover:bg-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
              >
                Save your spot
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
