<script>
    import {
        ArticleButton, 
        ArticleCard, 
        ArticleImage, 
        ArticleTitle, 
        ArticleInfo,
        ArticleContent,
    } from "$lib/components/article-card";
    
    import Icon from "@iconify/svelte";
    import Button from "$lib/components/element/button.svelte";

    const demoBlog = [
        {
            title: "Demo Blog",
            date: "July 15, 2023",
            author: "John Doe",
            image_permalink: "src/media/home-1.webp",
            post_permalink: "src/media/home-1.webp"
        },
        {
            title: "Demo Blog",
            date: "July 15, 2023",
            author: "John Doe",
            image_permalink: "src/media/home-1.webp",
            post_permalink: "src/media/home-1.webp"
        },
        {
            title: "Demo Blog",
            date: "July 15, 2023",
            author: "John Doe",
            image_permalink: "src/media/home-1.webp",
            post_permalink: "src/media/home-1.webp"
        }
    ]
</script>

<section class="p-8 mobile:p-16 flex flex-col gap-8 tablet:flex-row items-center text-center mobile:text-left">
    <h1 class="!text-5xl mobile:!text-6xl w-full tablet:w-1/2 leading-none mobile:leading-20">What We Care:<br />Addressing The Rise of Juvenile Delinquency</h1>
    <div class="w-full tablet:w-1/2 flex flex-col gap-8 text-left">
        <p class="text-lg">At Law4Minor, we tackle the root causes head-on, taking urgent action through education and awareness—empowering at-risk youth to find support, belonging, and a brighter future.</p>
        <Button>Read More</Button>
    </div>
</section>

<section class="p-8 mobile:p-16 flex flex-col gap-8 ">
    <h1 class="text-center mobile:text-left">What We Do?</h1>
    <div class="flex flex-col tablet:flex-row gap-16">
        <div class="w-full tablet:w-1/2 flex-1">
            <img src="src/media/home-1.webp" class="rounded-xl" alt="placeholder"/>
        </div>
        <div class="w-full tablet:w-1/2 flex flex-col gap-8">
            <p>According to the Department of Statistics Malaysia (DOSM), the number of offences involving minors increased from year to year. At Law4Minor, we aim to target the underlying cause, focusing our urgent action towards education and awareness to help at-risk youth find community.</p>
            <span class="statistics">
                <ul>
                    <li>10K+</li>
                    <li>Total Readers of Articles</li>
                </ul>
                <ul>
                    <li>100+</li>
                    <li>Instagram Followers</li>
                </ul>
                <ul>
                    <li>200+</li>
                    <li>Instagram Likes</li>
                </ul>
            </span>
            <Button>Read Our Story</Button>
        </div>
    </div>
</section>

<section class="p-8 mobile:p-16 flex flex-col tablet:flex-row gap-16">
    <div class="w-full tablet:w-1/2 flex flex-col gap-8">
        <h1 class="text-8xl text-center mobile:text-left">Our Programs and Resources</h1>
        <p>At Law4Minor, you can understand more about the law with our quick summaries, long articles, and informative videos.</p>
        <Button>Read Our Articles</Button>
        <Button type="accent">Join Our Events</Button>
    </div>
    <div class="features w-full tablet:w-1/2">
        <div class="feature-card">
            <h2><Icon icon="icon-park-solid:online-meeting" width="28" height="28" />Online Engagement</h2>
            <p>Through engaging and informative legal summaries and witty reels on our Instagram page, you can learn something new about the law.</p>
        </div>
        <div class="feature-card">
            <h2><Icon icon="ooui:article-rtl" width="28" height="28" />Articles</h2>
            <p>Enjoy 5-minute-reads on the latest news, case studies, and once again, the law to dive deeper. </p>
        </div>
        <div class="feature-card">
            <h2><Icon icon="fluent:people-community-32-filled" width="28" height="28" />Community Outreach</h2>
            <p>Partnering with other organisations, schools, and firms, we look forward to bringing the fun to you with events and campaigns.</p>
        </div>
    </div>
</section>
<section class="p-8 mobile:p-16 flex flex-col gap-8">
    <h1 class="text-center w-full">Recognition and Partnerships</h1>
    <p class="font-medium w-full mobile:w-3/4 min-w-mobile m-auto">Our initiative aligns with the UN’s Sustainable Development Goal 16:  Peace, Justice, and Strong Institutions. We are actively working with  the Ministry of Education (MOE) and other public sector entities to  ensure that our programs are effective, sustainable, and far-reaching.</p>
    <div class="m-auto flex flex-col tablet:flex-row gap-y-8 gap-x-32 !text-primary-text/40">
        <span>
            <p class="!text-center">Complies to</p> 
            <span class="flex justify-center gap-2 m-auto">
                <Icon icon="flag:un-4x3" width="72"/>
                <img src="src/media/sdg16.svg" alt="My Happy SVG"/>
                
            </span>
        </span>
        <span style="display:none">
            <p class="!text-center">Proudly Recognised By</p> 
            <span class="flex justify-center gap-2 m-auto">
                <Icon icon="fluent:people-community-32-filled" width="72" height="72" />
                <Icon icon="fluent:people-community-32-filled" width="72" height="72" />
                <Icon icon="fluent:people-community-32-filled" width="72" height="72" />
                <Icon icon="fluent:people-community-32-filled" width="72" height="72" />
            </span>
        </span>
    </div>
    <Button type="accent" className="self-center">Join Us. Make A Difference.</Button>
</section>

<section class="p-8 mobile:p-16 flex flex-col gap-8">
    <h1 class="text-center mobile:text-left">Latest Articles & Posts</h1>
    <p class="text-center mobile:text-justify">We are proud of our work, and we are always looking for new challenges. Take a look at some of our recent articles:</p>
    <Button>Read More</Button>
    <div class="grid grid-cols-1 tablet:grid-cols-3 gap-8">
        {#each demoBlog as article}
            <ArticleCard>
                <ArticleImage src={article.image_permalink} />
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleInfo date="1/2/2023" author="CUTE BOI WQRITER"/>
                <ArticleContent>Through engaging and informative legal summaries and witty reels on our Instagram page, you can learn you can lear you can lear you can lear you can lear you can lear...</ArticleContent>
                <ArticleButton href={article.post_permalink}>Read More</ArticleButton>
            </ArticleCard>
        {/each}
    </div>

    

</section>

<section class="hero p-8 mobile:p-16 flex flex-col gap-8">
    <h1>Ready to Join Us?</h1>
    <p>Take a deep dive of how we work, and how can you bring an impact for the society!</p>
    <Button type="accent">Join Us Now</Button>
</section>