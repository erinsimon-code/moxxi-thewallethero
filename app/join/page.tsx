'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { Building2, Mail, Phone, User, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ACCOUNT_CONSENT_LABEL,
  PROMOTIONAL_CONSENT_LABEL,
  CONSENT_MOBILE_REQUIRED_ERROR,
  CONSENT_MOBILE_INVALID_ERROR,
  ACCOUNT_SAMPLE_MESSAGES,
  PROMOTIONAL_SAMPLE_MESSAGES,
} from '../lib/brand';

// Note: metadata for this route is set in ./layout.tsx since this is a
// client component ('use client' pages cannot export metadata directly).

type FormData = {
  companyId: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
};

export default function JoinPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    companyId: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
  });
  const [accountConsent, setAccountConsent] = useState(false);
  const [promoConsent, setPromoConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mobileError, setMobileError] = useState('');
  const mobileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Either box stays freely togglable — no required attribute, and
  // unchecking both always clears any pending mobile-number error. Mobile
  // number validity is only enforced on submit, in handleSubmit below.
  const handleAccountConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountConsent(e.target.checked);
    if (!e.target.checked && !promoConsent) {
      setMobileError('');
    }
  };

  const handlePromoConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoConsent(e.target.checked);
    if (!e.target.checked && !accountConsent) {
      setMobileError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const anyConsent = accountConsent || promoConsent;

    if (anyConsent) {
      const digits = formData.mobile.replace(/\D/g, '');
      if (formData.mobile.trim() === '') {
        setMobileError(CONSENT_MOBILE_REQUIRED_ERROR);
        mobileInputRef.current?.focus();
        return;
      }
      if (digits.length !== 10) {
        setMobileError(CONSENT_MOBILE_INVALID_ERROR);
        mobileInputRef.current?.focus();
        return;
      }
    }

    setMobileError('');
    setIsSubmitting(true);

    if (anyConsent) {
      // Either box checked + valid phone → send to /verify to confirm the
      // number. The phone number is kept in component state only, never in
      // the URL.
      setTimeout(() => {
        router.push('/verify');
      }, 800);
      return;
    }

    // Neither box checked → the form submits with only a Company ID, as before.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />

      <section className="py-12 bg-panel border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4 text-cream">Join With Your Company ID</h1>
          <p className="text-xl max-w-2xl mx-auto text-cream/70">
            For current employees of participating employers only. Participation is voluntary.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl shadow-xl p-8 md:p-12 bg-panel border border-hairline">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-gold">
                <CheckCircle2 className="w-10 h-10 text-midnight" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-cream">You&apos;re In!</h2>
              <p className="text-lg mb-8 text-cream/70">Visit My Wallet any time to work through lessons and track your own goals.</p>
              <Link
                href="/my-wallet"
                className="inline-block px-6 py-3 font-heading font-semibold rounded-lg bg-gold text-midnight hover:bg-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
              >
                Go to My Wallet
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-cream">Company ID *</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/50" />
                  <input type="text" name="companyId" required value={formData.companyId} onChange={handleChange} placeholder="Company ID" className="w-full pl-10 pr-4 py-3 rounded-lg border border-field-border bg-midnight text-cream placeholder:text-cream/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus:border-gold" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-cream">First Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/50" />
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className="w-full pl-10 pr-4 py-3 rounded-lg border border-field-border bg-midnight text-cream placeholder:text-cream/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus:border-gold" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-cream">Last Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/50" />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className="w-full pl-10 pr-4 py-3 rounded-lg border border-field-border bg-midnight text-cream placeholder:text-cream/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus:border-gold" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-cream">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/50" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full pl-10 pr-4 py-3 rounded-lg border border-field-border bg-midnight text-cream placeholder:text-cream/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus:border-gold" />
                  </div>
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium mb-2 text-cream">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/50" />
                    <input
                      ref={mobileInputRef}
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={(e) => {
                        handleChange(e);
                        if (mobileError) setMobileError('');
                      }}
                      placeholder="Mobile number"
                      aria-invalid={mobileError ? true : undefined}
                      aria-describedby={mobileError ? 'mobile-error' : undefined}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-midnight text-cream placeholder:text-cream/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus:border-gold ${mobileError ? 'border-red-500' : 'border-field-border'}`}
                    />
                  </div>
                  {mobileError && (
                    <p id="mobile-error" role="alert" className="mt-2 text-sm text-red-400">
                      {mobileError}
                    </p>
                  )}
                </div>
              </div>

              {/* SMS Consent — two separate boxes, both optional and unchecked by default */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="accountConsent"
                    checked={accountConsent}
                    onChange={handleAccountConsentChange}
                    className="mt-1 w-4 h-4 rounded accent-gold"
                  />
                  <label htmlFor="accountConsent" className="text-sm leading-relaxed text-cream/70">
                    {ACCOUNT_CONSENT_LABEL}
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="promoConsent"
                    checked={promoConsent}
                    onChange={handlePromoConsentChange}
                    className="mt-1 w-4 h-4 rounded accent-gold"
                  />
                  <label htmlFor="promoConsent" className="text-sm leading-relaxed text-cream/70">
                    {PROMOTIONAL_CONSENT_LABEL}
                  </label>
                </div>
                <p className="text-sm text-cream/70">
                  See our{' '}
                  <a href="/sms-terms" className="text-gold underline hover:text-gold-light">SMS Terms</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-gold underline hover:text-gold-light">Privacy Policy</a>.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-lg font-heading font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-panel disabled:cursor-not-allowed bg-gold text-midnight hover:bg-gold-light disabled:bg-steel"
              >
                {isSubmitting ? 'Submitting...' : 'Join'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Sample messages — identical to /sms-terms */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-heading font-bold mb-4 text-cream">Sample Messages</h2>
        <p className="text-sm mb-4 text-cream/70">Here&apos;s what a text from The Wallet Hero might look like:</p>
        <p className="text-sm font-semibold mb-2 text-cream">Account notification examples</p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-cream/70">
          {ACCOUNT_SAMPLE_MESSAGES.map((message) => (
            <li key={message}>{message}</li>
          ))}
        </ul>
        <p className="text-sm font-semibold mb-2 text-cream">Promotional examples</p>
        <ul className="list-disc pl-6 space-y-2 text-cream/70">
          {PROMOTIONAL_SAMPLE_MESSAGES.map((message) => (
            <li key={message}>{message}</li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
}
