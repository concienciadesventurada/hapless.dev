<script lang="ts">
	import { Icon } from "svelte-simples";

	export let name: string;
	export let href: string;
	export let color = "#FFFFFF5D";
	export let twclass: string = "duration-200 hover:bg-white";
  export let text: string = "";
</script>

<a {href} class="flex gap-4"><Icon {name} {color} class={twclass} />{text}</a>
