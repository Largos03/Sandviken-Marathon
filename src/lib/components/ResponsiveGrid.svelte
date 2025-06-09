<script lang="ts">
/**
 * ResponsiveGrid.svelte
 * A general-purpose responsive grid for cards/stats/sections.
 * Usage: <ResponsiveGrid cols="1 md:2 lg:4"> ... </ResponsiveGrid>
 */
export let cols: string = '1 md:2 lg:4'; // e.g. '1 md:2 lg:4' => grid-cols-1 md:grid-cols-2 lg:grid-cols-4
export let gap: string = '6'; // e.g. '6' => gap-6
export let className: string = '';

// Convert cols prop to Tailwind classes
const colClasses = cols
  .split(' ')
  .map((c) => {
    const [prefix, num] = c.includes(':') ? c.split(':') : [null, c];
    return prefix ? `${prefix}:grid-cols-${num}` : `grid-cols-${num}`;
  })
  .join(' ');
</script>

<div class={`grid ${colClasses} gap-${gap} ${className}`}>
  <slot />
</div>
