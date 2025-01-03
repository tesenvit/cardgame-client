<script setup lang="ts">
import { RouterView } from 'vue-router'
import ToastComponent from '@/components/ToastComponent.vue'
import LoaderComponent from '@/components/LoaderComponent.vue'
</script>

<template>
  <RouterView />
  <ToastComponent />
  <LoaderComponent />
</template>
