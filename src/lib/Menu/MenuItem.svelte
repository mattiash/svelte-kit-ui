<script lang="ts">
	import { mainMenuOpen } from '$lib/stores';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { getContext } from 'svelte';
	export let title;
	export let path;
	let active = false;

	function closeMenu() {
		mainMenuOpen.set(false);
	}

	const openParent = getContext('open') as () => void;

	// Does currentPath start with the path for this menuitem?
	function matchesPath(currentPath: string) {
		console.log(path, currentPath);
		return currentPath.match(new RegExp(`^${path}(/|$)`));
	}

	afterNavigate((d) => {
		active = matchesPath(d.to.pathname);
		if (active && openParent) {
			openParent();
		}
	});

	page.subscribe((p) => {
		active = matchesPath(p.url.pathname);
	});
</script>

<li class:active class="hover:bg-secondary-focus">
	<a on:click={closeMenu} href={path}>{title}</a>
</li>

<style>
	.active {
		@apply bg-secondary;
	}
	.active:hover {
		@apply bg-secondary-focus;
	}
</style>
