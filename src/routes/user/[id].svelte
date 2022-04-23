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
	import { type User, putUser } from '$lib/api/user';
	export let item: User;
</script>

<h1>User {item.name}</h1>

<form
	method="post"
	on:submit|preventDefault={() => {
		putUser(item);
	}}
>
	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text">Name</span>
		</label>
		<input
			type="text"
			placeholder="Name"
			name="name"
			bind:value={item.name}
			class="input input-bordered w-full max-w-xs"
		/>
	</div>
	<input class="btn" value="Ok" type="submit" />
</form>
