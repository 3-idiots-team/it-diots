import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@it-diots/shared/components/ui';
import { NAVIGATION_ROUTES } from '@it-diots/shared/constants/page-routes';

export const Sidebar = () => {
  return (
    <ShadcnSidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAVIGATION_ROUTES.map(({ text, url, icon: Icon }) => (
                <SidebarMenuItem key={text}>
                  <SidebarMenuButton asChild>
                    <a href={url}>
                      <Icon />
                      <span>{text}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </ShadcnSidebar>
  );
};
