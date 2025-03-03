import Image from 'next/image';

import { AspectRatio, Badge, Card, CardContent, CardHeader, CardTitle } from '@it-diots/shared/ui';

import { FeedBookmarkButton } from '@/features/feed-bookmark';
import { FeedCopyLinkButton } from '@/features/feed-copy-link';
import { FeedUpvoteButton } from '@/features/feed-upvote';

export function FeedList() {
  return (
    <div className="grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[1, 2, 3].map((value) => {
        return (
          <Card key={value}>
            <CardHeader>
              <CardTitle>Shadcn: 생상적인 UI 개발의 비결</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="https://github.com/shadcn-ui/ui/blob/main/apps/www/public/og.jpg?raw=true"
                  alt="Shadcn: 생상적인 UI 개발의 비결"
                  layout="fill"
                  objectFit="cover"
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
                <FeedUpvoteButton feedId={1} upvoteCount={value} hasUpvoted={2 % value === 0} />
                <FeedBookmarkButton feedId={1} hasBookmarked={false} />
                <FeedCopyLinkButton feedId={1} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
