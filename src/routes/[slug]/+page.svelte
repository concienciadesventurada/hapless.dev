<script lang="ts">
	import { formatDate } from '$lib/utils.ts';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="m-24">
	<hgroup>
		<h1 class="text-5xl text-dorado"><b>{data.meta.title}</b></h1>
		<p class="text-right">{formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="prose dark:prose-invert">
		<svelte:component this={data.content} />
	</div>

	<div class="flex">
		{#each data.meta.categories as category}
			<span class="bg-gris rounded-2xl mx-2 py-2 px-6">&num;{category}</span>
		{/each}
	</div>

</article>
