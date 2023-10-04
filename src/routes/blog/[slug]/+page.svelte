<script lang="ts">
	import { formatDate } from "$lib/utils.ts";

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article
	class="w-5/6 mx-auto my-12 md:w-1/2 lg:w-1/3"
>
	<hgroup
		class="flex flex-col justify-center items-baseline md:flex md:justify-between"
	>
		<h1 class="text-5xl text-dorado">
			<b>{data.meta.title}</b>
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