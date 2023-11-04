<script lang="ts">
	import Ehyf from "$lib/components/ehyf.svelte";
  import Stacypizarro from "$lib/components/stacypizarro.svelte";
  import * as config from "$lib/config";
</script>

<svelte:head>
	<title>{config.title} | Projects</title>
</svelte:head>

<Stacypizarro />
<Ehyf />
