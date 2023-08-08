<script lang="ts">
	let count = 0;

	const increment = () => (count += 1);
</script>

<button class="bg-white text-black p-6 rounded-md" on:click={increment}>
	{count}
</button>
