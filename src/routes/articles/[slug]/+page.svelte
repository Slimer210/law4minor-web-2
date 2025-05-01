<script lang="ts">
	import Icon from "@iconify/svelte";
    import type { Article } from "$lib/models/models";
    import type { PageServerData } from './$types';
    export let data: PageServerData;

    console.log(data)

    let article_content={"innerHTML":""};
    article_content.innerHTML = data.blogPost.content;

</script>


<section class="p-8 mobile:p-16 items-center text-center mobile:text-left">
	<p class="text-lg uppercase tracking-widest">Your life is good enough if you dont touch programming</p>
    <h1 class="!text-4xl mobile:!text-6xl w-full leading-none mobile:leading-20 tracking-wide">{data.blogPost.title}</h1>    
</section>  
<section class="p-8 mobile:p-16 text-center mobile:text-left w-full h-auto flex flex-row items-center">
    <div class={`hidden tablet:block featured-article relative w-full tablet:w-3/4 h-auto aspect-video bg-cover m-auto rounded-xl`}>
        <img src={data.blogPost.image_permalink} alt={data.blogPost.image_permalink} class="absolute inset-0 w-full h-full object-cover rounded-xl" />

        <div class="absolute bottom-0 left-0 w-full p-8 pt-24 space-y-4 bg-gradient-to-t from-black/80 to-black/0 text-white">
            <div class="flex flex-row w-full gap-4 !text-white">
                <div>
                    
                    <span class="uppercase">Author</span>
                    <p class="align-center"><img src={data.blogPost.author.avatar_url}/ alt={"Avatar of " + data.blogPost.author.name} class="inline rounded-full mr-2" width="24" height="24" />{data.blogPost.author.name}</p>
                </div>
                <div class="flex-grow">
                    <span class="uppercase">Published On</span>
                    <p>{data.blogPost.date_published}</p>
                </div>
                <div>
                    <span class="uppercase">Tags</span>
                    <p>Burger Size, Law, Sue</p>
                </div>
            </div>
        </div>
        
    </div>
</section>

<section class="p-8 mobile:p-16 text-center mobile:text-left w-full h-auto flex flex-row items-center">
    <div class="flex flex-col w-sm gap-4 !text-white">
        <span>Reading time: 3 mins</span>
    </div>
    <article class="flex-grow prose w-auto">
        {@html data.blogPost.content}
    </article>
</section>