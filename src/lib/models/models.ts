export type Article = {
    title: string;
    post_permalink: string;
    image_permalink: string;
    date_published: string;
    author: { name: string; profile_link: string; avatar_url: string };
    excerpt: string;
    tags: object;
};