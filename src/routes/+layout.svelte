<script>
	import "../app.css";
	import Header from "./header.svelte";
	import Footer from "./footer.svelte";
</script>

<div>
	<Header />
	<main class="w-3/4 mx-auto md:w-1/2 lg:w-4/6 xl:w-2/5">
		<slot />
	</main>
	<Footer />
</div>
