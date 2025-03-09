import { PropsWithChildren } from 'react';

import { ThemeProvider } from './theme-provider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};
