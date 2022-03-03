<script lang="ts">
	import { slide } from 'svelte/transition';
	import { setContext } from 'svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	export let title = '';
	export let show = false;
	let shallShow = false;
	setContext('open', () => {
		show = true;
		shallShow = true;
	});
	beforeNavigate(() => {
		shallShow = false;
	});
	afterNavigate(() =>
		setTimeout(() => {
			show = shallShow;
		}, 200)
	);
</script>

<div class="pt-3 menu overflow-clip w-64 text-base-content bg-base-100">
	<div on:click={() => (show = !show)}>
		{title}
		<span class="float-right">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 inline text-right transition-all align-top"
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
		<ul class="overflow-clip" transition:slide={{ duration: 200 }}>
			<slot />
		</ul>
	{:else}
		<ul class="hidden">
			<slot />
		</ul>
	{/if}
</div>

<style>
	div div {
		cursor: pointer;
	}
</style>
