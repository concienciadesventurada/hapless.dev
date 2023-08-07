import type { Post } from '$lib/types';

// TODO: Type-check this fetch
export async function load({ fetch }: any) {
  const res = await fetch('api/posts');

  const posts: Post[] = await res.json();

  return { posts };
}
