export type User = {
	id: string;
	name: string;
};

const JSONPLACEHOLDER = 'https://jsonplaceholder.typicode.com';

async function myFetch(input: RequestInfo, init?: RequestInit) {
	const resp = await fetch(input, init);
	if (resp.ok) {
		return resp;
	} else {
		throw new Error(resp.statusText);
	}
}

export async function getUsers() {
	const url = JSONPLACEHOLDER + '/users';
	const resp = await myFetch(url);
	return (await resp.json()) as User[];
}

export async function getUser(id: string) {
	const url = JSONPLACEHOLDER + '/users/' + id;
	const resp = await myFetch(url);
	return (await resp.json()) as User;
}

function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}
