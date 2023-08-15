<script lang="ts">
	import * as config from "$lib/config";
	import { Circle } from "lucide-svelte";
	import Zsh from "$lib/components/custom/zsh.svelte";
	import TmuxWorkspace from "$lib/components/custom/tmux-workspace.svelte";
	import NeofetchInfo from "$lib/components/custom/neofetch-info.svelte";
	import AsciiHegel from "$lib/components/custom/ascii-hegel.svelte";

	let date: string = new Date().toLocaleString("en-uk", {
		day: "numeric",
		month: "short"
	});
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="h-screen font-mono my-auto pb-12">
	<div class="h-5/6 w-2/3 xs:w-5/6 sm:w-10/12 bg-gris mx-auto rounded-t-md font-mono overflow-auto">
		<header class="flex justify-end gap-3 p-2">
			<Circle class="w-4 h-4 text-rojo" fill="#F48484" />
			<Circle class="w-4 h-4 text-dorado" fill="#ffe194" />
			<Circle class="w-4 h-4 text-verde" fill="#c0f4aa" />
		</header>
		<div class="flex flex-wrap px-4 pb-4">
			<Zsh />
		</div>
		<div
			class="grid sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 grid-cols-2 p-8"
		>
			<AsciiHegel twclass="m-auto" />
			<div class="col-span-[30rem] text-justify my-auto">
				<p class="text-xl pb-2">
					<span class="text-cyan-300 font-bold">hapless</span>@<span
						class="text-cyan-300 font-bold">dev</span
					>
				</p>
				<p class="text-xl font-bold">-----------</p>
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
					text="Vim, Neovim, Git, GitHub, Tmux, Agile/SCRUM, Shortcut, Jira, Atlassean"
				/>
				<NeofetchInfo bold="Linux" text="Ubuntu, Arch, Fedora, Mint" />
			</div>
		</div>
	</div>
	<footer
		class="flex w-2/3 xs:w-5/6 sm:w-10/12 mx-auto bg-negrito2 text-black font-bold overflow-hidden"
	>
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
