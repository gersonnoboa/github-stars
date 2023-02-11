<script>
	import SearchBar from './SearchBar.svelte';
</script>

<div class="collapse collapse-arrow bg-base-300 rounded-box mb-4">
	<input type="checkbox" />
	<div class="collapse-title text-base font-medium">Custom search</div>
	<div class="collapse-content">
		<div class="grid gap-4 max-w-md">
			<SearchBar title="Query" placeholder="Type your query here" />
			<SearchBar title="Language" placeholder="Type your programming language here" />
			<button class="btn btn-primary max-w-min">Search</button>
		</div>
	</div>
</div>
