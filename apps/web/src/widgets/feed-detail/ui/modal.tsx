'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import {
  AspectRatio,
  Badge,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@it-diots/shared/ui';

import { FeedBookmarkButton } from '@/features/feed-bookmark';
import { FeedComment } from '@/features/feed-comment/ui';
import { FeedCopyLinkButton } from '@/features/feed-copy-link';
import { FeedDownvoteButton } from '@/features/feed-down-vote';
import { FeedUpvoteButton } from '@/features/feed-upvote';

export function FeedDetailModal() {
  const { back: routerBack } = useRouter();

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) return;

    routerBack();
  };

  return (
    <Dialog defaultOpen onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogClose />

        <DialogHeader className="gap-4">
          <DialogTitle>Shadcn: 생상적인 UI 개발의 비결</DialogTitle>

          <div className="flex items-center gap-2">
            <Badge variant="outline">#webdev</Badge>
            <Badge variant="outline">#ui</Badge>
            <Badge variant="outline">#design</Badge>
          </div>

          <AspectRatio ratio={16 / 9}>
            <Image
              src="https://github.com/shadcn-ui/ui/blob/main/apps/www/public/og.jpg?raw=true"
              alt="Shadcn: 생상적인 UI 개발의 비결"
              fill
              className="object-cover"
            />
          </AspectRatio>

          <DialogDescription>
            Shadcn은 웹 개발의 생산성과 유지보수성을 향상시키는 사전 빌드된 UI 구성 요소를 제공하는
            다목적 오픈소스 라이브러리입니다. Tailwind CSS와 Radix UI 프리미티브를 결합하여 유연하고
            접근하기 쉬운 디자인 요소를 제공하며, Next.js와 같은 프레임워크와 원활하게 통합할 수
            있습니다. Shadcn은 일관된 코드베이스, 손쉬운 유지 관리, 대규모 팀의 효율적인 협업을
            촉진하여 개발자에게 유용한 도구입니다.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center border border-transparent rounded-xl bg-zinc-50 overflow-hidden">
            <FeedUpvoteButton feedId={1} upvoteCount={0} hasUpvoted={false} />
            <FeedDownvoteButton feedId={1} hasDownvoted={false} />
          </div>

          <FeedComment commentCount={1} />
          <FeedBookmarkButton feedId={1} hasBookmarked={false} />
          <FeedCopyLinkButton feedId={1} />
        </div>

        <div className="flex justify-between items-center gap-2">댓글...</div>
      </DialogContent>
    </Dialog>
  );
}
