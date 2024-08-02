<script>
	import Resume from './Resume.svelte';
</script>

<svelte:head>
	<title>Ross Cooper</title>
	<meta name="description" content="Portfolio for Ross Cooper" />
</svelte:head>

<section>
	<Resume />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
	}
</style>
