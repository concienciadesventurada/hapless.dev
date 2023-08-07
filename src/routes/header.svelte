<script lang="ts">
	import * as config from "$lib/config";
</script>

<nav class="flex justify-between gap-8 p-10">
	<a href="/"><b>{config.title}</b></a>

	<ul class="flex justify-center gap-24">
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
		<li>
			<a href="/rss">RSS</a>
		</li>
	</ul>

	<button>Toggle</button>
</nav>

<style>
	a {
		color: inherit;
		text-decoration: none;
	}
</style>
