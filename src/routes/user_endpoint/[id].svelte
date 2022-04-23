<script lang="ts">
	import type { User } from '$lib/api/user';
	export let item: User;
</script>

<h1>User {item.name}</h1>

<form method="post">
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
