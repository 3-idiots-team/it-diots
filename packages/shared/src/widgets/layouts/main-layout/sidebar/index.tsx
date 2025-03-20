import { Sidebar as ShadcnSidebar, SidebarContent } from '@it-diots/shared/ui';

import { LogoHeader } from './logo-header';
import { RouteGroups } from './route-groups';

export function Sidebar() {
  return (
    <ShadcnSidebar collapsible="icon">
      <LogoHeader />
      <SidebarContent>
        <RouteGroups />
      </SidebarContent>
    </ShadcnSidebar>
  );
}
