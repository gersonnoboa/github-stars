<script lang="ts">
	import SearchControl from './SearchControl.svelte';

	export let query: string | undefined;
	export let language: string | undefined;
</script>

<form method="POST">
	<div class="collapse collapse-arrow bg-base-300 rounded-box mb-4">
		<input type="checkbox" />
		<div class="collapse-title text-base font-medium">Custom search</div>
		<div class="collapse-content">
			<div class="grid gap-4 max-w-md">
				<SearchControl
					title="Query"
					name="query"
					value={query}
					placeholder="Type your query here"
				/>
				<SearchControl
					title="Language"
					name="language"
					value={language}
					placeholder="Type your programming language here"
				/>

				<button class="btn btn-primary max-w-min">Search</button>
			</div>
		</div>
	</div>
</form>
