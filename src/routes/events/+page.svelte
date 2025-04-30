<script lang="ts">
    import Icon from "@iconify/svelte";
    const demoEvent = [
        {
            title: "Demo Blog",
            date: "July 15, 2023",
            location: "Online",
            image_permalink: "src/media/home-1.webp",
            event_permalink: "src/media/home-1.webp"
        },
        {
            title: "Demo Blog",
            date: "July 15, 2023",
            location: "Online",
            image_permalink: "src/media/home-1.webp",
            event_permalink: "src/media/home-1.webp"
        },
        {
            title: "Demo Blog",
            date: "July 15, 2023",
            location: "Online",
            image_permalink: "src/media/home-1.webp",
            event_permalink: "src/media/home-1.webp"
        }
    ]
</script>

<section class="bg-[url(./media/hero.webp)] bg-dark bg-cover bg-center tablet:bg-top bg-blend-multiply p-8 mobile:p-16 gap-8 flex flex-col items-center">
    <h1 class="w-full flex-grow text-center">Events & Seminars</h1>
    <div class="max-w-tablet w-fit bg-primary/30 p-4 flex flex-row rounded-full">
        <span class="flex flex-row items-center gap-2">
            <Icon icon="material-symbols:search" />
            <input placeholder="Search Events" />
        </span>
        <span class="flex flex-row items-center gap-2">
            <Icon icon="lets-icons:date-fill" />
            <input placeholder="Date" />
        </span>
        <span class="flex flex-row items-center gap-2">
            <Icon icon="mdi:location" />
            <input placeholder="Location" />
        </span>
        <span class="flex flex-row items-center gap-2">
            <Icon icon="material-symbols:apps" />
            <input placeholder="Type" />
        </span>
    </div>
</section>

<section class="p-8 mobile:p-16 space-y-4 text-center mobile:text-left h-auto max-w-mobile">
    <div class="flex flex-row items-center">
        <h2 class="flex-grow">All Events</h2>
    </div>
    <div class="event-list">
        {#each demoEvent as article}
            <div class="event-card">
                <img src={article.image_permalink} class={`rounded-xl h-auto bg-cover aspect-square w-full bg-[url(${article.image_permalink})]`} alt="placeholder" />
                <div class="p-6 flex flex-row items-center">
                    <div class="space-y-2 flex-grow">
                        <h3>{article.title}</h3>
                        <span class="text-center m-auto mobile:m-0">
                                <Icon icon="icon-park-solid:calendar" width="18" height="18"/> April 12, 2023 
                                <br />
                                <Icon icon="mdi:location" width="18" height="18" /> ${article.location}  
                        </span>
                    </div>
                    <a class="text-primary text-4xl" href={article.event_permalink}><Icon icon="material-symbols:arrow-right-alt-rounded" />
                </div>
                
            </div>
        {/each} 
    </div>
</section>

