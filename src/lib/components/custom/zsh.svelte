<script lang="ts">
	import { MoveRight } from "lucide-svelte";

	let dir: string = ":";
  let branch: string = "main"
	let git: string = "git(";
	let cmd: string = "./show-resume.sh";
</script>

<div class="text-3xl flex gap-8 items-baseline font-mono">
	<MoveRight class="text-green-600" color="#c0f4aa" strokeWidth="4" />
	<p><b><span class="text-blue-600">{git}<span class="text-red-600">{branch}</span>)</span>{dir}<b /></b></p>
	<span
		class="inline-block overflow-hidden whitespace-nowrap animate-typing border-r-4"
		>{cmd}</span
	>
</div>
