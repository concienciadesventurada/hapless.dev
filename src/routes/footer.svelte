<script lang="ts">
	import * as config from "$lib/config";
	import AIcon from "$lib/components/custom/a-icon.svelte";
</script>

<footer class="flex flex-col items-center p-24 border-t-white">
	<div class="flex gap-8 py-24">
		<AIcon href="https://github.com/concienciadesventurada/" name="github" />
		<AIcon href="https://medium.com/@hapless.dev" name="medium" />
		<AIcon href="https://buymeacoffee.com/hapless.dev" name="buymeacoffee" />
		<AIcon href="mailto:hapless.dev@proton.me" name="proton" />
	</div>
	<p class="text-sm">{config.title} &copy {new Date().getFullYear()}</p>
</footer>
