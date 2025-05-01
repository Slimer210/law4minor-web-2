import type { Article } from '$lib/models/models';

export const load = async () => {
	let demoBlog: Article[] = [];

	try {
		const response = await fetch('https://law4minor.org/wp-json/wp/v2/posts?_embed');
		const data = await response.json();

		demoBlog = data.map((post: any) => ({
			title: post.title?.rendered ?? 'Untitled',
			date_published: post.date?.slice(0, 10) ?? 'Unknown date',
			author: {
				name: post._embedded?.author?.[0]?.name ?? 'Unknown',
				profile_link: post._embedded?.author?.[0]?.link ?? '#',
				avatar_url: post._embedded?.author?.[0]?.avatar_urls?.['24'] ?? 'src/media/avatar.webp'
			},
			image_permalink:
				post.featured_media && post._embedded?.['wp:featuredmedia']?.[0]?.source_url
					? post._embedded['wp:featuredmedia'][0].source_url
					: 'src/media/home-1.webp',
			post_permalink: `articles/${post.slug}`,
			excerpt: (post.excerpt?.rendered ?? '').replace(/<[^>]+>/g, '').slice(0, 100) + '...'
		}));
	} catch (error) {
		console.error('Error loading blog data:', error);
	}
	return {
		demoBlog
	};
};
