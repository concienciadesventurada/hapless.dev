<script lang="ts">
	export let count = 0;

	export const increment = () => (count += 1);
</script>

<button class="bg-white text-black p-6 rounded-md" on:click={increment}>
	{count}
</button>
