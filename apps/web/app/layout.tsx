import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { MainLayout } from '@it-diots/shared/widgets/layouts';

import '@it-diots/shared/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web',
  description: 'Web',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
