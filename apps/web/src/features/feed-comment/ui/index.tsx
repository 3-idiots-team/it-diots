import { cn } from '@it-diots/shared/lib/utils';
import { Button, ButtonProps } from '@it-diots/shared/ui';

import { MessageSquareIcon } from 'lucide-react';

interface FeedCommentProps extends ButtonProps {
  commentCount?: number;
}

export function FeedComment({ className, commentCount = 0, ...props }: FeedCommentProps) {
  return (
    <Button
      size="sm"
      type="button"
      variant="ghost"
      className={cn(className, 'flex gap-1')}
      {...props}
    >
      <MessageSquareIcon className={cn('w-5 h-5')} />

      {commentCount && <span className="text-sm">{commentCount}</span>}
    </Button>
  );
}
