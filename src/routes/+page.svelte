<script lang="ts">
	import * as config from "$lib/config";
	import { onMount } from "svelte";
	import TerminalWindow from "$lib/components/terminal-window.svelte";
	import Zsh from "$lib/components/zsh.svelte";
	import Skills from "$lib/components/skills.svelte";
	import Tmux from "$lib/components/tmux.svelte";

	onMount(() => {
		const skills = document.querySelector("#skills");

		setTimeout(function () {
			skills?.classList.toggle("hidden");
		}, 1850);
	});
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="h-screen font-mono my-auto">
	<div class="h-5/6 w-5/6 bg-gris mx-auto rounded-t-md overflow-auto">
		<TerminalWindow />
		<Zsh cmd="./show-skills.sh" />
		<div class="flex justify-center h-5/6 my-auto items-center hidden" id="skills">
			<Skills />
		</div>
	</div>
	<Tmux />
</section>
