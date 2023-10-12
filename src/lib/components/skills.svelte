<script lang="ts">
	import { NeofetchInfo } from "$lib";
	import resume from "$lib/assets/hapless-dev-resume.pdf";
</script>

<div class="p-6 text-justify my-auto">
	<div class="text-xl">
		<h3 class="font-bold text-cyan-300">
			hapless<span class="text-white">@</span>dev
		</h3>
		<b>-----------</b>
	</div>
	<NeofetchInfo
		bold="Languages:"
		text="TypeScript, C#, C, C++, Dart, R, Bash, Lua"
	/>
	<NeofetchInfo
		bold="Frameworks:"
		text="React, Svelte, Next.js 13"
	/>
	<NeofetchInfo
		bold="CSS & Design:"
		text="Figma, TailwindCSS, PostCSS, Bootstrap, MaterialUI"
	/>
	<NeofetchInfo
		bold="Databases & Tools:"
		text="PostgreSQL, MongoDB, Redis, GraphQL, Apollo, MSSQL"
	/>
	<NeofetchInfo
		bold="Security:"
		text="OAuth, Firebase, JWT, Session cookies, CSFLE, argon2"
	/>
	<NeofetchInfo
		bold="Virtualization & Deployment:"
		text="Docker, Kubernetes, KVM, Render.com, MongoDB Atlas, Vercel"
	/>
	<NeofetchInfo
		bold="DevOps & Methodologies:"
		text="Vim, Neovim, Git, GitHub, Tmux, Agile/SCRUM, Shortcut, Jira, Atlassean"
	/>
	<NeofetchInfo bold="Linux:" text="Ubuntu, Arch, Fedora, Mint" />
	<a href={resume} download="hapless-dev-resume" class="text-2xl font-bold">
		<p class="text-cyan-300 pt-6 underline text-center uppercase">
			download resume
		</p></a
	>
</div>
