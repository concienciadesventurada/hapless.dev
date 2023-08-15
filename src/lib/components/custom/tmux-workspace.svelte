<script lang="ts">
	export let text: string;
	export let color: string;
</script>

<button class="{color} px-4 mx-1" on:click><div>{text}</div></button>
<span class="w-3 h-3" />
