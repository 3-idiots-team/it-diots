import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@it-diots/shared/ui';
import { OAuthUser } from '@it-diots/supabase/types';

import { RouteGroups } from './route-groups';
import { SidebarUser } from './sidebar-user';

interface SidebarProps {
  onSignOut: () => void;
  userInfo: OAuthUser;
}

export function Sidebar({ onSignOut, userInfo }: SidebarProps) {
  return (
    <ShadcnSidebar collapsible="icon">
      <SidebarHeader>
        <SidebarUser onSignOut={onSignOut} userInfo={userInfo} />
      </SidebarHeader>

      <SidebarContent>
        <RouteGroups />
      </SidebarContent>

      <SidebarFooter />
    </ShadcnSidebar>
  );
}
