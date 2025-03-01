import { Inter } from 'next/font/google';

import { MainLayout } from '@it-diots/shared/widgets/layouts';

import '@it-diots/shared/globals.css';

const inter = Inter({ subsets: ['latin'] });

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
