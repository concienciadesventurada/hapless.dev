<script lang="ts">
	import * as config from "$lib/config";
	import { formatDate } from "$lib/utils.js";

	export let data;
</script>

<svelte:head>
	<title>{config.title} | Blog</title>
</svelte:head>

<section class="w-5/6 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto text-justify">
	<h1 class="text-4xl md:text-5xl text-dorado underline text-center pb-4"><b>posts</b></h1>
	<ul>
		{#each data.posts as post}
			<li class="py-4">
				<article class="py-6">
					<a href={`/blog/${post.slug}`}>
						<div class="flex justify-between gap-6 items-baseline">
							<h1 class="text-lg md:text-2xl lg:text-3xl text-dorado">
								<b>{post.title}</b>
							</h1>
							<p class="text-end">
								{formatDate(post.date)}
							</p>
						</div>
						<hr class="border border-azulito my-4" />
						<p class="text-sm lg:text-lg">
							{post.description === null ? "" : `${post.description}`}
						</p>
					</a>
				</article>
			</li>
		{/each}
	</ul>
</section>
