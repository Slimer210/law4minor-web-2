<script lang="ts">
    import Icon from "@iconify/svelte";
    import type { PageServerData } from './$types';
    import { ArticleButton, ArticleCard, ArticleContent, ArticleImage, ArticleInfo, ArticleTitle } from "$lib/components/article-card";
    import Button from "$lib/components/element/button.svelte";
    export let data: PageServerData;
</script>

<section class="p-8 mobile:p-16 space-y-4 items-center text-center mobile:text-left">
    <h1 class="!text-5xl mobile:!text-6xl w-full leading-none mobile:leading-20">Articles & Blog Posts</h1>
    <p class="text-lg">At Law4Minor, we tackle the root causes head-on, taking urgent action through education and awareness—empowering at-risk youth to find support, belonging, and a brighter future.</p>
</section>   
<section class="p-2 mobile:p-16 space-y-4 text-center mobile:text-left w-full h-auto flex flex-row items-center">
    <div class={`hidden tablet:block featured-article relative w-full tablet:w-2/3 h-auto aspect-video bg-cover m-auto rounded-xl`} >
        <img src={data.demoBlog[0].image_permalink} 
                alt={data.demoBlog[0].title} 
                class="absolute top-0 w-full h-full object-cover rounded-xl" />
        <div class="absolute bottom-0 left-0 w-full p-8 space-y-8 bg-gradient-to-t from-black/80 to-black/0">
            <span class="text-primary font-light uppercase tracking-wider">{data.demoBlog[0].category} </span>
            <h2 class="tracking-wide">{data.demoBlog[0].title} </h2>
            <div class="flex flex-row w-full gap-4 gap-y-8">
                <div class="space-y-2">
                    <span class="uppercase">Author</span>
                    <p class="align-center"><img src={data.demoBlog[0].author.avatar_url}/ alt={"Avatar of " + data.demoBlog[0].author.name} class="inline rounded-full mr-2" width="24" height="24" />{data.demoBlog[0].author.name}</p>
                </div>
                <div class="space-y-2">
                    <span class="uppercase">Published On</span>
                    <p>{data.demoBlog[0].date_published}</p>
                </div>
                <div class="space-y-2 flex-grow">
                    <span class="uppercase">Tags</span>
                    <div class="space-x-2 h-min">
                        <p>tag, tag, tag</p>
                    </div>
                </div>
                <Button type="accent" href={data.demoBlog[0].post_permalink} className="!text-black">Read More</Button>
            </div>
        </div>
        
    </div>
</section>
  

<section class="p-8 mobile:p-16 space-y-4 text-center mobile:text-left h-auto ">
    <div class="flex flex-col mobile:flex-row items-center justify-center gap-y-8">
        <h2 class="flex-grow">All Posts</h2>
        <input type="text" placeholder="Search.." class="py-4 px-8 bg-primary-text/30 rounded-full active:border-none">
    </div>
    <div class="grid grid-cols-1 tablet:grid-cols-3 gap-8">
        {#each data.demoBlog as article}
            <ArticleCard>
                <ArticleImage src={article.image_permalink} />
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleInfo date={article.date_published} author={article.author.name}/>
                <ArticleContent>{article.excerpt}</ArticleContent>
                <ArticleButton href={article.post_permalink}>Read More</ArticleButton>
            </ArticleCard>
        {/each}
    </div>
</section>



