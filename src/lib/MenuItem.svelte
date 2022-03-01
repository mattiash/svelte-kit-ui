<script context="module">
	// import { writable } from 'svelte/store';
	// const currentPath = writable(window.location.pathname);
	// export function routeUpdated(params) {
	// 	currentPath.set(window.location.pathname);
	// }
</script>

<script>
	export let title;
	export let path;
</script>

<!-- class:is-active={($currentPath + '/').startsWith(path + '/')} -->
<li>
	<a href={path}>{title}</a>
</li>
