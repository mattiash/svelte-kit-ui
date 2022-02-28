<script lang="ts">
	import { goto } from '$app/navigation';
	import type { User } from './_types';
	let users = new Array<User>();
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((json) => (users = json));
</script>

<h1>Users</h1>
<div class="overflow-x-auto">
	<table class="table w-full">
		<!-- head -->
		<thead>
			<tr>
				<th />
				<th>Name</th>
				<th>Job</th>
				<th>Favorite Color</th>
			</tr>
		</thead>
		<tbody>
			{#each users as user}
				<tr class="cursor-pointer" on:click={() => goto('/user/' + user.id)}>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>Quality Control Specialist</td>
					<td>Blue</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
