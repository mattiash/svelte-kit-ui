<script>
	import { mainMenuOpen } from '$lib/stores';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { getContext } from 'svelte';
	export let title;
	export let path;

	function closeMenu() {
		mainMenuOpen.set(false);
	}

	const openParent = getContext('open');
	let active = false;

	afterNavigate((d) => {
		const shouldBeActive = path === '/' ? d.to.pathname === path : d.to.pathname.startsWith(path);
		if (shouldBeActive && openParent) {
			openParent();
		}
	});

	page.subscribe((p) => {
		active = path === '/' ? p.url.pathname === path : p.url.pathname.startsWith(path);
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
