import { Inter } from 'next/font/google';

import { Toaster } from '@it-diots/shared/ui';

import { Providers } from '../provider';

import '@it-diots/shared/globals.css';

import { TOAST_PROPS } from '@/shared/constants';
import { ModeToggle } from '@/shared/ui';

const inter = Inter({ subsets: ['latin'] });

export function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}

          <Toaster {...TOAST_PROPS} />

          {modal}

          <ModeToggle />
        </Providers>
      </body>
    </html>
  );
}
