<script lang="ts">
    import { page } from '$app/state';
</script>

<section class="w-full h-screen flex flex-col gap-8 items-center justify-center">
    <h1>{page.status}</h1>
    <p>{page.error.message}</p>
    <a class="button-primary" href="/">Back to Home</a>
</section>