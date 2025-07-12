<script lang="ts">
    import Button from "$lib/components/element/button.svelte";
</script>


<section class="p-8 w-full h-full">
    <div class="p-16 w-full grid grid-cols-2 grid-rows-3 gap-4">
        <div class="p-8 px-12 col-span-1 row-span-3 bg-primary/20 space-y-4 rounded-lg">
            <span class="uppercase tracking-widest">Get in Touch</span>
            <h1 class="tracking-wide text-4xl leading-14">Contact to <br />Get Started</h1>
            <p class="text-left justify-start text-primary-text">Have questions or feedback? Feel free to discuss together, and we’ll respond promptly.</p>
            <form>
                <div class="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" class="p-4 border bg-primary-text/20 border-primary-text/40 rounded-lg" />
                    <input type="text" placeholder="Last Name" class="p-4 border bg-primary-text/20 border-primary-text/40 rounded-lg" />
                    <input type="email" placeholder="Email" class="p-4 border bg-primary-text/20 border-primary-text/40 rounded-lg col-span-2" />
                    <input type="text" placeholder="Subject" class="p-4 border bg-primary-text/20 border-primary-text/40 rounded-lg col-span-2" />
                    <textarea placeholder="Message" class="p-4 border bg-primary-text/20 border-primary-text/40 rounded-lg col-span-2 h-32"></textarea>
                    <Button type="accent" className="self-end">Submit</Button>
            </form>
        </div>
        <div class="col-span-1 row-span-2 bg-primary/20 rounded-lg">
            <img src="/src/media/hero.webp" alt="Contact" class="w-full h-full object-cover rounded-lg" />
        </div>
        <div class="p-8 col-span-1 row-span-1 bg-primary/20 rounded-lg">right side</div>
    </div>
</section>