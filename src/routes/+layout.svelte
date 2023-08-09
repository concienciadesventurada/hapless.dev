<script>
	import "../app.css";
	import Header from "./header.svelte";
	import Footer from "./footer.svelte";
</script>

<div>
	<Header />
  <main class="sm:w-3/4 md:w-5/6 lg:w-1/2 w-1/3 mx-auto my-24">
		<slot />
	</main>
	<Footer />
</div>
