'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@it-diots/shared/ui';
import { OAuthUser } from '@it-diots/supabase/types';

import { ChevronsUpDown } from 'lucide-react';

export function SidebarUser({
  onSignOut,
  userInfo,
}: {
  onSignOut: () => void;
  userInfo: OAuthUser;
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  className="object-cover"
                  src={userInfo.avatar_url ?? undefined}
                  alt={userInfo.username ?? undefined}
                />
                <AvatarFallback className="rounded-lg">{userInfo.username}</AvatarFallback>
              </Avatar>

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{userInfo.username}</span>
                <span className="truncate text-xs">{userInfo.email}</span>
              </div>

              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={12}
          >
            <DropdownMenuItem onClick={onSignOut}>
              <Icon name={'LogOut'} /> 로그아웃
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
