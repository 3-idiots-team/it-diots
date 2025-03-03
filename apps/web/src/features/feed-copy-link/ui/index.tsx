'use client';

import { MouseEvent } from 'react';

import { Button, ButtonProps, toast } from '@it-diots/shared/ui';

import { LinkIcon } from 'lucide-react';

interface FeedCopyLinkButtonProps extends Omit<ButtonProps, 'size' | 'type' | 'onClick'> {
  feedId: number;
}

export function FeedCopyLinkButton({ feedId, ...props }: FeedCopyLinkButtonProps) {
  const handleCopyLink = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const url = `${window.location.origin}/feed/${feedId}`;
    navigator.clipboard.writeText(url);
    toast.success('링크가 복사되었습니다.');
  };

  return (
    <Button size="icon" type="button" variant="ghost" onClick={handleCopyLink} {...props}>
      <LinkIcon className="w-5 h-5" />
    </Button>
  );
}
