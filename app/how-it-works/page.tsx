import Link from 'next/link';
import type { Metadata } from 'next';
import { Smartphone, BellRing, GraduationCap, Users, Settings, LineChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PROGRAM_DESCRIPTION, DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'How It Works | The Wallet Hero',
  description: DEFAULT_DESCRIPTION,
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />

      <section className="py-20 bg-panel border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6 text-cream">How It Works</h1>
          <p className="text-xl max-w-3xl mx-auto text-cream/70">{PROGRAM_DESCRIPTION}</p>
        </div>
      </section>

      {/* For employees */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-heading font-bold mb-10 text-center text-cream">For Employees</h2>
        <div className="space-y-8">
          <div className="flex gap-6 items-start rounded-lg p-8 border border-hairline bg-panel">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
              <Smartphone className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-cream">1. Join With Your Company ID</h3>
              <p className="text-cream/70">Your employer gives you a company ID. Use it to join and choose whether you want to receive texts.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-lg p-8 border border-hairline bg-panel">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
              <BellRing className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-cream">2. Learn in 5-Minute Lessons</h3>
              <p className="text-cream/70">Choose to receive account notifications (lesson reminders, learning track due dates, monthly savings-goal check-ins and one-time verification codes) and/or optional promotional messages (new money lessons, money challenges and live workshops).</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-lg p-8 border border-hairline bg-panel">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
              <GraduationCap className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-cream">3. Track Your Own Goals</h3>
              <p className="text-cream/70">Each text links to the site so you can see full details. You can opt out any time, and joining is never a condition of employment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For employers */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-panel border-t border-hairline">
        <h2 className="text-3xl font-heading font-bold mb-10 text-center text-cream">For Employers</h2>
        <div className="space-y-8">
          <div className="flex gap-6 items-start rounded-lg p-8 border border-hairline bg-midnight">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-panel border border-gold/40">
              <Users className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-cream">1. Offer The Wallet Hero</h3>
              <p className="text-cream/70">An employer offers the program to its own current employees and issues a company ID employees use to join themselves.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-lg p-8 border border-hairline bg-midnight">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-panel border border-gold/40">
              <Settings className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-cream">2. Choose Learning Tracks</h3>
              <p className="text-cream/70">The employer chooses which learning tracks to assign and sends lesson reminders and due dates to enrolled employees.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-lg p-8 border border-hairline bg-midnight">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-panel border border-gold/40">
              <LineChart className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-cream">3. See Only Aggregated Participation</h3>
              <p className="text-cream/70">The employer sees only aggregated participation, never an individual employee&apos;s budgets, goals or lesson answers. The program is never open to the general public or used for recruiting or job seekers.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link
            href="/join"
            className="inline-block px-10 py-5 text-xl font-heading font-semibold rounded-lg bg-gold text-midnight hover:bg-gold-light transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
          >
            Join with your company ID
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
