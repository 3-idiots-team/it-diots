import { Inter } from 'next/font/google';

import { Toaster } from '@it-diots/shared/ui';
import { MainLayout } from '@it-diots/shared/widgets/layouts';

import '@it-diots/shared/globals.css';

import { TOAST_PROPS } from '@/shared/constants';

const inter = Inter({ subsets: ['latin'] });

export function FeedLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>

        <Toaster {...TOAST_PROPS} />
      </body>
    </html>
  );
}
