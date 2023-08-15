<script lang="ts">
	import * as config from "$lib/config";
	import { Sun, Moon, Menu } from "lucide-svelte";

	let theme: boolean = false;
  let hidden: boolean = true;

	function showMenu() {
		hidden = !hidden;
	}

	function toggleTheme() {
		theme = !theme;
	}
</script>

<nav class="flex flex-wrap justify-between gap-8 p-12 items-center">
	<a href="/" class="border-b-4 border-dorado"><b>{config.title}</b></a>

	<button class="md:hidden" on:click={showMenu}>
		<Menu />
	</button>
	<ul
		class="{hidden ? 'hidden': 'none flex flex-col gap-6 items-center justify-end'} w-full md:w-auto md:flex md:justify-items-end md:gap-12"
	>
		<li>
			<a href="/blog" on:click={showMenu}>Blog</a>
		</li>
		<li>
			<a href="/about" on:click={showMenu}>About</a>
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
