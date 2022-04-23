<script lang="ts">
	import type { User } from '$lib/api/user';
	import { goto, invalidate } from '$app/navigation';
	import TableSort from 'svelte-tablesort/TableSort.svelte';
	import { onMount } from 'svelte';
	export let items: User[];

	onMount(() => {
		const interval = setInterval(() => {
			console.log('invalidate');
			invalidate('/user');
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<h1>Users</h1>
<div class="overflow-x-auto">
	<TableSort {items} class="table w-full">
		<tr slot="thead">
			<th data-sort="id">Id</th>
			<th data-sort="name">Name</th>
			<th data-sort="lastUpdated">Last updated</th>
			<th data-sort="name">Favorite Color</th>
		</tr>
		<tr slot="tbody" let:item class="cursor-pointer" on:click={() => goto('./' + item.id)}>
			<td>{item.id}</td>
			<td>{item.name}</td>
			<td>{item.lastUpdated}</td>
			<td>Blue</td>
		</tr>
	</TableSort>
</div>
