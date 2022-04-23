export type User = {
	id: string;
	name: string;
	lastUpdated: Date;
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

export const getUsersUrl = JSONPLACEHOLDER + '/users';
export async function getUsers() {
	const resp = await myFetch(getUsersUrl);
	const data = (await resp.json()) as User[];
	data.forEach((user) => (user.lastUpdated = new Date()));
	return data;
}

export async function getUser(id: string) {
	const url = JSONPLACEHOLDER + '/users/' + id;
	const resp = await myFetch(url);
	return (await resp.json()) as User;
}

export async function putUser(data: any) {
	console.log('putUser', data);
}

function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}
