<script lang="ts">
	import { formatDate } from "$lib/utils.ts";

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="w-5/6 mx-auto my-12 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-7/12 xl2:w-1/3">
	<hgroup
		class="flex flex-col justify-center items-baseline
  md:flex md:justify-between"
	>
		<h1 class="text-5xl text-dorado">
			<b>{data.meta.title}</b>
		</h1>
		<p class="pt-10 pb-4 text-md text-right">
			<b>{formatDate(data.meta.date)}</b>
		</p>
	</hgroup>

	<div class="prose dark:prose-invert">
		<svelte:component this={data.content} />
	</div>

	<div class="flex flex-wrap text-left mt-10">
		{#each data.meta.categories as category}
			<span class="bg-gris rounded-2xl mx-2 my-2 py-2 px-6"
				>&num;{category}</span
			>
		{/each}
	</div>
</article>
