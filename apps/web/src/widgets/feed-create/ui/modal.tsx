'use client';

import { useRouter } from 'next/navigation';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@it-diots/shared/ui';

import { FeedCreateForm } from '@/features/feed-create';

export function FeedCreateFormModal() {
  const { back: routerBack } = useRouter();

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) return;

    routerBack();
  };

  return (
    <Dialog defaultOpen onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 피드 작성</DialogTitle>
        </DialogHeader>

        <FeedCreateForm />
      </DialogContent>
    </Dialog>
  );
}
