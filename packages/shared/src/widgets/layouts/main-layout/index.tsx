import { PropsWithChildren } from 'react';

import { SidebarInset, SidebarProvider } from '@it-diots/shared/ui';
import { OAuthUser } from '@it-diots/supabase/types';

import { Header } from './header';
import { Sidebar } from './sidebar';

interface MainLayoutProps extends PropsWithChildren {
  onSignOut: () => void;
  userInfo: OAuthUser;
}

export function MainLayout({ children, onSignOut, userInfo }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <Sidebar />

      <SidebarInset>
        <Header onSignOut={onSignOut} userInfo={userInfo} />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
