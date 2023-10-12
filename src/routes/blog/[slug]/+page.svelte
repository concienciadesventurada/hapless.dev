<script lang="ts">
	import { formatDate } from "$lib/utils.ts";
	import { HashIcon } from "lucide-svelte";

	function toggle() {
		document.getElementById("tags")?.classList.toggle("hidden");
	}

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="w-5/6 mx-auto my-12 md:w-1/2 lg:w-1/3">
	<hgroup>
		<p class="text-right py-6">
			{formatDate(data.meta.date)}
		</p>
		<h1 class="text-5xl text-dorado">
			<b>{data.meta.title}</b>
		</h1>
		<div class="flex justify-between items-center">
			<hr class="w-full inline border-b border-azulito" />
			<button on:click={toggle}><HashIcon /></button>
		</div>
	</hgroup>
	<div class="hidden md:block" id="tags">
		<div class="flex flex-wrap">
			{#each data.meta.categories as category}
				<span
					class="bg-gris rounded-full py-2 px-6 my-2 mr-2 duration-200 hover:opacity-75"
					>&num;{category}</span
				>
			{/each}
		</div>
	</div>
	<div class="py-6 prose prose-invert text-justify mx-auto">
		<svelte:component this={data.content} />
	</div>
</article>
