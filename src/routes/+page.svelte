<script lang="ts">
	import * as config from "$lib/config";
	import { formatDate } from "$lib/utils";
	import { Circle } from "lucide-svelte";
  import Zsh from "$lib/components/custom/zsh.svelte";

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="h-screen">
	<div class="h-5/6 w-2/3 bg-gris mx-auto rounded-t-md">
		<header class="flex justify-end gap-3 p-2">
			<Circle class="w-4 h-4 text-rojo" fill="#F48484" />
			<Circle class="w-4 h-4 text-dorado" fill="#ffe194" />
			<Circle class="w-4 h-4 text-verde" fill="#c0f4aa" />
		</header>
		<div class="px-4">
      <Zsh cmd="./show-resume.sh" />
		</div>
	</div>
</section>

<section
	class="w-5/6 mx-auto my-24 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 xl2:w-1/3"
>
	<ul class="w-full">
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
