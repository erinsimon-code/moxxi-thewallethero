import Link from 'next/link';
import type { Metadata } from 'next';
import {
  UserPlus,
  Smartphone,
  ShieldCheck,
  MessageSquareText,
  CalendarClock,
  Target,
  KeyRound,
  Sparkles,
  Trophy,
  Users,
  GraduationCap,
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  ACCOUNT_MESSAGE_TYPES,
  PROMOTIONAL_MESSAGE_TYPES,
  POSITIONING_BULLETS,
  EDUCATION_DISCLAIMER,
  DEFAULT_DESCRIPTION,
} from './lib/brand';

export const metadata: Metadata = {
  title: 'The Wallet Hero: Financial Wellness for Employees',
  description: DEFAULT_DESCRIPTION,
};

const ACCOUNT_ICONS = [MessageSquareText, CalendarClock, Target, KeyRound];
const PROMOTIONAL_ICONS = [Sparkles, Trophy, Users];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />

      {/* Hero Section — dark background with gold accent line */}
      <section className="py-24 bg-midnight border-b border-hairline relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gold/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-heading font-bold sm:text-6xl md:text-7xl text-cream">
              Be the <span className="text-gold">hero</span> of your own wallet.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-cream/70">
              5-minute money lessons, simple budgeting tools and live workshops, offered by your employer.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/join"
                className="px-8 py-4 text-lg font-heading font-semibold rounded-lg bg-gold text-midnight hover:bg-gold-light transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
              >
                Join with your company ID
              </Link>
            </div>
            <p className="mt-4 text-sm text-cream/70">
              For current employees of participating employers only. Participation is voluntary.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-cream">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg border border-hairline text-center bg-panel">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
                  <UserPlus className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-cream">1. Your Employer Offers The Wallet Hero</h3>
              <p className="text-cream/70">A participating employer offers the program to its team and shares a company ID.</p>
            </div>
            <div className="p-8 rounded-lg border border-hairline text-center bg-panel">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
                  <Smartphone className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-cream">2. You Join With Your Company ID</h3>
              <p className="text-cream/70">Use your company ID to join and choose whether you want to receive texts.</p>
            </div>
            <div className="p-8 rounded-lg border border-hairline text-center bg-panel">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
                  <GraduationCap className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-cream">3. You Learn and Track Your Own Goals</h3>
              <p className="text-cream/70">Work through 5-minute money lessons and set savings goals you choose for yourself.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll receive */}
      <section className="py-20 bg-panel border-y border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-cream">What You&apos;ll Receive</h2>
            <p className="mt-4 text-xl text-cream/70">Texts tied to your employer&apos;s financial wellness program.</p>
          </div>

          <h3 className="text-2xl font-heading font-bold text-cream mb-8 text-center">Account Notifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {ACCOUNT_MESSAGE_TYPES.map((type, i) => {
              const Icon = ACCOUNT_ICONS[i];
              return (
                <div key={type.title} className="p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-hairline bg-midnight">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-panel border border-gold/40">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-center mb-3 text-cream">{type.title}</h4>
                  <p className="text-center text-cream/70">{type.description}</p>
                </div>
              );
            })}
          </div>

          <h3 className="text-2xl font-heading font-bold text-cream mb-8 text-center">Promotional Messages (Optional)</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROMOTIONAL_MESSAGE_TYPES.map((type, i) => {
              const Icon = PROMOTIONAL_ICONS[i];
              return (
                <div key={type.title} className="p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-hairline bg-midnight">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-panel border border-gold/40">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-center mb-3 text-cream">{type.title}</h4>
                  <p className="text-center text-cream/70">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your privacy */}
      <section className="py-20 bg-midnight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gold">
              <ShieldCheck className="w-8 h-8 text-midnight" />
            </div>
          </div>
          <h2 className="text-4xl font-heading font-bold mb-6 text-cream">Your Privacy</h2>
          <ul className="space-y-4 text-left max-w-2xl mx-auto">
            {POSITIONING_BULLETS.map((bullet) => (
              <li key={bullet} className="text-lg text-cream/70">{bullet}</li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-cream/70 max-w-2xl mx-auto">{EDUCATION_DISCLAIMER}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
