<script setup lang="ts">
import { ref, defineEmits, defineProps, watch } from 'vue'
import type { ModalDialogProps } from '@/types'

const props = defineProps<ModalDialogProps>()
const emit = defineEmits(['confirm', 'close'])

const state = ref(props.show)

watch(() => props.show, (newVal: boolean) => state.value = newVal)

const confirm = () => {
  emit('confirm')
  close()
}

const close = () => {
  emit('close')
  state.value = false
}

const handleOutsideClick = () => {
  if (props.clickOutsideClose) {
    close()
  }
}
</script>

<template>
  <v-dialog
    v-model="state"
    :width="width || 600"
    @keydown.esc="close"
    @click:outside="handleOutsideClick"
    :persistent="!clickOutsideClose"
  >
    <v-card class="px-4">

      <v-card-title class="px-0 d-flex justify-space-between align-center">
        <div class="text-h5 text-grey-lighten-3">
          {{ props.title }}
        </div>

        <v-btn
          icon="mdi-close"
          class="text-grey-lighten-3"
          variant="text"
          @click="close"
        />
      </v-card-title>

      <v-divider />

      <v-card-text class="px-0 py-4">
        <slot />
      </v-card-text>

      <v-divider v-if="!hideDefaultActions" />

      <v-card-actions v-if="!hideDefaultActions" class="px-0 py-4">
        <slot name="actions">
          <v-btn
            class="px-6 mr-2"
            type="button"
            variant="outlined"
            @click="close"
          >
            Close
          </v-btn>
          <v-btn
            class="px-6 bg-orange-accent-3"
            type="submit"
            @click="confirm"
            variant="tonal"
          >
            Submit
          </v-btn>
        </slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
