<script lang="ts">
  // Props
  export let id: string;
  export let name: string;
  export let label: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  export let value: string = '';
  export let error: string | undefined = undefined;
  export let required: boolean = false;
  export let disabled: boolean = false;
  export let readonly: boolean = false;
  export let rows: number = 4;
  export let maxlength: number | undefined = undefined;
  
  // Bind to actual textarea element
  let textareaElement: HTMLTextAreaElement;
  
  // Forward focus
  export const focus = () => {
    if (textareaElement) {
      textareaElement.focus();
    }
  };
</script>

<div class="w-full">
  {#if label}
    <label for={id} class="block text-sm font-medium text-gray-700 mb-1.5">
      {label} {required ? '*' : ''}
    </label>
  {/if}
  
  <textarea
    bind:this={textareaElement}
    {id}
    {name}
    {placeholder}
    {required}
    {disabled}
    {readonly}
    {rows}
    {maxlength}
    bind:value
    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
    focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/70
    disabled:bg-gray-100 disabled:text-gray-500
    {error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}"
    aria-invalid={error ? 'true' : 'false'}
    aria-describedby={error ? `${id}-error` : undefined}
    on:input
    on:change
    on:focus
    on:blur
    {...$$restProps}
  ></textarea>
  
  {#if error}
    <p id="{id}-error" class="mt-1.5 text-sm text-red-600">
      {error}
    </p>
  {/if}
</div> 