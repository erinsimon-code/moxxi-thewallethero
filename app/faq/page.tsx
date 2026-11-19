import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FAQ_ITEMS, EDUCATION_DISCLAIMER, DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'FAQ | The Wallet Hero',
  description: DEFAULT_DESCRIPTION,
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />

      <section className="py-20 bg-panel border-b border-hairline">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4 text-cream">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question} className="rounded-2xl p-6 border border-hairline bg-panel shadow-sm">
              <h2 className="text-xl font-heading font-bold mb-2 text-cream">{item.question}</h2>
              <p className="text-cream/70">{item.answer}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-cream/70 mt-12 max-w-2xl mx-auto text-center">{EDUCATION_DISCLAIMER}</p>
      </section>

      <Footer />
    </div>
  );
}
