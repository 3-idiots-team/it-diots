'use client';

import { Separator, SidebarTrigger } from '@it-diots/shared/ui';
import { OAuthUser } from '@it-diots/supabase/types';

import { HeaderUser } from './header-user';
import { PathBreadcrumb } from './path-breadcrumb';
import { ThemeToggle } from './theme-toggle';

interface HeaderProps {
  onSignOut: () => void;
  userInfo: OAuthUser;
}

export function Header({ onSignOut, userInfo }: HeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
      <div className="flex h-full items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 max-h-4" />
        <PathBreadcrumb />
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <HeaderUser onSignOut={onSignOut} userInfo={userInfo} />
      </div>
    </header>
  );
}
