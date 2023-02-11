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

<div class="card bg-base-300 shadow-md card-compact">
	<div class="card-body">
		<h2 class="font-semibold text-base">
			<span class="badge badge-primary">{order}</span>
			<a class="link" href={url}>{name}</a>
		</h2>
		<p>{description}</p>
		<div class="card-actions justify-end">
			<p>
				<span class="badge badge-neutral badge-md p-4 gap-4">{stars} stars</span>
				{#if language != null}
					<span class="badge badge-neutral badge-md p-4 gap-4">{language}</span>
				{/if}
			</p>
		</div>
	</div>
</div>
