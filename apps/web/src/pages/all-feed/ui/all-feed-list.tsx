import { getFeed } from '@/shared/actions';
import { FeedList } from '@/widgets/feed-list';

export async function AllFeedList() {
  const feedList = await getFeed();

  return <FeedList feedList={feedList} />;
}
