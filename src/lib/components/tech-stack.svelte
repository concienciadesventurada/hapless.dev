<script lang="ts">
	export let left: boolean = true;
	export let layer: string;
</script>

<div
	class={left
		? "grid grid-cols-[1em_1fr] gap-2"
		: "grid grid-cols-[1fr_1em] gap-2"}
>
	{#if left}
		<h4 class="font-mono font-bold text-dorado">{layer}</h4>
		<div
			class="flex min-h-[144px] flex-wrap items-center border-2 border-azulito border-dashed rounded-lg"
		>
			<slot />
		</div>
	{:else}
		<div
			class="flex min-h-[144px] flex-wrap items-center border-2 border-azulito border-dashed rounded-lg"
		>
			<slot />
		</div>
    <h4 class="font-mono font-bold text-dorado">{layer}</h4>
	{/if}
</div>

<style>
	h4 {
		text-align: center;
		writing-mode: vertical-rl;
		text-orientation: upright;
	}
</style>
