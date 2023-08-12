<script lang="ts">
	import * as config from "$lib/config";
	import { formatDate } from "$lib/utils";
	import { Circle } from "lucide-svelte";
	import Zsh from "$lib/components/custom/zsh.svelte";
	import TmuxWorkspace from "$lib/components/custom/tmux-workspace.svelte";
	import NeofetchInfo from "$lib/components/custom/neofetch-info.svelte";
	import AsciiHegel from "$lib/components/custom/ascii-hegel.svelte";

	let date: string = new Date().toLocaleString("en-uk", {
		day: "numeric",
		month: "short"
	});

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="h-screen font-mono">
	<div class="h-5/6 w-2/3 bg-gris mx-auto rounded-t-md font-mono overflow-auto">
		<header class="flex justify-end gap-3 p-2">
			<Circle class="w-4 h-4 text-rojo" fill="#F48484" />
			<Circle class="w-4 h-4 text-dorado" fill="#ffe194" />
			<Circle class="w-4 h-4 text-verde" fill="#c0f4aa" />
		</header>
		<div class="flex flex-wrap px-4 pb-4">
			<Zsh />
		</div>
		<div class="grid grid-cols-2 p-8">
			<AsciiHegel twclass="m-auto" />
			<div class="col-span-[30rem] text-justify my-auto">
				<p class="text-xl pb-2">
					<span class="text-cyan-300 font-bold">hapless</span>@<span
						class="text-cyan-300 font-bold">dev</span
					>
				</p>
				<p class="text-xl font-bold">----------</p>
				<NeofetchInfo
					bold="Languages:"
					text="TypeScript, Java, C, C++, Dart, R, Bash, Lua"
				/>
				<NeofetchInfo
					bold="CSS & Design:"
					text="Figma, TailwindCSS, PostCSS, Bootstrap, MaterialUI"
				/>
				<NeofetchInfo
					bold="Databases & Tools:"
					text="PostgreSQL, MongoDB, Redis, GraphQL, Apollo"
				/>
				<NeofetchInfo
					bold="Security:"
					text="OAuth, Firebase, JWT, Session cookies, CSFLE, argon2"
				/>
				<NeofetchInfo
					bold="Virtualization & Deployment"
					text="Docker, Kubernetes, KVM, Render.com, MongoDB Atlas, Vercel"
				/>
				<NeofetchInfo
					bold="DevOps & Methodologies:"
					text="Vim, Git, GitHub, Tmux, Agile/SCRUM, Shortcut, Jira, Atlassean"
				/>
				<NeofetchInfo bold="Linux" text="Ubuntu, Arch, Fedora, Mint" />
			</div>
		</div>
	</div>
	<footer class="flex w-2/3 mx-auto bg-negrito2 text-black font-bold">
		<TmuxWorkspace color={"bg-yellow-300"} text={"0"} />
		<TmuxWorkspace color={"bg-cyan-300"} text={"1 skills"} />
		<TmuxWorkspace color={"bg-cyan-300"} text={"2 work exp"} />
		<TmuxWorkspace color={"bg-cyan-300"} text={"3 projects"} />
		<div class="flex justify-end ml-auto items-end">
			<div class="text-white px-4">{date}</div>
			<div class="bg-red-500 text-white px-4">matias</div>
		</div>
	</footer>
</section>

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
