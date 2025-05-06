<script>
    import Icon from '@iconify/svelte';
    import Button from '$lib/components/element/button.svelte';

    export let href = '';
</script>

<Button type="accent" className="self-center mobile:self-start w-full mobile:w-auto" href={href}><slot/></Button>

