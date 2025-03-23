import { UserActivity } from '@/widgets/[userId]/user-activity';
import { UserProfile } from '@/widgets/[userId]/user-profile';

export function ProfilePage() {
  return (
    <div className="flex h-full justify-center">
      <div className="h-full w-[678px] border-l border-r">
        <UserActivity />
      </div>

      <div className="h-full w-[340px] border-r p-4">
        <UserProfile />
      </div>
    </div>
  );
}
