<script>
	import Filters from './Controls.svelte';
	import NavBar from './NavBar.svelte';
	import Repository from './Repository.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<NavBar />
<div class="container p-4 mx-auto">
	<Filters />
	<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{#each data.repositories as repository}
			<Repository {...repository} />
		{/each}
	</div>
</div>
