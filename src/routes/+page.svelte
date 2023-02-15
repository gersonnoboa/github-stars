<script lang="ts">
	import type { PageData } from './$types';
	import CustomControls from './CustomControls.svelte';
	import ErrorAlert from './ErrorAlert.svelte';
	import NavBar from './NavBar.svelte';
	import Repository from './Repository.svelte';

	export let data: PageData;
	$: ({ repositories, query, language, error } = data);
</script>

<NavBar />
<div class="contaier p-4 mx-auto max-w-7xl">
	<CustomControls {query} {language} />
	{#if repositories && repositories.length > 0}
		<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each repositories ?? [] as repository}
				<Repository {...repository} />
			{/each}
		</div>
	{:else}
		<ErrorAlert message="No results, error={error}" />
	{/if}
</div>
