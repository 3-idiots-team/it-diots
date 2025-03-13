'use client';

import { MouseEvent, useOptimistic, useTransition } from 'react';

import { cn } from '@it-diots/shared/lib/utils';
import { Button, ButtonProps, Icon } from '@it-diots/shared/ui';

import { upvoteFeed } from '@/shared/actions/feed';

interface FeedUpvoteProps extends Omit<ButtonProps, 'size' | 'type'> {
  feedId: number;
  upvoteCount: number;
  hasUpvoted: boolean;
}

type OptimisticUpvoteState = Pick<FeedUpvoteProps, 'hasUpvoted' | 'upvoteCount'>;

export function FeedUpvoteButton({
  className,
  feedId,
  upvoteCount,
  hasUpvoted,
  ...props
}: FeedUpvoteProps) {
  const [isPending, startTransition] = useTransition();

  const [{ hasUpvoted: optimisticHasUpvoted, upvoteCount: optimisticUpvoteCount }, toggleUpvote] =
    useOptimistic(
      {
        hasUpvoted,
        upvoteCount,
      },
      (prev, { hasUpvoted, upvoteCount }: OptimisticUpvoteState) => ({
        ...prev,
        hasUpvoted,
        upvoteCount,
      })
    );

  const handleUpvote = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const changedUpvoteCount = optimisticHasUpvoted
      ? optimisticUpvoteCount - 1
      : optimisticUpvoteCount + 1;

    startTransition(() => {
      toggleUpvote({
        hasUpvoted: !optimisticHasUpvoted,
        upvoteCount: changedUpvoteCount,
      });
    });

    try {
      await upvoteFeed(feedId);
    } catch (error) {
      console.error('업보트 실패', error);

      startTransition(() => {
        toggleUpvote({
          hasUpvoted: !optimisticHasUpvoted,
          upvoteCount: optimisticUpvoteCount - 1,
        });
      });
    }
  };

  return (
    <Button
      size="sm"
      type="button"
      variant={optimisticHasUpvoted ? 'secondary' : 'ghost'}
      disabled={isPending}
      className={cn(
        className,
        'group flex gap-1.5 hover:bg-green-100 hover:text-green-800 transition-all duration-300 min-w-[58px] dark:hover:bg-green-800 dark:hover:text-green-100',
        {
          'rounded-none': hasUpvoted,
          'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100': optimisticHasUpvoted,
        }
      )}
      onClick={handleUpvote}
      {...props}
    >
      <Icon name="ThumbsUp" className={cn('w-4 h-4')} />
      <span>{optimisticUpvoteCount}</span>
    </Button>
  );
}
