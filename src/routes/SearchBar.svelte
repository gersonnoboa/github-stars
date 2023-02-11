<script>
	/**
	 * @type {string}
	 */
	export let title;
	/**
	 * @type {string}
	 */
	export let placeholder;
</script>

<div class="form-control w-full">
	<label class="label">
		<span class="label-text">{title}</span>
	</label>
	<input type="text" {placeholder} class="input input-bordered w-full input-bordered" />
</div>
