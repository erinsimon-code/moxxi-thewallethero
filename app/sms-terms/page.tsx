import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  LEGAL_NAME,
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
  ACCOUNT_MESSAGE_TYPES,
  PROMOTIONAL_MESSAGE_TYPES,
  ACCOUNT_SAMPLE_MESSAGES,
  PROMOTIONAL_SAMPLE_MESSAGES,
  STOP_KEYWORDS,
  PRIVACY_NO_SHARING_CLAUSE,
  TOLL_FREE_NOTE,
  PROGRAM_DESCRIPTION,
  FREQUENCY_NOTE,
  DUAL_OPT_OUT_NOTE,
  DEFAULT_DESCRIPTION,
} from '../lib/brand';

export const metadata: Metadata = {
  title: 'SMS Terms | The Wallet Hero',
  description: DEFAULT_DESCRIPTION,
};

export default function SmsTermsPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />
      <section className="py-12 bg-panel border-b border-hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold mb-4 text-cream">SMS Terms</h1>
          <p className="text-lg text-cream/70">Effective Date: November 19, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">1. Program Description</h2>
          <p className="mb-4 text-cream/70">{PROGRAM_DESCRIPTION}</p>
          <p className="mb-6 text-cream/70">{TOLL_FREE_NOTE}</p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">2. Message Types</h2>
          <p className="mb-4 text-cream/70">Account Notifications — if you opt in, you may receive:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-cream/70">
            {ACCOUNT_MESSAGE_TYPES.map((type) => (
              <li key={type.title}><strong className="text-cream">{type.title}</strong> — {type.description}</li>
            ))}
          </ul>
          <p className="mb-4 text-cream/70">Promotional Messages — if you also opt in, you may receive:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-cream/70">
            {PROMOTIONAL_MESSAGE_TYPES.map((type) => (
              <li key={type.title}><strong className="text-cream">{type.title}</strong> — {type.description}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">3. Frequency, Charges and Opting Out</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-cream/70">
            <li>{FREQUENCY_NOTE}</li>
            <li>Msg &amp; data rates may apply.</li>
            <li>Reply <strong className="text-cream">HELP</strong> for help or contact {EMAIL} or {PHONE_DISPLAY}.</li>
            <li>You may also reply with any of the following to opt out: {STOP_KEYWORDS.join(', ')}.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
          </ul>
          <p className="mb-6 text-cream/70">{DUAL_OPT_OUT_NOTE}</p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">4. No Sharing</h2>
          <p className="mb-6 text-cream/70">
            <strong className="text-cream">{PRIVACY_NO_SHARING_CLAUSE}</strong>
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">5. Sample Messages</h2>
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

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-cream">6. Support</h2>
          <p className="mb-6 text-cream/70">
            Questions? Contact {LEGAL_NAME} at {ADDRESS}. Email{' '}
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
