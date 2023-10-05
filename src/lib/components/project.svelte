<script lang="ts">
  export let left: boolean = true;
  export let title: string;
  export let href: string;
  export let src: string;
  export let alt: string;
</script>

<h2
  class="w-5/6 underline text-center mx-auto font-bold text-dorado text-2xl lg:text-3xl py-6 md:py-12"
>
  {title}
</h2>

{#if left}
  <section
    class="w-5/6 md:w-2/3 lg:w-5/6 grid lg:grid-cols-2 gap-4 lg:gap-16 mx-auto"
  >
    <a {href} class="my-auto">
      <img {src} {alt} class="my-auto" />
    </a>
    <div class="my-auto">
      <slot />
    </div>
  </section>
{:else}
  <section
    class="w-5/6 md:w-2/3 lg:w-5/6 grid lg:grid-cols-2 gap-4 lg:gap-16 mx-auto"
  >
    <div class="my-auto">
      <slot />
    </div>
    <a {href} class="my-auto">
      <img {src} {alt} class="my-auto" />
    </a>
  </section>
{/if}
<hr
  class="border-b border-azulitopaco my-6 lg:my-12 w-1/3 md:w-1/2 mx-auto"
/>

