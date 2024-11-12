<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  type?: 'button' | 'submit' | 'reset'
  text: string
}>()

</script>

<template>
  <button
    :type="props.type || 'button'"
    class="
      text-white text-sm text-center font-medium
      bg-blue-700
      hover:bg-blue-800
      rounded-lg
      w-full
      px-5 py-2.5
      focus:ring-4
      focus:outline-none
      focus:ring-blue-300
    "
  >
    {{ props.text }}
  </button>
</template>
