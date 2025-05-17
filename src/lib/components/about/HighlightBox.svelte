<script>
  // A reusable highlight box component with a dark gradient background and red border
</script>

<div class="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-5 rounded-lg relative overflow-hidden shadow-md mt-2 border-l-4 border-red-500">
  <div class="absolute inset-0 opacity-10 bg-red-500 bg-opacity-20"></div>
  <div class="relative z-10">
    <slot />
  </div>
</div> 