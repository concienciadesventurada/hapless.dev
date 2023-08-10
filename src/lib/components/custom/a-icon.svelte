<script lang="ts">
	import { Icon } from "svelte-simples";

	export let name: string;
	export let href: string;
	export let color = "#FFFFFF";
  export let twclass: string = "";
</script>

<a {href}><Icon {name} {color} class={twclass}/></a>
