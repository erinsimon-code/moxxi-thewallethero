'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { BRAND } from '../lib/brand';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/lessons', label: 'Lessons' },
  { href: '/tools', label: 'Tools' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = (href: string) =>
    `hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      pathname === href ? 'text-gold' : 'text-cream'
    }`;

  const mobileLinkClass = (href: string) =>
    `hover:text-gold px-3 py-2 rounded-md text-base font-medium transition-colors ${
      pathname === href ? 'text-gold' : 'text-cream'
    }`;

  return (
    <nav className="bg-midnight border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-heading font-bold text-cream">{BRAND}</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/join"
                className="px-4 py-2 rounded-lg text-sm font-heading font-semibold bg-gold text-midnight hover:bg-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
              >
                Join
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="p-2 rounded-md text-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={mobileLinkClass(link.href)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/join"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-2 rounded-lg text-base font-heading font-semibold text-center bg-gold text-midnight hover:bg-gold-light transition-colors"
              >
                Join
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
