<!-- Reusable TextArea component with validation and accessibility -->
<script lang="ts">
	// Component props
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

	// Reference to the textarea element
	let textareaElement: HTMLTextAreaElement;

	// Method to focus the textarea
	export const focus = () => {
		if (textareaElement) {
			textareaElement.focus();
		}
	};
</script>

<div class="w-full">
	{#if label}
		<label for={id} class="mb-1.5 block text-sm font-medium text-gray-700">
			{label}
			{required ? '*' : ''}
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
		class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm
    focus:border-red-500/70 focus:ring-2 focus:ring-red-500/50 focus:outline-none
    disabled:bg-gray-100 disabled:text-gray-500
    {error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}"
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
