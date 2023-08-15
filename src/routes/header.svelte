<script lang="ts">
	import * as config from "$lib/config";
	import { Sun, Moon } from "lucide-svelte";

	let theme: boolean = false;

	function toggleTheme() {
		theme = !theme;
	}
</script>

<nav class="flex justify-between gap-8 p-12 items-baseline">
	<a href="/" class="border-b-4 border-dorado"><b>{config.title}</b></a>

	<ul class="flex justify-items-end gap-12 sm:hidden xs:hidden">
		<li>
			<a href="/blog">Blog</a>
		</li>
		<li>
			<a href="/about">About</a>
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
