import Link from 'next/link';
import { BRAND, LEGAL_NAME, ADDRESS, PHONE, PHONE_DISPLAY, EMAIL, EDUCATION_DISCLAIMER } from '../lib/brand';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-midnight text-cream py-12 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-cream">{BRAND}</h3>
            <p className="text-cream/70">
              An employer-sponsored financial wellness education program.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-cream">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-cream/70 hover:text-gold transition-colors">How It Works</Link></li>
              <li><Link href="/lessons" className="text-cream/70 hover:text-gold transition-colors">Lessons</Link></li>
              <li><Link href="/tools" className="text-cream/70 hover:text-gold transition-colors">Tools</Link></li>
              <li><Link href="/workshops" className="text-cream/70 hover:text-gold transition-colors">Workshops</Link></li>
              <li><Link href="/faq" className="text-cream/70 hover:text-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-cream">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/sms-terms" className="text-cream/70 hover:text-gold transition-colors">SMS Terms</Link></li>
              <li><Link href="/privacy" className="text-cream/70 hover:text-gold transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-cream/70 hover:text-gold transition-colors">Terms</Link></li>
              <li><Link href="/contact" className="text-cream/70 hover:text-gold transition-colors">Contact</Link></li>
              <li><Link href="/verify" className="text-cream/70 hover:text-gold transition-colors">Verify Your Number</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-cream">Contact</h4>
            <p className="text-cream/70">{LEGAL_NAME}</p>
            <p className="mt-2 text-cream/70">{ADDRESS}</p>
            <a href={`tel:${PHONE}`} className="mt-2 block text-cream/70 hover:text-gold transition-colors">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="mt-2 block text-cream/70 hover:text-gold transition-colors">{EMAIL}</a>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center border-t border-hairline text-cream/70">
          <p>&copy; {year} {LEGAL_NAME}. All rights reserved.</p>
          <p className="mt-2 text-sm">{ADDRESS}</p>
          <p className="mt-1 text-sm">
            <a href={`tel:${PHONE}`} className="hover:text-gold transition-colors">{PHONE_DISPLAY}</a>
            {' · '}
            <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors">{EMAIL}</a>
          </p>
          <p className="mt-2 text-sm">{BRAND} is for current employees of participating employers only.</p>
          <p className="mt-2 text-sm max-w-3xl mx-auto">{EDUCATION_DISCLAIMER}</p>
        </div>
      </div>
    </footer>
  );
}
