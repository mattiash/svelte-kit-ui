import { getUsers } from '$lib/api/user';

/** @type {import('./index').RequestHandler} */
export async function get() {
	return {
		body: {
			items: await getUsers()
		}
	};
}
