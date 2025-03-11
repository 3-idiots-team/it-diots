'use client';

import { HTMLAttributes } from 'react';
import { useRouter } from 'next/navigation';

import { cn } from '@it-diots/shared/lib/utils';
import { Button } from '@it-diots/shared/ui';

interface TagNavigateButtonProps extends HTMLAttributes<HTMLButtonElement> {
  tag: string;
}

export function TagNavigateButton({ tag, ...props }: TagNavigateButtonProps) {
  const { push } = useRouter();

  return (
    <Button
      onClick={() => push(`/tag/${tag}`)}
      variant={'secondary'}
      {...props}
      className={cn('w-fit rounded-lg', props.className)}
    >
      #{tag}
    </Button>
  );
}
