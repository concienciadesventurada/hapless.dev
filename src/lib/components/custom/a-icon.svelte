<script lang="ts">
	import { Icon } from "svelte-simples";
	export let name: string;
	export let href: string;
</script>

<a {href}><Icon {name} /></a>
