import { getUser } from '$lib/api/user';

/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {
	return {
		body: {
			item: await getUser(params.id)
		}
	};
}
