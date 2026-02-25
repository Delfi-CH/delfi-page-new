// svelte.config.js
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */

export default {
	kit: {
		adapter: adapter({
			// Optional options — defaults are usually fine
			pages: 'docs',
			assets: 'docs',
			fallback: 'index.html',
		}),
		paths: {
			base: ''
		},
		prerender: {
			default: true
		}
	}};
