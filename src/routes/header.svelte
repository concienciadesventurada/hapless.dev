<script lang="ts">
	import { onMount } from "svelte";
	import * as config from "$lib/config";
	import { Menu, MoreVertical } from "lucide-svelte";

	let hidden: boolean = false;

	onMount(() => {
		const button = document.querySelector("#menu-button");
		const menu = document.querySelector("#menu");
		const li = document.querySelectorAll("#menu li");

		button?.addEventListener("click", () => {
			hidden = !hidden;
			menu?.classList.toggle("hidden", !hidden);
		});

		li?.forEach((li) => {
			li.addEventListener("click", () => {
				hidden = false;
				menu?.classList.add("hidden");
			});
		});
	});
</script>

<nav
	class="flex flex-col md:flex-row p-8 md:py-4 justify-between md:justify-center items-center md:text-xl"
>
	<hgroup class="flex w-full justify-between items-stretch pb-6 md:pb-0">
		<a href="/" class="border-b-4 border-dorado">hapless.dev</a>
		<button class="md:hidden" id="menu-button">
			<Menu />
		</button>
	</hgroup>
	<ul class="hidden md:flex md:justify-end w-full" id="menu">
		<li class="py-4 md:px-6 hover:text-gray-300 duration-300">
			<a href="/projects">projects</a>
		</li>
		<li class="py-4 md:px-6 hover:text-gray-300 duration-300">
			<a href="/blog">blog</a>
		</li>
		<li class="py-4 md:px-6 hover:text-gray-300 duration-300">
			<a href="/about">about</a>
		</li>
	</ul>
</nav>

<style>
	a {
		color: inherit;
		text-decoration: none;
	}
</style>
