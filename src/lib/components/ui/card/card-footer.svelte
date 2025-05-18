<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<div class={cn('flex items-center p-6 pt-0', $$props.class)} {...$$restProps}>
	<slot />
</div>
