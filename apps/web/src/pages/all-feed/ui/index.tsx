import { Suspense } from 'react';

import { AllFeedList } from './all-feed-list';

import { PageLoading } from '@/shared/ui/page-loading';

export async function AllFeedPage() {
  return (
    <div className="p-4 w-full">
      <Suspense fallback={<PageLoading />}>
        <AllFeedList />
      </Suspense>
    </div>
  );
}
