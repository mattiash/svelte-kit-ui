<script lang="ts">
	import type { User } from '$lib/api/user';
	export let item: User;
</script>

<h1>User {item.name}</h1>
{JSON.stringify(item)}
