<script lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
  
  export let icon: IconDefinition;
  export let title: string;
</script>

<div class="p-5 bg-gray-50 rounded-xl border-l-3 border-red-400/30">
  <div class="flex items-center mb-3">
    <div class="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center mr-3">
      <FontAwesomeIcon {icon} />
    </div>
    <h3 class="font-semibold">{title}</h3>
  </div>
  <slot />
</div> 