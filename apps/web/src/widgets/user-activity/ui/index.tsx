'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@it-diots/shared/ui';

import { ProfileTab } from '@/shared/types';

const TAB_LIST: ProfileTab[] = ['Readme', 'Posts', 'Replies', 'Upvoted'];

export function UserActivity({ userName }: { userName: string }) {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get('tab') || 'readMe';

  const handleTabChange = (tab: ProfileTab) => {
    // ReadMe는 기본 탭이므로 쿼리 파라미터 없이 기본 경로로 이동
    const query = tab === 'Readme' ? '' : `?tab=${tab.toLowerCase()}`;
    push(`/${userName}${query}`);
  };

  const checkActiveTab = (tab: ProfileTab) => {
    return tab.toLowerCase() === tabParam.toLowerCase();
  };

  return (
    <div className="flex flex-col">
      <div className="flex border-b">
        {TAB_LIST.map((tab) => (
          <div key={tab} className="relative flex flex-col items-center">
            <Button variant="ghost" size="lg" onClick={() => handleTabChange(tab)}>
              {tab}
            </Button>
            {checkActiveTab(tab) && (
              <div className="absolute bottom-0 w-4 h-0.5 bg-primary rounded-full" />
            )}
          </div>
        ))}
      </div>

      <main className="p-4">Main</main>
    </div>
  );
}
