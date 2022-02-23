<script context="module">
	/** @type {import('@sveltejs/kit').Load} */ export async function load({
		params,
		fetch,
		session,
		stuff
	}) {
		const url = 'https://jsonplaceholder.typicode.com/users/' + params.id;
		const response = await fetch(url);

		return {
			status: response.status,
			props: {
				item: response.ok && (await response.json())
			}
		};
	}
</script>

<script>
	export let item;
</script>

<h1>User {item.name}</h1>
