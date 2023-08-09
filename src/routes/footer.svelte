<script lang="ts">
	import * as config from "$lib/config";
  import { Icon } from "svelte-simples";
</script>

<footer class="flex flex-col items-center p-24 border-t-white">
  <div class="flex gap-8">
    <Icon name="github" />
    <Icon name="linkedin" />
    <Icon name="medium" />
    <Icon name="buymeacoffee" />
    <Icon name="proton" />
  </div>
	<p class="py-12 text-sm">{config.title} &copy {new Date().getFullYear()}</p>
</footer>
