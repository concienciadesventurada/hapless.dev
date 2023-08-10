<script lang="ts">
	import * as config from "$lib/config";
	import AIcon from "$lib/components/custom/a-icon.svelte";
</script>

<footer class="flex flex-col items-center p-24 border-t-white bg-negrito2">
	<div class="flex gap-12 py-24">
		<AIcon href="https://github.com/concienciadesventurada/" name="github" twclass="w-8 h-8"/>
		<AIcon href="https://medium.com/@hapless.dev" name="medium" twclass="w-8 h-8"/>
		<AIcon href="https://buymeacoffee.com/hapless.dev" name="buymeacoffee" twclass="w-8 h-8"/>
		<AIcon href="mailto:hapless.dev@proton.me" name="proton" twclass="w-8 h-8"/>
	</div>
	<p class="text-sm">{config.title} &copy {new Date().getFullYear()}</p>
</footer>
