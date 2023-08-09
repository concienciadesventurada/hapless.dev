<script lang="ts">
	import * as config from "$lib/config";
	import { formatDate } from "$lib/utils";

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul>
		{#each data.posts as post}
			<li class="p-1">
				<article class="mx-auto pb-4">
					<a href={`/blog/${post.slug}`}>
						<div class="flex flex-col justify-between items-baseline">
							<h1 class="text-md text-dorado pb-2">
								<b>{post.title}</b>
							</h1>
							<p class="text-xs italic">{formatDate(post.date)}</p>
						</div>
						<hr class="border-b-cv" />
						<p class="text-sm py-2">
							{post.description === null ? "" : `${post.description}`}
						</p>
						<div class="flex items-center justify-center">
							<hr class="border w-1/4 border-dotted mt-4" />
						</div>
					</a>
				</article>
			</li>
		{/each}
	</ul>
</section>
