import { Suspense } from 'react';

import { FeedCreateModalTrigger } from './feed-create-modal-trigger';

import { getFeed } from '@/shared/actions';
import { PageLoading } from '@/shared/ui/page-loading';
import { FeedList as FeedListComponent } from '@/widgets/feed-list';

async function FeedList() {
  const feedList = await getFeed();

  return <FeedListComponent feedList={feedList} />;
}

export async function FeedPage() {
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
