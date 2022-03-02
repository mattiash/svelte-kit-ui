export type User = {
	id: string;
	name: string;
};

const JSONPLACEHOLDER = 'https://jsonplaceholder.typicode.com';
export async function getUsers() {
	const url = JSONPLACEHOLDER + '/users';
	const resp = await fetch(url);
	return (await resp.json()) as User[];
}

export async function getUser(id: string) {
	const url = JSONPLACEHOLDER + '/users/' + id;
	const resp = await fetch(url);
	return (await resp.json()) as User;
}
