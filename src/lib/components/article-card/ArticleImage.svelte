<script lang="ts">
  export let src: string;
  export let alt: string = '';
</script>

<img src={src} class={`rounded-xl h-auto bg-cover aspect-[3/2] w-full bg-[url(${src})]`} alt={alt} />