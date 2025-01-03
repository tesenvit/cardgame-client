<script setup lang="ts">
import { useToastStore } from '@/stores'

const store = useToastStore()

const close = () => store.visible = false
</script>

<template>
  <v-snackbar
    v-model="store.visible"
    :timeout="store.options.timeout"
    location="bottom left"
    :color="store.options.color"
  >
    <div class="d-flex align-center">
      <v-icon class="mr-2">mdi-alert-circle-outline</v-icon>
      <span class="">{{ store.message }}</span>
    </div>

    <template v-slot:actions>
      <v-btn
        icon="mdi-close"
        variant="text"
        @click="close"
      />
    </template>
  </v-snackbar>
</template>
