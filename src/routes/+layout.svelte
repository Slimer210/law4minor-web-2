<script lang="ts">
    import Icon from "@iconify/svelte";
	let { children } = $props();
    import "../app.css";

    let isMobileMenuOpen = false;
    function toggleMobileMenu() {
        console.log("Toggling" + isMobileMenuOpen)
        isMobileMenuOpen = !isMobileMenuOpen;
    }
</script>

<nav class="flex flex-row w-screen text-primary h-18 p-8 items-center shadow-lg border-b-1 border-b-primary/20 fixed top-0 left-0 backdrop-blur-2xl backdrop-brightness-50">
    <a class="flex flex-row h-8 flex-grow gap-2 items-center" href="/">
        <img src="/favicon.png" alt="Logo" class="h-8"/>
        <h2 class="!text-xl !font-semibold">Law4Minor<span class="p-2 mx-4 bg-primary-text/20 border border-primary/50 rounded-sm text-sm font-normal">BETA</span></h2>
    </a>
    <div class="navlink flex-row hidden tablet:flex gap-12 uppercase tracking-widest">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/articles">Articles</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact Us</a>
    </div>
    <button class="block tablet:hidden p-2 bg-primary-text/20 border border-primary-text/50 rounded-lg" onclick={() => toggleMobileMenu()} aria-expanded="false" aria-controls="mobile-menu">
        <Icon icon="mingcute:menu-fill" width="24" height="24"></Icon>
    </button>
    {#if isMobileMenuOpen}
        <div class="fixed top-16 left-0 w-screen h-screen bg-black" aria-label="mobile menu">
            <div class="navlink mobile-menu flex flex-col items-center justify-center h-4/5 gap-12 uppercase tracking-widest">
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/articles">Articles</a>
                <a href="/events">Events</a>
                <a href="/contact">Contact Us</a>
            </div>
        </div>
    {/if}
    
	
</nav>

<style lang="postcss">

</style>

<main class="flex flex-col min-h-screen mt-24 max-w-desktop m-auto">
    {@render children()}
</main>

<footer class="text-primary-text flex flex-col tablet:flex-row text-center tablet:text-left p-10 border-t-1 border-t-primary/20">
    <p class="flex-grow tracking-wide text-md text-center tablet:text-left">&copy; 2024-2025 Law4Minor (P12356). All Rights Reserved.</p>
    <br />
    <div class="flex flex-row gap-3 tracking-wider uppercase font-light">
        <a href="/terms-of-service">Terms of Service</a>
        <div>|</div>
        <a href="/privacy-policy">Privacy Policy</a>

    </div>
    
</footer>