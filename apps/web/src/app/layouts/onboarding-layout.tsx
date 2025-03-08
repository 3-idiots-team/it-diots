import { Inter } from 'next/font/google';

import { ThemeProvider } from '../provider/theme-provider';

import '@it-diots/shared/globals.css';

import { ModeToggle } from '@/shared/ui';

const inter = Inter({ subsets: ['latin'] });

export function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="w-full h-screen">{children}</div>

          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
