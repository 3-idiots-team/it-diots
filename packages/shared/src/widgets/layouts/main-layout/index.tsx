import { PropsWithChildren } from 'react';

import { SidebarInset, SidebarProvider } from '@it-diots/shared/ui';

import { Header } from './header';
import { Sidebar } from './sidebar';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};
