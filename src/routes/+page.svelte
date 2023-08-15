<script lang="ts">
	import * as config from "$lib/config";
	import { Circle } from "lucide-svelte";
	import Zsh from "$lib/components/custom/zsh.svelte";
	import TmuxWorkspace from "$lib/components/custom/tmux-workspace.svelte";
	import Skills from "$lib/components/custom/skills.svelte";

	let date: string = new Date().toLocaleString("en-uk", {
		day: "numeric",
		month: "short"
	});

	enum Workspace {
		one = 1,
		two,
		three
	}

	let workspace: Workspace = 1;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="h-screen font-mono my-auto pb-12">
	<div
		class="h-5/6 w-2/3 xs:w-5/6 sm:w-10/12 bg-gris mx-auto rounded-t-md font-mono overflow-auto"
	>
		<header class="flex justify-end gap-3 p-2">
			<Circle class="w-4 h-4 text-rojo" fill="#F48484" />
			<Circle class="w-4 h-4 text-dorado" fill="#ffe194" />
			<Circle class="w-4 h-4 text-verde" fill="#c0f4aa" />
		</header>
		<div class="flex flex-wrap px-4 pb-4">
			{#if workspace === 1}
				<Zsh cmd="./show-resume.sh" />
			{:else if workspace === 2}
				<Zsh cmd="./work-experience.sh" />
			{:else if workspace === 3}
				<Zsh cmd="./show-projects.sh" />
			{/if}
		</div>
		<div
			class="grid sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 grid-cols-2 p-8"
		>
			{#if workspace === 1}
				<Skills />
			{:else if workspace === 2}
				<p>TODO:</p>
			{:else if workspace === 3}
				<p>TODO:</p>
			{/if}
		</div>
	</div>
	<footer
		class="flex w-2/3 xs:w-5/6 sm:w-10/12 mx-auto bg-negrito2 text-black font-bold overflow-hidden"
	>
		<TmuxWorkspace color={"bg-yellow-300"} text={"0"} />
		<TmuxWorkspace
			color={workspace === 1 ? "bg-cyan-300" : "bg-gray-300"}
			text={"1 skills"}
			on:click={() => {
				workspace = Workspace.one;
			}}
		/>
		<TmuxWorkspace
			color={workspace === 2 ? "bg-cyan-300" : "bg-gray-300"}
			text={"2 work exp"}
			on:click={() => {
				workspace = Workspace.two;
			}}
		/>
		<TmuxWorkspace
			color={workspace === 3 ? "bg-cyan-300" : "bg-gray-300"}
			text={"3 projects"}
			on:click={() => {
				workspace = Workspace.three;
			}}
		/>
		<div class="flex justify-end ml-auto items-end">
			<div class="text-white px-4">{date}</div>
			<div class="bg-red-500 text-white px-4">matias</div>
		</div>
	</footer>
</section>
