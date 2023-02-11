<script>
	import Repository from './Repository.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto my-12">
	{#each data.repositories as repository}
		<Repository {...repository} />
	{/each}
</div>
