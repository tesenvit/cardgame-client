<script setup lang="ts">
import { ref } from 'vue'

import InputComponent from '@/components/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

const formData = ref({
  email: '',
  password: ''
})

const onSubmit = () => {
  console.log('SUBMIT', formData.value)
}
</script>

<template>
  <form class="w-1/4" @submit.prevent="onSubmit">
    <InputComponent
      v-model="formData.email"
      type="email"
      placeholder="Email address"
      class="mb-4"
    />

    <InputComponent
      v-model="formData.password"
      type="password"
      placeholder="Password"
      class="mb-4"
    />

    <ButtonComponent
      type="submit"
      text="Submit"
    />
  </form>
</template>
