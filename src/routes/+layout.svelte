<script lang="ts">

    // preloader to make DOM prepared
    import { onMount } from 'svelte';

    let ready = $state(false);
    onMount(() => ready = true);


    import Icon from "@iconify/svelte";
    import{fade,fly} from "svelte/transition"
    import "../app.css";

    import type { PageProps } from './$types';
    let { data,children } = $props();

    // Mobile Menu Toggler
    let isMobileMenuOpen = $state(false)
    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
        console.log(isMobileMenuOpen)
    }

    const pages = [
        { title: "Home", link:"/"},
        { title: "About Us", link:"/about"},
        { title: "Articles", link:"/articles"},
        { title: "Events", link:"/events"},
        { title: "Contact Us", link:"/contact"},
    ]
</script>

<svelte:head>
    <title>Law4Minor</title>
</svelte:head>

<!-- ready state to make DOM prepared -->
{#if ready}
<nav class="flex flex-row w-screen text-primary h-18 p-8 items-center shadow-lg border-b-1 border-b-primary/20 fixed top-0 left-0 backdrop-blur-2xl backdrop-brightness-50 z-50">
    <a class="flex flex-row h-8 flex-grow gap-2 items-center" href="/" transition:fly={{x:-100}}>
        <img src="/favicon.png" alt="Logo" class="h-8"/>
        <h2 class="!text-xl !font-semibold">Law4Minor<span class="p-2 mx-4 bg-primary-text/20 border border-primary/50 rounded-sm text-sm font-normal">BETA</span></h2>
    </a>
    <div class="navlink flex-row hidden tablet:flex gap-12 uppercase tracking-widest" transition:fly={{x:100}}>
        {#each pages as page}
            <a class="text-sm" href={page.link} transition:fly={{ duration: 300}}>{page.title}</a>
        {/each}
    </div>
    <button onclick={toggleMobileMenu} class="block tablet:hidden p-2 bg-primary-text/20 border border-primary-text/50 rounded-lg menu-toggle" aria-controls="mobile-menu">
        <Icon icon="mingcute:menu-fill" width="24" height="24"></Icon>
    </button>
    {#if isMobileMenuOpen }
        <div in:fade={{duration:100}} out:fade={{duration:100}} class="fixed top-16 left-0 w-screen h-screen bg-black" aria-label="Mobile menu" aria-expanded={isMobileMenuOpen}>
            <div class="navlink mobile-menu flex flex-col items-center justify-center h-4/5 gap-12 uppercase tracking-widest">
                <a onclick={toggleMobileMenu} href="/">Home</a>
                <a onclick={toggleMobileMenu} href="/about">About Us</a>
                <a onclick={toggleMobileMenu} href="/articles">Articles</a>
                <a onclick={toggleMobileMenu} href="/events">Events</a>
                <a onclick={toggleMobileMenu} href="/contact">Contact Us</a>
            </div>
        </div>
    {/if}	
</nav>

<style lang="postcss">

</style>

<main class="flex flex-col min-h-screen mt-18 max-w-desktop m-auto">
    {@render children()}
</main>

<footer class="text-primary-text flex flex-col tablet:flex-row text-center tablet:text-left px-8 pt-8 tablet:px-24 tablet:pt-24 w-full">
    <div class="bg-black grid grid-cols-1 tablet:grid-cols-5 gap-8 mobile:gap-12 tablet:gap-24">
        <div class="col-span-1 tablet:col-span-2 space-y-8"> 
            <h3 class="text-xl text-white inline-flex gap-4 items-center"><img src="/favicon.png" alt="Logo" class="h-8"/>Law4Minor</h3>
            <p class="text-sm !text-center tablet:!text-left">Law4Minor is a non-profit organization dedicated to advocating for the rights of minorities in the legal profession.</p>
            <div>
                <span class="uppercase text-lg text-primary/50 tracking-widest">Follow Us</span>
                <div class="flex space-x-6 py-4 text-primary justify-center tablet:justify-start">
                    <a href="https://www.facebook.com/law4minor/" target="_blank" class="rounded-full bg-primary/20 p-4 shadow-lg"><Icon icon="ion:logo-facebook" width="32" height="32"></Icon></a>
                    <a href="https://www.instagram.com/law4minor/" target="_blank" class="rounded-full bg-primary/20 p-4 shadow-lg"><Icon icon="ion:logo-instagram" width="32" height="32"></Icon></a>
                </div>
            </div>
        </div>
        <div class="space-y-6">
            <h3>Explore</h3>
            <ul class="space-y-4 text-lg">
                <li>Home</li>
                <li>Events</li>
                <li>Articles</li>
            </ul>
        </div>
        <div class="space-y-6">
            <h3>More Pages</h3>
            <ul class="space-y-4 text-lg">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Site Status</li>
            </ul>
        </div>
        <div class="space-y-6">
            <h3 class="text-xl text-white">Contact Us</h3>
            <div class="flex flex-row gap-2 justify-center tablet:justify-start">
                <Icon icon="ion:mail-outline" width="24" height="24"></Icon>
                <a href="mailto:law4minor@example.com">law4minor@example.com</a>
            </div>
            <div class="flex flex-row gap-2 justify-center tablet:justify-start">
                <Icon icon="ion:call-outline" width="24" height="24"></Icon>
                <a href="tel:123-456-7890">123-456-7890</a>
        </div>
        <div>

        </div>
    </div>
    <div class="w-full col-span-1 tablet:col-span-5 flex flex-col tablet:flex-row border-t-1 border-primary/50 py-5 gap-5">
        <p class="flex-grow tracking-wide !text-sm !text-center tablet:!text-left">&copy; 2024-2025 Law4Minor (P12356). All Rights Reserved.</p>
        <div class="space-x-5 hidden tablet:inline-flex flex-col tablet:flex-row tracking-wider uppercase font-light">
            <a href="/terms-of-service">Terms of Service</a>
            <div class="hidden tablet:inline"> | </div>
            <a href="/privacy-policy">Privacy Policy</a>
    
        </div>
    </div>
    
    
</footer>
{/if}
