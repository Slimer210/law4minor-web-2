<script lang="ts">
    import Icon from "@iconify/svelte";
    import type { Article } from "$lib/models/models";
    import type { PageServerData } from './$types';
    export let data: PageServerData;
    import { register } from 'swiper/element/bundle';
    register();
</script>

<section class="p-8 mobile:p-16 space-y-4 items-center text-center mobile:text-left">
    <h1 class="!text-5xl mobile:!text-6xl w-full leading-none mobile:leading-20">Articles & Blog Posts</h1>
    <p class="text-lg">At Law4Minor, we tackle the root causes head-on, taking urgent action through education and awareness—empowering at-risk youth to find support, belonging, and a brighter future.</p>
</section>   
<section class="p-8 mobile:p-16 space-y-4 text-center mobile:text-left w-full h-auto flex flex-row items-center">
    <div class="hidden tablet:block featured-article relative w-full tablet:w-3/4 h-auto aspect-video bg-cover m-auto rounded-xl bg-[url('src/media/home-1.webp')]">
        <div class="absolute bottom-0 left-0 w-full p-8 pt-24 space-y-4 bg-gradient-to-t from-black/80 to-black/0 text-white">
            <span class="text-primary font-light uppercase tracking-wider">Can you really sue?</span>
            <h2 class="tracking-wide">Can You Really Sue Over Burger Sizes? </h2>
            <div class="flex flex-row w-full gap-4 !text-white">
                <div>
                    <span class="uppercase">Author</span>
                    <p class="align-center"><img src={data.demoBlog[0].author.avatar_url}/ alt={"Avatar of " + data.demoBlog[0].author.name} class="inline rounded-full mr-2" width="24" height="24" />{data.demoBlog[0].author.name}</p>
                </div>
                <div class="flex-grow">
                    <span class="uppercase">Published On</span>
                    <p>{data.demoBlog[0].date_published}</p>
                </div>
                <div>
                    <span class="uppercase">Tags</span>
                    <p>Burger Size, Law, Sue</p>
                </div>
            </div>
        </div>
        
    </div>
</section>
  

<section class="p-8 mobile:p-16 space-y-4 text-center mobile:text-left h-auto ">
    <div class="flex flex-col mobile:flex-row items-center justify-center gap-y-8">
        <h2 class="flex-grow">All Posts</h2>
        <input type="text" placeholder="Search.." class="py-4 px-8 bg-primary-text/30 rounded-full active:bg-white">
    </div>
    <div class="article-list">
        {#each data.demoBlog as article}
            <div class="article-card">
                <img src={article.image_permalink} class={`rounded-xl h-auto bg-cover aspect-video w-full bg-[url(${article.image_permalink})]`} alt="placeholder" />
                <h3>{article.title}</h3>
                <span class="text-center m-auto mobile:m-0">
                        <Icon icon="icon-park-solid:calendar" width="18" height="18" class="inline"/> {article.date_published} 
                        <br />
                        <Icon icon="icon-park-solid:people" width="18" height="18" class="inline" /> {article.author.name}     
                </span>
                <p class="text-primary-text font-normal !text-sm">{article.excerpt}</p>
                <a class="button-accent self-center mobile:self-auto" href={article.post_permalink}>Read More<Icon icon="material-symbols:arrow-right-alt-rounded" width="24" height="24" /></a>
            </div>
        {/each}
            
    </div>
</section>



