<script lang="ts">
	import * as config from "$lib/config";
	import { formatDate } from "$lib/utils.js";

	export let data;
</script>

<svelte:head>
	<title>{config.title} | Blog</title>
</svelte:head>

<section class="w-5/6 mx-auto text-justify">
  <h1 class="text-4xl text-dorado underline text-center"><b>posts</b></h1>
	<ul>
		{#each data.posts as post}
			<li class="py-4">
				<article class="py-6">
					<a href={`/blog/${post.slug}`}>
						<div class="flex justify-between items-baseline">
							<h1 class="text-lg text-dorado">
								<b>{post.title}</b>
							</h1>
							<p class="text-end">
								{formatDate(post.date)}
							</p>
						</div>
						<hr class="border-2 border-azulito my-4" />
						<p class="text-sm">
							{post.description === null ? "" : `${post.description}`}
						</p>
					</a>
				</article>
			</li>
		{/each}
	</ul>
</section>
