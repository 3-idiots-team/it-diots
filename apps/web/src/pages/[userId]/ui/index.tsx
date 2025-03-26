import { UserActivity } from '@/widgets/my-page/user-activity';
import { UserProfile } from '@/widgets/my-page/user-profile';

export function MyPage() {
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
