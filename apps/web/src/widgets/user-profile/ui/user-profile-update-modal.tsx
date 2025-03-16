import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@it-diots/shared/ui';

export function UserProfileUpdateModal({ onClose }: { onClose: () => void }) {
  return (
    <Dialog defaultOpen onOpenChange={onClose} className="bg-none">
      <DialogContent className="bg-none">
        <DialogClose onClick={onClose} />

        <DialogHeader>
          <DialogTitle>프로필 수정</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
