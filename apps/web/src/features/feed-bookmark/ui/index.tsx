'use client';

import { MouseEvent, useOptimistic, useTransition } from 'react';

import { cn } from '@it-diots/shared/lib/utils';
import { Button, ButtonProps, Icon } from '@it-diots/shared/ui';

import { toggleBookmarkFeed } from '@/shared/actions/feed';

interface FeedBookmarkProps extends Omit<ButtonProps, 'size' | 'type'> {
  feedId: number;
  hasBookmarked: boolean;
}

export function FeedBookmarkButton({
  className,
  feedId,
  hasBookmarked,
  ...props
}: FeedBookmarkProps) {
  const [isPending, startTransition] = useTransition();

  const [optimisticHasBookmarked, toggleBookmark] = useOptimistic(
    hasBookmarked,
    (prevHasBookmarked) => !prevHasBookmarked
  );

  const handleBookmarkToggle = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const previousHasBookmarked = optimisticHasBookmarked;

    startTransition(() => {
      toggleBookmark(!optimisticHasBookmarked);
    });

    try {
      await toggleBookmarkFeed(feedId);
    } catch (error) {
      console.error('북마크 실패', error);

      startTransition(() => {
        toggleBookmark(previousHasBookmarked);
      });
    }
  };

  return (
    <Button
      size="icon"
      type="button"
      variant={optimisticHasBookmarked ? 'secondary' : 'ghost'}
      disabled={isPending}
      className={cn(className)}
      onClick={handleBookmarkToggle}
      {...props}
    >
      {optimisticHasBookmarked ? (
        <Icon name="BookMarked" className="w-5 h-5" />
      ) : (
        <Icon name="Bookmark" className="w-5 h-5" />
      )}
    </Button>
  );
}
