import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		trailingSlash: 'always',
		prerender: {
			// Set to false again when adapter-static releases a version
			// greater than 1.0.0-next.29
			// https://github.com/sveltejs/kit/issues/4441
			enabled: true
		}
	}
};

export default config;
