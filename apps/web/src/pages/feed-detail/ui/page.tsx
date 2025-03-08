import { Suspense } from 'react';

import { PageLoading } from '@/shared/ui/page-loading';
import { FeedDetail } from '@/widgets/feed-detail';

export function FeedDetailPage() {
  return (
    <div className="p-4 w-full">
      <Suspense fallback={<PageLoading />}>
        <FeedDetail />
      </Suspense>
    </div>
  );
}
