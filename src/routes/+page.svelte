<script lang="ts">
	import * as config from "$lib/config";
  import TerminalWindow from "$lib/components/terminal-window.svelte";
	import Zsh from "$lib/components/zsh.svelte";
	import Skills from "$lib/components/skills.svelte";

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

<section
	class="w-5/6 h-screen mx-auto font-mono overflow-auto bg-gris text-2xl rounded-t-md"
>
  <TerminalWindow />
  <Zsh cmd="./show-skills.sh" />
  <Skills />
</section>
