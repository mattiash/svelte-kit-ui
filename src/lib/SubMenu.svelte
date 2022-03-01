<script lang="ts">
	import { slide } from 'svelte/transition';
	export let title;
	export let show = false;
	$: console.log('show', title, show);
</script>

<div class="p-3 menu overflow-y-auto w-80 bg-base-200 text-base-content">
	<div on:click={() => (show = !show)}>
		{title}
		<span class="float-right">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 inline text-right transition-all"
				class:rotate-180={show}
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</span>
	</div>

	{#if show}
		<ul transition:slide={{ duration: 200 }}>
			<slot />
		</ul>
	{/if}
</div>

<style>
	div div {
		cursor: pointer;
	}
</style>
