<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ params, fetch, session, stuff }) => {
		const url = 'https://jsonplaceholder.typicode.com/users/' + params.id;
		const response = await fetch(url);

		return {
			status: response.status,
			props: {
				item: response.ok && (await response.json())
			}
		};
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import type { User } from './_types';
	export let item: User;

	let timestamp = '';
	onMount(() => {
		const interval = setInterval(() => {
			timestamp = new Date().toTimeString();
			console.log(timestamp);
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<h1>User {item.name}</h1>
X {timestamp}
