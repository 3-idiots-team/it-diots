import { Inter } from 'next/font/google';

import { Toaster } from '@it-diots/shared/ui';
import { MainLayout } from '@it-diots/shared/widgets/layouts';

import { ThemeProvider } from '../provider/theme-provider';

import '@it-diots/shared/globals.css';

import { TOAST_PROPS } from '@/shared/constants';
import { ModeToggle } from '@/shared/ui/theme-toggle';

const inter = Inter({ subsets: ['latin'] });

export function FeedLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainLayout>{children}</MainLayout>

          <Toaster {...TOAST_PROPS} />

          {modal}

          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
