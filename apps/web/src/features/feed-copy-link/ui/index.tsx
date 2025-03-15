'use client';

import { MouseEvent } from 'react';

import { Button, ButtonProps, Icon, toast } from '@it-diots/shared/ui';

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
      <Icon name="Link" className="w-4 h-4" />
    </Button>
  );
}
