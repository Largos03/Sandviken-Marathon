<script lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
  
  export let icon: IconDefinition;
  export let title: string;
  export let description: string;
</script>

<div class="bg-gray-50 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-b-4 border-red-500/40 hover:border-red-500">
  <div class="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center mb-4">
    <FontAwesomeIcon {icon} />
  </div>
  <h3 class="text-xl font-semibold mb-2">{title}</h3>
  <p class="text-gray-600">{description}</p>
</div> 