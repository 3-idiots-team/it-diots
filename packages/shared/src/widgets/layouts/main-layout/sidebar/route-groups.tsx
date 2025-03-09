'use client';

import { usePathname, useRouter } from 'next/navigation';

import { SIDEBAR_ROUTE_GROUPS } from '@it-diots/shared/constants/page-routes';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@it-diots/shared/ui';

export const RouteGroups = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  return SIDEBAR_ROUTE_GROUPS.map(({ label, routes }) => (
    <SidebarGroup key={label}>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {routes.map(({ text, icon: Icon, url, matcher }) => (
            <SidebarMenuItem key={text}>
              <SidebarMenuButton
                isActive={matcher?.(pathname) ?? pathname === url}
                onClick={() => push(url)}
              >
                <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
                {text}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  ));
};
