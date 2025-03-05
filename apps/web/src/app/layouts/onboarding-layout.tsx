import { Inter } from 'next/font/google';

import '@it-diots/shared/globals.css';

const inter = Inter({ subsets: ['latin'] });

export function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="w-full h-screen">{children}</div>
      </body>
    </html>
  );
}
