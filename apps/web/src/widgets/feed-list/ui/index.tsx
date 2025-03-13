'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import {
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@it-diots/shared/ui';

import { FeedBookmarkButton } from '@/features/feed-bookmark';
import { FeedComment } from '@/features/feed-comment/ui';
import { FeedCopyLinkButton } from '@/features/feed-copy-link';
import { FeedCreateDisplayButton } from '@/features/feed-create';
import { FeedDownvoteButton } from '@/features/feed-down-vote';
import { FeedUpvoteButton } from '@/features/feed-upvote';

const MOCK_TAGS = ['webdev', 'it', 'design'];

export function FeedList() {
  const { push } = useRouter();

  const visibleTags = MOCK_TAGS.slice(0, 2);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end items-center">
        <FeedCreateDisplayButton />
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-4 lg:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
        {[1, 2, 3].map((value) => {
          return (
            <Card
              className="cursor-pointer overflow-hidden !gap-6.5"
              key={value}
              onClick={() => push(`/feed/${value}`)}
            >
              <CardHeader>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="w-fit">
                      <Avatar className="h-8 w-8 rounded-full">
                        <AvatarImage
                          className="object-cover"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                          alt="user image"
                        />
                        <AvatarFallback className="rounded-lg">USER</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>{'IT Idiots'}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardHeader>

              <CardContent className="flex flex-col gap-3">
                <CardTitle className="text-base tracking-tight line-clamp-1">
                  Shadcn, 생산적으로 일하기 위한 필수 도구
                </CardTitle>

                <p className="text-xs text-muted-foreground tracking-tight">
                  {new Date().toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>

                <div className="flex items-center gap-1.5 -ml-1 py-1">
                  {visibleTags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      #{tag}
                    </Badge>
                  ))}

                  <Badge variant="secondary">+{MOCK_TAGS.length - visibleTags.length}</Badge>
                </div>
              </CardContent>

              <AspectRatio ratio={2 / 1}>
                <Image
                  src="https://github.com/shadcn-ui/ui/blob/main/apps/www/public/og.jpg?raw=true"
                  alt="Shadcn: 생상적인 UI 개발의 비결"
                  fill
                  className="object-cover"
                />
              </AspectRatio>

              <CardFooter className="justify-between">
                <div className="flex items-center border border-transparent rounded-xl bg-zinc-50 dark:bg-zinc-800 overflow-hidden">
                  <FeedUpvoteButton feedId={1} upvoteCount={value} hasUpvoted={value === 1} />
                  <FeedDownvoteButton feedId={1} hasDownvoted={value === 1} />
                </div>

                <FeedComment commentCount={value} />
                <FeedBookmarkButton feedId={1} hasBookmarked={value === 1} />
                <FeedCopyLinkButton feedId={1} />
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
