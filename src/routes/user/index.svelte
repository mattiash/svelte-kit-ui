<script>
	import { goto } from '$app/navigation';
	let users = [];
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((json) => (users = json));
</script>

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
					<th>{user.id}</th>
					<td>{user.name}</td>
					<td>Quality Control Specialist</td>
					<td>Blue</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
