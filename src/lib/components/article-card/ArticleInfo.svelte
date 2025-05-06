<script>
    import Icon from '@iconify/svelte';
    import Button from '$lib/components/element/button.svelte';

    export let date = '';
    export let author = '';
</script>

<span class="text-center m-auto mobile:m-0 flex flex-col mobile:flex-row gap-3 items-center">
    {#if date}
      <div class="flex items-center gap-1 text-sm">
        <Icon icon="icon-park-solid:calendar" width="18" height="18" class="inline-block" />
        {date}
      </div>
    {/if}
    {#if author}
      <div class="flex items-center gap-1 text-sm">
        <Icon icon="icon-park-solid:people" width="18" height="18" class="inline-block" />
        {author}
      </div>
    {/if}
  </span>
  