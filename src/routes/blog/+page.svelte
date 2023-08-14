<script lang="ts">
	import { formatDate } from "$lib/utils";

	export let data;
</script>

<section
	class="w-5/6 mx-auto my-24 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 xl2:w-1/3"
>
	<ul class="w-full">
		<h1 class="text-5xl text-dorado underline text-center"><b>Blog</b></h1>
		{#each data.posts as post}
			<li class="my-12">
				<article class="pb-12">
					<a href={`/blog/${post.slug}`}>
						<div class="flex flex-col justify-between items-baseline">
							<h1
								class="text-3xl pb-2 text-dorado
               sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl xl2:text-4xl"
							>
								<b>{post.title}</b>
							</h1>
							<p
								class="text-sm sm:text-lg md:text-lg lg:text-lg xl:text-xl xl2:text-xl italic py-4"
							>
								{formatDate(post.date)}
							</p>
						</div>
						<hr class="border-b-2 border-azulito" />
						<p
							class="text-md py-4 sm:text-md md:text-lg lg:text-lg xl:text-xl xl2:text-xl"
						>
							{post.description === null ? "" : `${post.description}`}
						</p>
						<div class="flex items-center justify-center pt-12">
							<hr class="border w-2/5 border-dotted" />
						</div>
					</a>
				</article>
			</li>
		{/each}
	</ul>
</section>
