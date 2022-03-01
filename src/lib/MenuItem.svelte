<script context="module">
	// const currentPath = writable(window.location.pathname);
	// export function routeUpdated(params) {
	// 	currentPath.set(window.location.pathname);
	// }
</script>

<script>
	import { mainMenuOpen } from '$lib/stores';
	export let title;
	export let path;

	function closeMenu() {
		mainMenuOpen.set(false);
	}
</script>

<!-- class:is-active={($currentPath + '/').startsWith(path + '/')} -->
<li>
	<a on:click={closeMenu} href={path}>{title}</a>
</li>
