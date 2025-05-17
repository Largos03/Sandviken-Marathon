<script lang="ts">
	import { cn } from "$lib/utils";
	import { getContext } from "svelte";

	// Get the list element from context
	const { list } = getContext("tabs");
</script>

<div
	class={cn("inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 dark:bg-gray-800", $$props.class)}
	{...$$restProps}
	use:list
>
	<slot />
</div>