<script>
    import Icon from "@iconify/svelte";

    // demo data
    let demoBlog = [    ]

    // experimential fetch from wp
    async function fetchData() {
    const response = await fetch('https://law4minor.org/wp-json/wp/v2/posts');
    const data = await response.json();

    data.forEach(post => {
        demoBlog.push({
        title: post.title.rendered,
        date: post.date.slice(0,10),
        author: post.author_name,
        image_permalink: post.featured_media ? `https://law4minor.org/wp-content/uploads/${post.featured_media}.webp` : 'src/media/home-1.webp',
        post_permalink: `https://law4minor.org/post/${post.slug}`
        });
    });
    }

    console.log(demoBlog)

    fetchData();
</script>

<section class="p-8 mobile:p-16 space-y-4 items-center text-center mobile:text-left">
    <h1 class="!text-5xl mobile:!text-6xl w-full leading-none mobile:leading-20">Articles & Blog Posts</h1>
    <p class="text-lg">At Law4Minor, we tackle the root causes head-on, taking urgent action through education and awareness—empowering at-risk youth to find support, belonging, and a brighter future.</p>
</section>

<section class="p-8 mobile:p-16 space-y-4 text-center mobile:text-left w-full h-auto flex flex-row items-center">
    <div class="relative w-full tablet:w-3/4 h-auto aspect-video bg-cover m-auto rounded-xl bg-[url('src/media/home-1.webp')]">
        <div class="absolute bottom-0 left-0 w-full p-8 pt-24 space-y-4 bg-gradient-to-t from-black/80 to-black/0 text-white">
            <span class="text-primary font-light uppercase tracking-wider">Can you really sue?</span>
            <h2 class="tracking-wide">Can You Really Sue Over Burger Sizes? </h2>
            <div class="flex flex-row w-full gap-4">
                <div>
                    <span>Author</span>
                    <p>How Wei Shan</p>
                </div>
                <div class="flex-grow">
                    <span>Published On</span>
                    <p>13 Feb 2024</p>
                </div>
                <div>
                    <span>Tags</span>
                    <p>Burger Size, Law, Sue</p>
                </div>
            </div>
        </div>
        
    </div>
</section>

<section class="p-8 mobile:p-16 space-y-4 text-center mobile:text-left h-auto ">
    <div class="flex flex-row items-center">
        <h2 class="flex-grow">All Posts</h2>
        <input type="text" placeholder="Search.." class="py-4 px-8 bg-primary-text/30 rounded-full">
    </div>
    <div class="article-list">
        {#each demoBlog as article}
            <div class="article-card">
                <img src={article.image_permalink} class={`rounded-xl h-auto bg-cover aspect-square w-full bg-[url(${article.image_permalink})]`} alt="placeholder" />
                <h3>{article.title}</h3>
                <span class="text-center m-auto mobile:m-0">
                        <Icon icon="icon-park-solid:calendar" width="18" height="18"/> April 12, 2023 
                        <br />
                        <Icon icon="icon-park-solid:people" width="18" height="18" /> CUTE BOI WRITER      
                </span>
                <p class="text-primary-text font-normal !text-sm">Through engaging and informative legal summaries and witty reels on our Instagram page, you can learn you can lear you can lear you can lear you can lear you can lear...</p>
                <a class="button-accent" href={article.post_permalink}>Read More<Icon icon="material-symbols:arrow-right-alt-rounded" width="24" height="24" /></a>
            </div>
        {/each} 
    </div>
</section>



