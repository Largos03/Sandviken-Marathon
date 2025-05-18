<script>
	// A reusable highlight box component with a dark gradient background and red border
</script>

<div
	class="relative mt-2 overflow-hidden rounded-lg border-l-4 border-red-500 bg-gradient-to-br from-gray-900 to-gray-800 p-5 text-white shadow-md"
>
	<div class="bg-opacity-20 absolute inset-0 bg-red-500 opacity-10"></div>
	<div class="relative z-10">
		<slot />
	</div>
</div>
