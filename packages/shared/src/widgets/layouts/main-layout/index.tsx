import { PropsWithChildren } from 'react';

import { SidebarInset, SidebarProvider } from '@it-diots/shared/ui';
import { OAuthUser } from '@it-diots/supabase/types';

import { Header } from './header';
import { Sidebar } from './sidebar';

export function MainLayout({
  children,
  onSignOut,
  userInfo,
}: PropsWithChildren & { onSignOut: () => void; userInfo: OAuthUser }) {
  return (
    <SidebarProvider>
      <Sidebar onSignOut={onSignOut} userInfo={userInfo} />
      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
