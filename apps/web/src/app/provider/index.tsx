import { PropsWithChildren } from 'react';

import { ThemeProvider } from './theme-provider';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
