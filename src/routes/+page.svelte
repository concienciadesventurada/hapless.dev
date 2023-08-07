<script lang="ts">
	import * as config from '$lib/config';
  import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href=""
					>{post.title}
					<p>{formatDate(post.date)}</p>
					<p>{post.description}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: var(--size-7);
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-6);
	}
</style>
