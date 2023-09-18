<script lang="ts">
	import { formatDate } from "$lib/utils.ts";

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 mx-auto text-justify py-6">
	<hgroup class="flex flex-col gap-6">
		<h1 class="font-bold text-dorado text-2xl md:text-4xl">
			{data.meta.title}
		</h1>
		<p class="text-end">
			{formatDate(data.meta.date)}
		</p>
	</hgroup>

	<div class="py-6 prose dark:prose-invert text-justify">
		<svelte:component this={data.content} />
	</div>

	<div class="flex flex-wrap">
		{#each data.meta.categories as category}
			<span class="bg-gris rounded-full py-2 px-6 my-2 mr-2">&num;{category}</span>
		{/each}
	</div>
</article>
