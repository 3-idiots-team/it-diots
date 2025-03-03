'use client';

import { useOptimistic, useTransition } from 'react';

import { cn } from '@it-diots/shared/lib/utils';
import { Button, ButtonProps } from '@it-diots/shared/ui';

import { ArrowBigUp } from 'lucide-react';

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

  const handleUpvote = async () => {
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
      className={cn(className, 'flex gap-1')}
      onClick={handleUpvote}
      {...props}
    >
      <ArrowBigUp
        className={cn('w-4 h-4', {
          'text-green-500': optimisticHasUpvoted,
        })}
      />

      <span className={cn({ 'text-green-500': optimisticHasUpvoted })}>
        {optimisticUpvoteCount}
      </span>
    </Button>
  );
}
