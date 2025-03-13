'use client';

import { MouseEvent, useOptimistic, useTransition } from 'react';

import { cn } from '@it-diots/shared/lib/utils';
import { Button, ButtonProps, Icon } from '@it-diots/shared/ui';

import { upvoteFeed } from '@/shared/actions/feed';

interface FeedDownvoteProps extends Omit<ButtonProps, 'size' | 'type'> {
  feedId: number;
  hasDownvoted: boolean;
}

export function FeedDownvoteButton({
  className,
  feedId,
  hasDownvoted,
  ...props
}: FeedDownvoteProps) {
  const [isPending, startTransition] = useTransition();

  const [optimisticHasDownvoted, toggleDownvote] = useOptimistic(
    hasDownvoted,
    (_, newHasDownvoted: boolean) => newHasDownvoted
  );

  const handleDownvote = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const previousHasDownvoted = optimisticHasDownvoted;

    startTransition(() => {
      toggleDownvote(!previousHasDownvoted);
    });

    try {
      await upvoteFeed(feedId);
    } catch (error) {
      console.error('업보트 실패', error);

      startTransition(() => {
        toggleDownvote(previousHasDownvoted);
      });
    }
  };

  return (
    <Button
      size="sm"
      type="button"
      variant={optimisticHasDownvoted ? 'destructive' : 'ghost'}
      disabled={isPending}
      className={cn(
        className,
        'hover:bg-red-100 hover:text-red-800 transition-all duration-300 dark:hover:bg-red-800 dark:hover:text-red-100',
        {
          'rounded-none': hasDownvoted,
          'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100': optimisticHasDownvoted,
        }
      )}
      onClick={handleDownvote}
      {...props}
    >
      <Icon name="ThumbsDown" className={cn('w-4 h-4')} />
    </Button>
  );
}
