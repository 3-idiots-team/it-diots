import { PropsWithChildren } from 'react';

import { SidebarProvider, SidebarTrigger } from '@it-diots/shared/ui';

import { Sidebar } from './sidebar';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarTrigger />
      {children}
    </SidebarProvider>
  );
};
