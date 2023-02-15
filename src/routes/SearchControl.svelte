<script lang="ts">
	export let title: string;
	export let name: string;
	export let placeholder: string;
	export let value: string = '';
</script>

<div class="form-control w-full">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="label">
		<span class="label-text">{title}</span>
	</label>
	<input type="text" {placeholder} {name} {value} class="input input-bordered w-full" />
</div>
