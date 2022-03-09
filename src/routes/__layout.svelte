<script>
	import '../app.css';
	import Status from '$lib/status.svelte';
	import MainMenu from '$lib/Menu/MainMenu.svelte';
	import { mainMenuOpen } from '$lib/stores';
	import { navigating } from '$app/stores';

	let menuOpen = false;

	$: mainMenuOpen.set(menuOpen);
	mainMenuOpen.subscribe((v) => {
		menuOpen = v;
	});
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
	</div>
</div>

<div class="drawer drawer-mobile w-full">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" bind:checked={menuOpen} />
	<div class="drawer-content p-2 min-h-screen lg:min-h-0">
		<!-- Page content here -->
		{#if $navigating}
			<div class="grid justify-items-center items-center h-full lg:pt-36">
				<div>
					<svg
						class="animate-spin -ml-1 mr-3 h-40 w-40 text-primary"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							class="opacity-10"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							stroke-width="4"
						/>
						<path
							class="opacity-50"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
				</div>
			</div>
		{:else}
			<slot />
		{/if}
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<!-- Sidebar content here -->
		<MainMenu />
	</div>
</div>
