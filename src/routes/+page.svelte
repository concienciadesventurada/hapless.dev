<script lang="ts">
	import * as config from "$lib/config";
	import { formatDate } from "$lib/utils";
	import { Circle } from "lucide-svelte";
	import Zsh from "$lib/components/custom/zsh.svelte";
	import TmuxWorkspace from "$lib/components/custom/tmux-workspace.svelte";
	import { Icon } from "svelte-simples";

	let date: string = new Date().toLocaleString("en-uk", {
		day: "numeric",
		month: "short"
	});

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="h-screen">
	<div class="h-5/6 w-2/3 bg-gris mx-auto rounded-t-md font-mono">
		<header class="flex justify-end gap-3 p-2">
			<Circle class="w-4 h-4 text-rojo" fill="#F48484" />
			<Circle class="w-4 h-4 text-dorado" fill="#ffe194" />
			<Circle class="w-4 h-4 text-verde" fill="#c0f4aa" />
		</header>
		<div class="flex flex-wrap px-4">
			<Zsh />
		</div>
    <!--
		<div class="border rounded-md mx-auto m-12 w-2/3">
			<h3 class="text-xl p-4">Languages:</h3>
			<div class="flex flex-wrap justify-center gap-8 px-12 pb-6">
				<Icon name="c" class="w-12 h-12" />
				<Icon name="cplusplus" class="w-12 h-12" />
				<Icon name="typescript" class="w-12 h-12" />
				<Icon name="dart" class="w-12 h-12" />
				<Icon name="gnubash" class="w-12 h-12" />
				<Icon name="r" class="w-12 h-12" />
			</div>
		</div>
		<div class="border rounded-md w-full mx-auto m-12">
			<h3 class="text-xl">CSS and Design:</h3>
			<div class="flex justify-center gap-8 px-12">
				<Icon name="figma" class="w-12 h-12" />
				<Icon name="tailwindcss" class="w-12 h-12" />
				<Icon name="mui" class="w-12 h-12" />
				<Icon name="postcss" class="w-12 h-12" />
				<Icon name="bootstrap" class="w-12 h-12" />
			</div>
		</div>
		<div class="border rounded-md w-full mx-auto m-12">
			<h3 class="text-xl">OS :</h3>
			<div class="flex justify-center gap-8 px-12">
        <Icon name="archlinux" class="w-12 h-12" />
        <Icon name="bspwm" class="w-12 h-12" />
				<Icon name="tmux" class="w-12 h-12" />
        <Icon name="neovim" class="w-12 h-12" />
			</div>
		</div>
    -->
	</div>
	<footer class="flex w-2/3 mx-auto font-mono bg-negrito2 text-black font-bold">
		<TmuxWorkspace color={"bg-yellow-300"} text={"0"} />
		<TmuxWorkspace color={"bg-cyan-300"} text={"1 skills"} />
		<TmuxWorkspace color={"bg-cyan-300"} text={"2 work exp"} />
		<TmuxWorkspace color={"bg-cyan-300"} text={"3 projects"} />
		<div class="flex justify-end ml-auto items-end">
			<div class="text-white px-4">{date}</div>
			<div class="bg-red-500 text-white px-4">matias</div>
		</div>
	</footer>
</section>

<section
	class="w-5/6 mx-auto my-24 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 xl2:w-1/3"
>
	<ul class="w-full">
		{#each data.posts as post}
			<li class="my-12">
				<article class="pb-12">
					<a href={`/blog/${post.slug}`}>
						<div class="flex flex-col justify-between items-baseline">
							<h1
								class="text-3xl pb-2 text-dorado
               sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl xl2:text-4xl"
							>
								<b>{post.title}</b>
							</h1>
							<p
								class="text-sm sm:text-lg md:text-lg lg:text-lg xl:text-xl xl2:text-xl italic py-4"
							>
								{formatDate(post.date)}
							</p>
						</div>
						<hr class="border-b-2 border-azulito" />
						<p
							class="text-md py-4 sm:text-md md:text-lg lg:text-lg xl:text-xl xl2:text-xl"
						>
							{post.description === null ? "" : `${post.description}`}
						</p>
						<div class="flex items-center justify-center pt-12">
							<hr class="border w-2/5 border-dotted" />
						</div>
					</a>
				</article>
			</li>
		{/each}
	</ul>
</section>
