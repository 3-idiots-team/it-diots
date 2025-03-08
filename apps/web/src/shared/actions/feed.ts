'use server';

export async function getFeed() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
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
