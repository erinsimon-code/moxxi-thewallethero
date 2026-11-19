'use client';

import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { EDUCATION_DISCLAIMER } from '../lib/brand';

// Note: this is a client component, so metadata for this route lives in
// ./layout.tsx.

function parseAmount(value: string): number {
  const n = parseFloat(value.replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export default function ToolsPage() {
  const [income, setIncome] = useState('');
  const [needs, setNeeds] = useState('');
  const [wants, setWants] = useState('');
  const [savings, setSavings] = useState('');

  const incomeAmt = parseAmount(income);
  const needsAmt = parseAmount(needs);
  const wantsAmt = parseAmount(wants);
  const savingsAmt = parseAmount(savings);

  const { needsPct, wantsPct, savingsPct } = useMemo(() => {
    if (incomeAmt <= 0) return { needsPct: 0, wantsPct: 0, savingsPct: 0 };
    return {
      needsPct: Math.min(100, (needsAmt / incomeAmt) * 100),
      wantsPct: Math.min(100, (wantsAmt / incomeAmt) * 100),
      savingsPct: Math.min(100, (savingsAmt / incomeAmt) * 100),
    };
  }, [incomeAmt, needsAmt, wantsAmt, savingsAmt]);

  const fieldClass =
    'w-full pl-7 pr-4 py-3 rounded-lg border border-field-border bg-midnight text-cream placeholder:text-cream/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus:border-gold';

  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />

      <section className="py-20 bg-panel border-b border-hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4 text-cream">Budget Planner</h1>
          <p className="text-lg text-cream/70">See how your monthly spending compares to the 50/30/20 guideline.</p>
          <p className="mt-4 text-sm text-gold-light">Your numbers stay on this page and are never saved or sent.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl p-8 md:p-12 bg-panel border border-hairline space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-cream">Monthly take-home pay</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/50">$</span>
              <input type="text" inputMode="decimal" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="0" className={fieldClass} />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-cream">Needs</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/50">$</span>
                <input type="text" inputMode="decimal" value={needs} onChange={(e) => setNeeds(e.target.value)} placeholder="0" className={fieldClass} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-cream">Wants</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/50">$</span>
                <input type="text" inputMode="decimal" value={wants} onChange={(e) => setWants(e.target.value)} placeholder="0" className={fieldClass} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-cream">Savings</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/50">$</span>
                <input type="text" inputMode="decimal" value={savings} onChange={(e) => setSavings(e.target.value)} placeholder="0" className={fieldClass} />
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-5">
            <h2 className="text-xl font-heading font-bold text-cream">Your 50/30/20 comparison</h2>

            <BudgetBar label="Needs" guideline={50} actualPct={needsPct} amount={needsAmt} />
            <BudgetBar label="Wants" guideline={30} actualPct={wantsPct} amount={wantsAmt} />
            <BudgetBar label="Savings" guideline={20} actualPct={savingsPct} amount={savingsAmt} />

            <p className="text-sm text-cream/70 pt-2">
              The 50/30/20 guideline suggests about 50% of take-home pay for needs, 30% for wants and 20% for savings. This is general education, not a recommendation for your specific situation.
            </p>
          </div>
        </div>

        <p className="text-sm text-cream/70 mt-10 text-center">No bank linking. {EDUCATION_DISCLAIMER}</p>
      </section>

      <Footer />
    </div>
  );
}

function BudgetBar({
  label,
  guideline,
  actualPct,
  amount,
}: {
  label: string;
  guideline: number;
  actualPct: number;
  amount: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm text-cream/70 mb-1">
        <span className="font-semibold text-cream">{label}</span>
        <span>
          ${amount.toFixed(2)} ({actualPct.toFixed(0)}%) · guideline {guideline}%
        </span>
      </div>
      <div className="w-full h-4 rounded-full bg-midnight border border-hairline overflow-hidden relative">
        <div
          className="absolute top-0 bottom-0 w-px bg-cream/50"
          style={{ left: `${guideline}%` }}
          aria-hidden="true"
        />
        <div
          className="h-full rounded-full bg-gold"
          style={{ width: `${actualPct}%` }}
          role="img"
          aria-label={`${label}: ${actualPct.toFixed(0)}% of income, guideline ${guideline}%`}
        />
      </div>
    </div>
  );
}
