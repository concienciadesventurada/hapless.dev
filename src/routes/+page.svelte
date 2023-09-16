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
		}, 1700);
	});
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section
	class="relative w-5/6 h-screen mx-auto font-mono overflow-auto bg-gris text-2xl rounded-t-md"
>
	<TerminalWindow />
	<Zsh cmd="./show-skills.sh" />
	<div class="hidden" id="skills">
		<Skills />
	</div>
</section>
<Tmux />
