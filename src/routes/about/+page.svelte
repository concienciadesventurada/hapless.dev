<script lang="ts">
	import * as config from "$lib/config";
	import { Mail } from "lucide-svelte";
	import AIcon from "$lib/components/a-icon.svelte";
</script>

<svelte:head>
	<title>About | {config.title}</title>
</svelte:head>

<section
	class="w-5/6 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto text-justify py-4 md:py-24"
>
	<div class="flex flex-col gap-4">
		<h1 class="font-bold text-dorado text-2xl font-mono">
			I'm hapless, your passionate full-stack developer with a flair for
			innovation
		</h1>
		<p class="">
			Based in Central America. I'm a self-taught programmer with experience in
			various fields, from web development to data analysis and statistics.
		</p>
		<p class="">
			With a proven track record of crafting dynamic and efficient digital
			solutions. Currently spearheading groundbreaking projects at Orbitas
			Software Development. Adept at merging creativity and technical expertise
			to build user-centric applications. Skilled in an array of programming
			languages, frameworks, and tools, with a keen eye for detail and a knack
			for problem-solving.
		</p>
	</div>
	<hr class="my-6 border border-dashed" />
	<h3 class="text-2xl pb-6">Get in contact with me or check my socials</h3>
	<div class="flex flex-col gap-4">
		<a href="mailto:hapless.dev@proton.me" class="flex gap-4 pb-4">
			<Mail />
			hapless.dev@proton.me</a
		>
		<AIcon
			href="https://github.com/concienciadesventurada/"
			name="github"
			text="@concienciadesventurada"
		/>
		<br class="pb-2" />
		<AIcon
			href="https://medium.com/@hapless.dev"
			name="medium"
			text="@hapless.dev"
		/>
	</div>
</section>
