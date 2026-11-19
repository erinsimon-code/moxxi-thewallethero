import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND, LEGAL_NAME, ADDRESS, PHONE, PHONE_DISPLAY, EMAIL, DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'Contact | The Wallet Hero',
  description: DEFAULT_DESCRIPTION,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />
      <section className="py-12 bg-panel border-b border-hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold mb-4 text-cream">Contact Us</h1>
          <p className="text-lg text-cream/70">Questions about joining, your employer&apos;s program, or The Wallet Hero? Here&apos;s how to reach us.</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl p-8 border border-hairline space-y-6 bg-panel">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
              <Building2 className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-1 text-cream/70">Legal Name</h3>
              <p className="text-base font-medium text-cream">{LEGAL_NAME}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-1 text-cream/70">Address</h3>
              <p className="text-base font-medium text-cream">{ADDRESS}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-1 text-cream/70">Phone</h3>
              <a href={`tel:${PHONE}`} className="text-base font-medium text-gold hover:text-gold-light hover:underline">{PHONE_DISPLAY}</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-midnight border border-gold/40">
              <Mail className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-1 text-cream/70">Email</h3>
              <a href={`mailto:${EMAIL}`} className="text-base font-medium text-gold hover:text-gold-light hover:underline">{EMAIL}</a>
            </div>
          </div>
        </div>
        <p className="text-sm text-center mt-8 text-cream/70">
          {LEGAL_NAME} — {BRAND} is for current employees of participating employers only.
        </p>
      </section>
      <Footer />
    </div>
  );
}
