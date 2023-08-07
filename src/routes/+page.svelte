<script lang="ts">
	import * as config from "$lib/config";
	import { formatDate } from "$lib/utils";

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="m-10">
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={`/blog/${post.slug}`}>
					<article class="pb-10">
						<div class="flex justify-between pb-4">
							<h1 class="text-3xl text-dorado"><b>{post.title}</b></h1>
							<p class="italic">{formatDate(post.date)}</p>
						</div>
						<hr class="border-b-cv p-2" />
						<p>{post.description}</p>
					</article>
				</a>
			</li>
		{/each}
	</ul>
</section>
