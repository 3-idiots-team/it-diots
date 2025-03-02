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

export function FeedUpvoteButton({
  className,
  feedId,
  upvoteCount,
  hasUpvoted,
  ...props
}: FeedUpvoteProps) {
  const [isPending, startTransition] = useTransition();

  const [optimisticHasUpvoted, toggleUpvote] = useOptimistic(
    hasUpvoted,
    (prevHasUpvoted) => !prevHasUpvoted
  );

  const [optimisticUpvoteCount, addUpvoteCount] = useOptimistic(
    upvoteCount,
    (prevUpvoteCount) => (prevUpvoteCount || 0) + 1
  );

  const handleUpvote = async () => {
    const previousUpvoteCount = optimisticUpvoteCount;
    const previousHasUpvoted = optimisticHasUpvoted;

    startTransition(() => {
      toggleUpvote(!optimisticHasUpvoted);
      addUpvoteCount(optimisticUpvoteCount + 1);
    });

    try {
      await upvoteFeed(feedId);
    } catch (error) {
      console.error('업보트 실패', error);

      startTransition(() => {
        toggleUpvote(previousHasUpvoted);
        addUpvoteCount(previousUpvoteCount);
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
      <ArrowBigUp className="w-4 h-4" {...(optimisticHasUpvoted && { color: 'green' })} />

      <span className={cn({ 'text-green-500': optimisticHasUpvoted })}>
        {optimisticUpvoteCount}
      </span>
    </Button>
  );
}
