<script lang="ts">
	import { onMount } from "svelte";
	import * as config from "$lib/config";
	import { Sun, Moon, Menu } from "lucide-svelte";

	let theme: boolean = false;
	let hidden: boolean = false;

	onMount(() => {
		const button = document.querySelector("#menu-button");
		const menu = document.querySelector("#menu");

		button?.addEventListener("click", () => {
			hidden = !hidden;
			menu?.classList.toggle("hidden", !hidden);
		});
	});
</script>

<nav class="flex justify-between gap-8 p-12 items-center">
	<hgroup class="flex w-full justify-between md:justify-center items-stretch">
		<a href="/" class="border-b-4 border-dorado"><b>{config.title}</b></a>
		<button class="md:hidden lg:hidden" id="menu-button">
			<Menu />
		</button>
	</hgroup>

	<ul class="w-full hidden md:flex md:justify-evenly lg:flex lg:justify-end gap-8
  xl:flex xl:justify-end
  pb-2 items-end text-right" id="menu">
		<li class="py-4 md:py-0 hover:text-gray-300 duration-200">
			<a href="/blog">blog</a>
		</li>
		<li class="py-4 md:py-0 hover:text-gray-300 duration-200">
			<a href="/about">about</a>
		</li>
		<hr class="md:hidden my-2" />
	</ul>
</nav>

<style>
	a {
		color: inherit;
		text-decoration: none;
	}
</style>
