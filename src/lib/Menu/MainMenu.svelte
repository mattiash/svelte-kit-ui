<script>
	import MenuItem from './MenuItem.svelte';
	import SubMenu from './SubMenu.svelte';
	let innerHeight = 100;
</script>

<svelte:window bind:innerHeight />
<div style="min-height: {innerHeight - 52}px;" class="border-r border-b-200 pt-2 px-3">
	<SubMenu title="Admin">
		<MenuItem title="Users" path="/user" />
	</SubMenu>
	<SubMenu title="Misc">
		<MenuItem title="Home" path="/" />
		<MenuItem title="Channel" path="/channel" />
	</SubMenu>
</div>
