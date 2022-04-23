<script context="module" lang="ts">
	import { getUser } from '$lib/api/user';

	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ params, fetch, session, stuff }) => {
		try {
			return {
				status: 200,
				props: {
					item: await getUser(params.id)
				}
			};
		} catch (err) {
			return {
				status: 404
			};
		}
	};
</script>

<script lang="ts">
	import type { User } from '$lib/api/user';
	import { onMount } from 'svelte';
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
