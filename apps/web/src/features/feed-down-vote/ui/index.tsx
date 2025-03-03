'use client';

import { MouseEvent, useOptimistic, useTransition } from 'react';

import { cn } from '@it-diots/shared/lib/utils';
import { Button, ButtonProps } from '@it-diots/shared/ui';

import { ArrowBigDown } from 'lucide-react';

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
        'hover:bg-red-100 hover:text-red-500 transition-all duration-300 disabled:bg-red-100',
        {
          'bg-red-100': optimisticHasDownvoted,
        }
      )}
      onClick={handleDownvote}
      {...props}
    >
      <ArrowBigDown
        className={cn('w-5 h-5', {
          'text-red-500': optimisticHasDownvoted,
        })}
      />
    </Button>
  );
}
