<script>
	import { mainMenuOpen } from '$lib/stores';
	import { page } from '$app/stores';
	export let title;
	export let path;

	function closeMenu() {
		mainMenuOpen.set(false);
	}

	let active = false;
	page.subscribe((p) => {
		active = path === '/' ? p.url.pathname === path : p.url.pathname.startsWith(path);
	});
</script>

<!-- class:is-active={($currentPath + '/').startsWith(path + '/')} -->
<li class:active>
	<a on:click={closeMenu} href={path}>{title}</a>
</li>

<style>
	.active {
		@apply bg-base-200;
	}
</style>
