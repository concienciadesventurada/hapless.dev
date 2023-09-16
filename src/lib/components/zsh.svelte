<script lang="ts">
	import { MoveRight } from "lucide-svelte";

	export let dir: string = "me";
	export let branch: string = "main";
	export let git: string = "git:(";
	export let cmd: string;
</script>

<div class="flex flex-wrap gap-4 px-4 text-xl">
	<MoveRight class="text-green-600" color="#c0f4aa" strokeWidth="4" />
	<p class="font-bold">
		<span class="text-cyan-300 font-bold">{dir}</span>
		<span class="text-blue-600"
			>{git}<span class="text-red-600">{branch}</span>)</span
		>
	</p>
	<span
		class="inline-block overflow-hidden whitespace-nowrap animate-typing border-r-4"
		>{cmd}</span
	>
</div>
