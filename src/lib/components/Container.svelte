<script lang="ts">
/**
 * Container.svelte
 * A general-purpose responsive container for page sections.
 * Applies consistent max-width, horizontal padding, and vertical spacing.
 * Usage: <Container> ... </Container>
 */
export let className: string = '';
</script>

<div class={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}>
  <slot />
</div>
