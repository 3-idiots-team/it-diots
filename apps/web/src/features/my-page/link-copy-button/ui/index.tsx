import { ButtonHTMLAttributes } from 'react';

import { Button, Icon, toast } from '@it-diots/shared/ui';

interface LinkCopyButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  link: string;
}

export function LinkCopyButton({ link, ...props }: LinkCopyButtonProps) {
  const handleCopyInviteLink = () => {
    navigator.clipboard.writeText(link);
    toast.success('링크가 복사되었습니다.');
  };

  return (
    <div className="mt-4 flex items-center justify-between rounded-md border px-2 py-2 font-mono text-sm shadow-sm">
      <p className="text-gray-600">{link}</p>

      <Button className="h-8 h-full" onClick={handleCopyInviteLink} {...props}>
        <Icon name="Copy" className="h-4 w-4" />
      </Button>
    </div>
  );
}
