import type { Metadata } from 'next';
import { DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'Tools | The Wallet Hero',
  description: DEFAULT_DESCRIPTION,
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
