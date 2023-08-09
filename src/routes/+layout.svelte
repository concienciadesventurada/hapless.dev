<script>
	import "../app.css";
	import Header from "./header.svelte";
	import Footer from "./footer.svelte";
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
