<script>
	/**
	 * @type {string}
	 */
	export let order;
	/**
	 * @type {string}
	 */
	export let name;
	/**
	 * @type {string}
	 */
	export let author;
	/**
	 * @type {string}
	 */
	export let url;
	/**
	 * @type {string}
	 */
	export let description;
	/**
	 * @type {string}
	 */
	export let stars;
	/**
	 * @type {string}
	 */
	export let language;
</script>

<div class="card bg-base-200 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{order}. {name}</h2>
		<p>By {author}</p>
		<p>{description}</p>
		<p>
			<span class="badge badge-neutral badge-md p-4 gap-4">{stars} stars</span>
			{#if language != null}
				<span class="badge badge-neutral badge-md p-4 gap-4">{language}</span>
			{/if}
		</p>
		<div class="card-actions justify-end">
			<a role="button" class="btn btn-primary" href={url}>GO</a>
		</div>
	</div>
</div>
