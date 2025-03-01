'use client';

import { useOptimistic, useTransition } from 'react';

import { cn } from '@it-diots/shared/lib/utils';
import { Button, ButtonProps } from '@it-diots/shared/ui';

import { BookmarkCheckIcon, BookmarkIcon } from 'lucide-react';

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

  const handleBookmarkToggle = async () => {
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
      variant="ghost"
      disabled={isPending}
      className={cn(className)}
      onClick={handleBookmarkToggle}
      {...props}
    >
      {optimisticHasBookmarked ? (
        <BookmarkCheckIcon className="w-4 h-4" />
      ) : (
        <BookmarkIcon className="w-4 h-4" />
      )}
    </Button>
  );
}
