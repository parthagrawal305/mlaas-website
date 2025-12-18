import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MLAAS | Premier Asset Restructuring & Financial Discretion Services',
  description:
    'MLAAS provides premier asset restructuring and financial discretion services for elite clients worldwide. Transform complex assets into clean, compliant capital.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg-primary text-zinc-50 font-body antialiased">{children}</body>
    </html>
  );
}


