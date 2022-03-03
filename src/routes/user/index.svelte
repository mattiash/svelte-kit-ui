<script lang="ts">
	import { goto } from '$app/navigation';
	import { getUsers, type User } from '$lib/api/user';
	import { TableSort } from 'svelte-tablesort';
	let users = new Array<User>();
	getUsers().then((v) => (users = v));
</script>

<h1>Users</h1>
<div class="overflow-x-auto">
	<TableSort items={users} class="table w-full">
		<tr slot="thead">
			<th data-sort="id">Id</th>
			<th data-sort="name">Name</th>
			<th data-sort="name">Job</th>
			<th data-sort="name">Favorite Color</th>
		</tr>
		<tr slot="tbody" let:item class="cursor-pointer" on:click={() => goto('/user/' + item.id)}>
			<td>{item.id}</td>
			<td>{item.name}</td>
			<td>Quality Control Specialist</td>
			<td>Blue</td>
		</tr>
	</TableSort>
</div>
