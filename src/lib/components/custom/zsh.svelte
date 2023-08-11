<script lang="ts">
	import { MoveRight } from "lucide-svelte";

	let dir: string = ":";
	let branch: string = "main";
	let git: string = "git(";
	let cmd: string = "./show-resume.sh";
</script>

<div class="flex flex-wrap text-2xl gap-8 items-baseline font-mono">
	<MoveRight class="text-green-600" color="#c0f4aa" strokeWidth="2" />
	<p>
		<b>
			<span class="sm:text-md text-cyan-300 font-bold">me</span>
			<span class="sm:text-md text-blue-600"
				>{git}<span class="text-red-600">{branch}</span>)</span
			>{dir}<b /></b
		>
	</p>
	<span
		class="inline-block overflow-hidden whitespace-nowrap animate-typing border-r-4 sm:text-md"
		>{cmd}</span
	>
</div>
