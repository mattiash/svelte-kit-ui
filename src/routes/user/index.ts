import { getUsers } from '$lib/api/user';

/** @type {import('./[id]').RequestHandler} */
export async function get() {
	return {
		body: {
			items: await getUsers()
		}
	};
}
