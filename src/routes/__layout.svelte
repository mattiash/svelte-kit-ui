<script>
	import '../app.css';
	import Status from '$lib/status.svelte';
	import MainMenu from '$lib/MainMenu.svelte';
</script>

<div class="navbar bg-base-200">
	<div class="flex-none">
		<label for="my-drawer-2" class="btn drawer-button lg:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			>
		</label>
	</div>
	<div class="flex-1 p-1">
		<span class="font-bold text-xl">daisyUI</span>
	</div>
	<div class="flex-none">
		<Status />
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
				/></svg
			>
		</button>
	</div>
</div>

<div class="h-screen drawer drawer-mobile w-full">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content p-2 min-h-screen">
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<!-- Sidebar content here -->
		<MainMenu />
	</div>
</div>
