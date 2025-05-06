<script lang="ts">
    import Button from '$lib/components/element/button.svelte';
    import HeroButton from './HeroButton.svelte';
    import HeroContent from './HeroContent.svelte';
    import HeroTitle from './HeroTitle.svelte';
    import { onMount } from 'svelte';
</script>

<section class="text-center items-center bg-[url(./media/hero.webp)] bg-dark bg-cover bg-center tablet:bg-top bg-blend-multiply p-8 mobile:p-16 flex flex-col gap-8">
    <slot/>
</section>
