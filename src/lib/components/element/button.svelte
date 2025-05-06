<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte';

  export let type: string = '';
  export let href: string = '';
  export let icon: string = '';
  export let className: string = '';
  export let props: { [key: string]: any } = {};

  onMount(() => {
    // Initialization logic
  });

  $: icon = icon || 'material-symbols:arrow-right-alt-rounded';
</script>

{#if type === 'accent'}
  <a class="bg-primary text-black font-medium px-6 py-3 border-1 rounded-full w-fit hover:bg-primary-text uppercase tracking-wider duration-200 cursor-pointer flex flex-row items-center gap-4 {className}" href={href} {...props}>
    <slot />
    <Icon icon={icon} width="24" height="24" />
  </a>
{:else}
  <a class="bg-black text-primary font-medium px-6 py-3 border-1 rounded-full w-fit hover:bg-primary hover:text-black uppercase tracking-wider duration-200 cursor-pointer flex flex-row items-center gap-4 {className}" href={href} {...props}>
    <slot />
    <Icon icon={icon} width="24" height="24" />
  </a>
{/if}
