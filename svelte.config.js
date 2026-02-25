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
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') { return; }
				throw new Error(message);// otherwise fail the build throw new Error(message);
			}
		}
	}};

