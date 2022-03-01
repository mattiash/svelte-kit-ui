<script>
	import { slide } from 'svelte/transition';
	import MenuItem from './MenuItem.svelte';
	import SubMenu from './SubMenu.svelte';
	let show1 = false;
	let show2 = true;
	let innerHeight = 100;
</script>

<svelte:window bind:innerHeight />
<div style="min-height: {innerHeight - 52}px;">
	<SubMenu title="Admin">
		<MenuItem title="Users" path="/user" />
	</SubMenu>
	<SubMenu title="Misc" show={true}>
		<MenuItem title="Home" path="/" />
		<MenuItem title="Channel" path="/channel" />
	</SubMenu>
</div>
