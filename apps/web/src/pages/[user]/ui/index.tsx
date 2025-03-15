'use client';

import { UserActivity } from '@/widgets/user-activity';

export function ProfilePage() {
  return (
    <div className="flex justify-center h-full">
      <div className="w-[678px] h-full border-l border-r">
        <UserActivity userName="chiho" />
      </div>

      <div className="w-[340px] h-full border-r p-4">PROFILE</div>
    </div>
  );
}
