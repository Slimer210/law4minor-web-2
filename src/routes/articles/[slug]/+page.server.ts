import type { Article } from '$lib/models/models';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const res = await fetch(`https://law4minor.org/wp-json/wp/v2/posts?slug=${slug}&_embed`);
	const data = await res.json();

	if (!data || data.length === 0) {
		throw new Error(`Post not found for slug: ${slug}`);
	}

	const post = data[0];

	const blogPost = {
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
		content: post.content?.rendered ?? ''
	};
	return {
		blogPost
	};
};