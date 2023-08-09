<script lang="ts">
	import * as config from "$lib/config";
	import { Sun, Moon } from "lucide-svelte";

	let theme: boolean = false;

	function toggleTheme() {
		theme = !theme;
	}
</script>

<nav class="flex justify-between gap-8 p-10">
	<a href="/" class="border-b border-dorado"><b>{config.title}</b></a>

	<ul class="flex justify-items-end gap-12">
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
		<li>
			<a href="/rss">RSS</a>
		</li>
		<button on:click={toggleTheme}>
			{#if theme}
				<Sun />
			{:else}
				<Moon />
			{/if}
		</button>
	</ul>
</nav>

<style>
	a {
		color: inherit;
		text-decoration: none;
	}
</style>
