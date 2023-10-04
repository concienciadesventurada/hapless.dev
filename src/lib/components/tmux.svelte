<script lang="ts">
	import TmuxWorkspace from "./tmux-workspace.svelte";

	let date: string = new Date().toLocaleString("en-uk", {
		day: "numeric",
		month: "short"
	});
</script>

<section
	class="flex mx-auto w-5/6 bg-negrito2 text-sm text-black font-bold overflow-hidden"
>
	<TmuxWorkspace color="bg-yellow-300" text="0" />
	<TmuxWorkspace color="bg-cyan-300" text="1 skills" />
	<div class="flex justify-end ml-auto items-end">
		<div class="text-white px-4">{date}</div>
		<div class="bg-red-500 text-white px-4 h-full">matias</div>
	</div>
</section>
