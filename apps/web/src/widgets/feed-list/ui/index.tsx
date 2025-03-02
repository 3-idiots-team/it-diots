import { FeedBookmarkButton, FeedCopyLinkButton, FeedUpvoteButton } from '@/features';

export function FeedList() {
  return (
    <div className="flex items-center gap-2">
      <FeedBookmarkButton feedId={1} hasBookmarked={false} />
      <FeedUpvoteButton feedId={1} upvoteCount={0} hasUpvoted={false} />
      <FeedCopyLinkButton feedId={1} />
    </div>
  );
}
