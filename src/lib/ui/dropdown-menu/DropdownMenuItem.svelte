<script>
    export let disabled = false;
</script>

<div 
    class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    data-disabled={disabled}
>
    <slot />
</div> 