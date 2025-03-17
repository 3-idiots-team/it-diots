'use server';

import { createClient } from '@it-diots/supabase/server';

import { Feed } from '@/shared/types';

export async function getFeed(): Promise<Feed[]> {
  const supabase = await createClient();

  const { data }: { data: Feed[] | null } = await supabase.from('feeds').select(
    `
    id,
    title,
    description,
    origin_url,
    og_image_url,
    og_url,
    views,
    upvotes,
    downvotes,
    created_at,
    updated_at,
    user_id,
    users (
      id,
      username,
      avatar_url,
      email
    )
  `
  );

  return data || [];
}

export async function toggleBookmarkFeed(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return id;
}

export async function upvoteFeed(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return id;
}

export async function createFeed(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');

  return { title, content };
}
