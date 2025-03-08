'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@it-diots/shared/ui';

import { PlusSquare } from 'lucide-react';

export function FeedCreateDisplayButton() {
  const { push: routerPush } = useRouter();

  return (
    <Button
      onClick={() => routerPush('/create')}
      size="sm"
      variant="outline"
      className="flex gap-1 items-center"
    >
      <PlusSquare className="w-4 h-4" />
      피드 추가
    </Button>
  );
}
