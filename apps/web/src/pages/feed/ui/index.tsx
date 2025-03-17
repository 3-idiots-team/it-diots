import { Suspense } from 'react';

import { FeedCreateModalTrigger } from './feed-create-modal-trigger';

import { PageLoading } from '@/shared/ui/page-loading';
import { FeedList } from '@/widgets/feed-list';

export function FeedPage() {
  return (
    <div className="p-4 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-end items-center">
          <FeedCreateModalTrigger />
        </div>

        <Suspense fallback={<PageLoading />}>
          <FeedList />
        </Suspense>
      </div>
    </div>
  );
}
