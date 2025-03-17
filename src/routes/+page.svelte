<script>
    import Icon from "@iconify/svelte";
    import Sdg16 from "../media/sdg16.svg"
</script>

<section class="p-8 mobile:p-16 flex flex-col tablet:flex-row gap-8 items-center text-center mobile:text-left">
    <h1 class="!text-5xl mobile:!text-6xl w-full tablet:w-1/2 leading-none mobile:leading-20">What We Care:<br />Addressing The Rise of Juvenile Delinquency</h1>
    <div class="w-full tablet:w-1/2 flex flex-col gap-8 text-left">
        <p class="text-lg">At Law4Minor, we tackle the root causes head-on, taking urgent action through education and awareness—empowering at-risk youth to find support, belonging, and a brighter future.</p>
        <button class="button-primary self-center mobile:self-baseline">Read More<Icon icon="material-symbols:arrow-right-alt-rounded" width="24" height="24" /></button>
    </div>
</section>

<section class="p-8 mobile:p-16 flex flex-col gap-8 ">
    <h1 class="text-center mobile:text-left">What We Do?</h1>
    <div class="flex flex-col tablet:flex-row gap-16">
        <div class="w-full tablet:w-1/2">
            <img src="./placeholder.jpg" class="rounded-xl h-auto" alt="placeholder"/>
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
            <button class="button-primary self-center mobile:self-baseline">Read Our Story<Icon icon="material-symbols:arrow-right-alt-rounded" width="24" height="24" /></button>
        </div>
    </div>
</section>

<section class="p-8 mobile:p-16 flex flex-col tablet:flex-row gap-16">
    <div class="w-full tablet:w-1/2 flex flex-col gap-8">
        <h1 class="text-8xl text-center mobile:text-left">Our Programs and Resources</h1>
        <p>At Law4Minor, you can understand more about the law with our quick summaries, long articles, and informative videos.</p>
        <button class="button-primary self-center mobile:self-baseline">Read our Articles<Icon icon="material-symbols:arrow-right-alt-rounded" width="24" height="24" /></button>
        <button class="button-accent self-center mobile:self-baseline">Join our Events<Icon icon="material-symbols:arrow-right-alt-rounded" width="24" height="24" /></button>
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
    <button class="button-accent m-auto self-center mobile:self-baseline">Join Us. Make a Difference. <Icon icon="material-symbols:arrow-right-alt-rounded" width="24" height="24" /></button>
</section>

<section class="p-8 mobile:p-16 flex flex-col gap-8">
    <h1 class="text-center mobile:text-left">Latest Articles & Posts</h1>
    <p class="text-center mobile:text-justify">We are proud of our work, and we are always looking for new challenges. Take a look at some of our recent articles:</p>
    <button class="button-primary self-center mobile:self-baseline">Read More<Icon icon="material-symbols:arrow-right-alt-rounded" width="24" height="24" /></button>
    <div class="article-list">
        <div class="article-card">
            <img src="./placeholder.jpg" class="rounded-xl h-auto" alt="placeholder" />
            <h3>Online Engagement</h3>
            <span class="text-center m-auto mobile:m-0">
                    <Icon icon="icon-park-solid:calendar" width="18" height="18"/> April 12, 2023 
                    <br />
                    <Icon icon="icon-park-solid:people" width="18" height="18" /> CUTE BOI WRITER      
            </span>
            <p class="text-primary-text font-normal !text-sm">Through engaging and informative legal summaries and witty reels on our Instagram page, you can learn you can lear you can lear you can lear you can lear you can lear...</p>
            <button class="button-accent">Read More<Icon icon="material-symbols:arrow-right-alt-rounded" width="24" height="24" /></button>
        </div>
    </div>

</section>

<section class="hero p-8 mobile:p-16 flex flex-col gap-8">
    <h1>Ready to Join Us?</h1>
    <p>Take a deep dive of how we work, and how can you bring an impact for the society!</p>
    <button class="button-accent">Join Us Now!<Icon icon="material-symbols:arrow-right-alt-rounded" width="24" height="24" /></button>
</section>
