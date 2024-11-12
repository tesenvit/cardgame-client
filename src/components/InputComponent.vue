<script setup lang="ts">
import { defineProps, useId } from 'vue'

const props = defineProps<{
  type?: string
  placeholder: string,
}>()

const model = defineModel()
const id = useId()
</script>

<template>
  <div class="relative">
    <input
      :type="props.type || 'text'"
      :id="id"
      v-model="model"
      placeholder=" "
      autocomplete="on"
      required
      class="
        block
        w-full px-2.5 pb-2.5 pt-4
        text-sm text-gray-900
        bg-transparent
        rounded-lg border border-gray-300
        appearance-none
        focus:outline-none
        focus:ring-0
        focus:border-blue-600
        peer
      "
    />
    <label
      :for="id"
      class="
        absolute
        text-sm text-gray-500
        duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]
        bg-white
        px-2
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:-translate-y-1/2
        peer-placeholder-shown:top-1/2
        peer-focus:text-blue-600
        peer-focus:px-2
        peer-focus:top-2
        peer-focus:scale-75
        peer-focus:-translate-y-4
        rtl:peer-focus:translate-x-1/4
        rtl:peer-focus:left-auto
        start-1
      "
    >
      {{ props.placeholder }}
    </label>
  </div>
</template>
