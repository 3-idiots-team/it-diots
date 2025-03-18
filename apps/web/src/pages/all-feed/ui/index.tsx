import { Suspense } from 'react';

import { AllFeedList } from './all-feed-list';
import { FeedCreateModalTrigger } from './feed-create-modal-trigger';

import { PageLoading } from '@/shared/ui/page-loading';

export async function AllFeedPage() {
  return (
    <div className="p-4 w-full flex flex-col gap-4">
      <div className="flex justify-end items-center">
        <FeedCreateModalTrigger />
      </div>

      <Suspense fallback={<PageLoading />}>
        <AllFeedList />
      </Suspense>
    </div>
  );
}
