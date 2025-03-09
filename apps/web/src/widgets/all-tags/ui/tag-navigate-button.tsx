'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@it-diots/shared/ui';

interface TagNavigateButtonProps {
  tag: string;
}

export function TagNavigateButton({ tag }: TagNavigateButtonProps) {
  const { push } = useRouter();

  return (
    <Button onClick={() => push(`/tag/${tag}`)} variant={'secondary'} className="w-fit rounded-lg">
      #{tag}
    </Button>
  );
}
