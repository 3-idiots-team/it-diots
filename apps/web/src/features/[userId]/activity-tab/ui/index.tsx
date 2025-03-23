import { useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@it-diots/shared/ui';

import { ProfileTab } from '@/shared/types/profile';

const TAB_LIST: ProfileTab[] = ['Readme', 'Posts', 'Replies', 'Upvoted'];

export function ActivityTab({ userId }: { userId: string | undefined }) {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get('tab') || 'readMe';

  const handleTabChange = (tab: ProfileTab) => {
    // ReadMe는 기본 탭이므로 쿼리 파라미터 없이 기본 경로로 이동
    const query = tab === 'Readme' ? '' : `?tab=${tab.toLowerCase()}`;
    push(`/${userId}${query}`);
  };

  const checkActiveTab = (tab: ProfileTab) => {
    return tab.toLowerCase() === tabParam.toLowerCase();
  };

  return (
    <div className="flex border-b">
      {TAB_LIST.map((tab) => (
        <div key={tab} className="relative flex flex-col items-center">
          <Button variant="ghost" size="lg" onClick={() => handleTabChange(tab)}>
            {tab}
          </Button>

          {checkActiveTab(tab) && (
            <div className="bg-primary absolute bottom-0 h-0.5 w-4 rounded-full" />
          )}
        </div>
      ))}
    </div>
  );
}
