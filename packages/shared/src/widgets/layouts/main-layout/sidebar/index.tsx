import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@it-diots/shared/ui';

import { RouteGroups } from './route-groups';
import { SidebarUser } from './sidebar-user';

export function Sidebar() {
  return (
    <ShadcnSidebar collapsible="icon">
      <SidebarHeader>
        <SidebarUser />
      </SidebarHeader>
      <SidebarContent>
        <RouteGroups />
      </SidebarContent>
      <SidebarFooter />
    </ShadcnSidebar>
  );
}
