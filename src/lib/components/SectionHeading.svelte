<script lang="ts">
/**
 * SectionHeading.svelte
 * A general-purpose heading for sections/pages with responsive font size and spacing.
 * Usage: <SectionHeading> ... </SectionHeading>
 */
export let level: 1 | 2 | 3 | 4 | 5 | 6 = 2;
export let className: string = '';

const tag = `h${level}`;
const classes = [
  'mb-6 text-3xl font-bold tracking-tight md:text-5xl', // h1
  'mb-5 text-2xl font-bold tracking-tight md:text-4xl', // h2
  'mb-4 text-xl font-semibold tracking-tight md:text-2xl', // h3
  'mb-3 text-lg font-semibold tracking-tight md:text-xl', // h4
  'mb-2 text-base font-semibold tracking-tight md:text-lg', // h5
  'mb-1 text-sm font-semibold tracking-tight md:text-base' // h6
][level - 1];
</script>

<svelte:element this={tag} class={`${classes} ${className}`}>
  <slot />
</svelte:element>
