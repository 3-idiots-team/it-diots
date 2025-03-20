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
} from '@it-diots/shared/ui';
import { OAuthUser } from '@it-diots/supabase/types';

interface HeaderUserProps {
  onSignOut: () => void;
  userInfo: OAuthUser;
}

export function HeaderUser({ onSignOut, userInfo }: HeaderUserProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full border border-border">
        <Avatar className="h-10 w-10 rounded-full">
          <AvatarImage
            className="object-cover"
            src={userInfo.avatar_url ?? undefined}
            alt={userInfo.username ?? undefined}
          />
          <AvatarFallback className="rounded-lg">{userInfo.username}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side="bottom"
        align="end"
        sideOffset={12}
      >
        <DropdownMenuItem onClick={onSignOut}>
          <Icon name={'LogOut'} /> 로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
