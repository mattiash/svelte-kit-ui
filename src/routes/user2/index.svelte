<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import { getUsers, getUsersUrl, type User } from '$lib/api/user';
	import { onMount } from 'svelte';
	import TableSort from 'svelte-tablesort/TableSort.svelte';
	let users = new Array<User>();
	getUsers().then((v) => (users = v));

	onMount(() => {
		const interval = setInterval(() => invalidate(getUsersUrl));
		return () => clearInterval(interval);
	});
</script>

<h1>Users</h1>
<div class="overflow-x-auto">
	<TableSort items={users} class="table w-full">
		<tr slot="thead">
			<th data-sort="id">Id</th>
			<th data-sort="name">Name</th>
			<th data-sort="lastUpdated">Last updated</th>
			<th data-sort="name">Favorite Color</th>
		</tr>
		<tr slot="tbody" let:item class="cursor-pointer" on:click={() => goto('/user2/' + item.id)}>
			<td>{item.id}</td>
			<td>{item.name}</td>
			<td>{item.lastUpdated}</td>
			<td>Blue</td>
		</tr>
	</TableSort>
</div>
