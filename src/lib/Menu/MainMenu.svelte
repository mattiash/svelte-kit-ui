<script>
	import { mainMenuOpen } from '$lib/stores';

	import MenuItem from './MenuItem.svelte';
	import SubMenu from './SubMenu.svelte';
	let innerHeight = 100;

	function closeMenu() {
		mainMenuOpen.set(false);
	}
</script>

<svelte:window bind:innerHeight />
<div on:click|self={() => closeMenu()} class="border-r border-b-200 pt-2 px-3">
	<div class="bg-base-100 px-2 pb-2 lg:px-0 lg:pb-0 w-64 rounded min-h-full">
		<SubMenu title="Admin">
			<MenuItem title="Users" path="/user" />
		</SubMenu>
		<SubMenu title="Misc">
			<MenuItem title="Home" path="/" />
			<MenuItem title="Channel" path="/channel" />
		</SubMenu>
	</div>
</div>
