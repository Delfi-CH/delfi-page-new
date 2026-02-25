// src/routes/blog/[slug]/+page.server.js
export const prerender = true;

// import all HTML files from src/posts as raw text
const posts = import.meta.glob('../../../posts/*.html', { query: '?raw', import: 'default', eager: true });

/** Tell SvelteKit which slugs exist at build time */
export function entries() {
    return Object.keys(posts).map(file => {
        const slug = file.split('/').pop().replace('.html', '');
        return { slug };
    });
}

/** Load the HTML content for the given slug */
export async function load({ params }) {
    const { slug } = params;
    const file = Object.keys(posts).find(f => f.endsWith(`${slug}.html`));

    if (!file) {
        return { content: '<p>Post not found.</p>' };
    }

    const content = posts[file]; // raw HTML
    return { content };
}