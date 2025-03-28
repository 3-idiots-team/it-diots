'use client';

import { useParams, useSearchParams } from 'next/navigation';

import { Posts } from './posts';
import { ReadMe } from './read-me';
import { Replies } from './replies';
import { Upvoted } from './upvoted';

import { ActivityTab } from '@/features/my-page/activity-tab';

export function UserActivity() {
  const params = useParams<{ userId: string }>();
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get('tab') || 'readMe';

  return (
    <div className="flex flex-col">
      <ActivityTab userId={params?.userId} />

      <main className="p-4">
        {(() => {
          switch (tabParam) {
            case 'readMe':
              return <ReadMe />;
            case 'posts':
              return <Posts />;
            case 'replies':
              return <Replies />;
            case 'upvoted':
              return <Upvoted />;
            default:
              return null;
          }
        })()}
      </main>
    </div>
  );
}
