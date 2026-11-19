import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  BRAND,
  DOMAIN,
  LEGAL_NAME,
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
  OPERATOR_LINE,
  ACCOUNT_SAMPLE_MESSAGES,
  PROMOTIONAL_SAMPLE_MESSAGES,
  PROGRAM_DESCRIPTION,
  EDUCATION_DISCLAIMER,
  POSITIONING_BULLETS,
  PRIVACY_NO_SHARING_CLAUSE,
  DEFAULT_DESCRIPTION,
} from '../lib/brand';

export const metadata: Metadata = {
  title: 'Terms of Service | The Wallet Hero',
  description: DEFAULT_DESCRIPTION,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />
      <section className="py-12 bg-panel border-b border-hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold mb-4 text-cream">Terms of Service</h1>
          <p className="text-lg text-cream/70">Effective Date: November 19, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">1. Agreeing to These Terms</h2>
          <p className="mb-6 text-cream/70">
            {OPERATOR_LINE} (the &quot;Service&quot;). Accessing or using the Service means you agree to these Terms of Service. If these Terms don&apos;t work for you, please don&apos;t use the Service.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">2. What the Service Does</h2>
          <p className="mb-6 text-cream/70">{PROGRAM_DESCRIPTION}</p>
          <p className="mb-6 text-cream/70">{EDUCATION_DISCLAIMER}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-cream/70">
            {POSITIONING_BULLETS.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">3. Text Message Program</h2>
          <p className="mb-4 text-cream/70">
            If you opt in to receive texts from {BRAND} at {DOMAIN}, here&apos;s what to know:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-cream/70">
            <li>Message frequency varies. Msg &amp; data rates may apply.</li>
            <li>Reply HELP for help, STOP to opt out.</li>
            <li>Consent is not a condition of employment.</li>
            <li>We are not responsible if a carrier delays or fails to deliver a message.</li>
            <li>See our <Link href="/sms-terms" className="text-gold underline hover:text-gold-light">SMS Terms</Link> and <Link href="/privacy" className="text-gold underline hover:text-gold-light">Privacy Policy</Link> for full details.</li>
          </ul>
          <p className="mb-6 text-cream/70">
            <strong className="text-cream">{PRIVACY_NO_SHARING_CLAUSE}</strong>
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">4. Sample Messages</h2>
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

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">5. Liability Limits</h2>
          <p className="mb-6 text-cream/70">
            {BRAND} is not responsible for indirect, incidental, special, consequential, or punitive damages arising from using, or being unable to use, the Service.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">6. Get in Touch</h2>
          <p className="mb-6 text-cream/70">
            Questions about these Terms? Reach {LEGAL_NAME} at {ADDRESS}. Email{' '}
            <a href={`mailto:${EMAIL}`} className="text-gold hover:text-gold-light">{EMAIL}</a>
            {' '}or call{' '}
            <a href={`tel:${PHONE}`} className="text-gold hover:text-gold-light">{PHONE_DISPLAY}</a>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
