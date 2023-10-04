<script lang="ts">
	import { Icon } from "svelte-simples";

	export let name: string;
	export let href: string;
	export let color = "#FFFFFF";
	export let twclass: string = "duration-200 text-white";
  export let text: string = "";
</script>

<a {href} class="flex gap-4"><Icon {name} {color} class={twclass} />{text}</a>
