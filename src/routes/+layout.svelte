<script lang="ts">
	let { children } = $props();
    import "../app.css";
</script>

<nav class="flex flex-row w-screen text-primary h-24 p-8 items-center shadow-lg border-b-1 border-b-primary/20 fixed top-0 left-0 backdrop-blur-2xl">
    <a class="flex flex-row h-8 flex-grow gap-4" href="/">
        <img src="/favicon.png" alt="Logo" />
        <h2 class="text-2xl font-bold">Law4Minor</h2>
    </a>
    <div class="flex flex-row gap-16 uppercase tracking-widest font-light text-primary-text text-base h-fit">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/articles">Articles</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact Us</a>
    </div>
	
</nav>

<style lang="postcss">
</style>

<main class="flex flex-col min-h-screen mt-24 max-w-desktop m-auto">
    {@render children()}
</main>



<footer class="text-primary-text flex flex-row p-10 border-t-1 border-t-primary/20">
    <p class="flex-grow tracking-wide">&copy; 2024-2025 Law4Minor (P12356). All Rights Reserved.</p>
    <div class="flex flex-row gap-3 tracking-wider uppercase font-light">
        <a href="/terms-of-service">Terms of Service</a>
        <div>|</div>
        <a href="/privacy-policy">Privacy Policy</a>

    </div>
    
</footer>