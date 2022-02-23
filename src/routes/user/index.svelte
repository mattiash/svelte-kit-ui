<script>
	let users = [];
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((json) => (users = json));
</script>

{#each users as user}
	<a href="/user/{user.id}">{user.name}</a><br />
{/each}
