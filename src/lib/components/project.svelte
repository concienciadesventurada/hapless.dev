<script lang="ts">
	export let title: string;
	export let description: string;
	export let href: string;
	export let src: string;
	export let alt: string;
</script>

<h2
	class="underline text-center mx-auto font-bold text-dorado text-2xl lg:text-3xl py-6 md:py-12"
>
	{title}
</h2>
<section class="project-container">
	<a {href} class="my-auto">
		<img {src} {alt} class="my-auto" />
	</a>
	<div class="my-auto">
		<div>
			<p class="text-justify pb-6">{description}</p>
		</div>
		<slot />
	</div>
</section>
<hr class="border-b-azulito my-6 w-5/6 mx-auto" />
