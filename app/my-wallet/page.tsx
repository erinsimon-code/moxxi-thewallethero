import type { Metadata } from 'next';
import { BookOpen, GraduationCap, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'My Wallet | The Wallet Hero',
  description: DEFAULT_DESCRIPTION,
};

export default function MyWalletPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />

      <section className="py-20 bg-panel border-b border-hairline">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4 text-cream">Sign in with your company ID</h1>
          <p className="text-lg text-cream/70 mb-8">Your learner dashboard: lessons, your learning track and your savings goal.</p>
          <button
            type="button"
            className="px-8 py-3 rounded-lg font-heading font-semibold bg-gold text-midnight hover:bg-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
          >
            Sign In
          </button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg border border-hairline bg-panel">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
                <BookOpen className="w-7 h-7 text-gold" />
              </div>
            </div>
            <h2 className="text-xl font-heading font-bold text-center mb-2 text-cream">My Lessons</h2>
            <p className="text-center text-cream/70">Sign in to see the 5-minute lessons you&apos;ve started and completed.</p>
          </div>
          <div className="p-8 rounded-lg border border-hairline bg-panel">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
                <GraduationCap className="w-7 h-7 text-gold" />
              </div>
            </div>
            <h2 className="text-xl font-heading font-bold text-center mb-2 text-cream">My Learning Track</h2>
            <p className="text-center text-cream/70">Sign in to see the learning track your employer assigned and its due dates.</p>
          </div>
          <div className="p-8 rounded-lg border border-hairline bg-panel">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
                <Target className="w-7 h-7 text-gold" />
              </div>
            </div>
            <h2 className="text-xl font-heading font-bold text-center mb-2 text-cream">My Savings Goal</h2>
            <p className="text-center text-cream/70">Set a goal you choose; we never see your bank account.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
