'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { AspectRatio, Badge, Card, CardContent, CardHeader, CardTitle } from '@it-diots/shared/ui';

import { FeedBookmarkButton } from '@/features/feed-bookmark';
import { FeedComment } from '@/features/feed-comment/ui';
import { FeedCopyLinkButton } from '@/features/feed-copy-link';
import { FeedDownvoteButton } from '@/features/feed-down-vote';
import { FeedUpvoteButton } from '@/features/feed-upvote';

export function FeedList() {
  const { push } = useRouter();

  return (
    <div className="grid grid-cols-1 gap-8 md:gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {[1, 2, 3].map((value) => {
        return (
          <Card className="cursor-pointer" key={value} onClick={() => push(`/feed/${value}`)}>
            <CardHeader>
              <CardTitle>Shadcn: 생상적인 UI 개발의 비결</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="https://github.com/shadcn-ui/ui/blob/main/apps/www/public/og.jpg?raw=true"
                  alt="Shadcn: 생상적인 UI 개발의 비결"
                  fill
                  className="object-cover"
                />
              </AspectRatio>

              <p className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>

              <div className="flex items-center gap-2">
                <Badge variant="outline">#webdev</Badge>
                <Badge variant="outline">#ui</Badge>
                <Badge variant="outline">#design</Badge>
              </div>

              <div className="flex justify-between items-center gap-2">
                <div className="flex items-center border border-transparent rounded-xl bg-zinc-50 dark:bg-zinc-800 overflow-hidden">
                  <FeedUpvoteButton feedId={1} upvoteCount={value} hasUpvoted={value === 1} />
                  <FeedDownvoteButton feedId={1} hasDownvoted={value === 1} />
                </div>

                <FeedComment commentCount={value} />
                <FeedBookmarkButton feedId={1} hasBookmarked={value === 1} />
                <FeedCopyLinkButton feedId={1} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
