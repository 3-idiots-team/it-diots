import { Suspense } from 'react';

import { PageLoading } from '@/shared/ui/page-loading';
import { FeedList } from '@/widgets/feed-list';

export function FeedPage() {
  return (
    <div className="p-4 w-full">
      <Suspense fallback={<PageLoading />}>
        <FeedList />
      </Suspense>
    </div>
  );
}
