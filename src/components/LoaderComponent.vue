<script setup lang="ts">
import { useLoaderStore } from '@/stores';

const store = useLoaderStore();
</script>

<template>
  <v-overlay
    v-model="store.visible"
    persistent
    class="d-flex justify-center align-center"
  >
    <div class="loader rounded-circle d-inline-block" />
  </v-overlay>
</template>
