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
			<li>
				<article class="py-10">
					<a href={`/blog/${post.slug}`}>
						<div class="flex justify-between items-baseline pb-4">
							<h1 class="text-3xl text-dorado"><b>{post.title}</b></h1>
							<p class="italic">{formatDate(post.date)}</p>
						</div>
						<hr class="border-b-cv p-2" />
						<p>{post.description === null ? "" : post.description}</p>
					</a>
				</article>
				<div class="flex items-center justify-center">
					<hr class="border w-1/4 border-dotted" />
				</div>
			</li>
		{/each}
	</ul>
</section>
