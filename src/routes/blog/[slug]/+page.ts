import type { Post } from "$lib/types";
import { error } from "@sveltejs/kit";

interface Params {
	slug: string;
}

export async function load({ params }: { params: Params }) {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);

		// TODO: Type-check mdsvex default
		return {
			content: post.default,
			meta: <Post>post.metadata
		};
	} catch (err) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
