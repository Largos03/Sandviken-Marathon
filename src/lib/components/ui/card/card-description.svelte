<script lang="ts">
	import { cn } from "$lib/utils";
</script>

<p class={cn("text-sm text-gray-500 dark:text-gray-400", $$props.class)} {...$$restProps}>
	<slot />
</p> 