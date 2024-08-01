<script>
	import Header from './Header.svelte';
	import '../app.css';
	import Nav from './Nav.svelte';
</script>

<div class="content min-h-full">
	<Header />

	<div class="relative">
		<!-- <Nav /> -->
		<main class="content">
			<slot />
		</main>
	</div>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 110vh;
	}
</style>
