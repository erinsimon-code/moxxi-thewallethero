import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  DOMAIN,
  OPERATOR_LINE,
  LEGAL_NAME,
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
  PROGRAM_DESCRIPTION,
  EDUCATION_DISCLAIMER,
  ACCOUNT_MESSAGE_TYPES,
  PROMOTIONAL_MESSAGE_TYPES,
  ACCOUNT_SAMPLE_MESSAGES,
  PROMOTIONAL_SAMPLE_MESSAGES,
  PRIVACY_NO_SHARING_CLAUSE,
  DEFAULT_DESCRIPTION,
} from '../lib/brand';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Wallet Hero',
  description: DEFAULT_DESCRIPTION,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />
      <section className="py-12 bg-panel border-b border-hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold mb-4 text-cream">Privacy Policy</h1>
          <p className="text-lg text-cream/70">Effective Date: November 19, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">1. Overview</h2>
          <p className="mb-6 text-cream/70">{OPERATOR_LINE}. {PROGRAM_DESCRIPTION}</p>
          <p className="mb-6 text-cream/70">{EDUCATION_DISCLAIMER}</p>
          <p className="mb-6 text-cream/70">
            This policy explains how information is collected, used, disclosed, and protected when your employer enrolls you, or you join yourself with a company ID, at {DOMAIN}.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">2. Information We Collect</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-cream/70">
            <li>Your name, mobile number, and email address provided when you join</li>
            <li>Your employer&apos;s company ID and your employment status with that employer</li>
            <li>Your message preferences and opt-in/opt-out status</li>
            <li>Your lesson progress and savings-goal settings</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">3. How Your Information Is Handled</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-cream/70">
            <li>The Wallet Hero never asks for bank account, card or Social Security numbers.</li>
            <li>Numbers you enter on the Tools budget planner are never saved or sent anywhere.</li>
            <li>Employers see only aggregated participation, never an individual employee&apos;s budgets, goals or lesson answers.</li>
            <li>The Wallet Hero is not a performance review, disciplinary or monitoring tool, and is not used for recruiting or job seekers.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">4. Text Messaging</h2>
          <p className="mb-4 text-cream/70">If you opt in to account notification texts, these may include:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-cream/70">
            {ACCOUNT_MESSAGE_TYPES.map((type) => (
              <li key={type.title}><strong className="text-cream">{type.title}</strong> — {type.description}</li>
            ))}
          </ul>
          <p className="mb-4 text-cream/70">If you also opt in to promotional texts, these may include:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-cream/70">
            {PROMOTIONAL_MESSAGE_TYPES.map((type) => (
              <li key={type.title}><strong className="text-cream">{type.title}</strong> — {type.description}</li>
            ))}
          </ul>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-cream/70">
            <li>Message frequency varies. Msg &amp; data rates may apply.</li>
            <li>Reply HELP for help, STOP to opt out.</li>
            <li>Consent is not a condition of employment.</li>
          </ul>
          <p className="mb-6 text-cream/70">
            <strong className="text-cream">{PRIVACY_NO_SHARING_CLAUSE}</strong>
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">5. How Information Is Used</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-cream/70">
            <li>Operating and improving the financial wellness education program</li>
            <li>Delivering lesson reminders, learning track due dates, savings-goal check-ins and results</li>
            <li>Confirming your employment status with the participating employer</li>
            <li>Responding to support requests</li>
            <li>Meeting applicable legal requirements</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">6. Sample Messages</h2>
          <p className="text-sm font-semibold mb-2 text-cream">Account notification examples</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-cream/70">
            {ACCOUNT_SAMPLE_MESSAGES.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
          <p className="text-sm font-semibold mb-2 text-cream">Promotional examples</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-cream/70">
            {PROMOTIONAL_SAMPLE_MESSAGES.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">7. Contact Us</h2>
          <p className="mb-6 text-cream/70">
            Questions about this policy? Here&apos;s how to reach us:<br />
            {LEGAL_NAME}<br />
            {ADDRESS}<br />
            Email: <a href={`mailto:${EMAIL}`} className="text-gold hover:text-gold-light">{EMAIL}</a><br />
            Phone: <a href={`tel:${PHONE}`} className="text-gold hover:text-gold-light">{PHONE_DISPLAY}</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
